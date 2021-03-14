import React, { useCallback } from 'react';

import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';


import { FiStar } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";


import { useTheme } from '../../hooks/theme';
import { useFavorite } from '../../hooks/useFavorite';

import { formatValue } from '../../../formatValue';

import {
  Container,
  Header,
  Column,
  Ticket,
  Price,
  Variation,
  ChartContainer,
  Footer,
  HighLow,
  Sepator
} from './styles';
import { useStock } from '../../hooks/useStock';



interface IStock {
  stock: {
    stock: string;
    exchange: string;
    country: string;
    company: string;
    variation: number;
    price: number;
    chart: number[];
    favorite?: boolean;
  }
}

const Stock: React.FC<IStock> = ({ stock }) => {
  const { theme } = useTheme();
  const { handleFavorite } = useFavorite();
  const { favoriteStock } = useStock();

  const chartSort = stock.chart.sort((a, b) => a - b);
  const [low] = chartSort;
  const high = chartSort[chartSort.length - 1];

  const positive = stock.variation > 0;



  const options = {
    chart: {
      type: 'line',
      height: 130,
      backgroundColor: theme.colors.cardBg,
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ""
    },
    navigator: {
      enabled: false
    },
    scrollbar: {
      enabled: false
    },
    rangeSelector: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    xAxis: {
      type: 'number',
      labels: {
        enabled: false
      },
      tickWidth: 0,
      lineWidth: 0
    },
    yAxis: {
      gridLineColor: theme.colors.cardBg,
      labels: {
        enabled: false
      },
      title: {
        text: ''
      }
    },
    tooltip: {
      pointFormat: `<b>${stock.country == "BR" ? "R$" : "US$"} {point.y:,.2f}</b>`,
      shared: true,
      useHTML: true,
      valueDecimals: 2,
      headerFormat: '',
    },
    legend: {
      enabled: false
    },
    series: [{
      name: '',
      data: stock.chart,
      color: theme.colors.blue
    }]
  }

  const handleFavoriteSubmit = useCallback(() => {
    handleFavorite(stock);
    favoriteStock(stock);
  }, [])

  const Star = Boolean(stock.favorite) ? AiFillStar : FiStar;
  return (
    <Container>
      <Header>
        <Column>
          <Star onClick={handleFavoriteSubmit} />
          <Ticket>{stock.stock}</Ticket>
        </Column>
        <Column>
          <Price positive={Boolean(positive)}>{formatValue(stock.price, stock.country)}</Price>
          <Sepator> | </Sepator>
          <Variation>{formatValue(stock.variation, "BR", "decimal")}%</Variation>
        </Column>
      </Header>
      <ChartContainer>
        <HighchartsReact highcharts={Highcharts} constructorType={'stockChart'} options={options} />
      </ChartContainer>
      <Footer>
        <HighLow warning={Boolean(stock.price <= low)} >L {formatValue(low, "BR", "decimal")}</HighLow>
        <HighLow warning={Boolean(stock.price >= high)} >H {formatValue(high, "BR", "decimal")}</HighLow>
      </Footer>
    </Container>
  )
}

export default Stock;