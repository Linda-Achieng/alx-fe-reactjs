import React from 'react';
import { useParams } from 'react-router-dom';
import recipeData from '../data.json'; 

const RecipeDetail = () => {
  const { id } = useParams(); // Get the ID from the URL
  const recipe = recipeData.find((r) => r.id === parseInt(id)); // Find the recipe by ID

  // Handle the case where recipe is not found (e.g., invalid ID)
  if (!recipe) {
    return <p className="text-center">Recipe not found</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover mb-4" />
      <p className="text-lg mb-4">{recipe.summary}</p>

      <div className="bg-gray-100 p-4 rounded-md">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside">
          {/* Add your ingredients list here */}
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
        </ul>
      </div>

      <div className="bg-gray-100 p-4 rounded-md mt-6">
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside">
          {/* Add your instructions here */}
          <li>Step 1</li>
          <li>Step 2</li>
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
