import "../css/Home.css";
import logo from "./logoImage/ImHereLogo.png";

import seoulImage from "./cityImage/seoul.jpg";
import busanImage from "./cityImage/busan.png";
import daejonImage from "./cityImage/deajon.png";

import koreaImage from "./countryImage/korea.webp";
import euImage from "./countryImage/eu.webp";
import franceImage from "./countryImage/france.webp";
import jpImage from "./countryImage/jp.webp";
import allImage from "./countryImage/all.webp";
import southeastAsiaImage from "./countryImage/southeast-asia.webp";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { borderColor, borderRadius } from "@mui/system";
import { useNavigate } from "react-router-dom";

const mainColor = "#ffb03b";
const headerColor = "#ff932e";
const cardColor = "#ffc261";

const Home = () => {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = React.useState(-1);
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

  const cards = [1, 2, 3, 4, 5, 6];
  const cityCards = [[1, 2, 3], [], [], [], [], []];
  const cityName = [["서울", "부산", "대전"], [], [], [], [], []];
  const country = ["한국", "유럽", "동남아시아", "일본", "프랑스", "전세계"];
  const countryImage = [koreaImage, euImage, southeastAsiaImage, jpImage, franceImage, allImage];
  const cityImage = [[seoulImage, busanImage, daejonImage], [], [], [], [], []];
  const giveText = () => {
    const title = (selectedCountry === -1 ? "어디로 가볼까요?" : `${country[selectedCountry - 1]}의 어디로 가볼까요?`);
    const description = (selectedCountry === -1 ? "챌린지를 시작할 국가를 선택해주세요!" : `챌린지를 시작할 도시를 선택해주세요!`);
    return { title: title, description: description };
  };
  const giveGrid = () => {

    if (selectedCountry === -1) {
      return (cards.map((card) => (
        giveCountry({ id: card })
      )));
    }

    else {
      return (cityCards[selectedCountry - 1].map((city) => giveCity({ id: city })));
    }

  }
  const giveCity = ({ id, images }) => {
    return (
      <Grid item key={id} xs={12} sm={6} md={4} >
        <Card
          sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} style={{
            backgroundColor: cardColor,
            borderRadius: "30px",
            cursor: "pointer",
          }}
          onClick={() => { navigate("/main", { state: { country: selectedCountry, city: id } }) }} //////////////////////////////////////////
        >

          <CardMedia
            component="img"
            sx={{
              // 16:9
              pt: '0%',
            }}
            src={cityImage[selectedCountry - 1][id - 1]}//"https://source.unsplash.com/random"
            alt="random"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2" style={{
              color: "#ffffff",
            }}>
              {cityName[selectedCountry - 1][id - 1]}
            </Typography>
            <Typography style={{
              color: "#ffffff",
            }}>
              이 장소에서 사진을 찍겠습니다!
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  }
  const giveCountry = ({ id }) => {
    return (
      <Grid item key={id} xs={12} sm={6} md={4} >
        <Card
          sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: "none" }} style={{
            backgroundColor: cardColor,
            borderRadius: "30px",
            cursor: "pointer",
          }}
          onClick={() => { setSelectedCountry(id); console.log("ha"); }}
        >

          <CardMedia
            component="img"
            sx={{
              // 16:9
              pt: '0%',
            }}
            src={countryImage[id - 1]}//"https://source.unsplash.com/random"
            alt="random"
            stlye={{

            }}
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2" style={{
              color: "#ffffff",
            }}>
              {country[id - 1]}
            </Typography>
            <Typography style={{
              color: "#ffffff",
            }}>
              이 장소에서 사진을 찍겠습니다!
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };
  const giveGoBackButton = () => {
    if (selectedCountry === -1) {
      return (<div value="  "></div>);
    }
    else return (<input type="button" value="전으로 돌아가기" className="goBackButton" onClick={() => { setSelectedCountry(-1); }} style={{
      fontWeight: "bold",
    }} />);
  }
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main style={{
        backgroundColor: mainColor
      }}>
        {/* Hero unit */}
        <div className="buttonHolder"> <input type="button" value="마이페이지" className="myPageButton" onClick={() => { navigate("/myPage") }} /> </div>
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
          <Container maxWidth="false" >
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              style={{
                color: "#ffffff",
                fontWeight: "bold"
              }}
            >
              {giveText().title}
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph
              style={{
                color: "#ffffff",
                fontWeight: "italic",
              }}>
              {giveText().description}
            </Typography>
            {/* <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button variant="contained">Main call to action</Button>
                <Button variant="outlined">Secondary action</Button>
              </Stack> */}
          </Container>
        </Box>
        <div style={{
          backgroundColor: mainColor,
          width: "100%",
          height: "100%",
          display: "flex",
        }}>
          {giveGoBackButton()}
        </div>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {giveGrid()}
          </Grid>
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

export default Home;