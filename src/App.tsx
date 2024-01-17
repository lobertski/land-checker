import { useState } from "react";
import "./App.css";
import { Map, Drawer, FilterDrawer } from "./components";
import { properties } from "./constant";
import { IProperty } from "./types";

function App() {
  const uniqueCouncil = [
    ...new Set(properties.map(({ council }) => council)),
  ].map((councilName) => ({ councilName, isCheck: false }));

  const [propertiesState, setProperties] = useState(properties);
  const [isOpen, setOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [propertySelected, setPropertySelected] = useState({});
  const [selectedCouncil, setSelectedCouncil] = useState(uniqueCouncil);

  const handleDrawer = (open: boolean) => {
    setOpen(open);
  };

  const handleFilterDrawer = (open: boolean) => {
    setOpenFilter(open);
  };

  const onClickMark = (property: IProperty, open: boolean) => {
    setPropertySelected(property);
    handleDrawer(open);
  };

  const handleCheckCouncil = (index: number) => {
    setSelectedCouncil((prevCouncils) => {
      const updatedCouncils = [...prevCouncils];
      updatedCouncils[index].isCheck = !updatedCouncils[index].isCheck;
      return updatedCouncils;
    });
    const listCouncilSelected = selectedCouncil.filter(
      ({ isCheck }) => isCheck
    );
    const filterProperties = properties.filter(({ council }) =>
      listCouncilSelected.some(({ councilName }) => councilName === council)
    );
    setProperties(filterProperties);
  };

  const handleClearAll = () => {
    setProperties(properties);
    setSelectedCouncil(uniqueCouncil);
  };

  return (
    <>
      <FilterDrawer
        handleCheckCouncil={handleCheckCouncil}
        handleFilterDrawer={handleFilterDrawer}
        handleClearAll={handleClearAll}
        isFilterOpen={openFilter}
        councils={selectedCouncil}
      />
      <Map properties={propertiesState} onClickMark={onClickMark} />
      <Drawer
        isOpen={isOpen}
        propertyInfo={propertySelected}
        handleDrawer={handleDrawer}
      />
    </>
  );
}

export default App;
