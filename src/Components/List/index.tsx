import React from 'react';

import { useOrderBy } from '../../hooks/useOrderBy';

import { Container } from './styles';
import Stock from '../Stock';

interface IList {
  stocks: IStock[]
}

interface IStock {
  stock: string;
  exchange: string;
  country: string;
  company: string;
  variation: number;
  price: number;
  chart: number[];
}

const List: React.FC<IList> = ({ stocks }: IList) => {
  const { orderByStock } = useOrderBy();

  stocks.sort((b: any, a: any) => {
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


  return (
    <Container>
      {stocks.map((stock: IStock) => (<Stock key={stock.stock} stock={stock} />))}
    </Container>
  )
}

export default List;