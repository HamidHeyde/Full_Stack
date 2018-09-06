var apiHandlers = require('./apiHandlers');
var htmlHandlers = require('./htmlHandlers');

var router = {
    //basics
    "notFound":apiHandlers.notFound,
    "/ping":apiHandlers.ping,
    //api
    "/api/users":apiHandlers.users,
    //Handling React Pages
    "/":htmlHandlers.index,
    //Handling Public Assets
    "/public":htmlHandlers.public,
    //Handling HTML pages
    "/html/":htmlHandlers.htmlPages.index,
    "/html/index":htmlHandlers.htmlPages.index,
    "/html/signup":htmlHandlers.htmlPages.signup,
    "/html/signin":htmlHandlers.htmlPages.signin
};

module.exports = router;

