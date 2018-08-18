#!/bin/bash

set -o errexit

PROJECT_ROOT=$(pwd)

SERVE=false
GENERATE=true

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
      SERVE=true
      GENERATE=false
      ;;
    *)
      echo "Unknown parameter passed: $1"
      exit 1;;
  esac
  shift
done

if $GENERATE
then
  jekyll build --destination docs
fi

if $SERVE
then
  jekyll serve --livereload --destination docs
fi

echo
echo "Development cycle OK"
