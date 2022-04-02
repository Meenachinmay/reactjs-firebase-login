import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/ Navbar';

function App() {

  const currentUser = false

  const RequireAuth = ({ childern }) => {
    return currentUser ? ( childern ) : <Navigate to='/login' />
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/' element={ 
          <RequireAuth>
            <Home />
          </RequireAuth> 
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
