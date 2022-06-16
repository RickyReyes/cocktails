import React from 'react'

export default function Cocktail({name, missing, ingredients, photoString, selectedItems }) {
  const cocktailElement =  (
    <li className={"w-full flex flex-col items-start rounded-2xl border-4 " 
      + (missing.length == 0 ? "border-8 border-green-400" : "")} >
      <div className={"rounded-t-lg bg-cover bg-no-repeat bg-center h-60 w-full " + photoString}>
      </div>
      <h3 className="px-2 pt-1 text-2xl text-left font-bold">{name}</h3>

      <ul className="px-2 text-left leading-5 pb-2">
        {ingredients.map(ingredient => <li className={"missing-ingredient " + (!missing.includes(ingredient) ? "font-bold" : "")}>{ingredient}</li>)}
      </ul>

      {
      missing.length > 0 && 
      <h4 className="px-2 pt-1 pb-2 text-left leading-5">
      <span className="font-bold">you're missing:</span> {missing.join(", ")}
      </h4>
      }
      <p></p>
    </li>
  )
  return (
    {...cocktailElement}
  )
}
