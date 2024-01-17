import { useState } from "react";
import "./App.css";
import { Map, Drawer } from "./components";
import { properties } from "./static";
import { IProperty } from "./types";

function App() {
  const [isOpen, setOpen] = useState(false);
  const [propertySelected, setProperty] = useState({});

  const onClickMark = (property: IProperty) => {
    setProperty(property);
    setOpen(true);
  };
  return (
    <>
      <Map properties={properties} onClickMark={onClickMark} />
      <Drawer isOpen={isOpen} propertyInfo={propertySelected} />
    </>
  );
}

export default App;
