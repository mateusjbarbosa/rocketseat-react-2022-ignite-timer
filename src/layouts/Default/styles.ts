import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme['gray-800']};

  max-width: 74rem;
  height: calc(100vh - 10rem);

  margin: 5rem auto;
  padding: 2.5rem;

  border-radius: 0.5rem;
`
