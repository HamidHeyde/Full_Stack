var fileOps = require("./fileOps");
var config = require("./config");
var helpers = require("./helpers");

var handlers = {};
handlers.htmlPages = {};

handlers.index = function (data, callback) {
  var allowedMethods = ['get', 'options'];
  if (allowedMethods.indexOf(data.method) > -1) {
    //read the physical file
    fileOps.read("templates/react/", "index.html", function (err, page) {
      if (!err && page) {
        //pass it back up to the server
        callback(200, "html", page);
      } else {
        callback(404, "json", page);
      }
    });
  } else {
    callback(405, 'json', { "ERROR": "METHOD id not allowed" });
  }

};

handlers.public = function (data, callback) {
  var allowedMethods = ['get', 'options'];
  if (allowedMethods.indexOf(data.method) > -1) {

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
  } else {
    callback(405, 'json', { "ERROR": "METHOD id not allowed" });
  }
};

//
handlers.htmlPages.index = function (data, callback) {
  var allowedMethods = ['get', 'options'];
  if (allowedMethods.indexOf(data.method) > -1) {

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
  } else {
    callback(405, 'json', { "ERROR": "METHOD id not allowed" });
  }
};
handlers.htmlPages.signin = function (data, callback) {
  var allowedMethods = ['get', 'options'];
  if (allowedMethods.indexOf(data.method) > -1) {

    var pageVariables = {
      headers: {
        title: "Signin",
        css: "public/css/html/signin.css"
      },
      globals: config.globals
    };
    //read the physical file
    fileOps.assembleHtmlPage("templates/html/", "signin.html", function (err, page) {
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
  } else {
    callback(405, 'json', { "ERROR": "METHOD id not allowed" });
  }
};
handlers.htmlPages.signup = function (data, callback) {
  var allowedMethods = ['get', 'options'];
  if (allowedMethods.indexOf(data.method) > -1) {

    var pageVariables = {
      headers: {
        title: "Signup",
        css: "public/css/html/signup.css"
      },
      globals: config.globals
    };
    //read the physical file
    fileOps.assembleHtmlPage("templates/html/", "signup.html", function (err, page) {
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
  } else {
    callback(405, 'json', { "ERROR": "METHOD id not allowed" });
  }
};

module.exports = handlers;
