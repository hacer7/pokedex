import "./App.scss";
import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import 'antd/dist/antd.css';

function App() {
  
  return (
      <div className="container">
        <Header /> 
        <PokemonList/>
      </div>
  );
}

export default App;
