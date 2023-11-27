import "./App.css"
import pokeApi from "./services/pokeApi"
import PokeCard from "./components/PokeCard";
import { useState,useEffect } from "react";

function App() {
  const [pokemons, setPokemons] = useState([])
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    pokeApi.getPokemons(offset)
      .then(pokemonDetails => setPokemons(pokemonDetails))
  }, [offset])

  function handleClick() {
    setOffset((oldOffset => oldOffset + 12))
  }

  return (
    <section className="content">
      <h1>Pokédex</h1>
      <ol id="pokemon-list" className="pokemons">
        {pokemons.map((pokemon) => <PokeCard key={pokemon.number} {...pokemon} />)}
        <button onClick={handleClick}>Previous</button>
        <button onClick={handleClick}>Next</button>
      </ol>
    </section>
  )
}

export default App
