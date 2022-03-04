import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red, grey } from "@mui/material/colors";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { height } from "@mui/system";
import { Gifs } from '../store/store';
import React, { useContext } from "react";
import axios from "axios";


export const Likedgifs = () => {
    const { data, setData, liked, setLiked } = useContext(Gifs);
    console.log("liked", liked);
    const [favGifs, setFavGifs] = useState([]);

    useEffect(() => {
        const fetchFavGifs = async () => {
            try {
                const results = await axios("https://api.giphy.com/v1/gifs", {
                    params: {
                        api_key: "ynEBIL0IuyPRz5Sgfoh8VyId08vBK8eg",
                        ids: liked.join(",")
                    },
                });
                console.log("results.data.data", results.data.data);
                // setFavGifs([]);
                setFavGifs(results?.data?.data);
                console.log("favGifs", favGifs);
                // setText("");

            } catch (error) {
                console.log("error", error);
            }
        };
        if (liked.length) { fetchFavGifs(); }
    }, [liked]);

    // useEffect(() => {
    //     const likedIds = JSON.parse(localStorage.getItem("likedArray"));
    //     setLiked(likedIds);

    // }, [])

    // useEffect(() => {
    //     const list = JSON.stringify(liked);
    //     return (localStorage.setItem("likedArray", list));

    // }, [liked])


    // const location = useLocation();

    // useEffect(() => {
    //     if ("location.state", location.state) {
    //         setLiked(location.state.fav)
    //         console.log("location.state", liked)
    //         setData(location.state.allgifs)
    //     }
    // }, [location, liked]);


    return (
        <Grid container sx={{ bgcolor: "#000" }}>

            <Grid
                container
                sx={{ marginTop: "2%" }}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {favGifs.map((el) => (
                    <Grid item sx={{ margin: "3px" }} spacing={2} key={el.id}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                        R
                                    </Avatar>
                                }
                                action={
                                    <IconButton
                                        sx={{ color: red[500] }}
                                        aria-label="add to favorites"
                                        onClick={() => {
                                            if (liked?.includes(el.id)) {
                                                setLiked(liked => liked.filter((id) => id != el.id));
                                                setFavGifs(favGifs => favGifs.filter((id) => id != el.id));
                                                console.log(setLiked);
                                                console.log("editfavGifs", favGifs)
                                            } else {
                                                if (liked) {
                                                    setLiked([...liked, el.id]);
                                                    console.log("display liked", liked);
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
                                }
                                title={
                                    el.username
                                }
                                subheader={
                                    el.import_datetime
                                }
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={el.images.fixed_height.url}
                                alt={el.title}
                            />

                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {el.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                ;
            </Grid>
        </Grid>
    );
}