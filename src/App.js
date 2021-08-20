
import './App.css';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import getCharacter from './api/getCharacter';
import getEpisodes from './api/getEpisodes';
import Episodes from './components/Episodes/Episodes';
import Characters from './components/Characters/Characters';
import Header from './components/Header/Header';
function App() {
  getCharacter();
  getEpisodes();
  return (
    <div className="App">


      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">Hi</Route>
          <Route path="/episodes"><Episodes /></Route>
          <Route path="/characters"><Characters /></Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
