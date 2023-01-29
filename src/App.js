// styles
import './styles/App.scss';

// react
import React from 'react';

// particles JS
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles'
import particlesConfig from './config/particles';

// pages
import Home from './pages/Home/Home';
import Quotation from './pages/Quotation/Quotation';

// routing
import { BrowserRouter, Routes, Route} from 'react-router-dom';

// components
import Footer from './components/Footer/Footer';


const App = () => {

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await container;
  }, []);
  
  return (
    <BrowserRouter>
      <div className='container'>
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesConfig}
        />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='quote/:id' element={<Quotation />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;