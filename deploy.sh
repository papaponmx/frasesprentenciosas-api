#!/bin/bash

tar czf api.tar.gz server.js yarn.lock server.js routes/ package.json models controllers .env  
scp api.tar.gz 157.230.137.33:~
rm api.tar.gz

ssh 157.230.137.33 << 'ENDSSH'
pm2 stop api
rm -f api
mkdir api
tar xf api.tar.gz -C api
rm api.tar.gz
cd api
yarn install
pm2 start api
ENDSSH