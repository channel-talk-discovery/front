import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/main/Main";
import Detail from "./pages/detail/Detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
