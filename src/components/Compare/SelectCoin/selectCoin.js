import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import SelectDays from "../../Coin/SelectDays/selectDays";
import "./style.css";

function SelectCoin({
  allCoins,
  coin1,
  coin2,
  days,
  handleCoinChange,
  handleDaysChange,
}) {
  const selectStyle = {
    height: "2.5rem",
    color: "var(--white)",
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
      
        borderColor:"#f94141",
      },
    },
  };

  return (
    
    <div className="select-flex">
      <p>Crypto 1</p>
      <Select
        className="select-coin"
        value={coin1}
       color="error"
        onChange={(e) => handleCoinChange(e, true)}
        sx={selectStyle}
      >
        {allCoins
          .filter((coin) => coin.id != coin2)
          .map((coin, index) => (
            <MenuItem key={index} value={coin.id}>
              {coin.name}
            </MenuItem>
          ))}
      </Select>
      <p>Crypto 2</p>
      <Select
        className="select-coin"
        value={coin2}
        color="error"
        onChange={(e) => handleCoinChange(e, false)}
        sx={selectStyle}
      >
        {allCoins
          .filter((coin) => coin.id != coin1)
          .map((coin, index) => (
            <MenuItem key={index} value={coin.id}>
              {coin.name}
            </MenuItem>
          ))}
      </Select>
      <SelectDays
        days={days}
        handleDaysChange={(e) => handleDaysChange(e)}
        noText={true}
      />
    </div>
    
  );
}

export default SelectCoin;