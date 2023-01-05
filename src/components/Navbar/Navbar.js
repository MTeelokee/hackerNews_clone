import * as React from "react";
// import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import './navbar.css'

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar({ query, setQuery }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Button variant="contained" onClick={(e) => setQuery('')}>home</Button>
        <div className="search">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </Search>
</div>
          <div className="links">
            {" "}
            <Stack spacing={1} direction="row">
            <Button variant="contained">new</Button>

              
              <Button variant="contained">past</Button>
              <Button variant="contained">comments</Button>
              <Button variant="contained">ask</Button>
              <Button variant="contained">show</Button>
              <Button variant="contained">jobs</Button>{" "}
              <Button variant="contained">submit</Button>
            </Stack>
          </div>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
let lastStories = 'http://hn.algolia.com/api/v1/search_by_date?tags=story'
let comments = 'http://hn.algolia.com/api/v1/search?tags=comment,story_X'