import Aggregator from "./Aggregator";

/**
 * This is the Menu component. It displays the menu bar on the website and its images and buttons.
 * It handles changing the filtering and sorting states.
 * 
 * @param {*} props 
 * @returns 
 */
export default function Menu(props) {

    const regions = ["Bandle City", "Bilgewater", "Demacia", "Freljord", "Ionia", "Noxus", "Piltover and Zaun", "Shadow Isles", "Shurima", "Targon"]
    const manaCosts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const reset = () => {
        let radios = document.getElementsByTagName("input");
        for(let i = 0; i < radios.length; i++) {
          radios[i].checked = false;
        }
        props.selectType("All")
        props.selectRarity("All")
        props.selectMana("All")
        props.selectManaSort("None")
        props.selectRegion("All")
        props.selectIsInDeck(false)
    }

    const displaySearch = () => {
      const searchBar = document.getElementById("menu-search-bar")

      if (!searchBar) {return;}

      props.selectSearch(searchBar.value.toLowerCase())
    }

    const isRadioButtonChecked = (value) => {
        if (value === props.region) {
            return "checked"
        }
    }

    return(
        <div className="menu">

        <div className="menu-title">
          <img src="img/Legends_of_Runeterra_logo.png" width="60%"/>
        </div>

        <div className="menu-sub-div">

          <div className="menu-search-container">
            <input id="menu-search-bar" type="text" placeholder="Search.." onChange={() => displaySearch()}/>
          </div>

          <div className="menu-filter-container">
            <h4>COLLECTION</h4>
            <input type="checkbox" id="deck-checkbox" onClick={() => {
              if (document.getElementById("deck-checkbox").checked === false) {
                props.selectIsInDeck(false)
              } else {
                props.selectIsInDeck(true)
              }
            }}/><label>Your Deck</label>

            <Aggregator deckMana = {props.deckMana}/>
          </div>

          <div className="menu-filter-container">
            <h4>REGION</h4>

            <div className="menu-button-container">
                {regions.map((region) => {
                    return(
                        <div className="menu-button"><input type="radio" name="region" onClick={() => props.selectRegion(region)}/><label>{region}</label></div>
                )})}
            </div>
          </div>
          
          <div className="menu-filter-container">
            <h4>MANA COST</h4>

            <div className="menu-button-container">
                {manaCosts.map((mana) => {
                    return(
                        <div className="menu-button"><input type="radio" name="manaCost" onClick={() => props.selectMana(mana)}/><label>{mana}</label></div>
                    )
                })}
            </div>
          </div>

          <div className="menu-filter-container">
            <h4>SORT BY</h4>

            <div>
              <input type="radio" name="manaCostSort" onClick={() => props.selectManaSort("Ascending")}/><label>Low to High</label>
              <input type="radio" name="manaCostSort" onClick={() => props.selectManaSort("Descending")}/><label>High to Low</label>
            </div>
          </div>

          <div className="menu-reset-container">
            <button onClick={reset}>Reset Filters</button>
          </div>
        </div>
      </div>
    );
}