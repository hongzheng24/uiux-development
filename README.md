# Development

### Link to Deployed Website
If you used the stencil code, this is `https://funkyfox123.github.io/csci-1300-development`

### Goal and Value of the Application
Legends of Runeterra is a popular online card game that expands on the universe of League of Legends.
This website aims to help players of the game find cards suitible for their playstyles and add them to a deck list.
This website can also help new players learn about the cards, their region, their mana, and their stats.
The user can filter the cards by their region and mana cost. The user can also sort the cards by mana cost.
This website is also built with expandability in mind. That is, new features can be easily added in the future.

### Usability Principles Considered
This website considers effectivity and efficiency by limiting the amount information the user sees and only giving them enough to accomplish the task. This website considers comprehensible design and layout by having a intuitive and easy-to-use design.
Lastly, this website considers consistency as design choices stay consistent (i.e. fonts, font weight, etc).

### Organization of Components
App instantiates states, state setter helper functions, and passes this data to its components through props.
This website has 2 main components: the Menu component and the Body component.
The Menu component displays the menu bar on the website and its images and buttons. It also handles the main functionalities such as filtering, sorting, and changing the states accordingly.
The Body component displays the body of the website that houses the cards. It handles the functionality of displaying the filtered and sorted cards.
The Body component has a sub-component: the Card component. Each card is represented by a Card component. This component displays the card, its region, its mana cost, and a button that adds the card to the user's deck.

### How Data is Passed Down Through Components
App passes all state setter helpern functions and the region state variable to the Menu component.
App also passes all state variables and the selectDeckMana setter helper function to the Body component.
The Body component passes the findButtonLabel function, the updateToDeck function, and items in the sorted, filtered list to the Card components. 

### How the User Triggers State Changes
The user triggers state changes by toggling the filter and sorting criteria on the menu bar. The user can also trigger state changes by adding cards into their deck.