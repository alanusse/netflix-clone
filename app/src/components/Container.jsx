import styled from 'styled-components'

const Container = styled.div`
  background-color: ${props => props.bgColor || 'transparent'};
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10px;
`

export default Container