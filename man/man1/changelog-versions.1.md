% CHANGELOG-VERSIONS(1)
% Jukka Svahn
% July 2025

# NAME

changelog parse -- Parse CHANGELOG.md into JSON..

# SYNOPSIS

**changelog versions** [*options*] [*filename*]

# DESCRIPTION

Lists versions mentioned in Markdown formatted changelog file.
Goes through version heading in the file, and lists all of them, one version
number per line.

If no filename argument is specified, looks for file named `CHANGELOG.md` from
the current working directory.

If `--output-file` option is specified, the results are written to
the specified file, otherwise printed to `STDOUT`.

# OPTIONS

`-h`, `--help`
: Print help.

`-o` `<`*filename*`>`, `--output-file` `<`*filename*`>`
: File to write results to. If omitted, results are printed to `STDOUT`.

*filename*
: Markdown formatted changelog to process. If omitted, defaults to
`CHANGELOG.md` from the current working directory.

# FILES

Depends on external programs `node` as the runtime. Requires Node.js version 22
or newer.

# EXAMPLES

Lists version from CHANGELOG.md:

    $ changelog versions
