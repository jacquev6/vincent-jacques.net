#!/bin/bash

set -o errexit

DEV_DAEMON_UID=$(id -u) DEV_DAEMON_GID=$(id -g) docker-compose --file dev-daemon/docker-compose.yml down
