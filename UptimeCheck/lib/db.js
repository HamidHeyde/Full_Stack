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

            if (dbMethod == "find") {
                //Running Query
                db.findUsers(dbName, collection, query, function (err, users) {
                    (!err && users)
                        ? callback(200, 'json', users)
                        : callback(500, 'json', err);
                });
            }else if(dbMethod == "insert"){
                db.insertUser(dbName, collection, query, function (err,message) {
                    (!err)
                        ? callback(200, 'json', message)
                        : callback(500, 'json', err);
                });
            }else if(dbMethod == "update"){

            }else if(dbMethod == "delete"){
                db.deleteUser(dbName, collection, query, function (err,message) {
                    (!err)
                        ? callback(200, 'json', message)
                        : callback(500, 'json', err);
                });
            }

            //CLOSING THE CONNECTION
            client.close();
        } else {
            callback(500, 'json', { "ERROR": "Failed to connect to to server" });
        }
    });
};

db.findUsers = function (database, dbCollection, query, callback) {

    database.collection(dbCollection).find(query).toArray(function (err, users) {
        if (!err && users) {
            callback(false, users);
        } else {
            callback(true, { "ERROR": "Requested Query could not be executed" });
        }
    });
};

db.insertUser = function (database, dbCollection, query, callback) {

    database.collection(dbCollection).insertOne(query,function (err, result) {
        if ((!err) && (result.insertedCount==1)) {
            callback(false, {"SUCCESS":"User Submitted Successfuly"});
        } else {
            callback(true, { "ERROR": "Requested Query could not be executed" });
        }
    });
};

db.deleteUser = function (database, dbCollection, query, callback) {

    database.collection(dbCollection).deleteOne(query,function (err, result) {
        if ((!err) && (result.deletedCount==1)) {
            callback(false, {"SUCCESS":"User Deleted Successfuly"});
        } else {
            callback(true, { "ERROR": "Requested Query could not be executed" });
        }
    });
};
module.exports = db;