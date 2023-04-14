//codigo nuevo///////////////
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
/////////////////////////
import Card from "../card/Card"
import style from './Cards.module.css'

export default function Cards({characters, onClose}) {
   //nuevo codgo añadido///////////////////////////////
   const[currentPage , setCurrentPage]= useState(1);

   const charactersPerPage = 3;
   const indexOfLastCharacter = currentPage * charactersPerPage;
   const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
   const currentCharacters = characters.slice(
      indexOfFirstCharacter,
      indexOfLastCharacter
   );
 
   const totalPages = Math.ceil(characters.length / charactersPerPage);
 
   function handlePageClick(pageNum) {
      setCurrentPage(pageNum);
   }
   ////////////////////////////////////////////////////

   // console.log(characters)
   return (
   <div className={style.Contenedor_Padre}>
      <div className={style.contenedor} >
         {
/*se agrego un current */
               currentCharacters.map(({id,name,status,species,gender,origin,image})=>{
/////////////////////////////                  
               return (
                  <div key={id} className={style.cards}>
                        <Card className={style.card}
                           onClose={onClose}
                           id={id}
                           name={name}
                           status={status}
                           species={species}
                           gender={gender}
                           origin={origin.name}
                           image={image}
                        />
                  </div>
               )
            })
         }
         </div>

      
      
         <div className={style.pagination}>
         {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <button
               key={pageNum}
               className={pageNum === currentPage ? style.active : ''}
               onClick={() => handlePageClick(pageNum)}
            >
               {pageNum}
            </button>
         ))}
      </div>


         
   </div>   
      
   )
}
