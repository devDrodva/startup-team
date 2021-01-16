import styled from 'styled-components'

export const StyledProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(85vh - 50px);
  padding: 10px;
`

export const CardProfile = styled.div`
  display: flex;
  padding: 25px;
  border-radius: 15px;
  background-color: #fff;
  width: 800px;
`
export const ProfilePhoto = styled.div`
  width: 250px;
  height: 250px;
  display: inline-block;
  background-image: url('https://www.techedia.co.uk/Images/uprof.jpg');
  background-size: cover;
  border-radius: 15px;
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 25px;
  font-size: 16px;
  line-height: 1.6;

  .profile-name {
    color: #484848;
    font-weight: bolder;
    font-size: 20px;
  }

  h2 {
    margin-bottom: 15px;
  }

  span {
    font-weight: bold;
  }

  a {
    text-decoration: none;
  }
`

export const ButtonJoin = styled.button`
  padding: 15px;
  font-size: 20px;
  text-align: center;
  color: #fff;
  text-decoration: none;
  background-color: #ff7f50;
  border-radius: 10px;
  border: none;

  :hover {
      background-color: #f25c54;
    }

  cursor: pointer;
`
