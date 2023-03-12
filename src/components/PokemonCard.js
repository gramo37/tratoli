import React from 'react'
import { Link } from "react-router-dom"
import "../css/PokemonCard.css"

const PokemonCard = ({ name }) => {
    return (
        <div className='card-item-container'>
            <Link to={`/pokemon/${name}`}>
                <h3>{name}</h3>
            </Link>
        </div>
    )
}

export default PokemonCard