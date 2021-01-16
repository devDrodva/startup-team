import React, { useEffect, useState } from 'react'
import CardList from '../../components/Cardlist'
import Wrapper from '../../components/Wrapper/index'
import { StyledMain, SearchContainer } from './styles'

const Home = () => {
  const [team, setTeam] = useState(null)
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const response = await data.json()
    setTeam(response)
  }

  if (!team) {
    return <h1>Loading...</h1>
  }
  let filteredTeam = team.filter((item) => item.name.includes(searchInput))

  return (
    <Wrapper>
      <StyledMain>
        <h1 className='title'>AWESOME STARTUP EMPLOYEE DIRECTORY</h1>
        <SearchContainer>
          <input className='search' placeholder='search' onChange={(event) => setSearchInput(event.target.value)} />
        </SearchContainer>
        {<CardList team={filteredTeam} />}
      </StyledMain>
    </Wrapper>
  )
}

export default Home
