import { Route, Routes } from 'react-router-dom';

// Componets :
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';

// CSS :
import './App.scss';





const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;