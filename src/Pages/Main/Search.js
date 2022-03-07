import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { red } from "@mui/material/colors";
import { useHistory } from "react-router-dom";
import { HomeGifs } from '../../ContextStores/MainStore';
import { useContext } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const Searchgif = ({ onClick }) => {
    const { text, setText, data, setData, toggle, setToggle, value, setValue } = useContext(HomeGifs);
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSearchChange = (event) => {
        setText(event.target.value);
    };

    function handleClickLike() {
        history.push("/liked");
    }


    const handleChangeA = (event) => {
        setAnchorEl(null);
        setValue("A");
        console.log("value", value);
        setToggle(true);
    };

    const handleChangeD = (event) => {
        setAnchorEl(null);
        setValue("D");
        console.log("value", value);
        setToggle(true);
    };

    return (
        <Grid container sx={{ bgcolor: "#000" }}>
            <Grid container sx={{ marginTop: "1%" }}>
                <Grid item xs={2}></Grid>
                <Grid
                    container
                    xs={8}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item>
                        <TextField
                            sx={{
                                bgcolor: "primary.main",
                                borderRadius: "10px",
                                Color: "#000",
                                width: "600px",
                            }}
                            fullWidth
                            id="standard-basic"
                            placeholder="Search"
                            value={text}
                            onChange={handleSearchChange}
                            type="text"
                        />
                    </Grid>
                    <Grid item>
                        <IconButton
                            sx={{ color: "#fff" }}
                            aria-label="search"
                            onClick={onClick}
                        >
                            <SearchIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid
                    container
                    sx={{ paddingRight: "2%" }}
                    xs={2}
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                >
                    <Grid item>
                        <IconButton
                            sx={{ color: red[500] }}
                            aria-label="search"
                            onClick={handleClickLike}
                        >
                            <FavoriteIcon />
                        </IconButton>
                    </Grid>
                    <Grid item direction="row">
                        <IconButton
                            sx={{ color: "#fff" }}
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <FilterAltIcon />
                        </IconButton>
                        <Menu
                            id="long-menu"
                            MenuListProps={{
                                'aria-labelledby': 'long-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                                style: {
                                    width: '20ch',
                                },
                            }}
                        >
                            <MenuItem onClick={handleChangeA}>
                                Ascending
                            </MenuItem>
                            <MenuItem onClick={handleChangeD}>
                                Descending
                            </MenuItem>
                        </Menu>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
