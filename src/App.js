// styles
import './styles/App.scss';

// react
import React from 'react';

// state
import { useState } from 'react';

// actions

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

let config = {
  mode: 0,
  firstQuote: 1
};

const App = () => {

  const [showQuote, setShowQuote] = useState(false);
  const [quote, setQuote] = useState(quotesData[0]);

  // particles JS 
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await container;
  }, []);


  const generateRandomIndex = () => {
    return Math.floor(Math.random(0) * quotesData.length);
  }

  const handleNewQuote = () => {

    if (config.firstQuote) {
      if (config.mode === 1) setQuote(quotesData[0]);
      if (config.mode === 2) setQuote(quotesData[quotesData.length-1]);
      if (config.mode === 3) setQuote(quotesData[generateRandomIndex()]);

      return config.firstQuote = 0;
    }

    const quoteIndex = quotesData.indexOf(quote);

    if (config.mode === 1) setQuote(quotesData[quoteIndex + 1]);
    if (config.mode === 2) setQuote(quotesData[quoteIndex - 1]);
    if (config.mode === 3) setQuote(quotesData[generateRandomIndex()]);
}

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
          : <Quote quote={quote} handleNewQuote={handleNewQuote}/>
        }

        <Footer />
      </div>
  );
};

export default App;