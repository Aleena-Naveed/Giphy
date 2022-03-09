import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from "@mui/material/IconButton";
import Image from "../Components/imgComp";

const DetailGif = () => {

    const [id, setId] = useState("");
    const [detail, setDetail] = useState(null);
    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        const fetchGifDetail = async () => {
            try {
                const results = await axios("https://api.giphy.com/v1/gifs/" + id, {
                    params: {
                        api_key: "ynEBIL0IuyPRz5Sgfoh8VyId08vBK8eg",
                    },
                });
                setDetail(results?.data?.data);

            } catch (error) {
                console.log("error", error);
            }
        };
        if (!id.isEmpty) { fetchGifDetail(); }
    }, [id]);

    useEffect(() => {
        if (location.state) {
            setId(location.state.gifid)
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
                sx={{ marginTop: "2px", marginLeft: "1%", bgcolor: "#000", color: "#fff", minHeight: '100vh' }}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item sx={{ margin: "3px" }}>

                    <div>
                        <Image src={detail?.images?.fixed_height?.url || ""} alt="loading..." style={{ height: 600, width: 800 }} />
                        <p >Title:&nbsp;&nbsp;{detail?.title || ""}</p>
                        <p >Username:&nbsp;&nbsp;{detail?.username || ""}</p>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default DetailGif;