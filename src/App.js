import { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import All from "./routes/All";
import Main from "./routes/Main";
import CocktailPage from "./routes/CocktailPage";

import { cocktails, categories, allTags } from "./data";

/* Key Terms
  Categories: Refers to a type of ingredient, i.e. Spirits, Juices, Bitters, Syrups, etc.

  Items: Refers to ingredients, i.e. Tequila, Lime Juice, Angostura bitters, Vanilla Syrup, etc.

  Tags: Refers to a style of cocktail, used to filter cocktails. i.e. Bubbly, Aperitif, Spirit-forward, etc.
*/

export default function App() {
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [possibleCocktails, setPossibleCocktails] = useState([]);
  const location = useLocation();
  const onAllPage = location.pathname.includes("all");

  function handleSelectItem(itemName) {
    if (selectedItems.includes(itemName)) {
      setSelectedItems((prevItems) =>
        prevItems.filter((prevItem) => {
          return prevItem !== itemName;
        })
      );
    } else setSelectedItems((prevItems) => [...prevItems, itemName]);
  }

  function handleSelectTag(tag) {
    if (selectedTags.includes(tag)) {
      setSelectedTags((prevTags) =>
        prevTags.filter((prevTag) => {
          return prevTag !== tag;
        })
      );
    } else setSelectedTags((prevTags) => [...prevTags, tag]);
  }

  /* Takes an array of Cocktails and sorts them in descending order based on highest ratio of selected ingredients to non-selected ingredients */
  function sortingFunction(arr) {
    return arr.sort((a, b) => {
      let [numOfIngredientsA, numOfIngredientsB] = [
        a.ingredients.length,
        b.ingredients.length,
      ];
      let numOfAvailableA = 0;
      let numOfAvailableB = 0;
      selectedItems.forEach((item) => {
        if (
          a.ingredients.includes(item) ||
          a.ingredients.some((itemArr) => itemArr.includes(item))
        ) {
          numOfAvailableA += 1;
        }
      });
      selectedItems.forEach((item) => {
        if (
          b.ingredients.includes(item) ||
          b.ingredients.some((itemArr) => itemArr.includes(item))
        ) {
          numOfAvailableB += 1;
        }
      });
      let ratioA = numOfAvailableA / numOfIngredientsA;
      let ratioB = numOfAvailableB / numOfIngredientsB;
      if (ratioA < ratioB) {
        return 1;
      }
      if (ratioB < ratioA) {
        return -1;
      }
      return 0;
    });
  }

  /* Update the rendered cocktails every time an item or a tag is selected. 
	If only items selected (no tags) or only tags selected (no items), filter through all cocktails.
	If both are selected, render only cocktails that include BOTH the selected tags and selected items.
	*/
  useEffect(() => {
    if (selectedItems.length === 0 && selectedTags.length > 0) {
      setPossibleCocktails(
        sortingFunction(
          cocktails.filter((cocktail) => {
            if (selectedTags.some((tag) => cocktail.tags.includes(tag))) {
              return cocktail;
            }
          })
        )
      );
    }

    if (selectedItems.length > 0 && selectedTags.length === 0) {
      setPossibleCocktails(
        sortingFunction(
          cocktails.filter((cocktail) => {
            if (
              selectedItems.some(
                (item) =>
                  cocktail.ingredients.includes(item) ||
                  cocktail.ingredients.some(
                    (ingredientArr) =>
                      Array.isArray(ingredientArr) &&
                      ingredientArr.includes(item)
                  )
              )
            ) {
              return cocktail;
            }
          })
        )
      );
    }

    if (selectedItems.length > 0 && selectedTags.length > 0) {
      setPossibleCocktails(
        sortingFunction(
          cocktails
            .filter((cocktail) => {
              if (selectedTags.some((tag) => cocktail.tags.includes(tag))) {
                return cocktail;
              }
            })
            .filter((cocktail) => {
              if (
                selectedItems.some(
                  (item) =>
                    cocktail.ingredients.includes(item) ||
                    cocktail.ingredients.some(
                      (itemArr) =>
                        Array.isArray(itemArr) && itemArr.includes(item)
                    )
                )
              ) {
                return cocktail;
              }
            })
        )
      );
    }
  }, [selectedItems, selectedTags]);

  return (
    <div className="App relative flex-col items-center justify-center my-6 px-4">
      <div className="flex-1 flex flex-col max-w-6xl">
        <div className="flex absolute top-0 right-4 gap-4">
          {!onAllPage && (
            <small
              className={`${
                onAllPage ? "hidden" : ""
              } underline text-md lg:text-2xl cursor-pointer`}
            >
              <Link to="/all" className="font-medium text-slate-800">
                All Cocktails
              </Link>
            </small>
          )}
        </div>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Main
              allTags={allTags}
              categories={categories}
              selectedItems={selectedItems}
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
              handleSelectItem={handleSelectItem}
              handleSelectTag={handleSelectTag}
              possibleCocktails={possibleCocktails}
              currentCategory={currentCategory}
              setCurrentCategory={setCurrentCategory}
            />
          }
        ></Route>
        <Route
          path="/all"
          element={
            <All
              onAllPage={onAllPage}
              cocktails={cocktails}
              selectedTags={selectedTags}
            />
          }
        ></Route>
        {cocktails.map((cocktail) => (
          <Route
            key={Math.random()}
            path={
              "/" +
              cocktail.name.toLowerCase().replace("#", "").split(" ").join("-")
            }
            element={<CocktailPage cocktail={cocktail} />}
          />
        ))}
      </Routes>
    </div>
  );
}
