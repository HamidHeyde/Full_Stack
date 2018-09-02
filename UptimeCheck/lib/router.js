var apiHandlers = require('./apiHandlers');

var router = {
    //basics
    "notFound":apiHandlers.notFound,
    "/ping":apiHandlers.ping,
    //api
    "/api/users":apiHandlers.users
    //html
};

module.exports = router;

