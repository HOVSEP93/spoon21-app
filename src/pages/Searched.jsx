import React, { Fragment, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// import classes from './Cuisine.module.css';
import classes from './Search.module.css';

const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async name => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();

    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <Fragment>
      <div className={classes.grid}>
        {searchedRecipes.map(item => {
          return (
            <div className={classes.card} key={item.id}>
              <Link to={'/recipe/' + item.id}>
                <img src={item.image} alt="" />
                <h4>{item.title}</h4>
              </Link>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Searched;
