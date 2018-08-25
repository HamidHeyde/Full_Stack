var config = {};

config.dev = {
    env: {
        name: "Development",
        port: 2500
    },
    db:{
        url:'http://localhost:3000/'
    }
};

config.dep = {
    env: {
        name: "Deployment",
        port: 4500
    },
    db:{
        url:'http://localhost:3000/'
    }
};

var inConfig = process.env.NODE_ENV;
inConfig = typeof (inConfig) != 'undefined' ? inConfig : "dev";
inConfig = (['dev', 'dep'].indexOf(inConfig) > -1) ? inConfig : "dev";

module.exports = config[inConfig];

