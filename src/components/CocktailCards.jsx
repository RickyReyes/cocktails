import React from "react";
import CocktailCard from "../components/CocktailCard";
import { v4 as uuid } from "uuid";

const CocktailCards = ({
  possibleCocktails,
  selectedItems,
  selectedTags,
  setSelectedTags,
  handleSelectTag,
}) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pt-2 max-w-7xl mx-auto">
      {possibleCocktails.map((cocktail, idx) => {
        let missing = cocktail.ingredients
          .map((ingredient) => {
            if (
              selectedItems.some((item) => item === ingredient) ||
              selectedItems.some((item) => ingredient.includes(item))
            ) {
              return "";
            } else {
              return ingredient;
            }
          })
          .filter((item) => !!item);
        const uniqueId = uuid();
        return (
          <CocktailCard
            key={uniqueId}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
            handleSelectTag={handleSelectTag}
            name={cocktail.name}
            photoString={cocktail.photoString}
            ingredients={cocktail.ingredients}
            tags={cocktail.tags}
            missing={missing}
            selectedItems={selectedItems}
          />
        );
      })}
    </ul>
  );
};

export default CocktailCards;
