import React, { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Pokemon = () => {
   const [pokemon, setPokemon] = useState({});
   const { name } = useParams();
   const navigate = useNavigate();
   const consultaAPI = async (name) => {
       const url = `https://pokeapi.co/api/v2/pokemon/${name}`
       const resultado = await fetch(url);
       const datos = await resultado.json()

       const pokemon = {
           nombre: datos.name,
           id: datos.id,
           foto: datos.sprites.other.dream_world.front_default,
           peso: datos.weight,
           tipo: datos.types[0].type.name,
           hp: datos.stats[0].base_stat,
           ataque: datos.stats[1].base_stat,
           defensa:datos.stats[2].base_stat,
       }
       setPokemon(pokemon) 
   }
   
   const irApokemon = () =>{
    navigate(`/select/`);       
    }

   useEffect(() => {
    consultaAPI(name)
    }, [])


  return (
    <div className='pokemon'>
        <div className={`${pokemon.tipo} card`}>
            <img src={pokemon.foto} alt="" />
            <ul>
                <li><h3>#{pokemon.id} {pokemon.nombre}</h3></li>
                <li>Type: {pokemon.tipo}</li>
                <li>Weight: {pokemon.peso}</li>
                <li>Hp: {pokemon.hp}</li>
                <li>Ataque: {pokemon.ataque}</li>
                <li>Defensa: {pokemon.defensa}</li>
            </ul>
        </div>
        <button type='button' onClick={irApokemon}>Buscar otro pokemon</button>

    </div>
  )
}

export default Pokemon