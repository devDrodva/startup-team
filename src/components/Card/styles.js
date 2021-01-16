import styled from 'styled-components'

export const StyledCard = styled.li`
  display: flex;
  width: 400px;
  padding: 25px;
  background-color: #fff;
  border-radius: 10px;
`
export const UserPhoto = styled.div`
  display: inline-block;
  width: 75px;
  height: 75px;
  margin-right: 20px;
  border-radius: 50%;
  background-image: url('https://www.techedia.co.uk/Images/uprof.jpg');
  background-size: contain;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;

  .userName {
    color: #484848;
    font-weight: bolder;
    font-size: 15px;
  }
`
export const ViewProfile = styled.button`
  width: 100px;
  margin-top: 10px;
  padding: 5px;
  text-align: center;
  background-color: #ff7f50;
  border-radius: 3px;
  border: none;

    :hover {
      background-color: #f25c54;
    }
  & a {
    text-decoration: none;
    color: #fff;
  }
`
