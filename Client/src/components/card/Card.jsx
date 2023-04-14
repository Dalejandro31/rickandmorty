import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import { addFav,removeFav } from '../../redux/actions';


function Card({id,name,status,species,gender,origin,image,onClose }) {
   const dispatch = useDispatch();
   const myFavorites= useSelector(state => state.myFavorites);
   const [isFav, setIsFav]=useState(false);


   function handleFavorite(){
      if(isFav){  
         setIsFav(false)  
         dispatch(removeFav(id))
      }else{
         setIsFav(true)
         dispatch(addFav({id,name,status,species,gender,origin,image,onClose }))
      }
   }
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div>
         <div  className={style.contenedorCard}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }    
         <button onClick={()=>onClose(id)}>X</button>
         <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img className={style.imgCard} src={image} alt={name} />
         </div>
         
      </div>
   );
}


     

export default Card