#!/bin/bash

rsync -arv --relative /usr/src/cache/node_modules/. /usr/src/app/node_modules/
exec yarn run serve