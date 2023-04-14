import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Detail(){
    const { id } = useParams();
    const [character, setCharacter]=useState([])
    
    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });

        return() => setCharacter({});
    }, [id]);

    return(
        <div>
            {character.name ?(
                <>
                    <h1>{character.name}</h1>
                    <p>Status: {character.status}</p>
                    <p>Species: {character.species}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Origin: {character.origin && character.origin.name}</p>
                    <img src={character.image} alt={character.name} />    
                </>
            ):(
                <h3>loading...</h3>
            )
        }

            
        </div>
    )
}