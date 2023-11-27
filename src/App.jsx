import "./App.css"
import PokeCard from "./components/PokeCard";

function App() {

  return (
    <section>
      <h1>Pokédex</h1>
      <ol className="poke-list">
        <PokeCard />
      </ol>
    </section>
  )
}

export default App
