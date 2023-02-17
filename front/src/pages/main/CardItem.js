import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function CardItem({ card }) {

    const navigate = useNavigate()

    return (
        <Grid item key={card.placeId} xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 0 }} onClick={() => navigate(`/inMap`, { state: { card } })}
            >
                <CardMedia
                    component="img"
                    image={card.imageUrl}
                    alt={card.alt}
                    style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        height: '250px',
                        borderRadius: 10
                    }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="body1">
                        <b>{card.mainAddressHint} </b>
                    </Typography>
                    <Typography variant="body1">
                        100km 거리
                    </Typography>
                    <Typography variant="body1">
                        20 포인트
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}
