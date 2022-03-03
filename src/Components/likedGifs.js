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


export const Likedgifs = () => {
    const Array = [1, 2, 3, 4];
    const List = [2, 3]

    const [liked, setLiked] = useState([]);
    const [data, setData] = useState([]);

    const location = useLocation();

    useEffect(() => {
        if ("location.state", location.state) {
            console.log(location.state)
            setLiked(location.state.liked)
            console.log("location.state.liked", liked)
            setData(location.state.data)
            console.log("location.state.data", data)
        }
    }, [location, liked]);
    return (
        <Grid container sx={{ bgcolor: "#000" }}>
            <Grid
                container
                sx={{ marginTop: "2%" }}
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >
                {liked.map((item) => (
                    data.map((el) => (
                        (item == el.id) ?
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
                            : null

                    ))
                ))
                }
                ;
            </Grid>
        </Grid>
    );
}