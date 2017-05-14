# Agency Portal

## Requirements

* Latest Node 6 LTS
* Latest MongoDB 3.4
* NPM version 3.10 or later

## Installation

### Ubuntu 16.04 64-bit

#### For Development

* `curl -L https://git.io/n-install | bash`
    * Install n (node version manager)
    * @see - https://github.com/tj/n
* `n`
    * Choose the version of node you would like to run
    * For now, choose the latest version available to you
    * Also, read n's documentation to learn how to install more recent versions of node
* `npm install -g mongodb-version-manager`
    * Install mongodb version manager
    * Ensure mongo is accessible in your $PATH
        * @see https://github.com/mongodb-js/version-manager/issues/94
* `m use 3.4`
    * Use MongoDB 3.4
* `npm i`
    * Install the project's node dependencies


#### For Deployments

* `sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6`
* `echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list`
* `sudo apt-get update`
* `sudo apt-get install -y mongodb-org`
* @todo - production deployment of node - perhaps nodesource?
* `npm i`

## Use

### Ubuntu 16.04 64-bit

#### For Development

Note that each of these commands should be run in a separate terminal

* `sudo mongod`
    * If this doesn't work, ensure you followed the step above that adds mongo to your $PATH
* `npm run start-dev`
* `npm run build-dev`

#### For Deployments

* `sudo service mongod start`
* @todo

## Utilities

### `npm run backup-db`

Arguments:
* `db_name` - the name of the database you would like to back up.  defaults to `agencyPortal`
* `dump_dir` - the directory to put the back up in.  defaults to `~/dumps/database/[db_name]`

Examples:
* `npm run backup-db`
    * The directory `~/dumps/database/agencyPortal` will be created if it does not already exist
    * A `.tar.gz` file will be created in that directory with a filename of the timestamp at which the command was run

### `npm run restore-db`

Arguments:
* `file_name` - the path to the `.tar.gz` file (preferably one that was generated using `npm run backup-db`) that contains the database to be restored
* `db_name` - the name of the database to retore.  defaults to `agencyPortal`

Examples:
* `npm run restore-db ~/Downloads/2017_05_02_1493769858.tar.gz`
    * Will restore the database dump contained in `2017_05_02_1493769858.tar.gz` to the database `agencyPortal`

### `npm run start-dev`

Run this command to start the server that serves the client-side files and proxies requests to the api server.  By default, the application will be available at this url:

http://localhost:8080

### `npm run build-dev`

Run this command to start the server that serves the api.  By default, the base url for the api will be:

http://localhost:3000

## @todo

* Admin Section landing page
* Admin Section Relationship CRUDI
* Admin Section Form CRUDI
* Fix router to not show a 404 on page refresh!
* Make restore-db run backup-db first, to ensure it is non-destructive
* take advantage of multiple cpus by spawning workers
* implement logging
* implement error handling


## Resources

* [http://generalservices.baltimorecity.gov/](http://generalservices.baltimorecity.gov/)
* [https://docs.mongodb.com/manual/installation/](https://docs.mongodb.com/manual/installation/)
* [https://github.com/tj/n](https://github.com/tj/n)
* http://generalservices.baltimorecity.gov/sites/default/files/Capital%20Project%20Request%20Diagram.png
