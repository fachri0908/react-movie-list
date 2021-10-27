import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './views/Home'
import Detail from './views/Detail'
import './styles/main.css'

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/movie/:movieId">
            <Detail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
