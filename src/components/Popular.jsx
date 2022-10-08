import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

const Popular = () => {
  const [popular, setPopular] = useState([])

  useEffect(() => {
    getPopular();
  }, [])


  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );

    const data = await api.json();

    setPopular(data.recipes);
    console.log(popular);
  };


  return (
    <div>
     
          <Wrapper>
            <h3>Popular Picks</h3>
           <Splide 
           options={{
            perPage: 4,
            arrows: false,
            paginations: false,
            drag: 'free',
            gap:'5rem'
           }}
           >
           {popular.map((recipe) => {
                return (
                 <SplideSlide key={recipe.id}>
                   <Card>
                    <Link to={'/recipe/' + recipe.id }>
                    <p>
                      {recipe.title}
                    </p>
                    <img src={recipe.image} alt="" />
                    <Gradient />
                    </Link>
                  </Card>
                 </SplideSlide>
                )
              })}
           </Splide>
          </Wrapper>
     
    </div>
  )
}
const Wrapper = styled.div`
  margin: 4rem auto;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    width:100%;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
export default Popular