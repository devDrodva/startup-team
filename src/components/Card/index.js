import React from 'react'
import { Link } from 'react-router-dom'
import { StyledCard, UserPhoto, UserInfo, ViewProfile } from './styles'

const Card = ({ user }) => {
  return (
    <StyledCard>
      <UserPhoto />
      <UserInfo>
        <p className='userName'>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.address.city}</p>
        <ViewProfile>
          <Link to={`/user/${user.id}`}>View profile</Link>
        </ViewProfile>
      </UserInfo>
    </StyledCard>
  )
}

export default Card
