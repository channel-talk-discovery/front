import './reward.css'
import * as React from 'react';

import Diamond from "../systemImage/Diamond.png";
import Gold from "../systemImage/Gold.png";

import Silver from "../systemImage/Silver.png";
import Bronze from "../systemImage/Bronze.png";

import { Button, Typography } from '@mui/material';

import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const RewardAnimation = ({ result }) => {
    const { width, height } = useWindowSize()
    const navigate = useNavigate()

    const getImage = (result) => {
        if (result === "A") {
            return Diamond
        }

        if (result === "B") {
            return Gold
        }

        if (result === "C") {
            return Silver
        }

        return Bronze
    }

    const getText = (result) => {
        if (result === "A") {
            return "축하합니다!"
        }

        if (result === "B") {
            return "훌륭합니다!"
        }

        if (result === "C") {
            return "굉장합니다!"
        }

        return "잘했습니다!"
    }

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "column", padding: 30 }}>

            <img src={getImage(result)} className="banner" />
            <div className='texxt' style={{ paddingBottom: 10 }} >
                <Typography variant='h2'> {getText(result)} </Typography>
                <Typography variant='h3'> {result}등급의 정확도에요! </Typography>
                <Button onClick={() => navigate("/main")} size="large" startIcon={<ArrowBackIosIcon />} variant="contained" component="label" style={{ marginTop: 30 }} >
                    메인으로
                </Button>
            </div>
            <Confetti
                width={width}
                height={height}
            />
        </div >
    )

}

export default RewardAnimation