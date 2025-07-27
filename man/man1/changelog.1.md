% CHANGELOG(1)
% Jukka Svahn
% July 2025

# NAME

changelog -- Extract release notes from CHANGELOG.md

# SYNOPSIS

**changelog** [*options*] `<`*command*`>`

# DESCRIPTION

Opinionated CLI and Node.js backend-specific extension for @gocom/changelog
package. Build release notes from CHANGELOG.md in CI, or manually using
CLI utility.

# COMMANDS

For information about individual command, see **man** **changelog-**`<`*command*`>` for the
command specific man page.

**extract** [*options*] `<`*select-version*`>` [*filename*]
: Extract specified version from CHANGELOG.md as JSON. For more information
see **man** **changelog-extract**.

**latest** [*options*] [*filename*]
: Extract specified version from CHANGELOG.md as JSON. For more information
see **man** **changelog-latest**.

**parse** [*options*] [*filename*]
: Parse CHANGELOG.md into JSON. For more information
see **man** **changelog-parse**.

**release-notes** [*options*] [*select-version*] [*filename*]
: Extract release notes from CHANGELOG.md. For more information
see **man** **changelog-release-notes**.

**versions** [*options*] [*filename*]
: List available version from CHANGELOG.md. For more information
see **man** **changelog-versions**.

**help** [*command*]
: Display help for a command. For more information
see **man** **changelog-help**.

# OPTIONS

`-h`, `--help`
: Print help.

`-V`, `--version`
: Print version.

# FILES

Depends on external programs `node` as the runtime. Requires Node.js version 22
or newer.

# EXAMPLES

Print build in help output:

    $ changelog help

Extract Markdown formatted release notes for the latest version mentioned in
CHANGELOG.md file:

    $ changelog release-notes
