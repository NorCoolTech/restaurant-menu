React Menu App
Description
A straightforward React application that showcases a menu with various food items. Users can filter the menu items by categories, including breakfast, lunch, and shakes, using interactive buttons.

Components
App.jsx: The main component managing the state of menu items and categories. It renders the Title, Categories, and Menu components.

Categories.jsx: A component responsible for rendering category buttons. Clicking on these buttons triggers the filter function in App.jsx to display specific menu items.

Menu.jsx: Displays the menu items using the MenuItem component. Implements a tilt effect using the react-tilt library for a dynamic presentation.

Title.jsx: Renders the title of the menu, with an optional default title if no text is provided.

data.js: Contains an array of menu items with details such as title, category, price, image, and description.