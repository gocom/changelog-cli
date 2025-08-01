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

import {extractFromFile, latestFromFile} from '../../library/Extract';

test('extractFromFile: valid', async () => {
  const actual = await extractFromFile({
    path: 'src/__tests__/fixture/CHANGELOG.md',
    version: '0.1.0',
  });

  expect(actual).toBeDefined();
});

test('extractFromFile: invalid', async () => {
  const actual = await extractFromFile({
    path: 'invalid',
    version: '0.1.0',
  });

  expect(actual).toBeUndefined();
});

test('extractFromFile: empty path given', async () => {
  const actual = await extractFromFile({
    path: '',
    version: '0.1.0',
  });

  expect(actual).toBeUndefined();
});

test('extractFromFile: version does not exist', async () => {
  const actual = await extractFromFile({
    path: 'src/__tests__/fixture/CHANGELOG.md',
    version: '3.1.5',
  });

  expect(actual).toBeUndefined();
});

test('latestFromFile: valid', async () => {
  const actual = await latestFromFile('src/__tests__/fixture/CHANGELOG.md');

  expect(actual).toBeDefined();
});

test('latestFromFile: invalid', async () => {
  const actual = await latestFromFile('invalid');

  expect(actual).toBeUndefined();
});

test('latestFromFile: empty path given', async () => {
  const actual = await latestFromFile('');

  expect(actual).toBeUndefined();
});
