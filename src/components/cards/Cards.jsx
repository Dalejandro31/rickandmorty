import Card from "../card/Card"
import style from './Cards.module.css'

export default function Cards({characters, onClose}) {
   console.log(characters)
   return (
   <div className={style.Contenedor_Padre}>
      <div className={style.contenedor} >
         {
            characters.map(({id,name,status,species,gender,origin,image})=>{
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
   </div>   
      
   )
}
