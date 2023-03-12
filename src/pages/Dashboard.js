import React, { useState, useEffect } from 'react'
import PokemonCard from '../components/PokemonCard'
import useFetch from "../hooks/useFetch"
import { url } from "../config/config"
import {} from "../css/Dashboard.css"
import Shimmer2 from '../components/Shimmer2'

const Dashboard = () => {

  const [offset, setOffset] = useState(0)

  const { data, loading, error } = useFetch(`${url}/api/v2/pokemon?limit=20&offset=${offset}`)

  const upperLimit = 2000;

  const addPokemons = (e) => {
    e.preventDefault();
    setOffset(() => offset + 20)
  }

  const reducePokemons = (e) => {
    e.preventDefault();
    setOffset(() => offset - 20)
  }

  if (loading) return <Shimmer2 />

  if (error) return <div>Something went wrong</div>

  return (
    <div className='dashboard-container'>
      <h1>Find Your Pokemon</h1>
      <div className='pokemon-card-container'>
        {data?.results?.map((item) => {
          return <PokemonCard name={item?.name} />
        })}
      </div>
      {<button disabled={offset <= 0} onClick={reducePokemons}>Prev</button>}
      {(offset / 20)+1}
      {<button disabled={offset >= upperLimit} onClick={addPokemons}>Next</button>}
    </div>
  )
}

export default Dashboard