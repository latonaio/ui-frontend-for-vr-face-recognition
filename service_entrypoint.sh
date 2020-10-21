#!/bin/sh

SCRIPT_DIR=$(cd $(dirname $0); pwd)
THIS_IP=$(hostname -I | cut -f1 -d ' ')

if [ -z "$THIS_IP" ]; then
  THIS_IP="localhost"
fi

export REACT_APP_PUBLIC_URL="http://$THIS_IP:8080/"
export REACT_APP_APIURL="http://$THIS_IP:8080/api/"

cd $SCRIPT_DIR
/usr/bin/yarn start
