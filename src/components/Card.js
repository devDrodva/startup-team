import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ user }) => {

  return (
    <li className="card">
      <img className="user_photo" alt={user.name} src={'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png'} />
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