#!/bin/bash

set -o errexit

PROJECT_ROOT=$(pwd)

COMMAND=generate

SHOW_IN_BROWSER=false
function show_in_browser {
  echo
  echo "$1: $2"
  echo
  if $SHOW_IN_BROWSER
  then
    python -m webbrowser -t $2
  fi
}

while [[ "$#" > 0 ]]
do
  case $1 in
    -wb|--web-browser)
      SHOW_IN_BROWSER=true
      ;;
    -s|--serve)
      COMMAND=serve
      ;;
    *)
      echo "Unknown parameter passed: $1"
      exit 1;;
  esac
  shift
done

. development_aliases.sh

npm run $COMMAND

echo
echo "Development cycle OK"
