const express = require('express');
const router = express.Router();
const path = require('path');

//------------------------------------------------------------------------------
// Para SQL : Nos Basamos en el codigo de clase crud-nodejs-mysql-master
//------------------------------------------------------------------------------


//---------------------------
//use mysql database
const mysql = require('mysql');
//Create Connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dbsensores'
});

//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});


//---------------------------------------------

router.use (function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/',function(req,res){
  res.sendFile(path.resolve('views/index.html'));
});

// Todo lo anadido basado en https://www.youtube.com/watch?v=bab8b2Ix4K0&ab_channel=Bluuweb

// Anadido : Inicio Sesion

router.get('/iniciosesion',function(req,res){
  res.sendFile(path.resolve('views/IniciarSesion.html'));
});


// Anadido : Inicio Sesion error
router.get('/iniciosesionerror',function(req,res){
  res.sendFile(path.resolve('views/IniciarSesionError.html'));
});

// Anadido : Registro
router.get('/registro',function(req,res){
  res.sendFile(path.resolve('views/Registrarse.html'));
});

// Anadido : Usuario normal
router.get('/user',function(req,res){
  res.sendFile(path.resolve('views/InicioUsuario.html'));
});

// Anadido : Piso 1
//Anadimos sensores
// Basado de https://www.tutorialspoint.com/how-to-select-last-row-in-mysql

router.get('/user/piso1',(req, res) => {
  // Para temperatura piso 11
  let temp1 = "SELECT temperatura FROM data_arduino WHERE sensor = 1 ORDER BY id DESC LIMIT 1";
  let query1 = conn.query(temp1, (err, temperatura) => {
    
    if(err) throw err;
    // Para humedad piso 11
    let hum1 = "SELECT humedad FROM data_arduino WHERE sensor = 1 ORDER BY id DESC LIMIT 1";
    console.log(hum1);
    let query2 = conn.query(hum1, (err, humedad) => {
      if(err) throw err;
      // Para sonido piso 11
      let son1 = "SELECT sonido FROM data_arduino WHERE sensor = 1 ORDER BY id DESC LIMIT 1";
      console.log(son1);
      let query3 = conn.query(son1, (err, sonido) => {
        if(err) throw err;
        res.render('InformacionPiso1',{
          temperatura: temperatura[0].temperatura,
          humedad:humedad[0].humedad,
          sonido:sonido[0].sonido
        });
      });
    });
  });
});

// Basado de https://www.tutorialspoint.com/how-to-select-last-row-in-mysql


router.get('/user/piso6',(req, res) => {
  // Para temperatura piso 6
  let temp1 = "SELECT temperatura FROM data_arduino WHERE sensor = 2 ORDER BY id DESC LIMIT 1";
  let query1 = conn.query(temp1, (err, temperatura) => {
    
    if(err) throw err;
    // Para humedad piso 6
    let hum1 = "SELECT humedad FROM data_arduino WHERE sensor = 2 ORDER BY id DESC LIMIT 1";
    console.log(hum1);
    let query2 = conn.query(hum1, (err, humedad) => {
      if(err) throw err;
      // Para sonido piso 6
      let son1 = "SELECT sonido FROM data_arduino WHERE sensor = 2 ORDER BY id DESC LIMIT 1";
      console.log(son1);
      let query3 = conn.query(son1, (err, sonido) => {
        if(err) throw err;
        res.render('InformacionPiso6',{
        temperatura: temperatura[0].temperatura,
        humedad:humedad[0].humedad,
        sonido:sonido[0].sonido
        });
      });
    });
  });
});


// Basado de https://www.tutorialspoint.com/how-to-select-last-row-in-mysql

router.get('/user/piso11',(req, res) => {
  // Para temperatura piso 11
  let temp1 = "SELECT temperatura FROM data_arduino WHERE sensor = 3 ORDER BY id DESC LIMIT 1";
  let query1 = conn.query(temp1, (err, temperatura) => {
    
    if(err) throw err;
    // Para humedad piso 11
    let hum1 = "SELECT humedad FROM data_arduino WHERE sensor = 3 ORDER BY id DESC LIMIT 1";
    console.log(hum1);
    let query2 = conn.query(hum1, (err, humedad) => {
      if(err) throw err;
      // Para sonido piso 11
      let son1 = "SELECT sonido FROM data_arduino WHERE sensor = 3 ORDER BY id DESC LIMIT 1";
      console.log(son1);
      let query3 = conn.query(son1, (err, sonido) => {
        if(err) throw err;
        res.render('InformacionPiso11',{
          temperatura: temperatura[0].temperatura,
          humedad:humedad[0].humedad,
          sonido:sonido[0].sonido
        });
      });
    });
  });
});


