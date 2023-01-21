import React from 'react';

import './styles/App.scss';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles'
import particlesConfig from './config/particles';

import Splash from './components/Splash/Splash';

const App = () => {

  const particlesInit = useCallback(async engine => {
    console.log(engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);
  
  return (
      <div className='container'>
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesConfig}
        />
        <Splash />
      </div>
  );
};

export default App;