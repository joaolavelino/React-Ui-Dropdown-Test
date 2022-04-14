# React UI Dropdown Test

The initial goal was to build a dropdown menu. But it presents the opportunity to think about this build and how can optimized to be easily reusable.

The only external library I used on this build was SASS.

There are two additional items on the menu, so it shows the possibility of using different types of items, like anchors and buttons.

## Features

- Left and right alignment
- Conditional rendering
- Multiple types of menu items
- Multi-language availability
- Color scheme using variables

### Left and right alignment

The left and right alignment can be easily defined with the align prop on the component. In this build I left it binded with a state so it's possible to be changed with the click of a button.
In an application, the developper just need to select a side and pass it as the align prop.

`<Dropdown align="left" />`

`<Dropdown align="right" />`

### Conditional rendering

It was possible to use some simple CSS animations into this build, using state-conditional classes, but I prefered to use conditional rendering so it can be easily linked to an animation library, such as Framer Motion.
When something is not displayed, I prefere not to leave them hidden on the DOM.

### Multiple types of menu items

It was required that the menu would allow using other types of items, such as buttons and anchors. So I used a scalable aproach using an array and the map method.

#### THE CONTENT ARRAY:

It gathers all the items that will be rendered in the menu as objects with three different properties:

- NAME - the name that will be displayed on the menu;
- TYPE - It describes the type of the item, it can be either "function", "anchor", or "button":
  - Function: Will trigger the callback function declared on the ACTION property.
  - Anchor: Will follow the URL declared on the ACTION property;
  - Button: Will create a button that will trigger the callback function declared on the ACTION property.
- ACTION - It declares the functions that will be triggered on the onClick event or the URL that will be followed by the anchor.

### Multi-language availability

By using an array to build the menu, it's possible to import an array from somewhere else, including a multi-language package.

### Color scheme using variables

It turns easy the implementation of different color themes, using Styled Components for instance.

## Authors

- [@joaolavelino](https://www.github.com/joaolavelino)
