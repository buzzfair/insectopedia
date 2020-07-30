import React from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';

/*
define routing region
inside routing region: links & content that changes based on what you click on
*/

import Header from './components/Header';
import Navbar from './components/Navbar';
import ContentBees from './components/ContentBees';
import ContentCaterpillars from './components/ContentCaterpillars';
import ContentHome from './components/ContentHome';
import ContentLadybugs from './components/ContentLadybugs';

function App() {
  return (
    <HashRouter>
    <div className="App">
      {/* Hello World! */}
      <Header />
      <Navbar />

      <div className="content-section">
        <Route exact path="/" component={ContentHome}/>
        <Route path="/bees" component={ContentBees}/>
        <Route path="/caterpillars" component={ContentCaterpillars}/>
        <Route path="/ladybugs" component={ContentLadybugs}/>
      </div>
      <div className="Footer">
      <a className="icon-citation" href="https://icons8.com/icon/2bZlfmx30dhD/bee">Bee icon by Icons8</a>
      </div>
    </div>
    </HashRouter>
  );
}

export default App;
