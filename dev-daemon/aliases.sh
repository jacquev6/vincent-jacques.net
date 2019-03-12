# To be sourced as '. dev-daemon/aliases.sh'

DEV_DAEMON_UID=$(id -u) DEV_DAEMON_GID=$(id -g) docker-compose --file dev-daemon/docker-compose.yml up --build -d

function run_in_dev_daemon {
  DEV_DAEMON_UID=$(id -u) DEV_DAEMON_GID=$(id -g) docker-compose --file dev-daemon/docker-compose.yml exec --user dev-daemon:dev-daemon dev-daemon "$@"
}

function npm {
  run_in_dev_daemon npm --no-update-notifier "$@"
}

function npx {
  run_in_dev_daemon npx "$@"
}

function node {
  run_in_dev_daemon node "$@"
}

diff <(echo "LibreOffice 6.0.7.3 00m0(Build:3)"; echo) <(run_in_dev_daemon libreoffice --version | dos2unix --force) || echo "VERSION MISMATCH FOR LibreOffice"
diff <(echo "v11.11.0") <(node --version | dos2unix --force) || echo "VERSION MISMATCH FOR node"
diff <(echo "6.7.0") <(npm --version | dos2unix --force) || echo "VERSION MISMATCH FOR npm"
diff <(echo "6.7.0") <(npx --version | dos2unix --force) || echo "VERSION MISMATCH FOR npx"
