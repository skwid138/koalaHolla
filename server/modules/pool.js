// requires
var Pool = require('pg').Pool;

// config
var config = {
    host: 'localhost',
    port: 5432,
    database: 'koala',
    max: 20
};

// pool constructor 
var pool = new Pool(config);

//export
module.exports = pool;