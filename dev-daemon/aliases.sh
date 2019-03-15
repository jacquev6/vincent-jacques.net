# To be sourced as '. dev-daemon/aliases.sh'

PROJECT_ROOT=$PWD

function dev-daemon-docker-compose {
  DEV_DAEMON_UID=$(id -u) DEV_DAEMON_GID=$(id -g) docker-compose --project-name dev-daemon-$(basename $PROJECT_ROOT) --file $PROJECT_ROOT/dev-daemon/docker-compose.yml "$@"
}

# -d because --detach is unavailable on Ubuntu (docker-compose version 1.17.1)
dev-daemon-docker-compose up --build -d dev-daemon

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
