var fs = require('fs');
var path = require('path');

var fileOps = {};

fileOps.finalPath = function(dir,file){
    var currentDir = __dirname;
    var fPath;
    if(dir == 'templates'){
        //For Template Folder [REACT]
        fPath  = path.join(currentDir, '/../templates/react/');
        fPath+=file;
    }
    return fPath;
};
//Read file
fileOps.read = function (dir,file,callback){
    
    var filePath = fileOps.finalPath(dir,file);
    

    callback(filePath);
};

module.exports = fileOps;