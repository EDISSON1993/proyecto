const express = require('express');
const path = require('path');
const hbs = require('hbs');
const mysql = require('mysql');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/assets', express.static(__dirname + '/public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');



// Conexión a base de datos

  const conn = mysql.createConnection({
    
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'huiracocha_edisson'

  })

  conn.connect((err) => {

    if (err) throw err;
    console.log('La conexión fue un éxito...');

  });



// SELECT 

  app.get('/precios', (req, res) => {

    let sql = "SELECT * FROM libros";

    let query = conn.query(sql, (err, results) => {

      if (err) throw err;

      res.render('precios', {

        results: results

      });

    });

  });

// Insertar 

  app.post('/save', (req, res) => {

      let data = { Descripcion: req.body.Descripcion, Precio: req.body.Precio };
      let sql = "INSERT INTO libros SET ?";
      let query = conn.query(sql, data, (err, results) => {

        if (err) throw err;

        res.redirect('/');

      });

  });


//UPDATE

  app.post('/update', (req, res) => {

    let sql = "UPDATE libros SET Descripcion='" + req.body.Descripcion + "', Precio='" + req.body.Precio + "' WHERE Codigo=" + req.body.Codigo;
    let query = conn.query(sql, (err, results) => {

      if (err) throw err;
      res.redirect('/');

    });

  });

// DELETE

  app.post('/delete',(req, res) => {

    let sql = "DELETE FROM libros WHERE Codigo="+req.body.Codigo+"";
    let query = conn.query(sql, (err, results) => {

    if(err) throw err;

      res.redirect('/');

    });

  });





//server listening
  app.listen(3000, () => {
      console.log('Server is running at port 3000');
  });