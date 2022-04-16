import React, { Fragment, useEffect, useState } from 'react';
import { Splide, slplideSlide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/splide/dist//css/splide.min.css';

import classes from './papular.module.css';

import { Link } from 'react-router-dom';

const Papular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPapular();
  }, []);

  const getPapular = async () => {
    const check = localStorage.getItem('popular');

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`
      );
      const data = await api.json();

      localStorage.setItem('popular', JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };

  return (
    <Fragment>
      <div className={classes.wrapper}>
        <h3>Popular Picks</h3>

        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: 'free',
          }}
        >
          {popular.map(recipe => {
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

export default Papular;
