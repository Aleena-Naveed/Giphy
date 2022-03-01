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
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";


export const Gifcard = ({ id, setId, username, title, datetime, url }) => {

    return (
        <Grid container sx={{ bgcolor: "#000" }}>
            <Grid
                container
                sx={{ marginTop: "2%" }}
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >
                {/* {data.map((el) => ( */}
                    <Grid item sx={{ margin: "3px" }} spacing={2} key={id}>
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
                                        // onClick={() => { saveArray() }}
                                    >
                                        <FavoriteBorderOutlinedIcon />
                                    </IconButton>
                                }
                                title={
                                    username
                                }
                                subheader={
                                    datetime
                                }
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={url}
                                alt={title}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                {/* ))} */}
                ;
            </Grid>
        </Grid>
    )
}