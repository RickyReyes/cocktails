import React from "react";

export default function NoCocktailsFound() {
  return (
    <div className="rozunded-lg shadow-lg p-4 mt-4 mx-auto max-w-xs">
      <h2 className="text-xl">
        Sorry, we couldn't find any cocktails that match your chosen criteria...
      </h2>
      <p>Please try making different selections</p>
    </div>
  );
}
