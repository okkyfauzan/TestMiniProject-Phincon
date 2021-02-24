import './App.css';
import { Switch, Route } from 'react-router-dom'
import { MainPage, Detail, Favorite } from './pages';

function App() {
  return (
    <>
      <Switch>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="/favorite">
          <Favorite />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
