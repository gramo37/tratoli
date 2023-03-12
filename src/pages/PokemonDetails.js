import React from 'react'
import { useParams } from "react-router-dom"
import { url } from '../config/config';
import useFetch from "../hooks/useFetch"
import "../css/pokemonDetails.css"
import Shimmer from '../components/Shimmer1';

const PokemonDetails = () => {

  const { id } = useParams();
  const { data, loading, error } = useFetch(`${url}/api/v2/pokemon/${id}`)

  if (loading) return <Shimmer />

  if (error) return <div>Something went wrong</div>

  const { abilities, forms, moves, species, stats, types } = data || {}

  return (
    <div className='pokemon-details-container'>
      <h1>{species?.name}</h1>
      <div className='pokemon-details-inner-container'>
        <div className='pokemon-details-right-inner-container'>
          <ul>
            <h1>Abilities</h1>
            {abilities?.map((item) => {
              return <li>{item.ability.name}</li>
            })}
          </ul>

          <ul>
            <h1>Forms</h1>
            {forms?.map((item) => {
              return <li>{item.name}</li>
            })}
          </ul>

          <ul>
            <h1>Stats</h1>
            {stats?.map((item) => {
              return <li>
                <p className='bold'>{item.stat.name}</p>
                <p>Base Stat - {item.base_stat} </p>
                <p>Effort - {item.effort}</p>
              </li>
            })}
          </ul>

          <ul>
            <h1>Types</h1>
            {types?.map((item) => {
              return <li>{item.type.name}</li>
            })}
          </ul>
        </div>
        <div className='pokemon-details-left-inner-container'>
          <ul>
            <h1>Moves</h1>
            {moves?.map((item) => {
              return <li>{item.move.name}</li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PokemonDetails