//Anadimos Piso 11 Semana
// Basado de https://www.tutorialspoint.com/how-to-select-last-row-in-mysql para el DESC LIMIT
router.get('/user/piso11/semana',(req, res) => {
  // Para temperatura piso 1
  let temp1 = "SELECT temperatura FROM data_arduino WHERE sensor = 3 ORDER BY id DESC LIMIT 7";
  let query1 = conn.query(temp1, (err, temperaturas) => {
    
    if(err) throw err;
    // Para humedad piso 1
    let hum1 = "SELECT humedad FROM data_arduino WHERE sensor = 3 ORDER BY id DESC LIMIT 7";
    console.log(hum1);
    let query2 = conn.query(hum1, (err, humedades) => {
      if(err) throw err;
      // Para sonido piso 1
      let son1 = "SELECT sonido FROM data_arduino WHERE sensor = 3 ORDER BY id DESC LIMIT 7";
      console.log(son1);
      let query3 = conn.query(son1, (err, sonidos) => {
        if(err) throw err;
        const temparray = [temperaturas[6].temperatura, temperaturas[5].temperatura,temperaturas[4].temperatura, temperaturas[3].temperatura, temperaturas[2].temperatura,temperaturas[1].temperatura,temperaturas[0].temperatura];
        const humarray = [humedades[6].humedad, humedades[5].humedad,humedades[4].humedad, humedades[3].humedad, humedades[2].humedad,humedades[1].humedad,humedades[0].humedad];
        const sonarray = [sonidos[0].sonido, sonidos[1].sonido, sonidos[2].sonido,sonidos[3].sonido, sonidos[4].sonido, sonidos[5].sonido,sonidos[6].sonido];
        res.render('InfoSemanaPiso11',{
        temparray: temparray,
        humarray:humarray,
        sonarray:sonarray,
        });
      });
    });
  });
});

//Anadimos Piso 6 Semana
// Basado de https://www.tutorialspoint.com/how-to-select-last-row-in-mysql para el DESC LIMIT
router.get('/user/piso6/semana',(req, res) => {
  // Para temperatura piso 1
  let temp1 = "SELECT temperatura FROM data_arduino WHERE sensor = 2 ORDER BY id DESC LIMIT 7";
  let query1 = conn.query(temp1, (err, temperaturas) => {
    
    if(err) throw err;
    // Para humedad piso 1
    let hum1 = "SELECT humedad FROM data_arduino WHERE sensor = 2 ORDER BY id DESC LIMIT 7";
    console.log(hum1);
    let query2 = conn.query(hum1, (err, humedades) => {
      if(err) throw err;
      // Para sonido piso 1
      let son1 = "SELECT sonido FROM data_arduino WHERE sensor = 2 ORDER BY id DESC LIMIT 7";
      console.log(son1);
      let query3 = conn.query(son1, (err, sonidos) => {
        if(err) throw err;
        const temparray = [temperaturas[6].temperatura, temperaturas[5].temperatura,temperaturas[4].temperatura, temperaturas[3].temperatura, temperaturas[2].temperatura,temperaturas[1].temperatura,temperaturas[0].temperatura];
        const humarray = [humedades[6].humedad, humedades[5].humedad,humedades[4].humedad, humedades[3].humedad, humedades[2].humedad,humedades[1].humedad,humedades[0].humedad];
        const sonarray = [sonidos[0].sonido, sonidos[1].sonido, sonidos[2].sonido,sonidos[3].sonido, sonidos[4].sonido, sonidos[5].sonido,sonidos[6].sonido];
        res.render('InfoSemanaPiso6',{
        temparray: temparray,
        humarray:humarray,
        sonarray:sonarray,
        });
      });
    });
  });
});

