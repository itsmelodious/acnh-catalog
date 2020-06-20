import React, { useState, useEffect } from 'react';
import './App.css';
import Tile from './components/Tile.jsx'

export default function App() {
  const [fishData, setFishData] = useState({});
  const [bugsData, setBugsData] = useState({});

  useEffect(() => {
    async function fetchFishData() {
      const fishResponse = await fetch('http://acnhapi.com/v1/fish/');
      const fishData = await fishResponse.json();
      setFishData(fishData);
    }

    async function fetchBugsData() {
      const bugsResponse = await fetch('http://acnhapi.com/v1/bugs/');
      const bugsData = await bugsResponse.json();
      setBugsData(bugsData);
    }

    fetchFishData();
    fetchBugsData();
  }, []);

  function renderCritterList(data) {
    return Object.keys(data).map(key => (
      <Tile 
        key={key} 
        data={data[key]}
      />
    ));
  }

  return (
    <div className="app">
      <h1>ACNH Fish and Bugs Catalog</h1>
      <main className="main">
        <div className="fish">
          {renderCritterList(fishData)}
        </div>
        <div className="bugs">
          {renderCritterList(bugsData)}
        </div>
      </main>
    </div>
  );
}
