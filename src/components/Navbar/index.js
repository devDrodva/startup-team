import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/index'
import { StyledNav, StyledNavWrapper, Modal, UserSelection, DropDown, StyledTeam, Content } from './styles'

function Nav() {
  const { employees, setEmployees } = useContext(UserContext)
  const [modal, setModal] = useState(false)

  return (
    <StyledNav>
      <StyledNavWrapper>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/contact'>Contact</Link>
        </div>
        <UserSelection>
          {employees.length ? (
            <DropDown>
              <StyledTeam onClick={() => setModal(!modal)}>
                <span className='title'>Team</span>
                <span className='counter'>{employees.length}</span>
              </StyledTeam>

            </DropDown>
          ) : <p style={{ color: 'coral' }}>Build your team</p>}
          <Modal modal={modal}>
            <Content >
              <div className='modalHeader'>
                <h1>Employees</h1>
                <button className="close" onClick={() => setModal(false)}>X</button>
              </div>
              {
                employees.map((employee) =>
                  <div className="modalItem">
                    <p> {employee.name}</p>
                    <button className="deleteItem" onClick={() => removeItem(employee.email)}>Delete</button>
                  </div>
                )
              }
            </Content>
          </Modal>
        </UserSelection>
      </StyledNavWrapper>
    </StyledNav>
  )

  function removeItem(idxDeleted) {
    let selectedEmployees = employees
    let i = employees.findIndex((employee) => employee.email === idxDeleted)
    selectedEmployees.splice(i, 1)
    setEmployees([...selectedEmployees])

    if(employees.length == 0)  {
      setModal(false);
    }
  }
}

export default Nav
