// App.js
import React from 'react';
import { BrowserRouter as Router, Route,Routes, Switch } from 'react-router-dom';
import Header from './components/Header';
import DestinationList from './components/DestinationList';
import DestinationDetail from './components/DestinationDetail';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" component={DestinationList} />
          <Route path="/destination/:id" component={DestinationDetail} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
