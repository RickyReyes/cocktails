import CocktailCard from "./CocktailCard";

export default function CocktailCarousel({ cocktails }) {
  return (
    <ul className="flex overflow-x-scroll gap-8">
      {cocktails.map((cocktail) => (
        <CocktailCard cocktail={cocktail} />
      ))}
    </ul>
  );
}
