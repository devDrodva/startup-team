import { useState, createContext } from 'react'

export const UserContext = createContext(null)

export const UserProvider = (props) => {
  const [employees, setEmployees] = useState([])

  return <UserContext.Provider value={{ employees, setEmployees }}>{props.children}</UserContext.Provider>
}
