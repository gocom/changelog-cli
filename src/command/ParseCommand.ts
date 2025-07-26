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
  .name('parse')
  .argument('[filename]', 'CHANGELOG.md to process', './CHANGELOG.md')
  .option('-o --output-file <filename>', 'File to write release notes to')
  .summary('parse CHANGELOG.md into JSON')
  .description(`Parses markdown formatted changelog file into JSON presentation.
Returns results as an array of JSON object, containing detailed details extracted
from the specified changelog file. The results object will look similar to the
following:

  [
    {
      "version": "0.2.0",
      "isPrerelease": false,
      "titleStart": "",
      "titleEnd": "",
      "notes": "* Change 1."
    },
    {
      "version": "0.1.0",
      "isPrerelease": false,
      "titleStart": "",
      "titleEnd": "",
      "notes": "* Initial release."
    }
  ]

If no ${pc.yellow('filename')} argument is specified, looks for file named ${pc.cyan('CHANGELOG.md')} from
the current working directory. If ${pc.yellow('--output-file')} option is specified, the
results are written to the specified file, otherwise printed to ${pc.cyan('STDOUT')}.`)
  .addHelpText('before', `Parse CHANGELOG.md into JSON.
`)
  .addHelpText('after', `
${pc.magenta('Examples:')}
  $ changelog parse
`)
  .action(async (
    filename: string|undefined,
    options?: Options
  ) => {
    const outputFile = options?.outputFile;

    const changelog = await parseFile(filename ?? './CHANGELOG.md');

    if (changelog === undefined) {
      fatal('Unable to parse file.');
      return;
    }

    const result = JSON.stringify(changelog, null, 2);

    if (outputFile) {
      await writeFile(outputFile, result);
      ok(`Done. Results written.
${pc.blue('→')} ${outputFile}`);
      return;
    }

    console.log(result);
  });

export default command;
