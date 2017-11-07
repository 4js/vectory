#!/bin/bash

rm -rf dist
./node_modules/.bin/webpack --config=build/webpack.build.js
