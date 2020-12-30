import React from 'react';
import './App.css';
import MainPage from './app/MainPage';

function App() {
  return (
    <div className="App">
      <MainPage />
      {/* <Router>
          <nav>
            <Link to="mainpage">MainPage</Link>
            <Link to="recommendation">Recommendation</Link>
            <Link to="populargames">PopularGames</Link>
            <Link to="alllivechannels">AllLiveChannels</Link>
            <Link to="logo">Logo</Link>
          </nav>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path='/recommendation' exact component={Recommendation} />
            <Route path='/populargames' exact component={PopularGames} />
            <Route path='/alllivechannels' exact component={AllLiveChannels} />
            <Route path='/logo' exact component={Logo} />
          </Switch>
      </Router> */}
    </div>
  );
}

export default App;
