import { Button } from "@mui/material";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Detail = () => {
    const { state } = useLocation()

    const card = state.card
    console.log(card)

    const [uploadedImageUrl, setUploadedImageUrl] = useState("")



    return (
        <div className="detail">
            <div className="header" style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                padding: 30
            }}>
                <Button> 목록으로 돌아가기 </Button>
                <Card sx={{ boxShadow: 0 }}
                >
                    <CardMedia
                        component="img"
                        image={card.image}
                        alt={card.alt}
                        style={{
                            display: 'block',
                            objectFit: 'cover',
                            width: '100%',
                            borderRadius: 10
                        }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="body1">
                            <b>{card.desc} </b>
                        </Typography>
                        <Typography variant="body1">
                            100km 거리
                        </Typography>
                        <Typography variant="body1">
                            20 포인트
                        </Typography>
                    </CardContent>
                </Card>
                <Button> 업로드 </Button>
                {card.id}
            </div>
        </div>
    );
};

export default Detail;