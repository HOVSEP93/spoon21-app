import React from 'react';
import Pages from './pages/Pages';
import Category from './components/category/Category';
import { BrowserRouter } from 'react-router-dom';
import Search from './components/search/Search';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { GiKnifeFork } from 'react-icons/gi';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={'/'}>H21</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  color: #e76f51;
  font-family: 'Lobster Two', cursive;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2.5rem;
  }
`;

export default App;
