const express = require('express');
const path = require('path');
const hbs = require('hbs');
const mongoose = require('mongoose');
const { connect } = require('http2');
mongoose.set('debug', true);
const debug = require('debug')('mi-aplicacion');
const db_url= `mongodb://127.0.0.1:27017/Editorial_Buenlibro`;

const app = express();


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('assets', express.static(__dirname + 'public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// Conexión a base de datos


const connect = () =>{

  mongoose.connect(

     db_url,{
        
      KeepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true


     },

     (err)=>{

        if(err){
          
          console.log('Error de conexión con la base de datos');

        } else {

          console.log('Conexión correcta');
        }

     }

  )
}

//Usando connect

connect();

// SELECT 

  app.get('/precios', (req, res) => {

    let db = "SELECT * FROM CuentosInfantiles";

    let query = connect.query(db, (err, results) => {

      if (err) throw err;

      res.render('precios', {

        results: results

      });

    });

  });

// Insertar 

  app.post('/save', (req, res) => {

      let data = { Descripcion: req.body.Descripcion, Precio: req.body.Precio };
      let db = "INSERT INTO libros SET ?";
      let query = connect.query(db, data, (err, results) => {

        if (err) throw err;

        res.redirect('/');

      });

  });


//UPDATE

  app.post('/update', (req, res) => {

    let db = "UPDATE libros SET Descripcion='" + req.body.Descripcion + "', Precio='" + req.body.Precio + "' WHERE Codigo=" + req.body.Codigo;
    let query = connect.query(db, (err, results) => {

      if (err) throw err;

      res.redirect('/');

    });

  });

// DELETE

  app.post('/delete',(req, res) => {

    let db = "DELETE FROM libros WHERE Codigo="+req.body.Codigo+"";
    let query = connect.query(db, (err, results) => {

    if(err) throw err;

      res.redirect('/');

    });

  });





//server listening
  app.listen(3000, () => {
      console.log('Server is running at port 3000');
  });