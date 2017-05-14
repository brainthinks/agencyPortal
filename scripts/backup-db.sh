#!/usr/bin/env bash

# @todo - use named parameters rather than ordered parameters

PROJECT_NAME="agencyPortal"

DB_NAME=$1
DUMP_DIR=$2
TIMESTAMP=$($(echo date +'%Y_%m_%d_%s'))

echo "Ensuring the database name is set"
if [ -z "$DB_NAME" ]; then
  echo "Using the project name ( $PROJECT_NAME ) as the database name"
  DB_NAME=$PROJECT_NAME
fi

echo "Ensuring the database dump directory is set"
if [ -z "$DUMP_DIR" ]; then
  DUMP_DIR=~/dumps/database/$DB_NAME
  echo "Using the default directory ( $DUMP_DIR ) for the database dump"
fi

echo "Ensuring the database dump directory exists..."
mkdir -p $DUMP_DIR

echo "Dumping the $DB_NAME database from Mongo, if it exists..."
mongodump -d $DB_NAME --out $DUMP_DIR/$TIMESTAMP/dump

if [ ! -d $DUMP_DIR/$TIMESTAMP/dump/$DB_NAME ]; then
  echo "Mongo dump FAILED!!!"
  exit 1
fi

echo "Creating a tar.gz of the dump..."
tar -czvf $DUMP_DIR/$TIMESTAMP.tar.gz -C $DUMP_DIR/$TIMESTAMP .

if [ ! -f $DUMP_DIR/$TIMESTAMP.tar.gz ]; then
  echo "Mongo dump FAILED!!!"
  exit 1
fi

echo "Removing the temporary directories..."
rm -rf $DUMP_DIR/$TIMESTAMP

if [ -d $DUMP_DIR/$TIMESTAMP ]; then
  echo "ERROR - unable to remove the temporary dump directories"
  exit 1
fi

echo "Database successfully backed up!"
