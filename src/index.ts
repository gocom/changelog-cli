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

/**
 * Extract release notes from Markdown formatted changelog document.
 *
 * Allows parsing CHANGELOG.md file contents, and extracting release notes from it.
 *
 * @module API
 * @group Library
 * @category Public
 * @see [GitHub](https://github.com/gocom/changelog-cli)
 * @see [Package in npm registry](https://www.npmjs.com/package/@gocom/changelog-cli)
 * @see [Releases](https://github.com/gocom/changelog-cli/releases)
 */

export {
  parseFile,
} from './library/Parser';

export {
  getReleaseNotes,
} from './library/ReleaseNotes';

export type {
  GetReleaseNotesOptions,
} from './types/ReleaseNotes';
