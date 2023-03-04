import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Header from "./components/common/header/header";
import Layout from "./components/common/layout/layout";
import Main from "./pages/main/main";

import "./App.scss";

function App() {
  return (
    <div className="appWrapper">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
