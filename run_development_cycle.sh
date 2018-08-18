#!/bin/bash

set -o errexit

PROJECT_ROOT=$(pwd)

JEKYLL_COMMAND=build

SERVE_PROD=false

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
    -s|--serve-dev)
      JEKYLL_COMMAND="serve --livereload"
      ;;
    -p|--serve-prod)
      SERVE_PROD=true
      ;;
    *)
      echo "Unknown parameter passed: $1"
      exit 1;;
  esac
  shift
done


npm install

jekyll $JEKYLL_COMMAND --source jekyll-src --destination docs

for f in $(find docs -name "*.html")
do
  ./node_modules/.bin/html-minifier \
    --collapse-boolean-attributes \
    --collapse-whitespace \
    --decode-entities \
    --minify-css true \
    --minify-js true \
    --remove-attribute-quotes \
    --remove-comments \
    --remove-script-type-attributes \
    --remove-style-link-type-attributes \
    --remove-tag-whitespace \
    --sort-attributes \
    --sort-class-name \
    --use-short-doctype \
    $f -o $f
done

if $SERVE_PROD
then
  (cd docs; python3 -m http.server)
fi


echo
echo "Development cycle OK"
