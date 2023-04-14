// const axios = require('axios');
// function getCharById(req,res,id){
//     axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((v)=> v.data)
//     .then((ch)=>{

//         const char={
//             id:ch.id,
//             name:ch.name,
//             gender:ch.gender,
//             species:ch.species,
//             origin:ch.origin,
//             image:ch.image,
//             status:ch.status,

//         }
//         res
//             .writeHead(200,{"Content-type": "application/json"})
//             .end(JSON.stringify(char))
//     //lineas modificadas: solo se agrego  el catch
//     .catch(err=>
//             res
//             .writeHead(500, {"Content-type": "text/plain"})
//             .end("message error")
//         )
//     //fin linea mdificada
//     })     
// }
// module.exports={
//     getCharById,
// }
const axios = require('axios');
const URL ="https://rickandmortyapi.com/api/character/";

function getCharById(req,res){
    const { id }= req.params;


    axios.get(URL + id)
        .then((response)=> {
        if(response.data){
            const char ={
                id: response.data.id,
                status: response.data.status,
                name: response.data.name,
                species: response.data.species,
                origin: response.data.origin,
                image: response.data.image,
                gender: response.data.gender,
            };

            res
                .writeHead(200,{"Content-type": "application/json"})
                .end(JSON.stringify(char));
        }else{
            res
                .writeHead(404, {"Content-Type": "text/plain"})
                .end("not found")
        }
    })

    .catch((error)=>{
        res
            .writeHead(500, {"Content-Type": "text/plain"})
            .end(error.message)
    });

}

module.exports ={
    getCharById
}
