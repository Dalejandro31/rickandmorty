// const http = require('http');
// const {getCharById}= require('./controllers/getCharById.js')


// const PORT=3001;



// http
//     .createServer(function (req, res){
//         res.setHeader('Access-Control-Allow-Origin', '*');


//         //codigo que se modifico

//         if(req.url.includes('/rickandmorty/character')){
//             let id= req.url.split('/').pop();
//             getCharById(req,res,id)
//         }

//     })
//     .listen(PORT,()=>{
//         console.log("in port http://localhost:3001");
//     })


const express = require('express');
const server = express();
const PORT = 3001;
const routes = require('./routes/routes-index')
//middelware
server.use(express.json());
/////////////////////////////////////////
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});
///////////////////////////////////
server.use('/rickandmorty',routes)




server.listen(PORT, ()=>{
    console.log('Server raised in port: '+ PORT);
})
