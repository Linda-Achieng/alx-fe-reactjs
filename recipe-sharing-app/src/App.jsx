import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <h1>Recipe Sharing App</h1>
          <nav>
            <Link to="/">Home</Link>
          </nav>
        </header>
        <Switch>
          <Route exact path="/">
            <AddRecipeForm />
            <RecipeList />
          </Route>
          <Route path="/recipe/:id" render={({ match }) => (
            <RecipeDetails recipeId={match.params.id} />
          )} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
