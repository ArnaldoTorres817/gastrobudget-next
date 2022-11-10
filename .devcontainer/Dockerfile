FROM node:18 AS setup

ENV RUNNING_IN_DOCKER true

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install -y wget git zsh

RUN npm i -g pnpm

FROM setup

USER node

SHELL ["/bin/zsh", "-c"]

RUN sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
