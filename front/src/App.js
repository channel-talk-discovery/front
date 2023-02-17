import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/main/Main";
import Detail from "./pages/detail/Detail";
import MyPage from "./pages/myPage";
import InMap from "./pages/inMap";
import Reward from "./pages/reward";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import logo from "./pages/logoImage/ImHereLogo.png";

function App() {
  const mainColor = "#ffb03b";
  const headerColor = "#ff932e";
  const cardColor = "#ffc261";
  const theme = createTheme();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <AppBar position="relative" style={ {
                backgroundColor: headerColor,
                alignItems: "center",
            } }>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap >
                <img src={logo} style={{
                    height: "50px"
                }} alt="ImHere Logo"></img>
            </Typography>
          </Toolbar>
        </AppBar>
        </ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element= { <Home/> }/>
          <Route path="/main" element= { <Main/> }/>
          <Route path="/detail" element= { <Detail/>}/>
          <Route path="/myPage" element={ <MyPage/> }/>
          <Route path="/inMap" element={ <InMap/> } />
          <Route path="/reward" element={ <Reward/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
