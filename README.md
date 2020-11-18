# vincent-jacques.net

## Install dependencies

    docker volume create vincent-jacques.net_node_modules

    docker run \
        --rm \
        --volume $PWD:/app \
        --workdir /app \
        --volume vincent-jacques.net_node_modules:/app/node_modules \
        node:15-buster npm install

## Serve the development version

    docker run \
        --interactive --tty --rm \
        --volume $PWD:/app \
        --workdir /app \
        --volume vincent-jacques.net_node_modules:/app/node_modules \
        --publish 3000:3000 \
        node:15-buster npm run dev

Then go to http://localhost:3000.
