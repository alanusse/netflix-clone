import styled from 'styled-components'

const baseStyle = ({
  color,
  fontSize,
  fontWeight,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  center
}) => `
  ${color ? `color: ${color};` : ''}
  ${fontSize ? `font-size: ${fontSize};` : ''}
  ${fontWeight ? `font-weight: ${fontWeight};` : ''}
  ${margin ? `margin: ${margin};` : ''}
  ${marginTop ? `margin-top: ${marginTop};` : ''}
  ${marginBottom ? `margin-bottom: ${marginBottom};` : ''}
  ${marginLeft ? `margin-left: ${marginLeft};` : ''}
  ${marginRight ? `margin-right: ${marginRight};` : ''}
  ${center ? `text-align: center;` : ''}
`

const H1 = styled.h1`
  font-size: 1.7rem;
  font-weight: 500;
  ${baseStyle}
`

const H2 = styled.h2`
  font-size: 1.5rem;
  ${baseStyle}
`

const H3 = styled.h3`
  font-size: 1.3rem;
  ${baseStyle}
`

const Heading = ({ type, ...props }) => {
  if (type === 'h1') return <H1 {...props} />
  if (type === 'h2') return <H2 {...props} />
  if (type === 'h3') return <H3 {...props} />
}

export default Heading
