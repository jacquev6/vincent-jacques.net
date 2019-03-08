#!/bin/bash

set -o errexit

. ./development_aliases.sh

npm run generate

sudo chown vincent:vincent -R .

cd docs
rm -rf .git
git init
git remote add origin git@github.com:jacquev6/try-nuxt.git
git add .
git commit -m "Publish"
git push -f origin master
rm -rf .git
