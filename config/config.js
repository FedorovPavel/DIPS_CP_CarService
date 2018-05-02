const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'car-service'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/car-service-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'car-service'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://Tester:1111@ds111370.mlab.com:11370/mongodips'
  },

  production: {
    root: rootPath,
    app: {
      name: 'car-service'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/car-service-production'
  }
};

module.exports = config[env];
