import React, { useState, useEffect, useCallback } from "react";
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
import axios from "axios";
import debounce from 'lodash.debounce'

export const Searchgif = () => {
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

    function handleClickLike() {
        history.push("/liked");
    }


    const handleChangeA = () => {
        setAnchorEl(null);
        setValue("A");
        console.log("value", value);
        setToggle(true);
    };

    const handleChangeD = () => {
        setAnchorEl(null);
        setValue("D");
        console.log("value", value);
        setToggle(true);
    };

    const handleInputThrottled = (query) => {
        setText(query);
        handleSubmit(query);
    };

    const handleSubmit = useCallback(debounce(async (query) => {

        console.log("query", query);
        try {
            const results = await axios("https://api.giphy.com/v1/gifs/search", {
                params: {
                    api_key: "ynEBIL0IuyPRz5Sgfoh8VyId08vBK8eg",
                    q: query,
                },
            });
            console.log("results.data.data", results.data.data);
            setData((data) => results?.data?.data);
            setText("");
        } catch (error) {
            console.log("error", error);
        }
    }, 500), []);

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
                            onChange={(e) => handleInputThrottled(e.target.value)}
                            type="text"
                        />
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
                            <MenuItem sx={{ color: "#000" }} onClick={handleChangeA}>
                                Ascending
                            </MenuItem>
                            <MenuItem sx={{ color: "#000" }} onClick={handleChangeD}>
                                Descending
                            </MenuItem>
                        </Menu>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
