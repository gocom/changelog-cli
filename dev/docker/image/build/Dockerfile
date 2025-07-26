FROM node:22-bookworm-slim

USER root:root

WORKDIR /app

ENV HOST_UID=1000
ENV HOST_GID=1000

ENV APP_DIRECTORY=/app
ENV APP_UID=1000
ENV APP_GID=1000
ENV APP_USER=app
ENV APP_GROUP=app

RUN apt-get update && apt-get install -y \
    bash \
    bash-completion \
    fish \
    git \
    gosu \
    libzip-dev \
    man \
    pandoc \
    unzip \
    zip \
    zlib1g-dev \
    zsh \
    && userdel node \
    && groupadd -g "$APP_GID" "$APP_GROUP" \
    && useradd -m -u "$APP_UID" -g "$APP_GROUP" "$APP_USER" \
    && chmod 777 "$APP_DIRECTORY" \
    && chown -R "$APP_USER:$APP_GROUP" "$APP_DIRECTORY" \
    && ln -s /app/extra/bash_completion.d/changelog /etc/bash_completion.d/changelog \
    && ln -s /app/extra/fish_completion.d/changelog.fish /etc/fish/completions/changelog.fish \
    && ln -s /app/extra/zsh_completion.d/_changelog /usr/local/share/zsh/site-functions/_changelog \
    && echo "autoload -U compinit; compinit" >> /home/app/.zshrc \
    && chown "$APP_USER:$APP_GROUP" /home/app/.zshrc

ENV PATH=/app/bin:$PATH
ENV MANPATH=/app/dist/man:$MANPATH
