import React, { createContext, useState } from "react";

export const frontContext = createContext();

const FrontEndContext = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const allValue = { openMenu, setOpenMenu };
  return (
    <div>
      <frontContext.Provider value={allValue}></frontContext.Provider>
    </div>
  );
};

export default FrontEndContext;
