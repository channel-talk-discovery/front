import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import MyPage from "./pages/myPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element= { <Home/> }/>
          <Route path="/main" element= { <Main/> }/>
          <Route path="/detail" element= { <Detail/>}/>
          <Route path="/myPage" element={ <MyPage/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
