import React, { useState, useCallback } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Switch from "react-switch";


import { FiHome, FiStar } from "react-icons/fi";
import { IconType } from 'react-icons/lib/cjs';

import { useTheme } from '../../hooks/theme';
import { useOrderBy } from '../../hooks/useOrderBy';

import { Select, Container, Li, PagesContainer, SwitchContainer, IconContainer, ListMenuIcon } from './styles';


interface IListPage {
  label: string;
  router: string;
  icon: IconType;
}

const Header = () => {
  const router = useRouter();
  const { orderByOption, orderByStock, changeOrderBY } = useOrderBy();
  const { toggleTheme, theme } = useTheme();
  const [activeMenu, setActiveMenu] = useState(false);

  const openMenu = useCallback(() => {
    setActiveMenu(!Boolean(activeMenu))
  }, [activeMenu]);

  const [pages] = useState([
    {
      label: "Home",
      router: "/",
      icon: FiHome
    },
    {
      label: "Favoritos",
      router: "/favorites",
      icon: FiStar
    },
  ]);

  return (
    <Container>
      <ListMenuIcon onClick={() => openMenu()} size={40} />
      <PagesContainer className={activeMenu ? 'open' : ""}>
        {pages.map((page: IListPage) => {
          return (
            <Link key={page.label} href={page.router} >
              <Li active={router.pathname === page.router}>
                <IconContainer>
                  {page.label}
                </IconContainer>
              </Li>
            </Link>
          )
        })}
      </PagesContainer>

      <SwitchContainer>
        <Select
          options={orderByOption}
          defaultValue={orderByStock}
          classNamePrefix="react-select"
          placeholder="Selecione uma opção"
          onChange={changeOrderBY}
          styles={{
            option: (provided: any, state: any) => ({
              ...provided,
              backgroundColor: theme.title == "dark" ? theme.colors.black : theme.colors.white,
              borderBottom: `1px solid ${theme.colors.grey}`,
              color: state.isSelected ? `${theme.colors.blue}` : `${theme.colors.grey}`,
              padding: 20,
              cursor: "pointer",
            }),
            control: () => ({
              width: 150,
              display: "flex"
            }),
            singleValue: (provided: any, state: any) => {
              const opacity = state.isDisabled ? 0.5 : 1;
              const transition = 'opacity 300ms';
              return { ...provided, opacity, transition };
            }
          }}
        />
        <Switch
          onChange={() => toggleTheme()}
          checked={theme.title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          onColor={theme.colors.blue}
          offColor={theme.colors.grey}
          onHandleColor={theme.colors.grey}
          offHandleColor={theme.colors.blue}
        />
      </SwitchContainer>
    </Container>
  )
}

export default Header;