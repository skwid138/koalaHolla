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

 router.post('/', function (req, res) {
     var name = req.body.name;
     var age = req.body.age;
     var gender = req.body.gender;
     var transfer = req.body.readyForTransfer;
     var notes = req.body.notes;
     pool.connect(function (err, client, done) {
         if (err) {
             console.log('connection error:', err);
             res.sendStatus(500);
             done();
         }//END if err
         else {
             var queryString = 'INSERT INTO holla (name, age, gender, transfer, notes) VALUES ($1, $2, $3, $4, $5)';
             var values = [name, age, gender, transfer, notes];
             client.query(queryString, values, function (qErr, results) {
                 if (qErr) {
                     console.log('query error:', qErr);
                     res.sendStatus(500);
                 }//END if qErr
                 else {
                     res.sendStatus(201);
                 }//END else
                 done();
             });//END client.query
         }//END else
     });//END connect
 });//END GET 

 router.delete('/:id', function (req, res) {
     console.log('in koala delete route');
     var koalaId = req.params.id;
     pool.connect(function (error, client, done) {
         if (error) {
             console.log('connection error ->', error);
             res.sendStatus(500);
             done();
         } else {
             var queryString = 'DELETE FROM holla WHERE id=$1';
             var values = [koalaId];
             client.query(queryString, values, function (queryError, resultObj) {
                 done();
                 if (queryError) {
                     console.log('query error ->', queryError);
                     res.sendStatus(500);
                 } else {
                     res.sendStatus(200);
                 } // end client if else
             }); // end client query
         } // end connect else
     }); // end pool connect
 }); // end delete

 router.put('/:id', function (req, res) {
     console.log('in koala PUT route');
     var koalaId = req.params.id;
     pool.connect(function (error, client, done) {
         if (error) {
             console.log('connection error ->', error);
             res.sendStatus(500);
             done();
         } else {
             var queryString = "UPDATE holla SET transfer='TRUE' WHERE id=$1";
             var values = [koalaId];
             client.query(queryString, values, function (queryError, resultObj) {
                 done();
                 if (queryError) {
                     console.log('query error ->', queryError);
                     res.sendStatus(500);
                 } else {
                     res.sendStatus(200);
                 } // end client if else
             }); // end client query
         } // end connect else
     }); // end pool connect
 }); // end delete

 module.exports = router;