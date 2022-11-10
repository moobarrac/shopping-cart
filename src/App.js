import Header from './components/Header';
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
