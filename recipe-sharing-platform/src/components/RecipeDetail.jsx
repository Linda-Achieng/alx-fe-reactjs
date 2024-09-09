import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json'; // Adjust the path if necessary

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the route
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe based on the ID from the URL
    const selectedRecipe = data.find((recipe) => recipe.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]); // Dependency array to run the effect when the id changes

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-96 object-cover mb-4"
      />
      <p className="text-lg mb-4">{recipe.summary}</p>

      <h2 className="text-2xl font-bold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mb-2">Instructions</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;
