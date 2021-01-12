import React from 'react'
import Card from './Card';

const CardList = ({ team }) => {
  
  return (
    <ul className="cardList">
      {
       team.map((user, idx) => <Card key={idx} user={user}/>)
      }
    </ul>
  );
};

export default CardList;
