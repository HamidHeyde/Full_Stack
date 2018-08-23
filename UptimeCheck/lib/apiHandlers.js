var handlers = {};

handlers.notFound = function (data, callback) {
    callback(404, 'json',
        { "error": "required url, not there my friend!" });
};

handlers.ping = function (data, callback) {
    callback(200, 'json',
        { "success": "site is up!" });
};

module.exports = handlers;