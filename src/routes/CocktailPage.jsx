import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

const CocktailPage = ({ cocktail }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  let amountsAndIngredients = [];
  for (let i = 0; i < cocktail.ingredients.length; i++) {
    const uniqueId = uuid();
    amountsAndIngredients.push(
      <li key={uniqueId} className="text-lg">
        {(cocktail.amounts ? cocktail.amounts[i] : "") +
          " " +
          (Array.isArray(cocktail.ingredients[i])
            ? cocktail.ingredients[i].join(" or ")
            : cocktail.ingredients[i])}
      </li>
    );
  }

  return (
    <div className="mt-8 w-screen">
      <i
        onClick={() => navigate(-1)}
        className="text-black fa-solid fa-circle-left absolute top-4 left-4 text-3xl cursor-pointer"
      ></i>
      <div className="flex flex-col items-center gap-4">
        <div
          className={`rounded-sm bg-cover bg-no-repeat bg-center h-60 w-96 "
					${cocktail.photoString}`}
        ></div>
        <h1 className="text-4xl font-bold">{cocktail.name}</h1>
      </div>

      <div className="flex flex-col items-start py-2 mx-4">
        <h2 className="text-2xl font-bold">Ingredients</h2>
        <ul className="text-left text-sm list-disc ml-4">
          {amountsAndIngredients}
        </ul>
        <h2 className="text-2xl mt-4 font-bold">Garnish</h2>

        <p className="text-lg text-left">
          {Array.isArray(cocktail.garnish)
            ? cocktail.garnish.join(" or ")
            : cocktail.garnish}
        </p>
        <h2 className="text-2xl mt-4 font-bold">Glassware</h2>
        <p className="text-lg text-left">
          {Array.isArray(cocktail.glassware)
            ? cocktail.glassware.join(" or ")
            : cocktail.glassware}
        </p>
        {cocktail.facts && (
          <>
            <h2 className="text-2xl mt-4 font-bold">About</h2>
            <ul className="text-left pt-1 list-disc list-inside max-w-lg">
              {cocktail.facts.map((fact) => {
                return (
                  <li key={JSON.stringify(fact)} className="text-lg">
                    &ldquo;{fact}&rdquo;
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default CocktailPage;
