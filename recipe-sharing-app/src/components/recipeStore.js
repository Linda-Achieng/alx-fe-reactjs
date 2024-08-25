import {create} from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [], // Your existing recipes
  searchTerm: '',
  filteredRecipes: [],

  setSearchTerm: (term) => set(state => {
    const searchTerm = term.toLowerCase();
    return {
      searchTerm,
      filteredRecipes: state.recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm)
      ),
    };
  }),

  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),
}));

export default useRecipeStore;
