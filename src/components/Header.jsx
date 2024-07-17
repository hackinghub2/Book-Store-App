import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";

const Header = () => {
  const [value, setValue] = useState();

  return (
    <div>
      <AppBar sx={{ backgroundColor: "grey" }} position="sticky">
        <Typography>
          <LibraryBooksOutlinedIcon
            style={{
              color: "white",
              position: "absolute",
              left: "30px",
              top: "15px",
            }}
          />
        </Typography>
        <Toolbar>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/" label="Home" />
            <Tab LinkComponent={NavLink} to="/add" label="Add product" />
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/about" label="About us" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
