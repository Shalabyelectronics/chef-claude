import { useState } from "react";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const addIngredients = (formData) =>
    setIngredients((prevIngredients) => [
      ...prevIngredients,
      formData.get("ingredient"),
    ]);
  return (
    <main>
      <form className="add-ingredient-form" action={addIngredients}>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button type="submit">Add ingredient</button>
      </form>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </main>
  );
}
