var fileOps = require("./fileOps");
var config = require("./config");
var helpers = require("./helpers");

var handlers = {};
handlers.htmlPages = {};

handlers.index = function (data, callback) {
  //read the physical file
  fileOps.read("templates/react/", "index.html", function (err, page) {
    if (!err && page) {
      //pass it back up to the server
      callback(200, "html", page);
    } else {
      callback(404, "json", page);
    }
  });
};

handlers.public = function (data, callback) {
  fileOps.readStatics("public", data.path, function (err, file) {
    if (!err && file) {
      var fileType = "plain";
      if (data.path.indexOf(".css") > -1) {
        fileType = "css";
      } else if (data.path.indexOf(".png") > -1) {
        fileType = "png";
      } else if (data.path.indexOf(".jpg") > -1) {
        fileType = "jpg";
      } else if (data.path.indexOf(".ico") > -1) {
        fileType = "ico";
      }

      // console.log(fileType);
      callback(200, fileType, file);
    } else {
      callback(404, "json", file);
    }
  });
};

//
handlers.htmlPages.index = function (data, callback) {

  var pageVariables = {
    headers: {
      title: "Home",
      css: "public/css/html/index.css"
    },
    globals: config.globals
  };
  //read the physical file
  fileOps.assembleHtmlPage("templates/html/", "index.html", function (err, page) {
    if (!err && page) {
      //pass it back up to the server
      // helpers.placePageVariables(page, pageVariables);
      // callback(200, "html", page);
      helpers.placePageVariables(page, pageVariables, function (finalPage) {
        callback(200, "html", finalPage);
      });
    } else {
      callback(404, "json", page);
    }
  });
  // callback(200,'json',{"SUCCESS":"@ HTMLT version @ INDEX"});
};
handlers.htmlPages.signin = function (data, callback) {
  callback(200, 'json', { "SUCCESS": "@ HTMLT version @ Signin" });
};
handlers.htmlPages.signup = function (data, callback) {
  callback(200, 'json', { "SUCCESS": "@ HTMLT version @ Signup" });
};

module.exports = handlers;
