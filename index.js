var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

var request = require('request');

var rootUrl = 'http://distribution.virk.dk/cvr-permanent/';
var mappingUrl = rootUrl + '_mapping';
var searchUrl = rootUrl + '_search';

var apiKey;

virkCVRClient = (function() {

  function virkCVRClient(apiKey) {
    this.apiKey = apiKey;
    this.search = bind(this.search, this);
    this.mapping = bind(this.mapping, this);
  }


  /******* Mapping *******/
  virkCVRClient.prototype.mapping = function (callback) {
    'use strict';

    var options = {
      method: 'GET',
      url: mappingUrl,
      headers: {
        'Authorization': this.apiKey
      }
    };

    request(
    options, function(err, body, response) {
      if (err != null) {
        return callback(err);
      }

      return callback(null, {
        status: err,
        statusCode: body.statusCode,
        headers: body.headers,
        response: JSON.parse(response)
      });
    });

  };

  /******* Search *******/
  virkCVRClient.prototype.search = function (searchBody, callback) {
    'use strict';

    var options = {
      method: 'POST',
      url: searchUrl,
      body: JSON.stringify(searchBody),
      headers: {
        'Authorization': this.apiKey
      }
    };

    request(
    options, function(err, body, response) {
      if (err != null) {
        return callback(err);
      }

      return callback(null, {
        status: err,
        statusCode: body.statusCode,
        headers: body.headers,
        response: JSON.parse(response)
      });
    });

  };


  return virkCVRClient;

})();


module.exports = virkCVRClient;