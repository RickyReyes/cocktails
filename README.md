# cocktails - Cocktail app by Ricky Reyes

## Table of contents

- [Overview](#overview)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select ingredients and view cocktails containing selected ingredients

## My process

### Built with

- Original UI/UX design
- Semantic HTML5 markup
- Tailwind CSS
- Flexbox
- Mobile-first workflow
- Create React App

### What I learned

- Sorting algorithm to sort cocktails shown based on highest ratio of selected ingredients to total ingredients
```js
ARRAY.sort((a, b) => {
    let [numOfIngredientsA, numOfIngredientsB] = [a.ingredients.length, b.ingredients.length]
    let numOfAvailableA = 0
    let numOfAvailableB = 0
    selectedItems.forEach(item => {
      if (a.ingredients.includes(item)) {
        numOfAvailableA += 1
      }
    })
    selectedItems.forEach(item => {
      if (b.ingredients.includes(item)) {
        numOfAvailableB += 1
      }
    })
    let ratioA = numOfAvailableA/numOfIngredientsA
    let ratioB = numOfAvailableB/numOfIngredientsB
    if (ratioA < ratioB) {
      return 1;
    }
    if (ratioB < ratioA) {
      return -1;
    }
    return 0;
})
```

### Continued development

- Collect stock/free cocktail photos
- Add "click on cocktail" functionality to show cocktail's recipe, history, variations
  - Add recipe to data
  - Add buttons to link to similar cocktails
- Add ingredients and cocktails
- Add categories (i.e. Amari)