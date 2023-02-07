import styled from 'styled-components'

export const CountdownContainer = styled.div`
  display: flex;
  gap: 1rem;

  color: ${(props) => props.theme['gray-100']};

  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;

  span:not(.separator) {
    background-color: ${(props) => props.theme['gray-700']};

    padding: 2rem 1rem;

    border-radius: 0.5rem;
  }

  .separator {
    display: flex;
    justify-content: center;

    color: ${(props) => props.theme['green-500']};

    width: 4rem;

    padding: 2rem 0;

    overflow: hidden;
  }
`
