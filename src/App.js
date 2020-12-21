import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <p>react router example</p>
          <ul>
            <li><Link to="counter">Counter</Link></li>
          </ul>
          <Switch>
            {/* <Route path='/counter' component={() => <Counter count={count} setCount={setCount} />} /> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
