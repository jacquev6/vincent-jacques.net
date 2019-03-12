FROM ubuntu:18.04 AS base
RUN apt-get update
RUN apt-get install --yes wget
RUN apt-get install --yes xz-utils


FROM base AS node
WORKDIR /node
RUN wget https://nodejs.org/dist/v11.11.0/node-v11.11.0-linux-x64.tar.xz
RUN tar -xJf node-v11.11.0-linux-x64.tar.xz --strip-components=1


FROM ubuntu:18.04

# Not using '--no-install-recommends' option below because some recommended package is
# required for proper conversion to pdf. I did not try to investigate which one.
RUN set -x \
    && apt-get update \
    && apt-get install --yes libreoffice \
    && rm -rf /var/lib/apt/lists/*

COPY --from=node /node/bin/node /usr/local/bin/
COPY --from=node /node/include/node/ /usr/local/include/node/
COPY --from=node /node/lib/node_modules/ /usr/local/lib/node_modules/

RUN cd /usr/local/bin \
    && ln -s ../lib/node_modules/npm/bin/npm-cli.js npm \
    && ln -s ../lib/node_modules/npm/bin/npx-cli.js npx

COPY init.sh /
