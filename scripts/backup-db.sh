#!/usr/bin/env bash

DB_NAME="agencyPortal"
DIR=./dumps/database/$DB_NAME
TIMESTAMP=$($(echo date +'%Y_%m_%d_%s'))

echo "Ensuring the dbdumps directory exists..."
mkdir -p $DIR

echo "Dumping the $DB_NAME database from Mongo..."
mongodump -d $DB_NAME --out $DIR/$TIMESTAMP/dump

if [ ! -d $DIR/$TIMESTAMP/dump/$DB_NAME ]; then
  echo "Mongo dump FAILED!!!"
  exit 1
fi

echo "Creating a tar.gz of the dump..."
tar -czvf $DIR/$TIMESTAMP.tar.gz -C $DIR/$TIMESTAMP .

if [ ! -f $DIR/$TIMESTAMP.tar.gz ]; then
  echo "Mongo dump FAILED!!!"
  exit 1
fi

echo "Removing the temporary directories..."
rm -rf $DIR/$TIMESTAMP

if [ -d $DIR/$TIMESTAMP ]; then
  echo "ERROR - unable to remove the temporary dump directories"
  exit 1
fi

echo "Database successfully backed up!"
