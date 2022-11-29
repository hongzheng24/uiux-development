/**
 * This is the Card component. This component displays each card's name, region, mana cost, and
 * a button that adds or removes the corresponding card from the user's deck.
 * 
 * @param {*} props 
 * @returns HTML element
 */
export default function Card(props) {

    return(

        <div className="card-div" id={"card-div-" + props.item.name}>
            <img className="card-img" src={props.item.image}/>
            <div className="card-name-div" style={{fontWeight:"bolder"}}>{props.item.name}</div>
            <div>Region: {props.item.region}</div>
            <div>Mana: {props.item.mana}</div>
            <button id={"update-to-deck-button-" + props.item.name} onClick={() => props.updateToDeck(props.item)}>{props.findButtonLabel(props.item)}</button>
        </div>

    );
}