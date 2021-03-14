import ReactSelect from 'react-select';
import styled, { css } from 'styled-components';
import { FiAlignJustify } from "react-icons/fi";


export const Select = styled(ReactSelect)`
    width: 150px;
    margin: ${p => p.theme.spacing.horizontal};
`;

export const Container = styled.ul`
  background: ${p => p.theme.title == "dark" ? p.theme.colors.black : p.theme.colors.white};
  width: 100%;
  height: 5rem;

  display: flex;
  justify-content:space-between;
  align-items:center;

  list-style-type: none;
  border-bottom: 0.2rem solid ${p => p.theme.colors.grey};

  padding: ${p => p.theme.spacing.horizontal};

`;

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PagesContainer = styled.div`
  display:flex;
  @media (max-width: 540px){
    display: none;
    &.open{
      z-index: 100;
      display: flex;
      flex-direction: column;
      align-items:center;
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      justify-content: center;
      background: rgba(255, 255, 255, 0.8);
      li{
        color: ${p => p.theme.colors.white};
      }
    }
  }

`
interface ILi {
  active?: boolean;
}
export const Li = styled.div<ILi>`
 cursor: pointer;
    padding: 2.5rem 1rem;
    height: 5rem;
    display: flex;
    align-items:center;
    font-weight: 600;
    color: ${p => p.theme.title == "dark" ? p.theme.colors.white : p.theme.colors.grey};
    div {
      text-decoration: none;
    }
    
    :hover, :focus{
      color:${p => p.theme.colors.blue};
      border-bottom: 0.2rem solid ${p => p.theme.colors.blue};
    }

    ${p => Boolean(p.active) && css`
      color:${p => p.theme.colors.blue};
      border-bottom: 0.2rem solid ${p => p.theme.colors.blue};
    `}

    div {
      display: flex;
      justify-content:center;
      align-items:center;
    }

`;


export const ListMenuIcon = styled(FiAlignJustify)`
  cursor: pointer;
  z-index: 200;
  color: ${p => p.theme.colors.blue};
  @media (min-width: 540px){
    display: none;
  }
`;

export const IconContainer = styled.div``;