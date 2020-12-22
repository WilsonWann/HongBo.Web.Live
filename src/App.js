import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import Recommendation from './app/Recommendation';
import PopularGames from './app/PopularGames';
import AllLiveChannels from './app/AllLiveChannels';
import MainPage from './app/MainPage';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <nav>
            <Link to="mainpage">MainPage</Link>
            <Link to="recommendation">Recommendation</Link>
            <Link to="populargames">PopularGames</Link>
            <Link to="alllivechannels">AllLiveChannels</Link>
          </nav>
          <Switch>
            <Route path="/mainpage" component={MainPage} />
            <Route path='/recommendation' component={Recommendation} />
            <Route path='/populargames' component={PopularGames} />
            <Route path='/alllivechannels' component={AllLiveChannels} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
