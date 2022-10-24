const Categories = ({categories, currentCategory, setCurrentCategory}) => {
    return  (
        <ul className="flex flex-col items-start">
            {categories.map((category, idx) => {
                const styles = " cursor-pointer rounded-full py-1 px-3 lg:text-md font-normal mb-1 hover:bg-white text-white border-2 " + category.tailwindBorder + " " + (currentCategory.name === category.name ? category.tailwindTextColor : category.tailwindBG + " " + category.hoverBorder + " hover:" + category.tailwindTextColor);

                return (
                    <li onClick={() => setCurrentCategory(category)} key={idx}>
                        <button className={styles}>
                                {category.name}
                        </button>
                    </li>
                )
            })}
            </ul>
    )
}

export default Categories