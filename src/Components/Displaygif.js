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
// import { AsyncStorage } from 'reactjs-async-localstorage';


// import { Gifcard } from './gifCard';

export const Displaygif = ({ data, setData, liked, setLiked }) => {

    // const asyncLocalStorage = {
    //     setItem: async function (key, value) {
    //         return localStorage.setItem(key, value);
    //     }
    // };

    // const saveArray = () => {
    //     console.log("saveArray");
    //     const list = JSON.stringify(liked);
    //     return (localStorage.setItem("likedArray", list));
    // };

    return (
        <Grid container sx={{ bgcolor: "#000" }}>
            <Grid
                container
                sx={{ marginTop: "2%" }}
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >
                {data.map((el) => (
                    <Grid item sx={{ margin: "3px" }} spacing={2} key={el.id}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                avatar={
                                    // loading ? (
                                    //     <Skeleton
                                    //         animation="wave"
                                    //         variant="circular"
                                    //         width={40}
                                    //         height={40}
                                    //     />
                                    // ) : (
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        R
                                    </Avatar>
                                    // )
                                }
                                action={
                                    // loading ? null : (
                                    // <Checkbox checked = {fav}  icon={<FavoriteBorder />} checkedIcon={<FavoriteIcon sx={{ color: red[500] }} /> } onClick={() => { handleIconClick(el.images.fixed_height.url);}}/>
                                    <IconButton
                                        sx={{ color: red[500] }}
                                        aria-label="add to favorites"
                                        onClick={() => {
                                            //     // setClicked(true);
                                            //     // if (!temp.includes(el.images.fixed_height.url))
                                            //     //   temp.push(el.images.fixed_height.url);
                                            //     // console.log(temp);
                                            //     // temp.map((obj, index) => {
                                            //     //   localStorage.setItem(index, obj);
                                            //     // });
                                            //     // console.log(localStorage);
                                            if (liked?.includes(el.id)) {
                                                setLiked(liked => liked.filter((id) => id != el.id));
                                                console.log(setLiked);
                                                //setLiked(liked.filter((item) => (item = !el.id)));
                                            } else {
                                                if (liked) {
                                                    setLiked([...liked, el.id]);
                                                    console.log("if");
                                                }
                                                else {
                                                    setLiked([el.id]);
                                                    console.log("else");
                                                }

                                            }
                                        }}
                                    >
                                        {liked?.includes(el.id) ? (
                                            <FavoriteIcon />
                                        ) : (
                                            <FavoriteBorderOutlinedIcon />
                                        )}
                                    </IconButton>
                                    // )
                                }
                                title={
                                    // loading ? (
                                    //     <Skeleton
                                    //         animation="wave"
                                    //         height={10}
                                    //         width="80%"
                                    //         style={{ marginBottom: 6 }}
                                    //     />
                                    // ) : (
                                    el.username
                                    // )
                                }
                                subheader={
                                    // loading ? (
                                    //     <Skeleton animation="wave" height={10} width="40%" />
                                    // ) : (
                                    el.import_datetime
                                    // )
                                }
                            />
                            {/* {loading ? (
                                <Skeleton
                                    sx={{ height: 190 }}
                                    animation="wave"
                                    variant="rectangular"
                                />
                            ) : ( */}
                            <CardMedia
                                component="img"
                                height="194"
                                image={el.images.fixed_height.url}
                                alt={el.title}
                            />
                            {/* )} */}

                            <CardContent>
                                {/* {loading ? (
                                    <Skeleton
                                        animation="wave"
                                        height={10}
                                        style={{ marginBottom: 6 }}
                                    />
                                ) : ( */}
                                <Typography variant="body2" color="text.secondary">
                                    {el.title}
                                </Typography>
                                {/* )} */}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                ;
            </Grid>
        </Grid>


    );
}