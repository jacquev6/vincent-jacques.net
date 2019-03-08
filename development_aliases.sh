function run_in_dev_daemon {
  docker-compose exec dev-daemon "$@"
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
