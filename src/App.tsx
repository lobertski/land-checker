import { useState } from "react";
import "./App.css";
import { Map, Drawer } from "./components";
import { properties } from "./static";
import { IProperty } from "./types";

function App() {
  const [isOpen, setOpen] = useState(false);
  const [propertySelected, setProperty] = useState({});

  const handleDrawer = (open: boolean) => {
    setOpen(open);
  };

  const onClickMark = (property: IProperty, open: boolean) => {
    setProperty(property);
    handleDrawer(open);
  };
  return (
    <>
      <Map properties={properties} onClickMark={onClickMark} />
      <Drawer
        isOpen={isOpen}
        propertyInfo={propertySelected}
        handleDrawer={handleDrawer}
      />
    </>
  );
}

export default App;
