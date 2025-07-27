% CHANGELOG-LATEST(1)
% Jukka Svahn
% July 2025

# NAME

changelog latest -- Extract latest version from CHANGELOG.md as JSON.

# SYNOPSIS

**changelog latest** [*options*] [*filename*]

# DESCRIPTION

Extracts the latest version from a Markdown formatted changelog file.
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

If no filename argument is specified, looks for file named `CHANGELOG.md` from
the current working directory. If `--output-file` option is specified, the
results are written to the specified file, otherwise printed to `STDOUT`.

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

Extracts latest version from CHANGELOG.md file:

    $ changelog latest
