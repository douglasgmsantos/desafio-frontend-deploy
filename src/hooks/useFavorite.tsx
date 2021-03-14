import React, { createContext, useContext, useState, useEffect } from 'react';

import { Notifyer } from '../utils/Notifyer';
import Cookies from 'js-cookie';


interface IFavorite {
  stock: string;
  exchange: string;
  country: string;
  company: string;
  variation: number;
  price: number;
  chart: number[];
  favorite?: boolean;
}

interface FavoriteContextData {
  favorites: IFavorite[];
  handleFavorite(stock: IFavorite): void;
}

const FavoriteContext = createContext<FavoriteContextData>({} as FavoriteContextData);

const FavoriteProvider: React.FC = ({ children }) => {
  const [favorites, setFavorites] = useState<IFavorite[]>([]);

  useEffect(() => {
    const cookieFavorite = Cookies.get("@douglasgmsantos:favorites");

    if (Boolean(cookieFavorite)) {
      const newFavorites = JSON.parse(cookieFavorite || "[]")
      setFavorites(newFavorites)
    }
  }, []);


  const handleFavorite = (stock: IFavorite) => {
    const cookieFavorite = JSON.parse(Cookies.get("@douglasgmsantos:favorites") || "[]");

    const index = cookieFavorite.findIndex((fav: IFavorite) => fav.stock == stock.stock);
    let newFavorites: IFavorite[] = [];

    if (index !== -1) {
      newFavorites = cookieFavorite.filter((fav: IFavorite) => fav.stock != stock.stock);
    }
    else {
      newFavorites = cookieFavorite;
      newFavorites.push({
        ...stock,
        favorite: true
      });
    }

    setFavorites(newFavorites);
    Cookies.set("@douglasgmsantos:favorites", JSON.stringify(newFavorites));

    Notifyer.notify({ title: "Atenção", body: "Lista de favoritos atualizado." })
  }


  return (
    <FavoriteContext.Provider value={{ favorites, handleFavorite }} >
      {children}
    </FavoriteContext.Provider>
  );
};

function useFavorite(): FavoriteContextData {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error('useTheme must be used within as FavoriteProvider');
  }

  return context;
}

export { FavoriteProvider, useFavorite };