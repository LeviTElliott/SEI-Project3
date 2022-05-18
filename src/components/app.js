import React, { useContext } from 'react'
import { AppContext } from './context'
import Search from './search'
import Character from './character'

const characterData =[
  {name: "", realm: "", race: "", class: "",}
]

function App() {
  const allCharacters = characterData.map(
  (characterData) => {
  return ( <Character name={characterData.name} realm={characterData.realm} race={characterData.race} class={characterData.class} />)
})
return (
  <div className="App">
    <header className="App-header">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      {allCharacters}
    </header>
  </div>
);
}

export default App
