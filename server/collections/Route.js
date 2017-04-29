'use strict';

const Route = require('../models/Route');

class RouteCollection {
  constructor (app) {
    this.app = app;

    this.routes = [];
  }

  add (route) {
    this.routes.push(route);

    return this;
  }

  addFromData (routeData) {
    return this.add(Route.factory(this.app, routeData));
  }

  addManyFromData (routesData) {
    const numRoutes = routesData.length;

    for (let i = 0; i < numRoutes; i++) {
      this.addFromData(routesData[i]);
    }

    return this;
  }

  each (fn) {
    const numRoutes = this.routes.length;

    for (let i = 0; i < numRoutes; i++) {
      if (fn(this.routes[i], i) === false) {
        break;
      }
    }

    return this;
  }

  registerAll () {
    this.each((route) => {
      route.register();
    });

    return this;
  }
}

RouteCollection.factory = (app) => {
  return new RouteCollection(app);
}

module.exports = RouteCollection;
