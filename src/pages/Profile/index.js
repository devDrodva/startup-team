import React, { useState, useEffect, useContext } from 'react'
import Wrapper from '../../components/Wrapper/index'
import { UserContext } from '../../components/Context/index'
import { StyledProfile, CardProfile, ProfileInfo, ProfilePhoto, ButtonJoin } from './styles'

const Profile = ({ match }) => {
  const { employees, setEmployees } = useContext(UserContext)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(`https://jsonplaceholder.typicode.com/users/?id=${match.params.id}`)
      const response = await data.json()
      console.log(response)
      setUser(response[0])
    }
    getData()
  }, [match.params.id])

  if (!match.params.id || match.params.id === 'null') {
    return <h1 style={{ textAlign: 'center', margin: '50px' }}>User not found</h1>
  }

  function AddUser(existingUsers, newUser) {
    let userAdded = existingUsers.find((item) => item.email === newUser.email)

    if (!userAdded) {
      setEmployees([
        ...existingUsers,
        {
          name: `${newUser.name}`,
          email: `${newUser.email}`,
        },
      ])
    }
  }
  console.log(user);
  return (
    <Wrapper>
      {user && (
        <StyledProfile>
          <CardProfile>
            <ProfilePhoto alt={user.name} />
            <ProfileInfo>
              <div>
                <h2>Profile </h2>
                <p><span>Name: </span>{user.name}</p>
                <p><span>Email: </span>{user.email}</p>
                <p><span>Phone: </span>{user.phone.substring(0,14)}</p>
                <p><span>Address: </span>{user.address.city}, {user.address.street}</p>
              </div>
              <ButtonJoin onClick={() => AddUser(employees, user)}>Join us</ButtonJoin>
            </ProfileInfo>
          </CardProfile>
        </StyledProfile>
      )}
    </Wrapper>
  )
}

export default Profile
