import './App.css';
import cards from "./cards.json";
import { useState } from 'react';
import { render } from 'react-dom';
import Body from './components/body/Body';
import Menu from './components/menu/Menu'

/**
 * App function instantiates useStates and state setter helper functions. It then calls the Menu and Body components.
 * 
 * @returns HTML element
 */
function App() {

  const[region, setRegion] = useState("All")
  const[type, setType] = useState("All")
  const[mana, setMana] = useState("All")
  const[rarity, setRarity] = useState("All")
  const[manaSort, setManaSort] = useState("None")
  const[isInDeck, setIsInDeck] = useState(false)
  const[deckMana, setDeckMana] = useState(0)
  const[search, setSearch] = useState("")

  const selectRegion = (value) => {
    setRegion(value)
  }

  const selectType = (value) => {
    setType(value)
  }

  const selectMana = (value) => {
    setMana(value)
  }

  const selectRarity = (value) => {
    setRarity(value)
  }

  const selectManaSort = (value) => {
    setManaSort(value)
  }

  const selectIsInDeck = (value) => {
    setIsInDeck(value)
  }

  const selectDeckMana = (value) => {
    setDeckMana(value)
  }

  const selectSearch = (value) => {
    setSearch(value)
  }

  return (
    <div className="App">

      <Menu
        selectRegion={selectRegion}
        selectType={selectType}
        selectMana={selectMana}
        selectRarity={selectRarity}
        selectManaSort={selectManaSort}
        selectIsInDeck={selectIsInDeck}
        selectDeckMana={selectDeckMana}
        selectSearch={selectSearch}

        deckMana={deckMana}
        region={region}
        />

      <Body
        region={region}
        type={type}
        mana={mana}
        rarity={rarity}
        manaSort={manaSort}
        isInDeck={isInDeck}
        cards={cards}
        deckMana={deckMana}
        search={search}
        selectDeckMana={selectDeckMana}
        />

    </div>
  );
}

export default App;
