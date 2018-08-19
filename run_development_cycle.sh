#!/bin/bash

set -o errexit

PROJECT_ROOT=$(pwd)

JEKYLL_COMMAND=build

SERVE=false

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
      ;;
    *)
      echo "Unknown parameter passed: $1"
      exit 1;;
  esac
  shift
done


npm install

rm -rf docs/*

node src/data.js | ./node_modules/.bin/mustache - src/index.html > docs/index.html

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
    --preserve-line-breaks \
    $f -o $f
done

cp src/banner.png docs
touch docs/.nojekyll
echo "vincent-jacques.net" >docs/CNAME
./node_modules/.bin/node-sass --output-style compact src/index.scss docs/index.css

if $SERVE
then
  (cd docs; python3 -m http.server)
fi


echo
echo "Development cycle OK"
