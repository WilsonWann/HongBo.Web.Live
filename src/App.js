import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import Recommendation from './app/Recommendation';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <p>react router example</p>
          <ul>
            <li><Link to="recommendation">Recommendation</Link></li>
          </ul>
          <Switch>
            <Route path='/recommendation' component={Recommendation} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
