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
    data.db.query = {};
    _db.connect("find", data.db, callback);
};
//Users POST
handlers._users.post = function (data, callback) {
    data.db.query = JSON.parse(data.payload.trim());
    _db.connect("insert", data.db, callback);
};
//Users PUT
handlers._users.put = function (data, callback) {
    data.db.query = JSON.parse(data.payload.trim());
    _db.connect("update", data.db, callback);
};
//Users DELETE
handlers._users.delete = function (data, callback) {
    data.db.query = JSON.parse(data.payload.trim());
    _db.connect("delete", data.db, callback);
};
//Users OPTIONS
handlers._users.options = function (data, callback) {
    callback(200, 'json', { "success": "users.options Page!?" });
};
module.exports = handlers;