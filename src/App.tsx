import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from 'components/pages/Login';
import Register from 'components/pages/Register';
import AdsJob from 'components/pages/AdsJob';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/ads-jobs" element={<AdsJob />} />
    </Routes>
  );
}

export default App;
