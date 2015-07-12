#!/bin/bash

# get dependancies
npm install && bower install

# compile assets
grunt compile

# remove items unessessary in production
rm .bowerrc bower.json .csscomb.json .gitignore Gruntfile.js 
rm -rf assets/scss node_modules .sass-cache

exit