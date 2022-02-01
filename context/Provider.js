import React, {createContext, useState} from 'react';

export const Context = createContext();

export function Provider({children}) {
  const [card, setCard] = useState([]);

  return (
    <Context.Provider value={{card, setCard}}>{children}</Context.Provider>
  );
}
