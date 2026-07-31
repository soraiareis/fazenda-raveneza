#!/bin/sh
set -eu

rm -rf dist
mkdir -p dist

cp index.html dist/
cp robots.txt dist/
cp sitemap.xml dist/
cp -R css dist/
cp -R js dist/
cp -R images dist/

find dist -name ".DS_Store" -delete

printf "Build pronto em dist/\\n"
