import React from 'react'
import Card from '../Card/index';
import StyledCardList from './styles'

const CardList = ({ team }) => {
  
  return (
    <StyledCardList>
      {
       team.map((user, idx) => <Card key={idx} user={user}/>)
      }
    </StyledCardList>
  );
};

export default CardList;