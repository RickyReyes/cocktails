import React from "react";
import { Link } from "react-router-dom";

export default function CocktailCard({ cocktail }) {
  return (
    <li className="list-none basis-3/4 shrink-0">
      <div
        className={`rounded-lg bg-cover bg-no-repeat bg-center h-60 ${cocktail.photoString}`}
      ></div>
      <h2 className="text-xl font-bold font-mono">{cocktail.name}</h2>
    </li>
  );
}
