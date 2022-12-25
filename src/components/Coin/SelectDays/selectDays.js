import { MenuItem, Select } from "@mui/material";
import { useState } from "react";
import "./style.css";

function SelectDays({ days, handleDaysChange, noText }) {
  return (
    <div className="select-days">
      {!noText && <p>Price Change in </p>}
      <Select
        value={days}
        color="error"
        onChange={handleDaysChange}
        sx={{
        //   height: "2 rem",
          color: "var(--white)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--white)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#e93a4b",
            },
          },
        }}
      >
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={90}>90 Days</MenuItem>
        <MenuItem value={120}>120 Days</MenuItem>
      </Select>
    </div>
  );
}

export default SelectDays;