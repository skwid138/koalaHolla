 // requires
 var router = require('express').Router();
 var pool = require('../modules/pool');

 router.get('/', function (req, res){
     pool.connect(function (err, client, done) {
         if(err) {
            console.log('connection error:', err);
            res.sendStatus(500);
            done();
         }//END if err
         else {
            client.query('SELECT * FROM holla;', function (qErr, results) {
                if (qErr) {
                    console.log('query error:', qErr);
                    res.sendStatus(500);
                }//END if qErr
                else {
                    console.log('results:', results.rows);
                    res.send(results.rows);
                }//END else
                done();
            });//END client.query
         }//END else
     });//END connect
 });//END GET 

 module.exports = router;