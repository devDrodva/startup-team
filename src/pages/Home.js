import React, { useEffect, useState } from 'react'
import CardList from  '../components/CardList';

const Home = () => {
  const [team, setTeam] = useState(null);
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const response = await data.json();
    setTeam(response);
  };

  if(!team){
    return (
      <h1>Loading...</h1>
    )
  };
    let filteredTeam = team.filter(item => item.name.includes(searchInput))

  return (
    <div className="home">
      <h1 className="title">AWESOME STARTUP EMPLOYEE DIRECTORY</h1>
      <div className="search-container">
       <input className="search" placeholder="search" onChange={(event) => setSearchInput(event.target.value)}/>
      </div>
      {
        <CardList team={filteredTeam} />}  
    </div>
  );
};

export default Home;