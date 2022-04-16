import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import classes from './Cuisine.module.css';

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async name => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();

    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={classes.grid}
    >
      {cuisine.map(item => {
        return (
          <motion.div key={item.id} className={classes.card}>
            <Link to={'/recipe/' + item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Cuisine;
