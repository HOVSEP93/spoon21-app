import React, { Fragment, useEffect, useState } from 'react';
import { Splide, slplideSlide, SplideSlide } from '@splidejs/react-splide';

import classes from './veggie.module.css';

import '@splidejs/splide/dist//css/splide.min.css';

import { Link } from 'react-router-dom';

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getPapular();
  }, []);

  const getPapular = async () => {
    const check = localStorage.getItem('veggie');

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`
      );
      const data = await api.json();

      localStorage.setItem('veggie', JSON.stringify(data.recipes));
      setVeggie(data.recipes);
      console.log(data.recipes);
    }
  };

  return (
    <Fragment>
      <div className={classes.wrapper}>
        <h3>Our Vegetarian Picks</h3>

        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '5rem',
          }}
        >
          {veggie.map(recipe => {
            return (
              <SplideSlide key={recipe.id}>
                <div className={classes.card}>
                  <Link to={'/recipe/' + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <div className={classes.gradient}></div>
                  </Link>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </Fragment>
  );
};

export default Veggie;
