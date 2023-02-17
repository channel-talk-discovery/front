import { AlertTitle, AppBar, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { getImageCompareResult, uploadImageS3 } from "../apis"
import Alert from '@mui/material/Alert';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Detail = () => {
    const { state } = useLocation()

    const card = state.card
    console.log(card)

    const navigate = useNavigate()
    const [uploadedImageUrl, setUploadedImageUrl] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null)
    const [result, setResult] = useState(null)

    useEffect(() => {
        const uploadImage = async () => {
            const url = await uploadImageS3(selectedImage)
            setUploadedImageUrl(url)
        }

        if (selectedImage) {
            uploadImage(selectedImage)
        }
    }, [selectedImage])

    useEffect(() => {
        const fetchScore = async () => {
            const result = await getImageCompareResult(uploadedImageUrl)
            setResult(result)
        }

        if (uploadedImageUrl) {
            fetchScore()
        }
    }, [uploadedImageUrl])

    useEffect(() => {
        if (result === "A") {

            return
        }

    }, [result])

    return (
        <div className="detail">
            <div style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
            }}>
                <div style={{
                    display: "flex",
                    alignItems: "start",
                    flexDirection: "row",
                    width: "100%",
                }}>
                    <IconButton onClick={() => navigate("/main")} size="large">
                        <ArrowBackIosIcon />
                    </IconButton>

                </div>

                <Card sx={{ boxShadow: 0, width: "100%" }}
                >
                    <CardMedia
                        component="img"
                        image={card.image}
                        alt={card.alt}
                        style={{
                            display: 'block',
                            objectFit: 'cover',
                            width: '100%',
                            height: 300
                        }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="h5">
                            <b>{card.desc} </b>
                        </Typography>
                        <Typography variant="body1">
                            100km 거리
                        </Typography>
                        <Typography variant="body1">

                        </Typography>
                    </CardContent>
                </Card>

                <hr style={{ borderTop: '0.5px solid #bbb', width: "90%" }} />

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" >
                        위 장소로 이동하여 최대한 비슷한 사진을 찍어보세요!
                        <br /> 최대  <b> 20 ~ 50 포인트 </b>를 받으실 수 있습니다
                    </Typography>
                </div>

                <Button startIcon={<CameraAltIcon />} variant="contained" component="label" size="large" style={{ marginTop: 15 }}>
                    업로드
                    <input hidden accept="image/*" multiple type="file" onChange={(event) => {
                        console.log(event.target.files[0]);
                        setSelectedImage(event.target.files[0]);
                    }} />
                </Button>


                <hr style={{ borderTop: '0.5px solid #bbb', width: "90%", marginTop: 15 }} />


                <Card sx={{ boxShadow: 0, width: "100%" }}
                >
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="h5">
                            <b>내 사진</b>
                        </Typography>
                    </CardContent>

                    {selectedImage ?
                        <CardMedia
                            component="img"
                            image={URL.createObjectURL(selectedImage)}
                            style={{
                                display: 'block',
                                objectFit: 'cover',
                                // width: '100%',
                                height: 300,
                            }}
                        /> :
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <div style={{
                                width: 300,
                                height: 200,
                                border: '3px dotted #bbb',
                                display: "flex", justifyContent: "center", alignItems: "center"
                            }}
                            >
                                <Typography variant="h6">
                                    이미지를 업로드해 주세요
                                </Typography>
                            </div>
                        </div>
                    }
                </Card>
            </div>

            {(result === "fail") &&
                <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>

                    <Alert severity="error" color="error">
                        <AlertTitle> 다시 시도해주세요! </AlertTitle>
                        동일한 장소로 확인되지 않습니다.
                    </Alert>
                </AppBar>}


        </div>
    );
};

export default Detail;