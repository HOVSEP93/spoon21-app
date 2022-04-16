import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiMeat, GiHotMeal, GiOlive, GiTacos } from 'react-icons/gi';

// import classes from './category.module.css';
import styled from 'styled-components';

const Category = () => {
  return (
    <Fragment>
      <List>
        <SLink to={'/cuisine/Italian'}>
          <FaPizzaSlice />
          <h4>Italian</h4>
        </SLink>

        <SLink to={'/cuisine/middle eastern'}>
          <GiMeat />
          <h4>Middle Eastern</h4>
        </SLink>

        <SLink to={'/cuisine/indian'}>
          <GiHotMeal />
          <h4>Indian</h4>
        </SLink>

        <SLink to={'/cuisine/American'}>
          <FaHamburger />
          <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/greek'}>
          <GiOlive />
          <h4>Greek</h4>
        </SLink>
        <SLink to={'/cuisine/mexican'}>
          <GiTacos />
          <h4>Mexican</h4>
        </SLink>
      </List>
    </Fragment>
  );
};

const List = styled.div`
   {
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
  }
`;

const SLink = styled(NavLink)`
   {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #f3d5b5, #e9c46a);
    width: 9rem;
    height: 8rem;
    cursor: pointer;
    transform: scale(0.8);
  }

  h4 {
    color: #353535;
    font-size: 1rem;
    font-weight: bold;
  }
  svg {
    color: #353535;
    font-size: 2.5rem;
  }

  &.active {
    background: linear-gradient(to right, #f6bd60, #a86832);

    svg {
      color: white;
    }

    h4 {
      color: white;
    }
  }
`;

export default Category;
