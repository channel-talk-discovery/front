import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { tabs } from "./Tabs";
import { getMainCards } from "../apis";



export default function CardContainer({ tab }) {
    console.log(tab)

    const [cards, setCards] = useState([])

    useEffect(() => {
        async function fetchData() {
            const filter = tabs[tab].value
            console.log(filter)
            const newCards = await getMainCards(filter)
            setCards(newCards)    
        }
        fetchData()
    }, [tab])

    return (
        <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
                {cards.map((card) => (
                    <Grid item key={card.id} xs={12} sm={6} md={4}>
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
                                    height: '250px',
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
                    </Grid>
                ))}
            </Grid>
        </Container>

    )
}