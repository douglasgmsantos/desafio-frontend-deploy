import React from 'react';

import { ThemePortalProvider } from './theme';
import { FavoriteProvider } from './useFavorite';
import { StockProvider } from './useStock';
import { OrderByProvider } from './useOrderBy';


const AppProvider: React.FC = ({ children }) => (
  <ThemePortalProvider>
    <OrderByProvider>
      <FavoriteProvider>
        <StockProvider>
          {children}
        </StockProvider>
      </FavoriteProvider>
    </OrderByProvider>
  </ThemePortalProvider>
);

export default AppProvider;