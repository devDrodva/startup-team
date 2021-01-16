import styled from 'styled-components'

export const StyledNav = styled.nav`
  height: 50px;
  background-color: #fff;
  padding: 15px;

  a {
    margin-right: 10px;
    font-size: 20px;
    text-decoration: none;
    font-weight: bold;
    color: #ff7f50;
  }
`

export const StyledNavWrapper = styled.div`
  height: 100%; 
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const UserSelection = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
`
//**DROPDOWN**//

export const StyledTeam = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 25px;
  color: coral;
  font-size: 20px;
  font-weight: bold;
  border: 1px solid coral;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;

  .title {
    margin-right: 10px;
  }

  .counter {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #ff7f50;
    color: #fff;
    font-size: 15px;
  }

`

export const Modal = styled.div`
  background: rgba(0, 0, 0, 0.75);
  display: ${({modal}) => modal ? 'block' : 'none'};
  position: fixed;
  z-index: 9;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`


export const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 80vh;
  width: 75vw;

  background-color: #fff;
  z-index: 100;

  .modalHeader {
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;
    border-bottom: 1px solid lightgray;
    padding: 25px;
  }

  .close {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    color: #fff;

    background-color: coral;
    border: none;
    font-size: 25px;
    font-weight: bolder;
    cursor: pointer;
  }

  .modalItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    border-bottom: 1px solid coral;
    padding-bottom: 15px;
    margin-bottom: 25px;
  }

  .deleteItem {
    color: #fff;
    padding: 5px 25px;
    background-color: coral;
    border: none;
    font-size: 20px;
    font-weight: bolder;
    cursor: pointer;
  }

`
export const DropDown = styled.div`
  display: inline-block;
`