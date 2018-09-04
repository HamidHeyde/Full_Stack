var apiHandlers = require('./apiHandlers');
var htmlHandlers = require('./htmlHandlers');

var router = {
    //basics
    "notFound":apiHandlers.notFound,
    "/ping":apiHandlers.ping,
    //api
    "/api/users":apiHandlers.users,
    //html
    "/":htmlHandlers.index
};

module.exports = router;

