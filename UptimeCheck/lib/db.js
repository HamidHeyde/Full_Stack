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

            }else if(dbMethod == "update"){

            }else if(dbMethod == "delete"){

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

module.exports = db;