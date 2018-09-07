var fs = require("fs");
var path = require("path");

var fileOps = {};

fileOps.finalPath = function (dir, file) {
  var currentDir = __dirname;
  var fPath;
  if (dir == "public") {
    //For Template Folder [REACT]
    fPath = path.join(currentDir, "/..");
    fPath += file;
  } else {
    //For Template Folder [REACT]
    fPath = path.join(currentDir, "/../");
    fPath += dir;
    fPath += file;
  }
  return fPath;
};
//Read file
fileOps.read = function (dir, file, callback) {
  var filePath = fileOps.finalPath(dir, file);

  fs.readFile(filePath, `utf-8`, function (err, data) {
    if (!err && data) {
      callback(false, data);
    } else {
      callback(true, err);
    }
  });
};

//Read Static Files
fileOps.readStatics = function (dir, file, callback) {
  var filePath = fileOps.finalPath(dir, file);
  //callback(filePath);
  fs.readFile(filePath, function (err, data) {
    if (!err && data) {
      callback(false, data);
    } else {
      callback(true, err);
    }
  });
};

//Assemble Html Pages (Header + Body + Footer)
fileOps.assembleHtmlPage = function (dir, file, callback) {
  
  var headerPath = fileOps.finalPath(dir, "header.html");
  var bodyPath = fileOps.finalPath(dir, file);
  var footerPath = fileOps.finalPath(dir, "footer.html");

  fs.readFile(headerPath, function (err, header) {
    if (!err && header) {
      fs.readFile(bodyPath, function (err, body) {
        if (!err && body) {
          fs.readFile(footerPath, function (err, footer) {
            if (!err && footer) {
              var finalPage = header + body + footer;
              callback(false, finalPage);
            } else {
              callback(true, err);
            }
          });
        } else {
          callback(true, err);
        }
      });
    } else {
      callback(true, err);
    }
  });
};

module.exports = fileOps;
