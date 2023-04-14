import style from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar({onSearch}) {
   const[id, setId]=useState('');

   const handleChange =(event)=>{
      setId(event.target.value)
   }
   



   return (
      <div className={style.divSearch}>
         <input className={style.input} type='search' value={id} onChange={handleChange} />
         <button className={style.button_search} onClick={()=> onSearch(id)}>Agregar</button>
      </div>
   );
}
