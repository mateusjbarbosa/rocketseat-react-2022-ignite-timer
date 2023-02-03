import styled from 'styled-components'

export const HistoryContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;

  padding: 3.5rem;

  h1 {
    color: ${(props) => props.theme['gray-100']};

    font-size: 1.5rem;
  }
`

export const HistoryList = styled.div`
  flex: 1;

  margin-top: 2rem;

  overflow: auto;

  table {
    width: 100%;
    min-width: 37.5rem;

    border-collapse: collapse;

    th {
      background-color: ${(props) => props.theme['gray-600']};
      color: ${(props) => props.theme['gray-100']};

      padding: 1rem;

      font-size: 0.875rem;
      line-height: 1.6;
      text-align: left;

      &:first-child {
        padding-left: 1.5rem;

        border-top-left-radius: 0.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;

        border-top-right-radius: 0.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-700']};

      padding: 1rem;

      border-top: 4px solid ${(props) => props.theme['gray-800']};

      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;

        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`

const STATUS_COLOR = {
  green: 'green-500',
  red: 'red-500',
  yellow: 'yellow-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLOR
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';

    background-color: ${(props) =>
      props.theme[STATUS_COLOR[props.statusColor]]};

    width: 0.5rem;
    height: 0.5rem;

    border-radius: 50%;
  }
`
