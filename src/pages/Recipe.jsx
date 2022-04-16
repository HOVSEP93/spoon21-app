import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

const Recipe = () => {
  let params = useParams();

  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instruction');

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );

    const detailData = await data.json();

    setDetails(detailData);
    console.log(detailData);
  };

  useEffect(() => {
    fetchDetails(params.name);
  }, [params.name]);

  const instructionsHandle = () => {
    setActiveTab('instruction');
  };

  const ingredientsHandle = () => {
    setActiveTab('ingredients');
  };

  return (
    <Fragment>
      <Container>
        <DetailWrapper>
          <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt="" />
          </div>

          <Info>
            <Button
              className={activeTab === 'instruction' ? 'active' : ''}
              onClick={instructionsHandle}
            >
              Instructions
            </Button>
            <Button
              className={activeTab === 'ingredients' ? 'active' : ''}
              onClick={ingredientsHandle}
            >
              Ingredients
            </Button>

            {activeTab === 'instruction' && (
              <div>
                <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
                <h3
                  dangerouslySetInnerHTML={{ __html: details.instructions }}
                ></h3>
              </div>
            )}

            {activeTab === 'ingredients' && (
              <ul>
                {details.extendedIngredients.map(ingredient => (
                  <li key={ingredient.id}>{ingredient.original}</li>
                ))}
              </ul>
            )}
          </Info>
        </DetailWrapper>
      </Container>
    </Fragment>
  );
};

const DetailWrapper = styled.div`
  display: flex;
  .active {
    background: linear-gradient(to right, #f6bd60, #a86832);
    color: #353535;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`;

const Container = styled.div`
  justify-content: center;
  // margin: 20rem 0rem;
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  background-color: #e6be8e;
  border-radius: 30px;
  padding: 2rem;

  @media (max-width: 768px) {
    margin: 0rem;
  }
`;

export default Recipe;
