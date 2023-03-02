import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

// Componets :
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Auth/Login/Login';

// CSS :
import './App.scss';
import Register from './Pages/Auth/Register/Register';





const App = () => {

  const ProtectedRoute = ({ user, children }) => {
    if (!user) {
      return <Navigate to="/login" replace />;
    }

    return children;
  };

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='dashboard/*' element={<Dashboard />} />
        <Route path='*' element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </>
  );
}

export default App;