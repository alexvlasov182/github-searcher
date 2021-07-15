import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import UserPage from './pages/UserPage/UserPage';

import './App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/users/:id">
          <UserPage />
        </Route>
        <Route path="*">
          <h2>Page not found</h2>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
