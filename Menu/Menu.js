/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.

  Step 2: Inside the function, iterate over the array creating a 
  list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button 
  (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it 
  should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned markup to the DOM.
*/

function menuMaker(arrayParam) {
  let menuDiv = document.createElement("div");
  menuDiv.setAttribute("class", "menu");

  let unorderedList = document.createElement("ul");
  menuDiv.appendChild(unorderedList);

  let listItemOne = document.createElement("li");
  listItemOne.textContent = arrayParam[0];
  unorderedList.appendChild(listItemOne);

  let listItemTwo = document.createElement("li");
  unorderedList.appendChild(listItemTwo);
  listItemTwo.textContent = arrayParam[1];

  let listItemThree = document.createElement("li");
  listItemThree.textContent = arrayParam[2];
  unorderedList.appendChild(listItemThree);

  let listItemFour = document.createElement("li");
  listItemFour.textContent = arrayParam[3];
  unorderedList.appendChild(listItemFour);

  let listItemFive = document.createElement("li");
  listItemFive.textContent = arrayParam[4];
  unorderedList.appendChild(listItemFive);

  let listItemSix = document.createElement("li");
  listItemSix.textContent = arrayParam[5];
  unorderedList.appendChild(listItemSix);

  let menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", expandMenu);
  function expandMenu() {
    menuDiv.classList.add("menu--open");
  }

  return menuDiv;
}
let headerOfPage = document.querySelector(".header");
headerOfPage.appendChild(menuMaker(menuItems));