import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import Recommendation from './app/Recommendation';
import PopularGames from './app/PopularGames';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <nav>
            <Link to="recommendation">Recommendation</Link>
            <Link to="populargames">PopularGames</Link>
          </nav>
          <Switch>
            <Route path='/recommendation' component={Recommendation} />
            <Route path='/populargames' component={PopularGames} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
