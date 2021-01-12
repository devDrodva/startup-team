import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext'
import '../dropDown.css'

function Nav() {
  const { employees, setEmployees } = useContext(UserContext);

  return (
    <nav className="navbar">
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="user_selection">
        {employees.length ?  <p className="counter">{employees.length}</p> : <p style={{color: 'coral'}}>Create your own team</p>}
      
        {employees.length ?
          <div className="dropdown">
            <button className="users-btn">Team</button>
            <div className="dropdown-content">
              {
              employees.map(item => <p key={item.email}  onClick={() => removeItem(item.email)}>{item.name}</p>)
              }
            </div>
          </div>
          : null
        }
      </div>
    </nav>
  );

  function removeItem(idxDeleted) {
    let selectedEmployees = employees;
    let i = employees.findIndex(employee => employee.email === idxDeleted)
    selectedEmployees.splice(i, 1)
    setEmployees([...selectedEmployees])
  };
};

export default Nav;
