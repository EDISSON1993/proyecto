const express = require('express');//Declaración de variables
const path = require('path');
const hbs = require('hbs');
const ruta = express();
const puerto=3000;


//Lectura de la carpeta public

ruta.use(express.static('public'));


// Middlewares

ruta.use(express.json());
ruta.use(express.urlencoded({ extended: false }));
ruta.use('assets', express.static(__dirname + 'public'));
ruta.set('views', path.join(__dirname, 'views'));
ruta.set('view engine', 'hbs');

//Rutas de la pagina web 

  ruta.get('/', (requerido, resultado)=>{

   resultado.render('principal',{

     nombre: 'Edisson Huiracocha',
     titulo:'EDITORIAL BUEN LIBRO'

   });

  })
 
 
  ruta.get('/listaNinos', (requerido, resultado)=>{

   resultado.render('listaNinos',{

   });

  })

  ruta.get('/cuentosInfantiles', (requerido, resultado)=>{

    resultado.render('cuentosInfantiles',{

    });

  })

  ruta.get('/cuentosPopulares', (requerido, resultado)=>{

    resultado.render('cuentosPopulares',{

    });

  })

  ruta.get('/cuentosFantasticosyDeHadas', (requerido, resultado)=>{

    resultado.render('cuentosFantasticosyDeHadas',{

    });

  })

  ruta.get('/cuentosRealistas', (requerido, resultado)=>{

    resultado.render('cuentosRealistas',{

    });

  }) 

  ruta.get('/cuentosDeMisterio', (requerido, resultado)=>{

    resultado.render('cuentosDeMisterio',{

    });

  }) 

  ruta.get('/cuentosHistoricos', (requerido, resultado)=>{

    resultado.render('cuentosHistoricos',{

    });

  }) 

  ruta.get('/cuentosComicos', (requerido, resultado)=>{

    resultado.render('cuentosComicos',{

    });

  }) 

  ruta.get('/cuentosDeTerror', (requerido, resultado)=>{

    resultado.render('cuentosDeTerror',{

    });

  }) 

  ruta.get('/fabulas', (requerido, resultado)=>{

    resultado.render('fabulas',{

    });

  })

  ruta.get('/listaAdolescentes', (requerido, resultado)=>{

   resultado.render('listaAdolescentes',{

   });

  })

  ruta.get('/novelas', (requerido, resultado)=>{

    resultado.render('novelas',{

    });

  }) 

  ruta.get('/listaAdultos', (requerido, resultado)=>{

   resultado.render('listaAdultos',{

   });

  })
 
//rutas que no existen o están en mantenimiento

  ruta.get('/leyendas', (requerido, resultado)=>{

    resultado.send('La página está en mantenimiento, por favor tenga paciencia estamos trabajando en ello');

  }) 

  ruta.get('/obrasLiterarias', (requerido, resultado)=>{

    resultado.send('La página está en mantenimiento, por favor tenga paciencia estamos trabajando en ello');
   
  })

  ruta.get('*', (requerido, resultado)=>{

    resultado.send('La página no existe o está mal escrita');

  })



//Puerto en el que corre

  ruta.listen(puerto, ()=>{

    console.log(`La página esta corriendo en el puerto: http://localhost${puerto}`);

  })
