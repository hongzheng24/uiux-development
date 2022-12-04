import Card from './Card';

/**
 * This is the Body component. It displays the body of the website that houses the cards.
 * It handles filtering and sorting the cards list based on user criteria.
 * 
 * @param {*} props 
 * @returns HTML element
 */
export default function Body(props) {

    const matchesRegion = item => {
        if (props.region === "All") { 
          return true
        } else if (item.region.includes(props.region)) {
          return true
        } else {
          return false
        }
      };
    
    const matchesType = item => {
        if (props.type === "All") { 
          return true
        } else if (props.type === item.type) {
          return true
        } else {
          return false
        }
    };
    
    const matchesMana = item => {
        if (props.mana === "All") { 
          return true
        } else if (props.mana === item.mana) {
          return true
        } else {
          return false
        }
    };
    
    const matchesRarity = item => {
        if (props.rarity === "All") { 
          return true
        } else if (props.rarity === item.rarity) {
          return true
        } else {
          return false
        }
    }
    
    const matchesIsInDeck = item => {
        if (props.isInDeck === false) { 
          return true
        } else if (props.isInDeck === item.isInDeck) {
          return true
        } else {
          return false
        }
    }

    const matchesSearch = item => {
      if (props.search === "") {
        return true
      } else if (item.name.toLowerCase().includes(props.search) || item.region.toLowerCase().includes(props.search)) {
        return true
      } else {
        return false
      }
    }
    
    const matchesFilters = item => {
        if (matchesRegion(item) && matchesType(item) && matchesMana(item) && matchesRarity(item) && matchesIsInDeck(item) && matchesSearch(item)) {
          return true
        } else {
          return false
        }
    }
    
    const filteredCards = props.cards.filter((item) => {
        if (matchesFilters(item) === true) {
          return item
        }
    });
    
    const sortedCards = filteredCards.sort((a, b) => {
    
        if (props.manaSort === "None") {
          return a.name > b.name ? 1: -1
        } else if (props.manaSort === "Ascending") {
          return a.mana > b.mana ? 1 : -1
        } else if (props.manaSort === "Descending") {
          return a.mana > b.mana ? -1 : 1}
    })

    const updateToDeck = (item) => {
        if (item.isInDeck === false) {
          item.isInDeck = true
          props.selectDeckMana(props.deckMana + item.mana)
        } else if (props.deckMana >= 0) {
          item.isInDeck = false
          props.selectDeckMana(props.deckMana - item.mana)
        }
    }
    
    const checkEmptyList = (list) => {
        if (list.length === 0) {
          return (
            <div>
              No cards matching criteria.
            </div>
          )
        }
    }

    const findButtonLabel = (item) => {
        if (item.isInDeck) {
          return "Remove from deck"
        } else {
          return "Add to deck"
        }
    }

    return(
        <div className="body">

        {checkEmptyList(sortedCards)}

        {sortedCards.map((item) => {
            return(
                <Card item={item}
                  findButtonLabel={findButtonLabel}
                  updateToDeck={updateToDeck}
                  />
            )
        })}

      </div>
    );
}