/*!
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

import type {Changelog} from '@gocom/changelog';
import type {ExtractOptions} from '../types/Extract';
import {parseFile} from './Parser';

/**
 * Extracts the specified version from the given changelog file.
 *
 * The function would extract the specified {@link ExtractOptions.version} from the given Markdown based
 * changelog provided with the {@link ExtractOptions.path} option.
 *
 * @param {ExtractOptions} options Options.
 * @return {Changelog|undefined} Returns changelog for the version, or `undefined`, if the version could not
 * be found from the changelog, or the version number is not a valid semantic version number.
 * @group Library
 * @category API
 * @example
 * The following would extract version 0.2.0's notes from the given {@link ExtractOptions.path}:
 * ```ts
 * import {extractFromFile} from '@gocom/changelog-cli';
 *
 * const changelog = await extractFromFile({
 *  version: '0.2.0',
 *  path: 'path/to/CHANGELOG.md',
 * });
 * ```
 * The `changelog` variable would contain {@link Changelog} object with the details about the requested 0.2.0.
 */
export const extractFromFile = async (options: ExtractOptions): Promise<Changelog|undefined> => {
  const {
    path,
    version,
  } = options;

  const contents = await parseFile(path);

  return contents
    ?.find((changelog) => changelog.version === version);
};

/**
 * Gets the latest version from the given changelog file.
 *
 * The versions are sorted based semantic versioning rules, and the latest version is
 * extracted from the changelog. If there is no version numbers in the given
 * contents, return undefined.
 *
 * If you want to get some other version from the changelog, see {@link extractFromFile}, or {@link parseFile} if
 * you want to parse the whole changelog.
 *
 * @param {string} path Path to the changelog file to process.
 * @return {Promise<Changelog|undefined>} Changelog for the latest version, or `undefined` if there were no valid versions
 * available in the changelog file.
 * @group Library
 * @category API
 * @example
 * The following would extract version `3.0.0` from the changelog, as it is the greatest version listed:
 * ```ts
 * import {latestFromFile} from '@gocom/changelog-cli';
 *
 * const changelog = await latestFromFile('path/to/CHANGELOG.md');
 *
 * console.log(changelog.version);
 * ```
 * The above would log `3.0.0`.
 */
export const latestFromFile = async (
  path: string
): Promise<Changelog|undefined> => {
  const contents = await parseFile(path);

  return contents?.length
    ? contents[0]
    : undefined;
};