//Anadimos Piso 1 Semana
// Basado de https://www.tutorialspoint.com/how-to-select-last-row-in-mysql para el DESC LIMIT
router.get('/user/piso1/semana',(req, res) => {
  // Para temperatura piso 1
  let temp1 = "SELECT temperatura FROM data_arduino WHERE sensor = 1 ORDER BY id DESC LIMIT 7";
  let query1 = conn.query(temp1, (err, temperaturas) => {
    
    if(err) throw err;
    // Para humedad piso 1
    let hum1 = "SELECT humedad FROM data_arduino WHERE sensor = 1 ORDER BY id DESC LIMIT 7";
    console.log(hum1);
    let query2 = conn.query(hum1, (err, humedades) => {
      if(err) throw err;
      // Para sonido piso 1
      let son1 = "SELECT sonido FROM data_arduino WHERE sensor = 1 ORDER BY id DESC LIMIT 7";
      console.log(son1);
      let query3 = conn.query(son1, (err, sonidos) => {
        if(err) throw err;
        const temparray = [temperaturas[6].temperatura, temperaturas[5].temperatura,temperaturas[4].temperatura, temperaturas[3].temperatura, temperaturas[2].temperatura,temperaturas[1].temperatura,temperaturas[0].temperatura];
        const humarray = [humedades[6].humedad, humedades[5].humedad,humedades[4].humedad, humedades[3].humedad, humedades[2].humedad,humedades[1].humedad,humedades[0].humedad];
        const sonarray = [sonidos[0].sonido, sonidos[1].sonido, sonidos[2].sonido,sonidos[3].sonido, sonidos[4].sonido, sonidos[5].sonido,sonidos[6].sonido];
        res.render('InfoSemanaPiso1',{
        temparray: temparray,
        humarray:humarray,
        sonarray:sonarray,
        });
      });
    });
  });
});




//------------------------------------------------------------------------
// Admin

// Anadido : Usuario admin
router.get('/admin',function(req,res){
  res.sendFile(path.resolve('views/InicioAdministrador.html'));
});

// Anadido : Reporte Usuarios
router.get('/admin/reporteusuarios',function(req,res){
  res.sendFile(path.resolve('views/ReporteUsuarios.html'));
});

// Anadido : Basededatos
//Anadimos Piso 1 Semana
// Basado de https://www.tutorialspoint.com/how-to-select-last-row-in-mysql para el DESC LIMIT
// Basado de https://www.w3schools.com/sql/sql_select.asp para seleccionar 2 columnas
router.get('/admin/basededatos',(req, res) => {
  // Para temperatura piso 1
  let temp1 = "SELECT temperatura,hora FROM data_arduino ORDER BY id DESC LIMIT 10";
  let query1 = conn.query(temp1, (err, temperaturas) => {
    
    if(err) throw err;
    // Para humedad piso 1
    let hum1 = "SELECT humedad,hora FROM data_arduino ORDER BY id DESC LIMIT 10";
    console.log(hum1);
    let query2 = conn.query(hum1, (err, humedades) => {
      if(err) throw err;
      // Para sonido piso 1
      let son1 = "SELECT sonido,hora FROM data_arduino ORDER BY id DESC LIMIT 10";
      console.log(son1);
      let query3 = conn.query(son1, (err, sonidos) => {
        if(err) throw err;
        res.render('BaseDeDatos',{
        temperaturas: temperaturas,
        humedades:humedades,
        sonidos:sonidos,
        });
      });
    });
  });
});









// Anadido : Lista de Usuarios
router.use (function (req,res,next) {
  console.log('/admin/listausuarios' + req.method);
  next();
});


router.get('/admin/listausuarios',function(req,res){
  res.sendFile(path.resolve('views/ListaUsuarios.html'));
});


//Anadimos sensores
router.get('/admin/sensores',(req, res) => {
  let sql = "SELECT * FROM data_arduino";
  console.log(sql);
  let query = conn.query(sql, (err, modulos) => {
    if(err) throw err;
    res.render('Sensores',{
      modulos: modulos
    });
  });
});






//Error 404
// Codigo obtenido de https://www.codegrepper.com/code-examples/javascript/how+to+make+a+404+page+nodejs
router.use(function(req, res, next){
  res.status(404);
  if (req.accepts('html')) {
    res.render('Error404', { url: req.url });
    return;
  }
});






module.exports = router;
