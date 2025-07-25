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

import type {Command} from 'commander';
import pc from 'picocolors';

/**
 * Configures the given command.
 *
 * Adds basic options and help formatting that each command should
 * be using.
 *
 * @group Library
 * @category API
 */
export const configureCommand = (command: Command): Command => {
  command.configureHelp({
    styleTitle: (str) => pc.magenta(str),
    styleCommandText: (str) => pc.cyan(str),
    styleCommandDescription: (str) => pc.reset(str),
    styleDescriptionText: (str) => pc.reset(str),
    styleOptionText: (str) => pc.green(str),
    styleArgumentText: (str) => pc.yellow(str),
    styleSubcommandText: (str) => pc.reset(str),
  });

  return command;
};

/**
 * Adds commands to the given parent command or application.
 *
 * @group Library
 * @category API
 */
export const addCommands = (app: Command, commands: Command[]) => {
  for (const command of commands) {
    app.addCommand(configureCommand(command));
  }
};
