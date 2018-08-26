var mongoClient = require('mongodb').MongoClient;

var db = {};

db.connect = function (dbMethod, dbConfig, callback) {

    const connection = dbConfig.url;
    mongoClient.connect(connection, { useNewUrlParser: true }, function (err, client) {

        if (!err && client) {

            //dbName, Collection
            const dbName = client.db(dbConfig.db);
            const collection = dbConfig.collection;
            const query = dbConfig.query;

            //ASSIGNING EACH OPERATIONS TO ITS OWN METHOD
            var functionality = (dbMethod+"User");
            functionality = functionality.toString()

            db[functionality](dbName, collection, query, function (err, message) {
                (!err && message)
                    ? callback(200, 'json', message)
                    : callback(500, 'json', err);
            });

            //CLOSING THE CONNECTION
            client.close();
        } else {
            callback(500, 'json', { "ERROR": "Failed to connect to to server" });
        }
    });
};

db.findUser = function (database, dbCollection, query, callback) {

    database.collection(dbCollection).find(query).toArray(function (err, users) {
        if (!err && users) {
            callback(false, users);
        } else {
            callback(true, { "ERROR": "Requested Query could not be executed" });
        }
    });
};

db.insertUser = function (database, dbCollection, query, callback) {

    database.collection(dbCollection).insertOne(query, function (err, result) {
        if ((!err) && (result.insertedCount == 1)) {
            callback(false, { "SUCCESS": "User Submitted Successfuly" });
        } else {
            callback(true, { "ERROR": "Requested Query could not be executed" });
        }
    });
};

db.updateUser = function (database, dbCollection, query, callback) {

    database.collection(dbCollection).updateOne(query.query,{$set:query.param} , function (err, result) {
        if ((!err) && (result.matchedCount == 1)&& (result.modifiedCount == 1)) {
            callback(false, { "SUCCESS": "User Deleted Successfuly" });
        } else {
            callback(true, { "ERROR": "Requested Query could not be executed" });
        }
    });
};

db.deleteUser = function (database, dbCollection, query, callback) {

    database.collection(dbCollection).deleteOne(query, function (err, result) {
        if ((!err) && (result.deletedCount == 1)) {
            callback(false, { "SUCCESS": "User Deleted Successfuly" });
        } else {
            callback(true, { "ERROR": "Requested Query could not be executed" });
        }
    });
};
module.exports = db;