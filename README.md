# Agency Portal

## Installation

### Ubuntu

* sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
* echo "deb [ arch=amd64 ] http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
* sudo apt-get update
* sudo apt-get install -y mongodb-org

## Use

### Ubuntu

* sudo service mongod start
* (in terminal A) npm run start-dev
* (in terminal B) npm run build-dev

## Resources

http://generalservices.baltimorecity.gov/
