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
import axios from 'axios';

import logo from "./logoImage/ImHereLogo.png";
const mainColor = "#ffb03b";
const headerColor = "#ff932e";
const cardColor = "#ffc261";

const MyPage = () => {
    const navigate = useNavigate();
    const theme = createTheme();
    const [ nickname, setNickname ] = React.useState("");
    const [ pointSum, setPointSum ] = React.useState("");
    const [ profileURL, setProfileURL ] = React.useState("");
    React.useEffect( () => {
        axios.get("http://13.125.129.137/user/my-page").then(res => { 
            console.log(res);
            const firstData = res.data.data[0];
            setNickname(firstData.nickname);
            setProfileURL(firstData.profileImageUrl);
            setPointSum(firstData.point_sum);
         });
         console.log(nickname);
    } )

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
          <div className="buttonHolder"> <input type="button" value="홈으로" className="myPageButton" onClick={()=>{ navigate("/") }}/> </div>
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
            <Typography variant="h3" style={{
                        color: "#ffffff",
                        fontWeight: "bolder",
                        fontSize: "60px",
                        padding: "0 0 10% 0",
                      }}>
                        마이페이지
                      </Typography>
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
                        padding: "5% 5% 5% 5%",
                      }}
                      src={profileURL}//"https://source.unsplash.com/random"
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h3" component="h2" style={{
                        padding: "0 0 0 5%",
                        color: "#ffffff",
                        fontWeight: "bolder"
                      }}>
                        닉네임: {nickname}
                      </Typography>
                      <Typography variant="h3" style={{
                        color: "#ffffff",
                        fontWeight: "bolder",
                        padding: "0 0 0 5%",
                      }}>
                        포인트: {pointSum}
                      </Typography>
                    </CardContent>
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