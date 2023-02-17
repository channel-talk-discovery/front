import './reward.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';

import Diamond from "../systemImage/Diamond.png";
import { Button, IconButton, Typography } from '@mui/material';

import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const RewardAnimation = () => {
    const { width, height } = useWindowSize()
    const navigate = useNavigate()

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "column", padding: 30 }}>

            <img src={Diamond} className="banner" />
            <div className='texxt' style={{paddingBottom: 10}} >
                <Typography variant='h1'> 축하합니다! </Typography>
                <Typography variant='h2'> A등급의 정확도에요! </Typography>

                <Button onClick={() => navigate("/main")} size="large" startIcon={<ArrowBackIosIcon />} variant="contained" component="label" style={{marginTop: 30}} >
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