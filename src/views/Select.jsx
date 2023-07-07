import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"
import nidoqueen from '../img/nidoqueen.png'

const Select = () => {
    const [pokemon, setPokemon] = useState("");
    const [pokemones, setPokemones] = useState([]);

    const navigate = useNavigate();

    const buscarPokemon = (e) =>{
        e.preventDefault()
        navigate(`/select/${pokemon}`);       
    }

    const consultaAPI = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon/?limit=20`
        const resultado = await fetch(url);
        const datos = await resultado.json()
        setPokemones(datos.results) 
    }

    useEffect(() => {
        consultaAPI()
        }, [])

  return (
    <div className='select'>
        <h4>Elige un pokemon</h4>
        <form onSubmit={buscarPokemon}>
            <select onChange={(e) => setPokemon(e.currentTarget.value)}>
                <option value=''>selecciona</option>
                {pokemones.map((nombre) => (
                    <option>{nombre.name}</option>

            ))
                }
            </select>
            <button type='submit'>Buscar</button>
        </form>
        <img src={nidoqueen} alt="" />

    </div>
  )
}

export default Select