//jshint esversion:6

//Inicializo express
const express = require('express');
const app = express();

//Inicializo el body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

//Activo carpeta public para archivos estaticos
app.use(express.static('public'));

//Sección de rutas
app.get("/",function(req,res){
res.sendFile(__dirname+"/index.html");

app.post("/",function(req,res){
  //Recojo los valores que envían dl Formulario
console.log(req.body);
  var sexo=(req.body.sexo);
  var apellidoPaterno=(req.body.apadre);
  var apellidoMaterno=(req.body.amadre);

//Declaro 2 arrays de nombres
var nombresNene=["Andrés","Julián","Pelayo","Martín","Rodrigo"];
var nombresNena=["Jimena","Sandra","Andrea","Andrea","Petra","Lucía"];

//Escogemos aleatoriamente un nombre

});
});


//Arranca el servidor
app.listen(3000,function(){
  console.log("Servidor escuchando en puerto 3000.");
});
