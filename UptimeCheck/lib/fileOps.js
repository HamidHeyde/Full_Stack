var fs = require('fs');
var path = require('path');

var fileOps = {};

fileOps.finalPath = function(dir,file){
    var currentDir = __dirname;
    var fPath;
    if(dir == 'templates'){
        //For Template Folder [REACT]
        fPath  = path.join(currentDir, '/../templates/');
        fPath+=file;
    }else if(dir == 'public'){
        //For Template Folder [REACT]
        fPath  = path.join(currentDir, '/..');
        fPath+=file;
    }
    return fPath;
};
//Read file
fileOps.read = function (dir,file,callback){
    
    var filePath = fileOps.finalPath(dir,file);

    fs.readFile(filePath, `utf-8`, function(err, data) {
        if (!err && data) {
            callback(false, data);
        } else {
            callback(true,err);
        }
    });
};

fileOps.readStatics = function (dir,file,callback){
    
    var filePath = fileOps.finalPath(dir,file);
    //callback(filePath);
    fs.readFile(filePath, function(err, data) {
        if (!err && data) {
            callback(false, data);
        } else {
            callback(true,err);
        }
    });
};

module.exports = fileOps;