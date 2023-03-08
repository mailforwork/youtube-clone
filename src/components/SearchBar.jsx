import React from "react";
import { useState } from "react";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Searchbar = () => {
  return (
    <Paper>
      <input className="search-bar" placeholder="search..." />
      <IconButton type="search">
        
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Searchbar;
