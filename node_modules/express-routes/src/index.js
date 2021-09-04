// var debug = require('debug')('express-list-endpoints')
const regexpExpressRegexp = /^\/\^\\\/(?:(:?[\w\\.-]*(?:\\\/:?[\w\\.-]*)*)|(\(\?:\(\[\^\\\/]\+\?\)\)))\\\/.*/;
const regexpExpressParam = /\(\?:\(\[\^\\\/]\+\?\)\)/g;

/**
 * Returns all the verbs detected for the passed route
 */
const getRouteMethods = route => Object.keys(route.methods)
  .filter(method => method !== '_all')
  .map(method => method.toUpperCase());

/**
 * Returns true if found regexp related with express params
 */
const hasParams = pathRegexp => regexpExpressParam.test(pathRegexp);

/**
 * @param {Object} route Express route object to be parsed
 * @param {string} basePath The basePath the route is on
 * @return {Object} Endpoint info
 */
const parseExpressRoute = (route, basePath) => ({
  path: basePath + (basePath && route.path === '/' ? '' : route.path),
  methods: getRouteMethods(route),
});

const parseExpressPath = (expressPathRegexp, params) => {
  let parsedPath = regexpExpressRegexp.exec(expressPathRegexp);
  let parsedRegexp = expressPathRegexp;
  let paramIdx = 0;

  while (hasParams(parsedRegexp)) {
    const paramId = `:${params[paramIdx].name}`;

    parsedRegexp = parsedRegexp
      .toString()
      .replace(/\(\?:\(\[\^\\\/]\+\?\)\)/, paramId);

    paramIdx += 1;
  }

  if (parsedRegexp !== expressPathRegexp) {
    parsedPath = regexpExpressRegexp.exec(parsedRegexp);
  }

  parsedPath = parsedPath[1].replace(/\\\//g, '/');

  return parsedPath;
};

/**
 * Ensures the path of the new endpoint isn't yet in the array.
 * If the path is already in the array merges the endpoint with the existing
 * one, if not, it adds it to the array.
 *
 * @param {Array} endpoints Array of current endpoints
 * @param {Object} newEndpoint New endpoint to be added to the array
 * @returns {Array} Updated endpoints array
 */
const addEndpoint = (endpoints, newEndpoint) => {
  const foundEndpointIdx = endpoints.findIndex(item => item.path === newEndpoint.path);

  if (foundEndpointIdx > -1) {
    const foundEndpoint = endpoints[foundEndpointIdx];

    foundEndpoint.methods = foundEndpoint.methods.concat(newEndpoint.methods);
  } else {
    endpoints.push(newEndpoint);
  }

  return endpoints;
};

const parseEndpoints = (app, basePath = '', endpoints = []) => {
  const stack = app.stack || (app._router && app._router.stack);

  let parsedEndpoints = endpoints;
  stack.forEach((stackItem) => {
    if (stackItem.route) {
      const endpoint = parseExpressRoute(stackItem.route, basePath);

      parsedEndpoints = addEndpoint(parsedEndpoints, endpoint);
    } else if (stackItem.name === 'router' || stackItem.name === 'bound dispatch') {
      if (regexpExpressRegexp.test(stackItem.regexp)) {
        const parsedPath = parseExpressPath(stackItem.regexp, stackItem.keys);

        parseEndpoints(stackItem.handle, `${basePath}/${parsedPath}`, parsedEndpoints);
      } else {
        parseEndpoints(stackItem.handle, basePath, parsedEndpoints);
      }
    }
  });

  return parsedEndpoints;
};

/**
 * Returns an array of strings with all the detected endpoints
 * @param {Object} app the express/route instance to get the endpoints from
 */
const getEndpoints = (app) => {
  const endpoints = parseEndpoints(app);
  return endpoints;
};

const printRoutes = (app) => {
  getEndpoints(app)
    .sort((a, b) => a.path.localeCompare(b.path))
    .map(ep => ep.methods.map(method => `${method}\t${ep.path}`))
    .flat()
    // eslint-disable-next-line no-console
    .forEach(ep => console.log(ep));
};

module.exports = {
  getEndpoints,
  printRoutes,
};
