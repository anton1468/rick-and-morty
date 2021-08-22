
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Episodes from './components/Episodes/Episodes';
import Characters from './components/Characters/Characters';
import Header from './components/Header/Header';
import WatchList from './components/WatchList/WatchList';
import Locations from './components/Locations/Locations';
function App() {
  return (
    <div className="App">


      <BrowserRouter>
        <Header />
        <Switch>

          <Route path="/episodes"><Episodes /></Route>
          <Route path="/characters"><Characters /></Route>
          <Route path="/locations"><Locations /></Route>
          <Route path="/mywatchlist"><WatchList /></Route>
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
