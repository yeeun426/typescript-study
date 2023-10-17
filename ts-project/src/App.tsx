import "./App.css";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Main from "./pages/main";

const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
};

export default App;
