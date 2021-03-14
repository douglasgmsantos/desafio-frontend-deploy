import React, { createContext, useContext, useState, useCallback } from 'react';


interface IOrderBy {
  label: string;
  value: string;
}

interface OrderBYContextData {
  orderByOption: IOrderBy[];
  orderByStock: IOrderBy;
  changeOrderBY(orderBy: IOrderBy): void;
}

const OrderBYContext = createContext<OrderBYContextData>({} as OrderBYContextData);

const OrderByProvider: React.FC = ({ children }) => {
  const [orderByOption] = useState<IOrderBy[]>([
    { label: "Alfabética", value: "stock" },
    { label: "Preço", value: "price" },
    { label: "Variação", value: "variation" },
  ])
  const [orderByStock, setOrderByStock] = useState<IOrderBy>({ label: "Alfabética", value: "stock" })

  const changeOrderBY = useCallback((orderBy: IOrderBy) => {
    setOrderByStock(orderBy);
  }, [])

  return (
    <OrderBYContext.Provider value={{ orderByOption, orderByStock, changeOrderBY }} >
      {children}
    </OrderBYContext.Provider>
  );
};

function useOrderBy(): OrderBYContextData {
  const context = useContext(OrderBYContext);

  if (!context) {
    throw new Error('useOrderBy must be used within as OrderByProvider');
  }

  return context;
}

export { OrderByProvider, useOrderBy };