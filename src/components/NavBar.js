import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import { NavLink } from "react-router-dom";

function NavBar() {
    const [value, setValue] = useState();
    return (
        <div>
            <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
                <Toolbar>
                    <NavLink to="/"style={{color: "white"}}>
                        <Typography>
                            <LibraryBooksOutlinedIcon />
                        </Typography>
                    </NavLink>
                    <Tabs
                        sx={{ ml: 'auto' }}
                        textColor="inherit"
                        indicatorColor="primary"
                        value={value}
                        onChange={(e, val) => setValue(val)} >
                        <Tab
                            LinkComponent={NavLink} to="/getallbooks"
                            label="Books" />
                        <Tab
                            LinkComponent={NavLink} to="/addnewbook"
                            label="Add book" />
                        <Tab
                            LinkComponent={NavLink} to="/aboutus"
                            label="About us" />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;