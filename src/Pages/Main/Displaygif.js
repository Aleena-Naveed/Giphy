import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { HomeGifs } from '../../ContextStores/MainStore';
import { LikedGifs } from '../../ContextStores/LikeStore';
import { useContext } from "react";
import InfoIcon from '@mui/icons-material/Info';
import CardActions from '@material-ui/core/CardActions';


export const Displaygif = () => {
    const { text, setText, data, setData, toggle, setToggle, value, setValue } = useContext(HomeGifs);
    const { liked, setLiked } = useContext(LikedGifs);

    const handleClick = () => {
        console.log("Hello")
    }
    return (
        <Grid >
            {
                (!toggle) ? (
                    <Grid container sx={{
                        bgcolor: "#000"
                    }}  >
                        <Grid
                            container
                            sx={{
                                marginTop: "2%",
                                minHeight: '100vh',
                            }}
                            direction="row"
                            justifyContent="space-evenly"
                            alignItems="center"
                        >
                            {data.map((el) => (

                                <Grid item sx={{ margin: "3px" }} spacing={2} key={el.id}>
                                    <Card sx={{ maxWidth: 320, minWidth: 320, maxHeight: 340, minHeight: 340 }}>
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
                                            onClick={handleClick}
                                        />
                                        
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                                {el.title}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid >
                ) : (
                    value === "A" ?
                        (
                            <Grid container sx={{ bgcolor: "#000" }} >
                                <Grid
                                    container
                                    sx={{ marginTop: "2%" }}
                                    direction="row"
                                    justifyContent="space-evenly"
                                    alignItems="center"
                                >
                                    {data.sort((a, b) => new Date(a.trending_datetime) - new Date(b.trending_datetime)
                                    ).map((el) => (
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
                                    )
                                    )}
                                    <p>Hello</p>
                                </Grid>
                            </Grid >
                        )
                        : (
                            <Grid container sx={{ bgcolor: "#000" }} >
                                <Grid
                                    container
                                    sx={{ marginTop: "2%" }}
                                    direction="row"
                                    justifyContent="space-evenly"
                                    alignItems="center"
                                >
                                    {data.sort((a, b) => new Date(b.trending_datetime) - new Date(a.trending_datetime)
                                    ).map((el) => (
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
                                    )
                                    )}
                                    <p>Hello</p>
                                </Grid>
                            </Grid >
                        )
                )
            }
        </Grid >
    );
}

// new Date(a.trending_datetime) - new Date(b.trending_datetime)