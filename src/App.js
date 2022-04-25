import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Test from './pages/Test'
import Navbar from './components/ Navbar';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import ProtectedRoutes from './ProtectedRoutes';

function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route element={<ProtectedRoutes />}>
          <Route path='/' element={ <Home /> }/>
          <Route path='/test' element={ <Test /> }/>
        </Route>

        <Route path='/login' element={ <Login /> }/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
