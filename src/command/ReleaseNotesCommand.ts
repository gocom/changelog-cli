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
}

const command = createCommand();

command
  .name('release-notes')
  .argument('[select-version]', 'Selected version')
  .argument('[directory]', 'Project directory to process', '.')
  .option('-o --output-file <filename>', 'File to write release notes to')
  .summary('Extract release notes')
  .description(`Todo.`)
  .addHelpText('before', `Todo
`)
  .addHelpText('after', `
${pc.magenta('Examples:')}
  $ changelog release-notes:create
`)
  .action(async (
    selectVersion: Version|undefined,
    directory: string|undefined,
    options?: Options
  ) => {
    const outputFile = options?.outputFile;

    const notes = await getReleaseNotes({
      directory: directory ?? '.',
      version: selectVersion,
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
    ok('Done.');
  });

export default command;
