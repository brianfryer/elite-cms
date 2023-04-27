'use strict';

/**
 * age-gate controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::age-gate.age-gate');
