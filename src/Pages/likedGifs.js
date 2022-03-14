import { useEffect, useState } from "react";
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
import { LikedGifs } from '../ContextStores/LikeStore';
import React, { useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Image from "../Components/imgComp";


export const Likedgifs = () => {
    const { liked, setLiked } = useContext(LikedGifs);
    console.log("liked", liked);
    const [favGifs, setFavGifs] = useState([]);
    const history = useHistory();

    function handleClickDetail(id) {
        history.push({
            pathname: "/details",
            state: {
                gifid: id
            }
        })
    }

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
                setFavGifs(results?.data?.data);
                console.log("favGifs", favGifs);

            } catch (error) {
                console.log("error", error);
            }
        };
        if (liked.length) { fetchFavGifs(); }
    }, [liked]);

    return (
        <Grid container sx={{
            bgcolor: "#000"
        }}>
            < Grid container sx={{
                marginTop: "1%"
            }}>
                <Grid item xs={2}>
                    <IconButton
                        // 

                        sx={{ color: "#fff", fontSize: "24%", fontFamily: 'Material Icon', fontWeight: '400', marginLeft: "8%" }}
                        aria-label="search"
                        onClick={() => history.goBack()}
                    >
                        <ArrowBackIcon color="primary" sx={{ color: "#fff" }} fontSize="medium" fontWeight='50%' />
                    </IconButton>
                </Grid>
            </Grid >
            <Grid
                container
                sx={{ marginTop: "2px", marginLeft: "1%", bgcolor: "#000", minHeight: '100vh' }}
                direction="row"
                justifyContent="center"
            // /alignItems="center"
            >
                {favGifs.map((el) => (
                    <Grid item sx={{ margin: "3px" }} spacing={2} key={el.id + "3"}>
                        <Card sx={{ maxWidth: 320, minWidth: 320, maxHeight: 330, minHeight: 330 }}>
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
                ;
            </Grid>
        </Grid >
    );
}
// spacing = { 2}
// sx = {{ margin: "3px" }}