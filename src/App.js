// styles
import './styles/App.scss';

// react
import React from 'react';

// state
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// actions
import { setQuote } from './features/quote';

// particles JS
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles'
import particlesConfig from './config/particles';

// data
import quotesData from './data/quotes.json';

// components
import Splash from './components/Splash/Splash';
import Quote from './components/Quote/Quote';
import Footer from './components/Footer/Footer';

// utilities
import { getRandNum } from './utils/math';

// configuration 
let config = {
  mode: 0,
  firstQuote: 1
};

const App = () => {
  
  // state
  const dispatch = useDispatch();
  const [showQuote, setShowQuote] = useState(false);

  // particles JS 
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await container;
  }, []);

  // update quotes
  const handleFirstQuote = () => {
    dispatch(
      setQuote(
        quotesData[
          config.mode === 1 ? 0 : config.mode === 2 ? quotesData.length - 1 : getRandNum(0, quotesData.length)
        ]
      )
    );

    return config.firstQuote = 0;
  }

  const handleNewQuote = (quote) => {

    if (config.firstQuote) return handleFirstQuote();
    
    const quoteIndex = quotesData.indexOf(quote);

    dispatch(
      setQuote(
        quotesData[
          config.mode === 1 ? quoteIndex + 1 : config.mode === 2 ? quoteIndex - 1 : getRandNum(0, quotesData.length)
        ]
      )
    )
  }

  // update display
  const handleDisplayUpdate = () => {
    setShowQuote(!showQuote);
  }

  const handleModeChange = (newMode) => {
    config.mode = newMode;
    handleNewQuote();
  }

  return (
      <div className='container'>        
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesConfig}
        />

        {
          !showQuote
          ? <Splash handleDisplayUpdate={handleDisplayUpdate} handleModeChange={handleModeChange} />
          : <Quote handleNewQuote={handleNewQuote}/>
        }

        <Footer />
      </div>
  );
};

export default App;