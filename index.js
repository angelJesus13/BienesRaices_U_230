//utiliza ECMASCRIPT modules, sintaxis mas moderna
import express from 'express'
import usuariosRoutes from './routes/usuarioRoutes.js'
//extraera la dependencia que se a instalado y la extraera en este archivo
//CREAR LA APP
//contendra toda la informacion de express la variable llamada "app"
const app = express()
//Routing

//Habilitar pug, set es para añadir informacion
//en esta seccion estamos diciendole a pug que archivos quiero y de donde los va a extraer

app.set('view engine', 'pug')
app.set('views', './views');

app.use('/auth', usuariosRoutes)//escanea las que inician con una diagonal

//.send, .json, .render
//solo se ejecuta si es .get, digamos que es nuestra URL

//Definir un puerto para arrancar el proyecto
const port = 3000;

app.listen(port, () =>{
    console.log(`El servidor esta funcionando en el puerto: ${port}`)
});

