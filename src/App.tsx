import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Boxes from "./components/Boxes";
import Form from "./components/Form";
import axios from "axios";

const App = () => {
  const [boxes, setBoxes] = useState(
    JSON.parse(localStorage.getItem("boxes")!) || []
  );
  const [inputColor, setInputColor] = useState("");

  useEffect(() => {
    localStorage.setItem("boxes", JSON.stringify(boxes));
  });

  const onColorChange = (e: any) => {
    setInputColor(e.target.value);
  };

  const deleteBox = (item: number) => {
    var array = [...boxes];
    array.splice(item, 1);
    setBoxes(array);
  };

  const getColor = (e: any) => {
    e.preventDefault();
    axios
      .get(`https://www.thecolorapi.com/id?hex=${inputColor}`)
      .then(response => {
        let newBox = {
          colorName: response.data.name.value,
          colorRgb: response.data.rgb.value,
          color: inputColor
        };
        setBoxes([...boxes, newBox]);
        setInputColor("");
      })
      .catch(error => {
        console.log("Error = ", error);
      });
  };

  return (
    <div>
      <Header />
      <Form
        getColor={getColor}
        onColorChange={onColorChange}
        color={inputColor}
      />
      <Boxes boxes={boxes} deleteBox={deleteBox} />
      <footer id="footer" />
    </div>
  );
};

export default App;
