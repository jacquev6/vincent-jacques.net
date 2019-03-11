docker-compose up -d dev-daemon

function run_in_dev_daemon {
  docker-compose exec --user $(id -u):$(id -g) dev-daemon "$@"
}

function npm {
  run_in_dev_daemon npm "$@"
}

function npx {
  run_in_dev_daemon npx "$@"
}

function node {
  run_in_dev_daemon node "$@"
}
