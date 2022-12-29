import React, { useState } from "react";
import CocktailCard from "../components/CocktailCard";
import { Link, useNavigate } from "react-router-dom";
import ViewPill from "../components/ViewPill";

const All = ({ cocktails, selectedTags }) => {
  const [allView, setAllView] = useState("gallery");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const list = (
    <ul
      className="flex flex-col items-center
			w-full my-4 mx-auto text-left"
    >
      {cocktails
        .filter((cocktail) => cocktail.name.toLowerCase().includes(search))
        .map((cocktail) => {
          return (
            <li
              key={Math.random()}
              className="text-3xl underline cursor-pointer"
            >
              <Link
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
          );
        })}
    </ul>
  );

  const cards = (
    <ul className="sm:w-full p-4 w-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 content-center">
      {cocktails
        .filter((cocktail) => cocktail.name.toLowerCase().includes(search))
        .map((cocktail) => (
          <CocktailCard
            key={cocktail.name}
            tags={cocktail.tags ?? []}
            name={cocktail.name}
            missing={[]}
            onAllPage={true}
            selectedTags={selectedTags}
            ingredients={cocktail.ingredients}
            photoString={cocktail.photoString}
          />
        ))}
    </ul>
  );

  return (
    <div>
      <div className="flex items-center w-full px-4">
        <i
          onClick={() => navigate(-1)}
          className="text-black fa-solid fa-circle-left text-3xl absolute top-4 left-4 cursor-pointer"
        ></i>
        <h1 className="text-3xl py-3 mx-auto">
          All Cocktails ({cocktails.length})
        </h1>
      </div>
      <ViewPill view={allView} setView={setAllView} />
      <label className="block">
        Search:
        <input
          className="border border-black rounded p-1 mt-2 ml-2 focus:outline-none"
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
      </label>
      {cocktails.filter((cocktail) =>
        cocktail.name.toLowerCase().includes(search)
      ).length === 0 && (
        <div className="rounded-lg shadow-lg p-4 mt-4 mx-auto max-w-xs">
          <h2 className="text-xl">
            Sorry, we couldn't find any matches for <b>{search}</b>...
          </h2>
          <p>Please try searching for another term</p>
        </div>
      )}
      {allView === "list" ? { ...list } : { ...cards }}
    </div>
  );
};

export default All;
