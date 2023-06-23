import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;

  nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    div {
      width: 10rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;
      background-color: ${(props) => props.theme['purple-100']};
      color: ${(props) => props.theme['purple-500']};
      border-radius: 8px;
    }

    a {
      width: 3rem;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${(props) => props.theme['yellow-100']};
      color: ${(props) => props.theme['yellow-700']};
      border-radius: 8px;
    }
  }
`
