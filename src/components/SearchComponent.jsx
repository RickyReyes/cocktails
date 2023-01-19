import React, { useState } from "react";

const SearchComponent = ({ selectedItems, handleSelectItem, categories }) => {
  const [search, setSearch] = useState("");
  const [searchItems, setSearchItems] = useState([]);

  function handleSearchInput(searchString) {
    setSearch(searchString);
    if (searchString === "") {
      setSearchItems([]);
      return;
    }
    let newItems = [];
    for (let category of categories) {
      for (let item of category.items) {
        if (item.toLowerCase().includes(searchString)) {
          newItems.push(item);
        }
      }
    }
    /* render no more than 10 search items. */
    setSearchItems(newItems.slice(0, 9));
  }
  return (
    <div className="flex flex-col align-left md:align-center">
      <h2 className="text-slate-800 text-xl md:text-2xl pb-2 font-medium text-center">
        Search ingredients.
      </h2>
      <input
        type="text"
        onChange={(e) => handleSearchInput(e.target.value.toLowerCase())}
        value={search}
        className="border border-black focus:outline-0 rounded-sm text-lg p-1 mb-4 max-w-sm mx-auto"
      />
      {search.length > 0 && searchItems.length === 0 && (
        <div className="rounded-lg shadow-lg p-4 mt-4 mx-auto max-w-xs">
          <h2 className="text-xl">
            Sorry, we couldn't find any matches for <b>{search}</b>...
          </h2>
          <p>Please try searching for another term</p>
        </div>
      )}
      <ul className="flex flex-wrap items-start gap-1 justify-start items-start mb-4">
        {searchItems.map((item) => {
          let category = categories.filter((category) =>
            category.items.includes(item)
          )[0];
          return (
            <li className="h-min" key={Math.random()}>
              <button
                onClick={() => handleSelectItem(item)}
                className={
                  selectedItems.includes(item)
                    ? ` leading-4 selected-item selected-category-item cursor-pointer font-bold rounded-full py-2 px-4 lg:py-2 lg:px-4 lg:text-xl bg-white border-2 ${category.tailwindBorder} ${category.tailwindTextColor}`
                    : " leading-4 cursor-pointer font-bold rounded-full py-2 px-4 text-white lg:py-2 lg:px-4 lg:text-xl hover:bg-white border-white border-2 " +
                      category.tailwindBG +
                      " " +
                      category.hoverTextColor +
                      "  " +
                      category.hoverBorder +
                      " " +
                      category.hoverTextColor
                }
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchComponent;
