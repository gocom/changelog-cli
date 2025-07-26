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
import {fatal, ok} from '../library/Command';
import {parseFile} from '../library/Parser';

/**
 * Options.
 */
interface Options {
  outputFile?: PathLike
}

const command = createCommand();

command
  .name('versions')
  .argument('[filename]', 'CHANGELOG.md to process', './CHANGELOG.md')
  .option('-o --output-file <filename>', 'File to write release notes to')
  .summary('extract available versions from CHANGELOG.md')
  .description(`Lists versions mentioned in Markdown formatted changelog file.
Goes through version heading in the file, and lists all of them, one version
number per line.

If no ${pc.yellow('filename')} argument is specified, looks for file named ${pc.cyan('CHANGELOG.md')} from
the current working directory.

If ${pc.yellow('--output-file')} option is specified, the results are written to
the specified file, otherwise printed to ${pc.cyan('STDOUT')}.`)
  .addHelpText('before', `Extract available versions from CHANGELOG.md.
`)
  .addHelpText('after', `
${pc.magenta('Examples:')}
  $ changelog versions
`)
  .action(async (
    filename: string|undefined,
    options?: Options
  ) => {
    const outputFile = options?.outputFile;

    const changelog = await parseFile(filename ?? './CHANGELOG.md');

    if (changelog === undefined) {
      fatal('Unable to extract versions.');
      return;
    }

    const versions = changelog
      .map((item) => item.version)
      .join('\n');

    if (outputFile) {
      await writeFile(outputFile, versions);
      ok(`Done. Versions written.
${pc.blue('→')} ${outputFile}`);
      return;
    }

    console.log(versions);
  });

export default command;
