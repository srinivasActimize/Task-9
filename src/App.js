
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Ui/Home';
import MovieDetails from './components/Ui/MovieDetails';
import Artist from './components/Ui/Artist';
import NavBar from './components/Ui/NavBar';
import Payment from './components/Ui/Payment';
import Footer from './components/Ui/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<MovieDetails />} />
        <Route path='/artist' element={<Artist />} />
        <Route path='/payment' element={<Payment />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
