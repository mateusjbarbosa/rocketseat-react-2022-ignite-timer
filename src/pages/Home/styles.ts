import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  color: ${(props) => props.theme['gray-100']};

  width: 100%;

  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background-color: transparent;
  color: ${(props) => props.theme['gray-100']};

  padding: 0 0.5rem;

  height: 2.5rem;

  border: none;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};

  font-size: 1.125rem;
  font-weight: bold;

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }

  &:focus {
    box-shadow: none;

    border-color: ${(props) => props.theme['green-500']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`

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

export const StartCountdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};

  width: 100%;

  padding: 1rem;

  border: 0;
  border-radius: 0.5rem;

  font-weight: bold;

  cursor: pointer;

  &:disabled {
    opacity: 0.7;

    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-700']};

    transition: background-color 0.3s;
  }
`
