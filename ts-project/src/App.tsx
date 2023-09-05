import React, {FC} from 'react';
import { Route, Routes } from "react-router-dom";
import Login from './pages/login'

const App: FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />}  />
      </Routes>
    </div>
  );
}

export default App;