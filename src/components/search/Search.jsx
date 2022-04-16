import React, { Fragment } from 'react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// import classes from './Search.module.css';
import styled from 'styled-components';

const Search = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = e => {
    e.preventDefault();
    navigate('/searched/' + input);
  };
  return (
    <Fragment>
      <FormStyle onSubmit={submitHandler}>
        <div>
          <FaSearch></FaSearch>
          <input
            onChange={e => setInput(e.target.value)}
            type="text"
            value={input}
            placeholder="Search for recipe..."
          />
        </div>
      </FormStyle>
    </Fragment>
  );
};

const FormStyle = styled.form`
  margin: 0rem 20rem;

  div {
    position: relative;
    width: 100%;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #f3d5b5, #e9c46a);
    font-size: 1.5rem;
    color: #353535;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: #353535;
  }
`;

export default Search;
