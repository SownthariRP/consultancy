import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {DataProvider} from './GlobalState';
import { useEffect, useState } from 'react';
import Header from './components/headers/Header';
import Footer from './components/footer/Footer';
import Pages from './components/mainpages/Pages';
import Preloader from './components/mainpages/preloader/Preloader';
const App =() => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <DataProvider>
        <div className="App">
          {loading ? (
            <Preloader />
          ) : (
            <div>
            <Router>
              <Header />
              <Pages />
              <Footer />
            </Router>
          </div>
          )}
          
          
        </div>
      
    </DataProvider>
  );
};

export default App;





