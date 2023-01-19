import React from "react";

const Selections = ({
  categories,
  selectedItems,
  selectedTags,
  handleSelectItem,
  handleSelectTag,
}) => {
  return (
    <section className="max-w-7xl flex flex-col md:flex-row justify-center items-center mx-auto gap-4">
      <ul className="flex flex-wrap items-start gap-2 justify-start items-start h-min">
        {selectedItems.map((item, idx) => {
          let bgColor = categories.find((category) =>
            category.items.includes(item)
          ).tailwindBG;
          return (
            <li
              onClick={() => handleSelectItem(item)}
              className={
                "selected-item cursor-pointer font-bold rounded-md py-2 px-4 text-white lg:py-3 lg:px-6 md:text-xl " +
                bgColor
              }
              key={idx}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-wrap items-start gap-2 justify-start items-start h-min ">
        {selectedTags.map((tag) => (
          <li
            className="selected-tag rounded-md text-sm border border-slate-800 text-md md:text-lg px-3 py-1 md:px-6 md:py-2 cursor-pointer uppercase bg-slate-800 text-white "
            onClick={() => handleSelectTag(tag)}
            key={tag}
          >
            {tag}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Selections;
