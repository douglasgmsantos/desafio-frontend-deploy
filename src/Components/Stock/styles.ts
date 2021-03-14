import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: ${p => p.theme.colors.cardBg};
  border-radius: 10px;
  padding: ${p => p.theme.spacing.default};
`;

export const Header = styled.div`
  display: flex;
  justify-content:space-between;
`;

export const Column = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  
  svg {
    cursor: pointer;
    color: ${p => p.theme.colors.yellow};
  }
`;

export const Sepator = styled.div`
  color: ${p => p.theme.colors.grey};
  margin: 0 5px;
`;

export const Favorite = styled.div`
  
`;

export const Ticket = styled.div`
  color: ${p => p.theme.colors.grey};
  font-weight: 600;
  margin-left: 5px;
`;

interface IPrice {
  positive: boolean;
}
export const Price = styled.div<IPrice>`
  font-weight: bold;
  color: ${p => p.positive ? p.theme.colors.primary : p.theme.colors.red};
`;

export const Variation = styled.div`
  color: ${p => p.theme.colors.grey};
`;

export const ChartContainer = styled.div``;

export const Footer = styled.div`
  display: flex;
  align-items:flex-start;
  justify-content:space-between;
`;

interface IWarning {
  warning: boolean;
}

export const HighLow = styled.div<IWarning>`
  color: ${p => p.theme.colors.grey};
  ${p => p.warning && css`
    font-weight: bold;
    color: ${p.theme.colors.orange};
  `}
`;
