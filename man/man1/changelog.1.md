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

`extract` [*options*] `<`*select-version*`>` [*filename*]
: Extract specified version from CHANGELOG.md as JSON.

`latest` [*options*] [*filename*]
: Extract specified version from CHANGELOG.md as JSON.

`parse` [*options*] [*filename*]
: Parse CHANGELOG.md into JSON.

`release-notes` [*options*] [*select-version*] [*filename*]
: Extract release notes from CHANGELOG.md.

`versions` [*options*] [*filename*]
: Lists available version from CHANGELOG.md.

`help` [*command*]
: Display help for a command.

# OPTIONS

`-h`, `--help`
: Print help.

`-V`, `--version`
: Print version.

# FILES

Depends on external programs `node` as the runtime. Requires Node.js version 22
or newer.

# EXAMPLES

Extract Markdown formatted release notes for the latest version mentioned in
CHANGELOG.md file:

    $ changelog release-notes
