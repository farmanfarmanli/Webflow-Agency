import './app.scss'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { Route, Routes } from "react-router";
import Home from './pages/home/Home';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import Feature from './pages/feature/Feature';

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/feature' element={<Feature />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
