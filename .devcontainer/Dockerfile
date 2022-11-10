FROM node:18 AS setup

ENV RUNNING_IN_DOCKER true

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install -y wget git zsh

ARG user=appuser
ARG group=appuser
ARG uid=1001
ARG gid=1001

RUN groupadd -g ${gid} ${group}
RUN useradd -u ${uid} -g ${group} -s /bin/sh -m ${user} # <--- the '-m' create a user home directory

FROM setup

SHELL ["/bin/zsh", "-c"]

RUN npm i -g pnpm

# Switch to user
USER ${uid}:${gid}

WORKDIR /home/${user}/app

RUN sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
