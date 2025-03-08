
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/common/NavBar';
import HomePage from './components/home/HomePage';
import Footer from './components/common/Footer';

function App() {
  return (
   <BrowserRouter>
      <div className='App'>
        <NavBar/>
        <div className='content'>
          <Routes>
            <Route exact path="/home" element={<HomePage/>}/>
          </Routes>
        </div>
        <Footer/>
      </div>
   </BrowserRouter>
  );
}

export default App;
