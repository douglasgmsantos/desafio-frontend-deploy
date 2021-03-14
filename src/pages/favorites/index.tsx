import React from 'react';
import Link from 'next/link';

import { FiHome } from 'react-icons/fi';

import List from '../../Components/List';
import { useFavorite } from '../../hooks/useFavorite';
import { useOrderBy } from '../../hooks/useOrderBy';

import { Container, ListContainer } from '../../../styles/components/favorite';

const Favorites = () => {
  const { favorites } = useFavorite();
  const { orderByStock } = useOrderBy()

  favorites.sort((b: any, a: any) => {
    if (["stock"].indexOf(orderByStock.value) == -1) {
      if (a[orderByStock.value] > b[orderByStock.value]) return 1;
      if (a[orderByStock.value] < b[orderByStock.value]) return -1;
      return 0;
    } else {
      if (b[orderByStock.value] > a[orderByStock.value]) return 1;
      if (b[orderByStock.value] < a[orderByStock.value]) return -1;
      return 0;
    }
  });

  return favorites.length ?
    <ListContainer>
      <List stocks={favorites} />
    </ListContainer>
    : (
      <Container>
        <div>
          Não existe ativos na lista de favoritos, <Link href="/"><a> adicione aqui <FiHome /></a></Link>.
        </div>
      </Container>
    );
}

export default Favorites;