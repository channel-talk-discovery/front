import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { borderColor, borderRadius } from "@mui/system";
import { useNavigate }  from "react-router-dom";

import Diamond from "./systemImage/Diamond.png";
import Gold from "./systemImage/Gold.png";
import Silver from "./systemImage/Silver.png";
import Bronze from "./systemImage/Bronze.png";

import "../css/reward.css";

import logo from "./logoImage/ImHereLogo.png";
const mainColor = "#ffb03b";
const headerColor = "#ff932e";
const cardColor = "#ffc261";

const Reward = () => {
    const navigate = useNavigate();
    const theme = createTheme();
    function Copyright() {
        return (
          <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
              Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }
    return(
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <main style={{ 
             backgroundColor: mainColor
        }}>
          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 1,
            }}
            style={{ 
                backgroundColor: mainColor
           }}
          >
          </Box>
          <Container sx={{ py: 8, alignItems: "center" }} maxWidth="md">
            {/* End hero unit */}
            <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} style={{
                        backgroundColor: cardColor,
                        borderRadius: "30px",
                        cursor: "pointer",
                    }}
                  >
                    <img src={Diamond} className="banner"/>
                    <div className='texxt'> 축하합니다! </div>
                    <div className='texxt'> A등급의 정확도입니다! </div>
                  </Card>
          </Container>
        </main>
        {/* Footer */}
        <Box sx={{ bgcolor: 'background.paper', pt: 6, pb: 100 }} component="footer" style={{
            backgroundColor: mainColor,
        }}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            Something here to give the footer a purpose!
          </Typography>
          <Copyright />
        </Box>
        {/* End footer */}
      </ThemeProvider>
    );
};

export default Reward;