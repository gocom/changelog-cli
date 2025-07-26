Contributing
=====

Please take a quick look at this document before to make contribution process easier for all parties involved.

License
-----

[MIT](https://raw.github.com/gocom/changelog/master/LICENSE).

Versioning
-----

[Semantic Versioning](https://semver.org/).

Development environment
-----

The local development environment uses nvm through Makefile wrapper to manage Node and npm version.
Docker image is used for build man pages.

### Requirements

* GNU make
* [nvm](https://github.com/nvm-sh/nvm)
* Docker and Docker Compose

If nvm is not installed, the Makefile defaults to any node and npm binaries found from PATH.

### Setup project locally

Clone the repository, or a fork of it, and run the installer:

````shell
$ make install
````

### Available commands

For available commands, see:

```shell
$ make help
```

Automated commands can be run using `make`, which wraps around `npm`, and other development tooling.

### Working on code

When making changes to code please make sure that linter and tests pass before opening a pull request. Linter
can be run with:

```shell
$ make lint
```

Unit tests can be run with:

```shell
$ make test
```

If you are opening a PR to the repository, uou do not need to update CHANGELOG.md. We will take care of compiling it
before new release is published. After tests pass, fell free to open PR to the repository.

For maintainers
-----

These instructions are meant for repository's core maintainers.

### Publishing

CI automatically publishes any git tags to the npm registry.

#### Update changelog

Before tagging a commit, make sure that [CHANGELOG.md](https://raw.github.com/gocom/changelog/master/CHANGELOG.md)
is up-to-date. The top most section and the version number in the heading should match the new tag you are about
to create.

#### Tagging release

To publish a new version, simply create a tag and push it:

```shell
$ git tag -a 0.1.0 -m 0.1.0
$ git push origin 0.1.0
```

The above would create publish the tag as `0.1.0` to the npm registry, and create release on a GitHub, using
a section with matching header from the CHANGELOG.md as the release's description. Updating version number in
the `package.json` file is not necessary, as CI sync it during build time with the tag.

#### Manually testing publishing

This is not required, but if you want to test publishing before tagging, you can run the same building command CI uses.
Please note that the `make pre-publish` modifies the project files:

```shell
$ make pre-publish VERSION=0.1.0
$ make rebuild
```

You can then either pack the npm package, or even publish it to registry as a pre-release or to a private
registry:

```shell
$ make pack
```

The above would pack a tar of the build results, which allows you to verify that everything is alright before
publishing, or locally loading the packed archive to a some locally installed project where the package is being used
as a form of testing.

In cases CI fails, or for some other reason, you need to publish manually, run the normal npm publish command:

```shell
$ npm publish --registry http://localhost:4873
```

The above would publish the package to a registry running at `localhost:4873`.
