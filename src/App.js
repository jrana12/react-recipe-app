import React, { useState, useEffect} from 'react';
import Recipe from './Recipe';
import './App.css';

const App  = () => {
     const  APP_ID = "e8c71f4b";
   const APP_KEY = "ebcedd224f6373253b7372ddab1183d7";

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState('');

const getrecipe = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  const data = await response.json();
  setRecipes(data.hits);  
}

const updatesearch = e => {
  setSearch(e.target.value);
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}
useEffect( () => {getrecipe()} ,[query] );

  return (
      <div className="App">
      <h1 className="intro">What is your tongue calling for?</h1>
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-inp"  type="text" value={search} onChange={updatesearch} autoFocus/>
        <button className="search-btn"type="submit">Search</button>
        </form>
        <div className="container">{recipes.map(recipe => (
          <Recipe title={recipe.recipe.label} img={recipe.recipe.image} key={recipe.recipe.label} ingredients={recipe.recipe.ingredients}/>
          ))}
        </div>
      </div>
    );
}

export default App;
