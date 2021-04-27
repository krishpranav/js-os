#!/bin/bash

npm install
npm run build
npm run package:discover
npx nodemon --watch package-lock.json --watch src/server --watch package.json --watch src/packages src/server/index.js