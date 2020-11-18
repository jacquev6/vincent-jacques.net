# vincent-jacques.net

## Install dependencies

    docker volume create vincent-jacques.net_node_modules

    docker run \
        --rm \
        --volume $PWD:/app \
        --workdir /app \
        --volume vincent-jacques.net_node_modules:/app/node_modules \
        node:15-buster npm install

Add a development dependency:

    docker run \
        --rm \
        --volume $PWD:/app \
        --workdir /app \
        --volume vincent-jacques.net_node_modules:/app/node_modules \
        node:15-buster npm install --save-dev sass sass-loader fibers

## Serve the development version

    docker run \
        --interactive --tty --rm \
        --volume $PWD:/app \
        --workdir /app \
        --volume vincent-jacques.net_node_modules:/app/node_modules \
        --publish 3000:3000 \
        node:15-buster npm run dev

Then go to http://localhost:3000.

## Build static site for production

    docker run \
        --rm \
        --volume $PWD:/app \
        --workdir /app \
        --volume vincent-jacques.net_node_modules:/app/node_modules \
        node:15-buster npm run generate

Then `git commit`, `git push`, let GitHub Pages do their magic, and go to https://vincent-jacques.net.
