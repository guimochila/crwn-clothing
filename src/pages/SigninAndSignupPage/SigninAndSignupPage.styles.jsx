import styled from 'styled-components';

export const SigninAndSignupContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 60px;
  }
`;
