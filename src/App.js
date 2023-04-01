import './App.css';
//import Card from './components/card/Card';
// import SearchBar from './components/searchBar/SearchBar';
//importo el hook///////////////
import { useState } from 'react';
import { useEffect } from 'react';
////////////////////////////////////
import Navs from './components/nav/Nav';
import Cards from './components/cards/Cards';
import About from './components/about/About';
import Detail from './components/detail/detail';
import Form from './components/form/Form';
import Favorites from './components/favorites/Favorites';
///////////Axios////////////////////
import axios from 'axios';
///////////////////////////////////
import { Route,Routes, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';




function App() {
/////hooks
const [characters,setCharacters]=useState([]);
const {pathname} = useLocation();
const [access,setAccess]=useState(false);
const navigate = useNavigate();

useEffect(()=>{
   !access && navigate('/');
}, [access]);

//simular credenciales
const email="ao7417331@gamil.com";
const password="password123";

////mi estado es characters = []
///funcion para modificar app///
function onSearchs(id) {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name && !characters.find((char)=>char.id === data.id)) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}

function onClose(id){
   const filterCharacters = characters.filter((char)=> parseInt(char.id) !== parseInt(id));
   setCharacters(filterCharacters);
}

const login=(userData)=>{
   if(userData.email === email && userData.password === password){
      setAccess(true);
      navigate('/home');
   }else{
      alert("credenciales incorrectas")
   }
}





   return (
      <div className='App'>
         {pathname !=="/"&& <Navs onSearch={onSearchs} />}
         
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
         
         
         
      </div>
   );
}

export default App;
