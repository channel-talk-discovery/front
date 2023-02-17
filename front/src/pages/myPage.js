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

import logo from "./logoImage/ImHereLogo.png";
const mainColor = "#ffb03b";
const headerColor = "#ff932e";
const cardColor = "#ffc261";

const MyPage = () => {
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
        <AppBar position="relative" style={ {
                backgroundColor: headerColor,
                alignItems: "center",
            } }>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap >
                <img src={logo} style={{
                    height: "50px"
                }} alt="ImHere Logo" onClick={()=>{navigate("/")}}></img>
            </Typography>
          </Toolbar>
        </AppBar>
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
          <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} style={{
                        backgroundColor: cardColor,
                        borderRadius: "30px",
                        cursor: "pointer",
                    }}
                  >
                    
                    <CardMedia
                      component="img"
                      sx={{
                        padding: "25% 25% 25% 25%",
                      }}
                      src={logo}//"https://source.unsplash.com/random"
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h3" component="h2" style={{
                        color: "#ffffff",
                      }}>
                        닉네임: 나는 자연인이다
                      </Typography>
                      <Typography variant="h3" style={{
                        color: "#ffffff",
                      }}>
                        포인트: 2111112112112121점
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Lets Go!</Button>
                    </CardActions>
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

export default MyPage;