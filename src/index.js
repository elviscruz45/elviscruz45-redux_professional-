import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { pokemonsReducer } from "./reducers/pokemons";
import { Provider } from "react-redux";
import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { logger, featuring } from "./middlewares";

const root = ReactDOM.createRoot(document.getElementById("root"));

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(logger, thunk));

// const composedEnhancers = compose(
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   applyMiddleware(logger,thunk)
// );

const store = createStore(pokemonsReducer, composedEnhancers);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
