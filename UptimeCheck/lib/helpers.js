var helpers = {};

helpers.placePageVariables = function (page, pageVariables,callback) {
    //Page Variables to String
    pageVar = {};
    for (key in pageVariables) {
        if (pageVariables.hasOwnProperty(key)) {
            // console.log(key);
            for (subKey in pageVariables[key]) {
                // console.log(subKey);
                if (pageVariables[key].hasOwnProperty(subKey)) {
                    keyToEnter = key.toString() + "." + subKey.toString();
                    pageVar[keyToEnter] = pageVariables[key][subKey];
                }
            }
        }
    };
    // console.log(pageVariables);
    // console.log(pageVar);
    for (key in pageVar) {
        if (pageVar.hasOwnProperty(key)) {
            var find = '{' + key + '}';
            var replace = pageVar[key];
              page = page.replace(find, replace);
        }
    };

    callback(page);
};

module.exports = helpers;