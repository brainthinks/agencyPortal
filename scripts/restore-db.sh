#!/usr/bin/env bash

# @todo - use named parameters rather than ordered parameters

PROJECT_NAME="agencyPortal"
TAR_EXT=".tar.gz"

FILE_NAME=$1
DB_NAME=$2
TMP_DIR=/tmp/$PROJECT_NAME/$DB_NAME

echo "Ensuring a filename parameter was passed"
if [ -z "$FILE_NAME" ]; then
  echo "You must supply the filename of the tar.gz that you would like to restore"
  exit 1
fi

echo "Ensuring the database name is set"
if [ -z "$DB_NAME" ]; then
  echo "Using the project name ( $PROJECT_NAME ) as the db name"
  DB_NAME="$PROJECT_NAME"
fi

echo "Ensuring the filename points to a .tar.gz file OR a .tar file"
if [ "${FILE_NAME%.tar.gz}" != "${FILE_NAME}" -o "${FILE_NAME%.tar}" != "${FILE_NAME}" ]; then
  echo "Found valid filename"
else
  echo "The file name you supply must be a gzipped tar file with an extension of .tar.gz OR .tar"
  exit 1
fi

echo "Determining tar compression"
if [ "${FILE_NAME%.tar}" != "${FILE_NAME}" ]; then
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
  tar -xf $FILE_NAME -C $TMP_DIR
else
  tar -xzf $FILE_NAME -C $TMP_DIR
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
