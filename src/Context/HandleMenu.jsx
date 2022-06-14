import React from "react";

export const MenuContext = React.createContext();

export default function MenuHambugerProvider({ children }) {
  const [menu, setMenu] = React.useState(false);

  function handleMenu() {
    setMenu(!menu);
  }
  return (
    <MenuContext.Provider value={[menu, setMenu,handleMenu ]}>
      {children}
    </MenuContext.Provider>
  );
}
