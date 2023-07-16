import React from "react";
import { Link } from "react-router-dom";

import Selections from "../components/Selections";
import SearchComponent from "../components/SearchInput";
import CocktailCarousel from "../components/CocktailCarousel";

const Main = ({
  cocktails,
  selectedTags,
  categories,
  selectedItems,
  handleSelectItem,
  handleSelectTag,
}) => {
  console.log(cocktails);
  return (
    <main>
      <h1 className="text-5xl pb-2 font-extrabold italic text-slate-800 text-center">
        thirsty.
      </h1>
      <SearchComponent
        selectedItems={selectedItems}
        handleSelectItem={handleSelectItem}
        categories={categories}
      />
      <h2 className="text-xl mt-4 mb-8 font-mono">
        Easy cocktails to make at home
      </h2>
      <CocktailCarousel
        cocktails={cocktails.filter((cocktail) =>
          cocktail.ingredients.includes("Vodka")
        )}
      />
    </main>
  );
};

export default Main;
