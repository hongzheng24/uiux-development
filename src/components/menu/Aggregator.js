/**
 * This is the aggregator component. It displays the total mana in the deck. It is a sub-component
 * of the Menu component.
 * 
 * @param {*} props 
 * @returns 
 */
export default function Aggregator(props) {

    return (
        <a>&nbsp;&nbsp;&nbsp;Total Mana: {props.deckMana}</a>
    )
}