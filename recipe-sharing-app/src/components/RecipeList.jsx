import React, { useEffect } from 'react';
import useRecipeStore from '../recipeStore'; // Adjust the path as needed
import RecipeItem from './RecipeItem'; // Assuming you have a RecipeItem component

const RecipeList = () => {
  const { filteredRecipes, filterRecipes } = useRecipeStore(state => ({
    filteredRecipes: state.filteredRecipes,
    filterRecipes: state.filterRecipes,
  }));

  useEffect(() => {
    filterRecipes(); // Update filtered recipes when search term changes
  }, [filterRecipes]);

  return (
    <div>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        <ul>
          {filteredRecipes.map(recipe => (
            <RecipeItem key={recipe.id} recipe={recipe} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
