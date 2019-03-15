# To be sourced as '. dev-daemon/aliases.sh'

function dev-daemon-docker-compose {
  DEV_DAEMON_UID=$(id -u) DEV_DAEMON_GID=$(id -g) docker-compose --project-name dev-daemon-vjnet --file dev-daemon/docker-compose.yml "$@"
}

dev-daemon-docker-compose up --build -d

function dev-daemon-exec {
  dev-daemon-docker-compose exec --user $(id -u):$(id -g) dev-daemon "$@"
}

function npm {
  dev-daemon-exec npm --no-update-notifier "$@"
}

function npx {
  dev-daemon-exec npx "$@"
}

function node {
  dev-daemon-exec node "$@"
}
