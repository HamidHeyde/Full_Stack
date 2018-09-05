var fileOps = require("./fileOps");

var handlers = {};

handlers.index = function(data, callback) {
  //read the physical file
  //replace the variables
  //pass it back up to the server
  fileOps.read("templates", "react/index.html", function(err, page) {
    if (!err && page) {
      callback(200, "html", page);
    } else {
      callback(404, "json", page);
    }
  });
};

handlers.public = function(data, callback) {
  //read the physical file
  //replace the variables
  //pass it back up to the server
  // console.log(data.path);
  fileOps.readStatics("public", data.path, function(err,file) {
    if (!err && file) {
      var fileType='plain';
      if (data.path.indexOf('.css') > -1) {fileType = 'css';}
      else if (data.path.indexOf('.png') > -1) {fileType = 'png';}
      else if (data.path.indexOf('.jpg') > -1) {fileType = 'jpg';}
      else if (data.path.indexOf('.ico') > -1) {fileType = 'ico';}

      // console.log(fileType);
      callback(200, fileType, file);
    } else {
      callback(404, "json", file);
    }
  });
  // callback(200, 'json',
  //       { "SUCCESS": "you are @ PUBLIC" });
};

module.exports = handlers;
