import React from 'react';

import { useStock } from '../hooks/useStock';
import { useFavorite } from '../hooks/useFavorite';

import List from '../Components/List';

import { Container } from '../../styles/components/home';

const Home: React.FC = () => {
  const { favorites } = useFavorite();
  const { stocks } = useStock();

  return (
    <Container>
      <List stocks={stocks.map(stock => {
        const index = favorites.findIndex(fav => fav.stock === stock.stock);
        stock.favorite = index == -1 ? false : true;
        return stock
      })} />
    </Container>
  )
}

export default Home;