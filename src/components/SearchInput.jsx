import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = ({ selectedItems, handleSelectItem, categories }) => {
  const [value, setValue] = useState("");
  const [suggestedItems, setSuggestedItems] = useState([]);

  function handleSearchInput(searchString) {
    setValue(searchString);
    if (searchString === "") {
      setSuggestedItems([]);
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
    setSuggestedItems(newItems.slice(0, 9));
  }
  return (
    <div className="flex flex-col align-left">
      <div className="relative w-full">
        <input
          type="text"
          onChange={(e) => handleSearchInput(e.target.value.toLowerCase())}
          value={value}
          placeholder="Search for recipes or ingredients"
          className="w-full pl-12 pr-4 py-2 rounded-xl outline-none"
        />
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
      </div>
      {value.length > 0 && suggestedItems.length === 0 && (
        <div className="rounded-lg shadow-lg p-4 mt-4 mx-auto max-w-xs">
          <h2 className="text-xl">
            Sorry, we couldn't find any matches for <b>{value}</b>...
          </h2>
          <p>Please try searching for another term</p>
        </div>
      )}
      <ul className="flex flex-wrap items-start gap-1 justify-start items-start mb-4">
        {suggestedItems.map((item) => {
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

export default SearchInput;
