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

/**
 * Options.
 */
interface Options {
  selectVersion?: Version
  outputFile?: PathLike
}

const command = createCommand();

command
  .name('release-notes:create')
  .option('-s --select-version <filename>', 'Selected version')
  .option('-o --output-file <filename>', 'File to write release notes to')
  .summary('Create release notes')
  .description(`Todo.`)
  .addHelpText('before', `Todo
`)
  .addHelpText('after', `
${pc.magenta('Examples:')}
  $ changelog release-notes:create
`)
  .action(async (
    options?: Options
  ) => {
    const outputFile = options?.['outputFile'];

    const notes = await getReleaseNotes({
      directory: '.',
      version: options?.selectVersion,
    });

    if (notes === undefined) {
      // todo add error.
      return;
    }

    if (outputFile) {
      await writeFile(outputFile, notes);
      console.error(`${pc.green('✓')} Done. Release notes written.
${pc.blue('→')} ${outputFile}`);
      return;
    }

    console.log(notes);
    console.error(`${pc.green('✓')} Done.`);
  });

export default command;
