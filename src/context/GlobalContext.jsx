import { createContext, useState } from "react";

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
    const [yigindi, setYigindi]=useState(0)
    const qoshish=(v)=>{
        setYigindi(yigindi+v)
        console.log(v)
    }
  return (
    <GlobalContext.Provider value={{yigindi,qoshish}}>
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalContextProvider };