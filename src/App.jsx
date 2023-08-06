import './App.css'
import {NavBar} from "./components/NavBar/NavBar"
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
        <ItemListContainer greeting="Endulzate un poco la vida con nuestras promociones de invierno de este 2023"/>
      </header>
    </div>
  )
}

export default App
