var handlers = {};

handlers.index = function(data, callback) {
  //read the physical file
  //replace the variables
  //pass it back up to the server
  callback(200, 'json',
        { "SUCCESS": "you are @ INDEX" });
};

handlers.public = function(data, callback) {
  //read the physical file
  //replace the variables
  //pass it back up to the server
  callback(200, 'json',
        { "SUCCESS": "you are @ PUBLIC" });
};

module.exports = handlers;