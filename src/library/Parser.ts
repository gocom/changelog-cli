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

import {readFile} from 'node:fs/promises';
import {parse} from '@gocom/changelog';
import type {ChangelogDocument, Changelog} from '@gocom/changelog';

/**
 * Gets changelog from the specified file.
 *
 * @param {string} path Path to the changelog file to parse.
 * @return {Promise<Changelog[]|undefined>} Returns either an array of {@link Changelog} objects, or `undefined` if the
 * specified file could not be processed.
 * @group Library
 * @category API
 */
export const parseFile = async (path: string): Promise<Changelog[]|undefined> => {
  try {
    const contents: ChangelogDocument = await readFile(path, {
      encoding: 'utf-8'
    });

    return parse(contents);
  } catch {
    return undefined;
  }
};
