import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Profile = ({ match }) => {
  const {employees, setEmployees} = useContext(UserContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetch(`https://jsonplaceholder.typicode.com/users/?id=${match.params.id}`);
      const response = await data.json();
      setUser(response[0]);
    };
    getData()
  }, [match.params.id]);

  if(!match.params.id || match.params.id === 'null') {
    
    return <h1 style={{textAlign:'center', margin: '50px'}}>User not found</h1>
  };

  function AddUser(existingUsers, newUser) {
    let userAdded = existingUsers.find(item => item.email === newUser.email)

  if(!userAdded) {
    setEmployees([...existingUsers, 
      {
        name: `${newUser.name}`,
        email: `${newUser.email}`
      }
    ])
  };
};

  return(
      <div id="profile-page" className="profile-page">
          {user && <div className="profile">
            <img className="profile_photo" alt={user.name} src={'https://www.techedia.co.uk/Images/uprof.jpg'}/>
            <div className="profile_info">
                <Link to="/" className="link-back"><p className ="profile_name">{user.name}</p></Link>
                <p>{user.email}</p>
                <p>{user.address.city}</p>
                <button className="btn-join" onClick={() => AddUser(employees, user)}>Join us</button>
                
            </div>
          </div>}
      </div>              
  );
};

export default Profile;

