/**
 * Changelog CLI
 * https://github.com/gocom/changelog-cli
 *
 * Copyright (C) 2025 Jukka Svahn
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import {writeFile} from 'node:fs/promises';
import {createCommand} from 'commander';
import pc from 'picocolors';
import type {PathLike} from 'node:fs';
import {getReleaseNotes} from '../library/ReleaseNotes';
import type {Version} from '@gocom/changelog';
import {fatal, ok} from '../library/Command';

/**
 * Options.
 */
interface Options {
  outputFile?: PathLike
  templateFile?: string
  composer?: boolean
  docsUrl?: string
  downloadUrl?: string
  npm?: boolean
}

const command = createCommand();

command
  .name('release-notes')
  .argument('[select-version]', 'Selected version')
  .argument('[directory]', 'Project directory to process', '.')
  .option('-o --output-file <filename>', 'File to write release notes to')
  .option('-t --template-file <filename>', 'Template file')
  .option('--composer', 'Enable Composer package integration')
  .option('--docs-url <url>', 'Documentation URL')
  .option('--download-url <url>', 'Download URL')
  .option('--npm', 'Enable npm package integration')
  .summary('extract release notes from CHANGELOG.md')
  .description(`Generates release notes from Markdown formatted changelog file.
The release notes will contain the specified version's notes extracted from
${pc.cyan('CHANGELOG.md')} file, located in the specified directory and additional details
looked from npm and Composer packages' manifest files.

If ${pc.yellow('select-version')} argument is specified, looks for the specified version from
the ${pc.cyan('CHANGELOG.md')} file, otherwise the latest version.

If ${pc.yellow('directory')} argument is specified, looks source files, such as CHANGELOG.md,
from the specified directory. If not specified, looks for files from
the current working directory.

If ${pc.yellow('--output-file')} option is specified, the results are written to
the specified file, otherwise printed to ${pc.cyan('STDOUT')}.`)
  .addHelpText('before', `Extract release notes from CHANGELOG.md.
`)
  .addHelpText('after', `
${pc.magenta('Examples:')}
  $ changelog release-notes 0.1.0
`)
  .action(async (
    selectVersion: Version|undefined,
    directory: string|undefined,
    options?: Options
  ) => {
    const outputFile = options?.outputFile;
    const templateFile = options?.templateFile;

    const notes = await getReleaseNotes({
      directory: directory ?? '.',
      version: selectVersion,
      templateFile,
      isComposer: !!options?.composer,
      isNpm: !!options?.npm,
      docsUrl: options?.docsUrl,
      downloadUrl: options?.downloadUrl,
    });

    if (notes === undefined) {
      fatal('Unable to extract requested release notes.');
      return;
    }

    if (outputFile) {
      await writeFile(outputFile, notes);
      ok(`Done. Release notes written.
${pc.blue('→')} ${outputFile}`);
      return;
    }

    console.log(notes);
  });

export default command;
