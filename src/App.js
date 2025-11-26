
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Ui/Home';
import MovieDetails from './components/Ui/MovieDetails';
import Artist from './components/Ui/Artist';
import NavBar from './components/Ui/NavBar';
import Payment from './components/Ui/Payment';
import Footer from './components/Ui/Footer';
import EventDetails from './components/Ui/EventDetails';

function App() {
  return (
    <div className="App" style={{backgroundColor:'linear-gradient(to bottom, #B7A3E3, white)'}}>
        <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies/:id' element={<MovieDetails />} />
        <Route path='/events/:id' element={<EventDetails/>}/>
        <Route path='/artist/:id' element={<Artist />} />
        <Route path='/payment' element={<Payment />} />
      </Routes>
      {/* <Payment/> */}
      
      <Footer/>
    </div>
  );
}

export default App;
