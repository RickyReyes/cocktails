import React from 'react'

const Items = ({categories, currentCategory, handleSelectItem, selectedItems}) => {
  return (
    <ul className="flex flex-wrap items-start gap-1 justify-start items-start w-full sm:96 md:w-112 ">
        {categories
            .filter((category) => category.name === currentCategory.name)[0]
            .items.map((item, idx) => {
                let {
                    tailwindBG,
                    hoverTextColor,
                    hoverBorder,
                    tailwindTextColor,
                    tailwindBorder,
                } = currentCategory;

                return (
                    <li className="h-min" key={idx}>
                        <button
                            onClick={() => handleSelectItem(item)}
                            className={
                                selectedItems.includes(item)
                                    ? ` selected-item selected-category-item leading-4  cursor-pointer font-normal rounded-full py-2 px-4 lg:py-2 lg:px-4 lg:text-xl bg-white border-2 ${tailwindBorder} ${tailwindTextColor}`
                                    : ` leading-4 cursor-pointer font-normal rounded-full py-2 px-4 text-white lg:py-2 lg:px-4 lg:text-xl border-white border-2 ${tailwindBG} ${hoverBorder}`
                            }
                        >
                            {item}
                    </button>
                </li>
            )
        })}
  </ul>
  )
  
}

export default Items