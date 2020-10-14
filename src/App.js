import React, { useState } from "react";

import { MenuItem, FormControl, Select } from "@material-ui/core";

import "./App.css";

function App() {
  const [countries, setCountries] = useState(["USA", "UK", "NIGERIA"]);

  // https://disease.sh/v3/covid-19/countries

  return (
    <div className="app">
      <div className="app__header">
        <h1>COVID-19 TRACKER</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value="abc">
            {countries.map((country) => (
              <MenuItem value={country}>{country}</MenuItem>
            ))}
            {/* 
            <MenuItem value="worldwide">option 1</MenuItem>
            <MenuItem value="worldwide">option 2</MenuItem>
            <MenuItem value="worldwide">option 3</MenuItem> */}
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default App;
