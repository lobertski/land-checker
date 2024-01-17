import React from "react";
import "./App.css";
import { Map } from "./components";
import { properties } from "./static";

function App() {
  return (
    <>
      <Map properties={properties} />
    </>
  );
}

export default App;
