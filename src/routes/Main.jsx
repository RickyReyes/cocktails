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
  const [searchItems, setSearchItems] = useState([]);
  const [mainView, setMainView] = useState("gallery");

  function handleSearchInput(e) {
    if (e.target.value === "") {
      setSearchItems([]);
      return;
    }
    let newItems = [];
    for (let category of categories) {
      for (let item of category.items) {
        if (item.toLowerCase().includes(e.target.value.toLowerCase())) {
          newItems.push(item);
        }
      }
    }
    /* render no more than 10 search items. */
    setSearchItems(newItems.slice(0, 9));
  }

  return (
    <main>
      <h1 className="text-3xl md:text-4xl lg:text-5xl pb-2 font-bold text-slate-800">
        Welcome to <br className="md:hidden" />
        Create Cocktail App.
      </h1>
      <h2 className="text-slate-800 md:text-xl">
        Select ingredients and/or apply filters based on drink type, then scroll
        down to see suggested cocktails.
      </h2>
      <div className="flex mx-auto flex-col md:flex-row gap-4 mt-2 md:mt-4">
        <div>
          <h2 className="text-2xl md:text-3xl pb-3 font-medium text-slate-800">
            Select ingredients.
          </h2>
          <div className="relative flex justify-center items-start mx-auto gap-2">
            <Categories
              categories={categories}
              currentCategory={currentCategory}
              setCurrentCategory={setCurrentCategory}
              selectedItems={selectedItems}
            />
            <div>
              <Items
                categories={categories}
                currentCategory={currentCategory}
                handleSelectItem={handleSelectItem}
                selectedItems={selectedItems}
              />
            </div>
          </div>
        </div>
        <div>
          <SearchComponent
            selectedItems={selectedItems}
            handleSearchInput={handleSearchInput}
            handleSelectItem={handleSelectItem}
            categories={categories}
            searchItems={searchItems}
          />
          <div className="flex md:hidden lg:flex flex-col">
            <h2 className="text-2xl md:text-3xl py-3 text-slate-800 font-medium">
              Or filter by drink type.
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
        <h2 className="text-3xl py-3 text-slate-800 font-medium">
          Filter by drink type.
        </h2>
        <Tags
          allTags={allTags}
          selectedTags={selectedTags}
          handleSelectTag={handleSelectTag}
        />
      </div>
      <div className="w-full">
        {selectedItems.length > 0 && (
          <div className="flex-1 p-2">
            <h2 className="text-3xl py-3 text-slate-800 font-medium">
              You've selected:
            </h2>
            <Selections
              categories={categories}
              selectedItems={selectedItems}
              selectedTags={selectedTags}
              handleSelectItem={handleSelectItem}
            />
          </div>
        )}
        {(selectedItems.length > 0 || selectedTags.length > 0) && (
          <section>
            <h2 className="text-slate-800 text-3xl pt-4 pb-2 font-medium">
              Suggested cocktails:
            </h2>
            <ViewPill view={mainView} setView={setMainView} />
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
              <ul>
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
