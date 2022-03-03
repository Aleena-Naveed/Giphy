import React, { useState } from "react";
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

export const Displaygif = ({ data, setData, liked, setLiked }) => {

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
                                                console.log(setLiked);
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