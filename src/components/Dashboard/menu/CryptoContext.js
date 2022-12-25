import React, { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [coins, setCoins] = useState("INR");
  const [symbol, setSymbol] = useState("₹");

  useEffect(() => {
    if (coins=== "INR") setSymbol("₹");
    else if (coins === "USD") setSymbol("$");
  }, [coins]);

  return (
    <Crypto.Provider value={{ coins, setCoins, symbol }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};