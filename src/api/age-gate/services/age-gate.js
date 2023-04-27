'use strict';

/**
 * age-gate service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::age-gate.age-gate');
