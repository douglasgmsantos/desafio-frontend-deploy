import styled from 'styled-components';

export const Container = styled.div`
  padding: ${p => p.theme.spacing.default};
  
  @media (max-width: 540px) {
    padding: 0.6rem;
  }
  `;