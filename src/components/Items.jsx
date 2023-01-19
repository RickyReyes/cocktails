import React from "react";

const Items = ({
  categories,
  currentCategory,
  handleSelectItem,
  selectedItems,
}) => {
  return (
    <ul className="flex flex-wrap items-start gap-1 justify-start items-start">
      {categories
        .find((category) => category.name === currentCategory.name)
        .items.map((item, idx) => {
          let { tailwindBG, tailwindTextColor, tailwindBorder } =
            currentCategory;

          return (
            <li key={item}>
              <button
                onClick={() => handleSelectItem(item)}
                className={
                  selectedItems.includes(item)
                    ? ` selected-item selected-category-item leading-4  cursor-pointer font-normal rounded-md py-2 px-4 lg:py-2 lg:px-4 lg:text-xl bg-white border-2 ${tailwindBorder} ${tailwindTextColor}`
                    : ` leading-4 cursor-pointer font-normal rounded-md py-2 px-4 text-white lg:py-2 lg:px-4 lg:text-xl border-white border-2 ${tailwindBG}`
                }
              >
                {item}
              </button>
            </li>
          );
        })}
    </ul>
  );
};

export default Items;
