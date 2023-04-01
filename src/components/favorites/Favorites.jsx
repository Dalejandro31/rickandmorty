import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import style from './Favorites.module.css'
import { orderCard, filterCards } from "../../redux/actions";

function Favorites(){
    const {myFavorites} = useSelector(state=> state)
    const dispatch = useDispatch();
    const handlerOrder= (event)=>{
        dispatch(orderCard(event.target.value))
    }

    const handlerFilter= (event)=>{
        dispatch(filterCards(event.target.value))
    }

    return(
        <div> 
            <div>
                <select onChange={handlerOrder} >
                    <option value="Order" disabled='disabled'>Order By</option>
                    <option value="Ascendente" >Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select onChange={handlerFilter}>
                    <option value="filter" disabled='disabled'>Order By</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Unknow">Unknow</option>
                    <option value="Genderless">Genderless</option>
                </select>
            </div>
            {
                myFavorites.map((character)=>{
                    return(
                        <div>
                            
                            
                            <Link to={`/detail/${character.id}`}><h2>{character.name}</h2></Link>
                            <h2>{character.status}</h2>
                            <h2>{character.species}</h2>
                            <h2>{character.gender}</h2>
                            <h2>{character.origin}</h2>
                            <img className={style.imgCard} src={character.image} alt={character.name} />
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Favorites;