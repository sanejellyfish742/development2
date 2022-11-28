# Development

### Link to Deployed Website
If you used the stencil code, this is `https://sanejellyfish742.github.io/development`

### Goal and Value of the Application
The application provides a list of available rooms in the CIT, information about each room like capacity and equipment and a way to reserve them. Users decide which rooms they need at a glance as well as filter by several criteria.
### Usability Principles Considered
The rooms are each in a flexbox that is responsive to the size of the browser window. Within each box, the hierarchy displays the most important information in larger font. Each image has an alt text with the description of the room. The buttons are clearly labeled with their functions.
### Organization of Components
Each button is a component that has an associated onclick function, and the aggregator is also a component that takes in the list of selected rooms as a prop. Whenever the prop is modified, the aggregator will re-render the list and its members.
### How Data is Passed Down Through Components
Each room object has an associated description, capacity, and flag indicating whether they have computers/AV equipment in the json file. The list of selected rooms is a set that has room objects as its elements. Information like capacity and equipment are accessed through the individual room objects.
### How the User Triggers State Changes
When the user presses a button to add or remove a room, it updates the states of the list of rooms chosen and the total capacity, which is accessible in the whole document. When the user presses a button to sort, the state of the list changes to one of three pre-sorted arrays of rooms. There are also checkboxes for filtering, which flip state variables that determine which rooms are shown.
