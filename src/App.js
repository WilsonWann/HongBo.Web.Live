import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import MainPage from './app/MainPage';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <nav>
            {/* <Link to="mainpage">MainPage</Link>
            <Link to="recommendation">Recommendation</Link>
            <Link to="populargames">PopularGames</Link>
            <Link to="alllivechannels">AllLiveChannels</Link>
            <Link to="logo">Logo</Link> */}
          </nav>
          <Switch>
            <Route path="/" component={MainPage} />
            {/* <Route path='/recommendation' component={Recommendation} />
            <Route path='/populargames' component={PopularGames} />
            <Route path='/alllivechannels' component={AllLiveChannels} />
            <Route path='/logo' component={Logo} /> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
