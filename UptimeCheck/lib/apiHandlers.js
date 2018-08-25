var config = require('./config');
var _db = require('./db');


var handlers = {};

handlers.notFound = function (data, callback) {
    callback(404, 'json',
        { "error": "required url, not there my friend!" });
};

handlers.ping = function (data, callback) {
    callback(200, 'json',
        { "success": "site is up!" });
};

//General User Methods
handlers.users = function (data, callback) {
    var allowedMethods = ['get', 'put', 'delete', 'post', 'options'];
    if (allowedMethods.indexOf(data.method) > -1) {
        //db config for Users
        data.db = {
            url: config.db.url,
            db: "uptimeCheck",
            collection: "users",
            query: {}
        };
        handlers._users[data.method](data, callback);
    } else {
        callback(405, 'json',
            { "error": "required method, not allowed my friend!" });
    }
};

handlers._users = {};
//Users Get
handlers._users.get = function (data, callback) {
    _db.connect("find", data.db, callback);
};
//Users POST
handlers._users.post = function (data, callback) {
    console.log(data.method, "\n", data.query);
    callback(200, 'json',
        { "success": "users.post" });
};
//Users PUT
handlers._users.put = function (data, callback) {
    console.log(data.method, "\n", data.query);
    callback(200, 'json',
        { "success": "users.put" });
};
//Users DELETE
handlers._users.delete = function (data, callback) {
    console.log(data.method, "\n", data.query);
    callback(200, 'json',
        { "success": "users.delete" });
};
//Users OPTIONS
handlers._users.options = function (data, callback) {
    console.log(data.method, "\n", data.query);
    callback(200, 'json',
        { "success": "users.options" });
};
module.exports = handlers;