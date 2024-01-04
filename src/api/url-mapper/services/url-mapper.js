'use strict';

/**
 * url-mapper service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::url-mapper.url-mapper');
