import React, { useState } from "react";
import { Link } from "react-router-dom";

import Categories from "../components/Categories";
import Items from "../components/Items";
import Selections from "../components/Selections";
import Tags from "../components/Tags";
import SearchComponent from "../components/SearchComponent";
import ViewPill from "../components/ViewPill";
import CocktailCards from "../components/CocktailCards";

const Main = ({
  allTags,
  selectedTags,
  setSelectedTags,
  categories,
  selectedItems,
  handleSelectItem,
  handleSelectTag,
  possibleCocktails,
  currentCategory,
  setCurrentCategory,
}) => {
  const [mainView, setMainView] = useState("gallery");
  return (
    <main>
      <h1 className="text-5xl pb-2 font-extrabold italic text-slate-800 text-center">
        thirsty.
      </h1>
      <div className="flex mx-auto flex-col md:flex-row gap-4 mt-2 md:mt-4 max-w-7xl">
        <div>
          <h2 className="text-xl md:text-2xl pb-3 font-medium text-slate-800 text-center">
            Select ingredients.
          </h2>
          <div className="relative flex justify-start items-start mx-auto gap-2">
            <Categories
              categories={categories}
              currentCategory={currentCategory}
              setCurrentCategory={setCurrentCategory}
              selectedItems={selectedItems}
            />

            <Items
              categories={categories}
              currentCategory={currentCategory}
              handleSelectItem={handleSelectItem}
              selectedItems={selectedItems}
            />
          </div>
        </div>
        <div>
          <SearchComponent
            selectedItems={selectedItems}
            handleSelectItem={handleSelectItem}
            categories={categories}
          />
          <div className="flex md:hidden lg:flex flex-col">
            <h2 className="text-xl md:text-2xl py-3 text-slate-800 font-medium text-center">
              Filter by drink type.
            </h2>
            <Tags
              allTags={allTags}
              selectedTags={selectedTags}
              handleSelectTag={handleSelectTag}
            />
          </div>
        </div>
      </div>
      <div className="hidden md:flex lg:hidden flex-col">
        <h2 className="text-xl md:text-2xl py-3 text-slate-800 font-medium text-center">
          Filter by drink type.
        </h2>
        <Tags
          allTags={allTags}
          selectedTags={selectedTags}
          handleSelectTag={handleSelectTag}
        />
      </div>
      <div className="w-full">
        {(selectedItems.length > 0 || selectedTags.length > 0) && (
          <div className="flex-1 p-2">
            <h2 className="text-xl md:text-2xl py-1 md:py-3 text-slate-800 font-medium text-center">
              You've selected:
            </h2>
            <Selections
              categories={categories}
              selectedItems={selectedItems}
              selectedTags={selectedTags}
              handleSelectItem={handleSelectItem}
              handleSelectTag={handleSelectTag}
            />
          </div>
        )}
        {(selectedItems.length > 0 || selectedTags.length > 0) &&
          possibleCocktails.length === 0 && (
            <div className="rounded-lg shadow-lg p-4 mt-4 mx-auto max-w-xs">
              <h2 className="text-xl">
                Sorry, we couldn't find any cocktails that match your chosen
                criteria...
              </h2>
              <p>Please try making different selections</p>
            </div>
          )}
        {(selectedItems.length > 0 || selectedTags.length > 0) &&
          possibleCocktails.length > 0 && (
            <section>
              <h2 className="text-slate-800 text-xl md:text-2xl pt-4 pb-2 font-medium text-center">
                Suggested cocktails:
              </h2>
              <div className="flex justify-center">
                <ViewPill view={mainView} setView={setMainView} />
              </div>
              {mainView === "gallery" ? (
                <CocktailCards
                  onAllPage={false}
                  possibleCocktails={possibleCocktails}
                  selectedItems={selectedItems}
                  selectedTags={selectedTags}
                  setSelectedTags={setSelectedTags}
                  handleSelectTag={handleSelectTag}
                />
              ) : (
                <ul className="flex flex-col items-center">
                  {possibleCocktails.map((cocktail) => (
                    <li
                      key={Math.random()}
                      className="text-3xl underline cursor-pointer"
                    >
                      <Link
                        key={cocktail.name}
                        to={
                          "/" +
                          cocktail.name
                            .replace("#", "")
                            .toLowerCase()
                            .split(" ")
                            .join("-")
                        }
                      >
                        {cocktail.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          )}
      </div>
    </main>
  );
};

export default Main;
