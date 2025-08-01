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

import {readJsonFile, readTemplateFile} from '../../library/Helpers';

test('readJsonFile: valid', async () => {
  const actual = await readJsonFile('package.json');

  expect(actual).toBeDefined();
});

test('readJsonFile: invalid', async () => {
  const actual = await readJsonFile('invalid.json');

  expect(actual).toBeUndefined();
});

test('readJsonFile: empty path given', async () => {
  const actual = await readJsonFile('');

  expect(actual).toBeUndefined();
});

test('readTemplateFile: JSON', async () => {
  const actual = await readTemplateFile('src/__tests__/fixture/template.json');

  expect(actual).toBeDefined();
});

test('readTemplateFile: Markdown', async () => {
  const actual = await readTemplateFile('src/__tests__/fixture/template.md');

  expect(actual).toBeDefined();
});

test('readTemplateFile: invalid', async () => {
  const actual = await readTemplateFile('invalid.md');

  expect(actual).toBeUndefined();
});

test('readTemplateFile: empty path given', async () => {
  const actual = await readTemplateFile('');

  expect(actual).toBeUndefined();
});
