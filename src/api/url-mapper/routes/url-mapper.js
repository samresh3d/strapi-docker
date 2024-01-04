'use strict';

/**
 * url-mapper router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::url-mapper.url-mapper');
