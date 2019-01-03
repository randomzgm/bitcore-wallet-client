/**
 * The official client library for bitcore-wallet-service.
 * @module Client
 */

/**
 * Client API.
 * @alias module:Client.API
 */
var client = module.exports = require('./api');

/**
 * Verifier module.
 * @alias module:Client.Verifier
 */
client.Verifier = require('./verifier');
client.Utils = require('./common/utils');
client.sjcl = require('sjcl');

// Expose bitcore
<<<<<<< HEAD
client.Bitcore = require('particl-bitcore-lib');
=======
client.Bitcore = require('bitcore-lib');
client.BitcoreCash = require('bitcore-lib-cash');
>>>>>>> 9a2cc5255b38977b849649b3b3500af8fc02620b
