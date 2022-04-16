import React from 'react';
import Papular from '../components/popular/Papular';
import Veggie from '../components/veggie/Veggie';

import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Veggie />
      <Papular />
    </motion.div>
  );
};

export default Home;
