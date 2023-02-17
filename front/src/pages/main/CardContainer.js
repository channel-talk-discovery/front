import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { tabs } from "./Tabs";
import { getMainCards } from "../apis";
import CardItem from "./CardItem";

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
                    <CardItem card=
                        {card} />
                ))}
            </Grid>
        </Container>
    )
}