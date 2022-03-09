import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from "@mui/material/IconButton";

const DetailGif = () => {

    const [id, setId] = useState("");
    const [detail, setDetail] = useState(null);
    const location = useLocation();
    const history = useHistory();
    console.log(location);
    console.log(location.state);

    useEffect(() => {
        const fetchGifDetail = async () => {
            try {
                const results = await axios("https://api.giphy.com/v1/gifs/" + id, {
                    params: {
                        api_key: "ynEBIL0IuyPRz5Sgfoh8VyId08vBK8eg",
                    },
                });
                console.log("results.data.data", results.data.data);
                setDetail(results?.data?.data);

            } catch (error) {
                console.log("error", error);
            }
        };
        if (!id.isEmpty) { fetchGifDetail(); }
    }, [id]);

    useEffect(() => {
        console.log("hello", location);
        if (location.state) {
            console.log(location.state)
            setId(location.state.gifid)
            console.log("detailspageid", id)
        }
    }, [location]);

    return (
        <Grid container sx={{
            bgcolor: "#000"
        }}>
            < Grid container sx={{
                marginTop: "1%"
            }}>
                <Grid item xs={2}>
                    <IconButton
                        sx={{ color: "#000", fontSize: "24%", fontFamily: 'Material Icon', fontWeight: '400', marginLeft: "8%" }}
                        aria-label="search"
                        onClick={() => history.goBack()}
                    >
                        <ArrowBackIcon color="primary" sx={{ color: "#fff" }} fontSize="medium" fontWeight='50%' />
                    </IconButton>
                </Grid>
            </Grid >
            <Grid
                container
                sx={{ marginTop: "2px", marginLeft: "1%", bgcolor: "#000", color: "#fff", minHeight: '100vh' }}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item sx={{ margin: "3px" }}>

                    <div>
                        <img src={detail?.images?.fixed_height?.url || ""}></img>
                        <br></br>
                        <div>
                            <p >Title:{detail?.title || ""}</p>
                            <p >Username:{detail?.username || ""}</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default DetailGif;