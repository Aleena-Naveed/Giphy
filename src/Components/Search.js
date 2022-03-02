import React, { useState } from "react";
import { useEffect } from "react";
import fetch from "cross-fetch";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red, grey } from "@mui/material/colors";
import Skeleton from "@mui/material/Skeleton";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Redirect, useHistory } from 'react-router-dom';

export const Searchgif = ({ text, setText, data, setData, onClick }) => {
    
    const history = useHistory();

    const handleSearchChange = (event) => {
        setText(event.target.value);
    };
    function handleClickLike() {
        history.push("/liked");
    }
    function handleClickFilter() {
        history.push("/filtered");
    }

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
                    <Grid item>
                        <IconButton
                            sx={{ color: "#fff" }}
                            aria-label="search"
                         onClick={handleClickFilter}
                        >
                            <FilterAltIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
