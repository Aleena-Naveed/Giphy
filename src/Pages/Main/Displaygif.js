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
import { useHistory } from "react-router-dom";
import Image from "../../Components/imgComp";
import { useScrollToBottom } from "../../CustomHook/useScrollToBottom"
import CircularProgress from '@mui/material/CircularProgress';



export const Displaygif = ({ onScrollEnd }) => {
    const { text, setText, data, setData, toggle, setToggle, value, setValue, loading, setLoading, offset, setOffset } = useContext(HomeGifs);
    const { liked, setLiked } = useContext(LikedGifs);
    const history = useHistory();

    function handleClickDetail(id) {
        history.push({
            pathname: "/details",
            state: {
                gifid: id
            }
        })
    }

    useScrollToBottom(() => {
        if (!loading) {
            onScrollEnd()
        }
    })

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
                                            onClick={() => handleClickDetail(el.id)}
                                        >
                                            {<Image src={el?.images?.fixed_height?.url || ""} alt="loading..." style={{ height: 200, width: 324 }} />}
                                        </CardMedia>
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
                                        <Grid item sx={{ margin: "3px" }} spacing={2} key={el.id+"1"}>
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
                                                    onClick={() => handleClickDetail(el.id)}
                                                >
                                                    {<Image src={el?.images?.fixed_height?.url || ""} alt="loading..." style={{ height: 200, width: 324 }} />}
                                                </CardMedia>

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
                                        <Grid item sx={{ margin: "3px" }} spacing={2} key={el.id+"2"}>
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
                                                    onClick={() => handleClickDetail(el.id)}
                                                >
                                                    {<Image src={el?.images?.fixed_height?.url || ""} alt="loading..." style={{ height: 200, width: 324 }} />}
                                                </CardMedia>

                                                <CardContent>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {el.title}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    )
                                    )}
                                </Grid>
                            </Grid >
                        )
                )
            }
        </Grid >
    );
}

// new Date(a.trending_datetime) - new Date(b.trending_datetime)