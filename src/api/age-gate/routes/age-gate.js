'use strict';

/**
 * age-gate router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::age-gate.age-gate');
