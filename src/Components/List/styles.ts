import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
  grid-gap: 15px;


  @media (max-width: 540px) {
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  }

`;
