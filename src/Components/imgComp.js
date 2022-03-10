import { useEffect, useState, useCallback } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import ReactPlaceholder from "react-placeholder";
import placeholder from '../images/Img.png';
import { Grid } from "@mui/material";
import { Translate } from "@mui/icons-material";

const Image = ({ src, alt, style }) => {
    const [loading, setLoading] = useState(false);

    const imageStyle = !loading ? { display: "none" } : {};
    
    const onLoad = () => {
        setLoading(true);
    }

    const image = <img src={src} alt={alt} style={imageStyle} onLoad={onLoad} />;
    return (
        <>
            {/* <img
                
                onLoad={onLoad}
                src={src}
                alt={alt}
            />
            {!loading && <CircularProgress />} */}
            <div >
                {loading ?
                    (
                        <img src={src} alt={alt} style={Object.assign(imageStyle, style)} onLoad={onLoad} />
                    )
                    :
                    (
                        // <div class="relative">This div element has position: relative;
                        //     <div class="absolute">This div element has position: absolute;</div>
                        // </div>

                        <div style={{
                            position: "relative",

                            // border: "3px solid #73AD21"
                        }}
                        >
                            <img
                                src={placeholder}
                                alt="loading"
                                style={style}
                            />
                            <div style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                width: "200px",
                                height: "100px",
                                transform: "translate('-50%','-50%')"
                            }}>
                                <CircularProgress color="warning" />
                            </div>
                        </div>
                    )
                }
                {!loading && image}
            </div>
        </>
    )
}
export default Image;

// { !loading && image }