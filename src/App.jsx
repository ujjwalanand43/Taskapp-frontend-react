import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return <Router>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  </Router>
}

export default App;
