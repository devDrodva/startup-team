import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ user }) => {

  return (
    <li className="card">
      <img className="user_photo" alt={user.name} src={'https://www.techedia.co.uk/Images/uprof.jpg'} />
      <div className="user_info">
        <p className="userName">{user.name}</p>
        <p>{user.email}</p>
        <p>{user.address.city}</p>
        <Link className="viewprofile" to={`/user/${user.id}`}>
          view profile
        </Link>
      </div>
    </li>
  );
};

export default Card;
