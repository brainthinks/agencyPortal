#!/usr/bin/env bash

DB_NAME="agencyPortal"
TMP_DIR=/tmp/agencyPortal/$DB_NAME

echo "Ensuring a filename parameter was passed"
if [ -z "$1" ]; then
  echo "You must supply the filename of the tar.gz that you would like to restore"
  exit 1
fi

echo "Ensuring the filename points to a .tar.gz file OR a .tar file"
if [ "${1%.tar.gz}" != "${1}" -o "${1%.tar}" != "${1}" ]; then
  echo "Found valid filename"
else
  echo "The file name you supply must be a gzipped tar file with an extension of .tar.gz OR .tar"
  exit 1
fi

TAR_EXT=".tar.gz"
echo "Determining tar compression"
if [ "${1%.tar}" != "${1}" ]; then
  echo "NOTE :: .tar.gz is preferred, but you supplied a .tar file..."
  TAR_EXT=".tar"
fi

echo "Creating a tmp directory for $DB_NAME"
if [ -d $TMP_DIR ]; then
  rm -rf $TMP_DIR
fi

mkdir -p $TMP_DIR

echo "Unpacking the ${TAR_EXT} file"
if [ "${TAR_EXT}" = ".tar" ]; then
  tar -xf $1 -C $TMP_DIR
else
  tar -xzf $1 -C $TMP_DIR
fi

if [ ! -d $TMP_DIR/dump/$DB_NAME ]; then
  echo "Failed to unpack the ${TAR_EXT} file"
  exit 1
fi

echo "Destroying the current $DB_NAME database..."
mongo --quiet --eval "db.dropDatabase()" $DB_NAME > /dev/null

if [ $(mongo --quiet --eval "db.getCollectionNames().length" $DB_NAME) != "0" ]; then
  echo "Failed to destroy the current $DB_NAME database"
  exit 1
else
  echo "Successfully destroyed the $DB_NAME database"
fi

echo "Restoring the $DB_NAME database..."
mongorestore --quiet --noIndexRestore -d $DB_NAME $TMP_DIR/dump/$DB_NAME

if [ $(mongo --quiet --eval "db.getCollectionNames().length" $DB_NAME) = "0" ]; then
  echo "Failed to restore the $DB_NAME database"
  exit 1
else
  echo "Successfully restored the $DB_NAME database"
fi

echo "Cleaning up the tmp directories..."
rm -rf $TMP_DIR

if [ -d $TMP_DIR ]; then
  echo "Unable to remove the tmp directories!!"
  exit 1
fi

echo "Finished restoring the $DB_NAME database"
