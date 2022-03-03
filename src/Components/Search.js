import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { red, grey } from "@mui/material/colors";
import { useHistory } from "react-router-dom";
// { text, setText, data, setData, liked, setLiked, onClick }
export const Searchgif = ({ text, setText, data, setData, liked, setLiked, onClick }) => {

    const history = useHistory();

    const handleSearchChange = (event) => {
        setText(event.target.value);
    };

    function handleClickLike() {
        history.push({
            pathname: '/liked',
            state: {
                liked: liked,
                data: data,
            }
        });
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
