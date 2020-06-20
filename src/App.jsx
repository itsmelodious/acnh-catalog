import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './components/Button.jsx';
import ButtonContainer from './components/ButtonContainer.jsx';

export default function App() {
  const [fishData, setFishData] = useState({});
  const [bugsData, setBugsData] = useState({});

  useEffect(() => {
    async function fetchFishData() {
      const fishResponse = await fetch('http://acnhapi.com/v1/fish');
      const fishData = await fishResponse.json();
      setFishData(fishData);
      console.log("FISH DATA", fishData);
    }

    async function fetchBugsData() {
      const bugsResponse = await fetch('http://acnhapi.com/v1/bugs');
      const bugsData = await bugsResponse.json();
      setBugsData(bugsData);
      console.log("BUG DATA", bugsData);
    }

    fetchFishData();
    fetchBugsData();
  }, []);

  function renderCrittersList(data) {
    return Object.keys(data).map(key => (
      <div>{key}</div>
    ))
  }

  return (
    <div className="app">
      <div className="navbar">
        <p>My Nav Bar</p>
      </div>
      <h1>ACNH Fish and Bugs Catalog</h1>
      <p>Coming soon!</p>
      {/* <ButtonContainer>
        <Button name="Bugs"/>
        <Button name="Fish"/>
      </ButtonContainer>
      <ButtonContainer>
        <Button name="A"/>
        <p>potato</p>
        <Button name="B"/>
      </ButtonContainer> */}

      {renderCrittersList(fishData)}
      {renderCrittersList(bugsData)}
      <div></div>
    </div>
  );
}
