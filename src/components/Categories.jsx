const Categories = ({
  categories,
  currentCategory,
  setCurrentCategory,
  selectedItems,
}) => {
  return (
    <ul className="flex flex-col items-start gap-1">
      {categories.map((category, idx) => {
        const amount = selectedItems.filter((item) =>
          category.items.includes(item)
        ).length;

        const styles =
          "cursor-pointer rounded-full py-1 px-3 lg:text-md font-normal mb-1 hover:bg-white border-2 " +
          category.tailwindBorder +
          " " +
          (currentCategory.name === category.name
            ? category.tailwindTextColor
            : "text-white " +
              category.tailwindBG +
              " " +
              category.hoverBorder +
              " hover:" +
              category.tailwindTextColor);
        return (
          <li
            className="relative"
            onClick={() => setCurrentCategory(category)}
            key={idx}
          >
            {amount > 0 && (
              <small className="absolute bg-black absolute text-white w-5 h-5 rounded-full -top-2 -right-2">
                {amount}
              </small>
            )}
            <button className={styles}>{category.name}</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
