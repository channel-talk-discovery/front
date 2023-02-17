import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/main/Main";
import Detail from "./pages/detail/Detail";
import MyPage from "./pages/myPage";
import InMap from "./pages/inMap";
import Reward from "./pages/reward";

function App() {
  return (
    <div className="App">
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
