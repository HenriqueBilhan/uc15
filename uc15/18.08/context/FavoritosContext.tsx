import React, {
  createContext,
  useState,
} from 'react';

type FavoritosContextData = {
  favoritos: any[];
  adicionarFavorito: (serie: any) => void;
  removerFavorito: (id: number) => void;
  verificarFavorito: (id: number) => boolean;
};

export const FavoritosContext =
  createContext<FavoritosContextData>(
    {} as FavoritosContextData
  );

export function FavoritosProvider({
  children,
}: any) {
  const [favoritos, setFavoritos] =
    useState<any[]>([]);

  function adicionarFavorito(serie: any) {
    const existe = favoritos.some(
      (item) => item.id === serie.id
    );

    if (!existe) {
      setFavoritos([
        ...favoritos,
        serie,
      ]);
    }
  }

  function removerFavorito(id: number) {
    const novaLista = favoritos.filter(
      (item) => item.id !== id
    );

    setFavoritos(novaLista);
  }

  function verificarFavorito(id: number) {
    return favoritos.some(
      (item) => item.id === id
    );
  }

  return (
    <FavoritosContext.Provider
      value={{
        favoritos,
        adicionarFavorito,
        removerFavorito,
        verificarFavorito,
      }}
    >
      {children}
    </FavoritosContext.Provider>
  );
}