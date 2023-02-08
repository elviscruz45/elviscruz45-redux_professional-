import "./App.css";
import Searcher from "./components/Searcher";
import { Col, Spin } from "antd";
import PokemonList from "./components/PokemonList";
import logo from "./statics/logo.svg";
import { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { fetchPokemonsWithDetails } from "./slices/dataSlice";

// function App({ pokemons, setPokemons }) {

function App() {
  // const pokemons = useSelector((state) => state.pokemons);
  const pokemons = useSelector((state) => state.data.pokemons, shallowEqual);
  // state.getIn(["data", "pokemons"], shallowEqual)
  // ).toJS();

  const loading = useSelector((state) => state.loading);
  // const loading = false;
  // const loading = useSelector((state) => state.getIn(["ui", "loading"]));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsWithDetails());
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   pokemons: state.pokemons,
// });
// const mapDispatchToProps = (dispatch) => ({
//   setPokemons: (value) => dispatch(setPokemonsActions(value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
