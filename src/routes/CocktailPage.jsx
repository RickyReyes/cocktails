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
    <main>
      <small
        onClick={() => navigate(-1)}
        className="flex absolute left-4 top-4 gap-4 underline text-md lg:text-2xl cursor-pointer"
      >
        Go Back
      </small>

      <section className="mt-8 w-full flex flex-col md:flex-row md:gap-8 items-center justify-center max-w-6xl mx-auto md:px-8">
        {/* PHOTO AND NAME */}
        <div className="flex flex-col items-center gap-4 max-w-lg">
          <div
            className={`rounded-sm bg-cover bg-no-repeat bg-center h-60 w-96 "
					${cocktail.photoString}`}
          ></div>
          <h1 className="text-4xl font-bold">{cocktail.name}</h1>
        </div>

        {/* DETAILS */}
        <div>
          <div className="flex flex-col items-start py-2 mx-4">
            {cocktail.createdBy && (
              <>
                <h2 className="text-2xl font-bold">Created By</h2>
                <p className="text-lg">{cocktail.createdBy}</p>
              </>
            )}
            <h2 className="text-2xl mt-4 font-bold">Ingredients</h2>
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
      </section>
    </main>
  );
};

export default CocktailPage;
