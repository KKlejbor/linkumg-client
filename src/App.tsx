import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from 'components/pages/Login';
import Register from 'components/pages/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
