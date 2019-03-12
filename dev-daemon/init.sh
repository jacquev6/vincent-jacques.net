#!/bin/bash

set -o errexit

DEV_DAEMON_UID=$1
DEV_DAEMON_GID=$2

groupadd --gid $DEV_DAEMON_GID dev-daemon
useradd --gid $DEV_DAEMON_GID --uid $DEV_DAEMON_UID --create-home dev-daemon

tail -f /dev/null
