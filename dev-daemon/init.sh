#!/bin/bash

set -o errexit

DEV_DAEMON_UID=$1
DEV_DAEMON_GID=$2

# The default group on macOS (i.e. staff) typically has a low gid of 20,
# so groupadd fails because this gid is already used in the ubuntu docker image.
# We ignore the failure and just use the group with the wanted gid.
# In the end this is just to create files belonging to the right *host* user:group,
# so all that matters is numberical uid and gid.
groupadd --gid $DEV_DAEMON_GID dev-daemon || true
useradd --gid $DEV_DAEMON_GID --uid $DEV_DAEMON_UID --create-home dev-daemon || true

tail -f /dev/null
