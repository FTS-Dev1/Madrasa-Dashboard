import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

// Componets :
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Auth/Login/Login';
import Register from './Pages/Auth/Register/Register';

// CSS :
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';




const App = () => {

  const ProtectedRoute = ({ user, children }) => {
    if (!user) {
      return <Navigate to="/login" replace />;
    }

    return children;
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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