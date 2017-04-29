'use strict';

class Route {
  constructor (app, options = {}) {
    this.app = app;

    if (!options.path) {
      throw new Error('Path must be supplied when creating a route!');
    }

    // if (!options.handler) {
    //   throw new Error('A handler must be supplied when creating a route!');
    // }

    this.path = options.path;
    this.method = options.method || 'get';
    this.description = options.description || this.path;
    this.handler = options.handler || this.defaultHandler;
  }

  defaultHandler (req, res, next) {
    res.status(200).send(this.description);
  }

  generatePath () {
    let path = '/';

    path += this.path;

    return path;
  }

  register () {
    this.app[this.method](this.generatePath(), this.handler);
  }
}

Route.factory = (app, options) => {
  return new Route(app, options);
};

module.exports = Route;
