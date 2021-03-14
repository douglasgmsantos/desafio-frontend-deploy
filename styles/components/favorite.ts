import styled from 'styled-components';

export const ListContainer = styled.div`
  padding: ${p => p.theme.spacing.default};
  @media (max-width: 540px) {
    padding: 0.6rem;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;

  height: 100vh;

  div a{
    font-weight: bold;
    color: ${p => p.theme.colors.black};
    text-decoration: none;
    cursor: pointer;
    :hover, :focus {
      color: ${p => p.theme.colors.blue};
    }
  }
`;
