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
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

const Gif = (props) => {
  // const classes = useStyles();
  const { loading = false } = props;
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [clicked, setClicked] = useState(false);
  const temp = [];

  const [liked, setLiked] = useState([]);

  // const id = 0;

  // const handleIconClick = (url) => {

  //     if (!temp.includes(url))
  //     {
  //         setFav(true);
  //         temp.push(url, fav);
  //     }
  //     console.log(temp)
  //     temp.map((obj, index) => {
  //         localStorage.setItem(index, obj)
  //     })
  //     console.log(localStorage)
  // }

  useEffect(() => {
    const url =
      "http://api.giphy.com/v1/gifs/trending?api_key=ynEBIL0IuyPRz5Sgfoh8VyId08vBK8eg";

    const fetchAdvice = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setData(json.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    const fetchLiked = () => {
      setLiked(localStorage.getItem("likedArray"));
    };
    fetchAdvice();
    fetchLiked();
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(search);
      const results = await axios("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "ynEBIL0IuyPRz5Sgfoh8VyId08vBK8eg",
          q: search,
        },
      });
      console.log(results);
      setData(results.data.data);
      setSearch("");
    } catch (error) {
      console.log("error", error);
    }
  };

  const saveArray = () => {
    return localStorage.setItem("likedArray", liked);
  };

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
              value={search}
              onChange={handleSearchChange}
              type="text"
            />
          </Grid>
          <Grid item>
            <IconButton
              sx={{ color: "#fff" }}
              aria-label="search"
              onClick={handleSubmit}
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
              onClick={handleSubmit}
            >
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              sx={{ color: "#fff" }}
              aria-label="search"
              onClick={handleSubmit}
            >
              <FilterAltIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
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
                  loading ? (
                    <Skeleton
                      animation="wave"
                      variant="circular"
                      width={40}
                      height={40}
                    />
                  ) : (
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  )
                }
                action={
                  loading ? null : (
                    // <Checkbox checked = {fav}  icon={<FavoriteBorder />} checkedIcon={<FavoriteIcon sx={{ color: red[500] }} /> } onClick={() => { handleIconClick(el.images.fixed_height.url);}}/>
                    <IconButton
                      sx={{ color: red[500] }}
                      aria-label="add to favorites"
                      onClick={() => {
                        // setClicked(true);
                        // if (!temp.includes(el.images.fixed_height.url))
                        //   temp.push(el.images.fixed_height.url);
                        // console.log(temp);
                        // temp.map((obj, index) => {
                        //   localStorage.setItem(index, obj);
                        // });
                        // console.log(localStorage);
                        if (liked?.includes(el.id)) {
                          setLiked(liked.filter((id) => id != el.id));
                          console.log(setLike)
                          //setLiked(liked.filter((item) => (item = !el.id)));
                        } else {
                          if (liked) {
                            setLiked([...liked, el.id]);
                          } else {
                            setLiked(el.id);
                          }
                        }
                        saveArray();
                      }}
                    >
                      {liked?.includes(el.id) ? (
                        <FavoriteIcon />
                      ) : (
                        <FavoriteBorderOutlinedIcon />
                      )}
                    </IconButton>
                  )
                }
                title={
                  loading ? (
                    <Skeleton
                      animation="wave"
                      height={10}
                      width="80%"
                      style={{ marginBottom: 6 }}
                    />
                  ) : (
                    el.username
                  )
                }
                subheader={
                  loading ? (
                    <Skeleton animation="wave" height={10} width="40%" />
                  ) : (
                    el.import_datetime
                  )
                }
              />
              {loading ? (
                <Skeleton
                  sx={{ height: 190 }}
                  animation="wave"
                  variant="rectangular"
                />
              ) : (
                <CardMedia
                  component="img"
                  height="194"
                  image={el.images.fixed_height.url}
                  alt={el.title}
                />
              )}

              <CardContent>
                {loading ? (
                  <Skeleton
                    animation="wave"
                    height={10}
                    style={{ marginBottom: 6 }}
                  />
                ) : (
                  <Typography variant="body2" color="text.secondary">
                    {el.title}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
        ;
      </Grid>
    </Grid>
  );
};

export default Gif;
