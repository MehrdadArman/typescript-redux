import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux";
import RespositoriesList from "./views/repositories/RespositoriesList";

function App() {
  return (
    <Provider store={store}>
      <h1>Search for packages:</h1>
      <RespositoriesList />
    </Provider>
  );
}

export default App;
