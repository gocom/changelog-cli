% CHANGELOG-RELEASE-NOTES(1)
% Jukka Svahn
% July 2025

# NAME

changelog release-notes -- Extract release notes from CHANGELOG.md.

# SYNOPSIS

**changelog release-notes** [*options*] `<`*select-version*`>` [*directory*]

# DESCRIPTION

Generates release notes from Markdown formatted changelog file.
The release notes will contain the specified version's notes extracted from
`CHANGELOG.md` file, located in the specified directory and additional details
looked from npm and Composer packages' manifest files.

If select-version argument is specified, looks for the specified version from
the `CHANGELOG.md` file, otherwise the latest version.

If directory argument is specified, looks source files, such as `CHANGELOG.md`,
from the specified directory. If not specified, looks for files from
the current working directory.

If `--output-file` option is specified, the results are written to
the specified file, otherwise printed to `STDOUT`.

# OPTIONS

`-h`, `--help`
: Print help.

`-o` `<`*filename*`>`, `--output-file` `<`*filename*`>`
: File to write results to. If omitted, results are printed to `STDOUT`.

`-t` `<`*filename*`>`, `--template-file` `<`*filename*`>`
: Path to a Handlebars template file used for formatting the release notes. If not given, falls back to a default
template.

`--docs-url` `<`*url*`>`
: Custom documentation URL. The URL can contain Handlebars template variables.

`--download-url` `<`*url*`>`
: Custom download URL. The URL can contain Handlebars template variables.

`--composer`
: Enables Composer package integration. Includes Composer package details in the release notes, if the flag is given.

`--npm`
: Enables npm package integration. Includes npm package details in the release notes, if the flag is given.

*select-version*
: Version to extract from CHANGELOG.md. If omitted, selects the
latest version.

*directory*
: Project directory to process. If omitted, defaults to the current working
directory.

# FILES

Depends on external programs `node` as the runtime. Requires Node.js version 22
or newer.

# EXAMPLES

Extracts the latest version's release notes from CHANGELOG.md file:

    $ changelog release-notes
