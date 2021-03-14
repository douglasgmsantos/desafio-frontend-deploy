import React, { createContext, useContext, useState, useCallback } from 'react';

import stocksJson from '../../stocks.json'

interface IStock {
  stock: string;
  exchange: string;
  country: string;
  company: string;
  variation: number;
  price: number;
  chart: number[];
  favorite?: boolean;
}

interface IOrderBy {
  label: string;
  value: string;
}

interface StockContextData {
  orderByStock: IOrderBy;
  stocks: IStock[];
  favoriteStock(stock: IStock): void;
  changeOrderBY(orderBy: IOrderBy): void;
}

const StockContext = createContext<StockContextData>({} as StockContextData);

const StockProvider: React.FC = ({ children }) => {
  const [orderByStock, setOrderByStock] = useState<IOrderBy>({ label: "Alfabética", value: "stock" })
  const [stocks, setStocks] = useState<IStock[]>(stocksJson);

  const changeOrderBY = useCallback((orderBy: IOrderBy) => {
    setOrderByStock(orderBy);
  }, [])

  const favoriteStock = useCallback((stock: IStock) => {
    const newStocks = stocks.map(filter => {
      if (stock.stock === filter.stock)
        filter.favorite = !Boolean(filter.favorite)
      return filter
    });

    setStocks(newStocks);
  }, [])

  return (
    <StockContext.Provider value={{ stocks, favoriteStock, orderByStock, changeOrderBY }} >
      {children}
    </StockContext.Provider>
  );
};

function useStock(): StockContextData {
  const context = useContext(StockContext);

  if (!context) {
    throw new Error('useTheme must be used within as StockProvider');
  }

  return context;
}

export { StockProvider, useStock };