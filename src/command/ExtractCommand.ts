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
import type {Version} from '@gocom/changelog';
import {fatal, ok} from '../library/Command';
import {extractFromFile} from '../library/Extract';

/**
 * Options.
 */
interface Options {
  outputFile?: PathLike
}

const command = createCommand();

command
  .name('extract')
  .argument('select-version', 'Version to extract')
  .argument('[filename]', 'CHANGELOG.md to process', './CHANGELOG.md')
  .option('-o --output-file <filename>', 'File to write results to')
  .summary('extract specified version from CHANGELOG.md as JSON')
  .description(`Extracts the specified version from a Markdown formatted changelog file.
Returns results as a JSON object, containing detailed details extracted from
the specified changelog file. The results object will look similar to the
following:

  {
    "version": "0.1.0",
    "isPrerelease": false,
    "titleStart": "",
    "titleEnd": "",
    "notes": "* Initial release."
  }

If no ${pc.yellow('filename')} argument is specified, looks for file named ${pc.cyan('CHANGELOG.md')} from
the current working directory. If ${pc.yellow('--output-file')} option is specified, the
results are written to the specified file, otherwise printed to ${pc.cyan('STDOUT')}.`)
  .addHelpText('before', `Extract specified version from CHANGELOG.md as JSON.
`)
  .addHelpText('after', `
${pc.magenta('Examples:')}
  $ changelog extract 1.0.0 CHANGELOG.md
`)
  .action(async (
    selectVersion: Version|undefined,
    filename: string,
    options?: Options
  ) => {
    const outputFile = options?.outputFile;

    if (!selectVersion) {
      fatal('Selected version is required.');
      return;
    }

    const changelog = await extractFromFile({
      path: filename ?? './CHANGELOG.md',
      version: selectVersion,
    });

    if (changelog === undefined) {
      fatal('Unable to extract requested version.');
      return;
    }

    const result = JSON.stringify(changelog, null, 2);

    if (outputFile) {
      await writeFile(outputFile, result);
      ok(`Done. Release notes written.
${pc.blue('→')} ${outputFile}`);
      return;
    }

    console.log(result);
    ok('Done.');
  });

export default command;
