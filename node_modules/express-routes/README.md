# Express Routes

[![Build Status](https://img.shields.io/travis/leandrojdl/express-routes/master?logo=travis)](https://travis-ci.org/leandrojdl/express-routes)
[![Dependencies](https://img.shields.io/david/leandrojdl/express-routes.svg)](https://david-dm.org/leandrojdl/express-routes)
[![Coverage Status](https://img.shields.io/coveralls/github/leandrojdl/express-routes/master?logo=coveralls)](https://coveralls.io/github/leandrojdl/express-routes?branch=master)
[![Maintainability](https://img.shields.io/codeclimate/maintainability/leandrojdl/express-routes?logo=code-climate)](https://codeclimate.com/github/leandrojdl/express-routes/maintainability)

[![NPM](https://nodei.co/npm/express-routes.png)](https://nodei.co/npm/express-routes/)

> This is a fork from [AlbertoFdzM/express-list-endpoints](https://github.com/AlbertoFdzM/express-list-endpoints) repository.

Express endpoint parser to retrieve a list of the passed router with the set verbs.

## Installation

```sh
npm install express-routes
```

## Examples of use

### Print Routes

```js
const { printRoutes } = require('express-list-endpoints');

const app = require('express')();

app.route('/')
  .all(function(req, res) { /* Handle request */ })
  .get(function(req, res) { /* Handle request */ })
  .post(function(req, res) { /* Handle request */ });

app.route('/about')
  .get(function(req, res) { /* Handle request */ });

printRoutes(app);
// It omits the 'all' verbs.
/*
GET   /
POST  /
GET   /about
*/
```

### Get Endpoints

```js
const { getEndpoints } = require('express-list-endpoints');

const app = require('express')();

app.route('/')
  .all(function(req, res) { /* Handle request */ })
  .get(function(req, res) { /* Handle request */ })
  .post(function(req, res) { /* Handle request */ });

app.route('/about')
  .get(function(req, res) { /* Handle request */ });

console.log(listEndpoints(app));
/* It omits the 'all' verbs.
[{
    path: '/',
    methods: ['GET', 'POST']
  },
  {
    path: '/about',
    methods: ['GET']
}]
*/
```

## Arguments

### `app` - Express `app` or `router` instance

Your router instance (`router`) or your app instance (`app`).

_**Note:** Pay attention that before call this script the router or app must have the endpoints registered due to detect them._

## license

MIT
