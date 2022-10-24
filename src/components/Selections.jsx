import React from 'react'

const Selections = ({categories, selectedItems, handleSelectItem}) => {
  return (
    <ul className="flex flex-wrap items-start gap-2 justify-start items-start h-min">
        {selectedItems.map((item, idx) => {
            let bgColor = categories.filter((category) =>
                category.items.includes(item)
            )[0].tailwindBG;
            return (
                <li
                    onClick={() => handleSelectItem(item)}
                    className={
                        "selected-item cursor-pointer font-bold rounded-full py-2 px-4 text-white lg:py-3 lg:px-6 lg:text-2xl " +
                        bgColor
                    }
                    key={idx}
                >
                    {item}
                </li>
            )
        })}
        </ul>
        )
}

export default Selections