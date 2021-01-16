import styled from 'styled-components'

const StyledCardList = styled.ul`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
  justify-items: center;
`
export default StyledCardList
