import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import routes from './routes';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        {routes.map((route, i) => <Route key={i} {...route} />)}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
