var _config = require('../lib/config');
var _db = require('../lib/db');
var assert = require('assert');

var tests = {};
tests.config = {
    Operation: "find",
    db: {
        url: _config.db.url,
        db: "uptimeCheck",
        collection: "users",
        query: {
            q: {},
            p: {
                "_id": 0,
                "firstName": 1
            }
        }
    }
};

tests.unit = {};

tests.unit["DB find result object should return 200"] = function (config, callback) {
    _db.connect(config.Operation, config.db, function (statusCode, contentType, message) {
        try {
            assert.equal(statusCode, 200);
            callback(false, "Test Passed");
        } catch (e) {
            callback(true, e);
        };
    });

};
tests.unit["DB find result content-type should be JSON"] = function (config, callback) {
    _db.connect(config.Operation, config.db, function (statusCode, contentType, message) {
        try {
            assert.equal(contentType, 'json');
            callback(false, "Test Passed");
        } catch (e) {
            callback(true, e);
        };
    });
};
tests.unit["DB find result object should not be empty"] = function (config, callback) {
    _db.connect(config.Operation, config.db, function (statusCode, contentType, message) {
        try {
            assert.notEqual(message, null);
            callback(false, "Test Passed");
        } catch (e) {
            callback(true, e);
        };
    });
};

