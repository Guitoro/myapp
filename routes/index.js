var express = require('express');
var router = express.Router();

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  


});

router.get('/dbtest', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM test_table');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/dbtest', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

router.get('/coches', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM tabla_coches');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/coches', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
  
  router.get('/ordenadores', async (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM tabla_ordenadores');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/ordenadores', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

module.exports = router;



