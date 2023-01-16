import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './Landing';
import Navigation from './Navigation';
import Products from './Products';

function App() {
  return (
    <div class="App bg-zinc-900 min-h-screen">
        
        <Router>
        <Navigation />

          <Switch>

            
            <Route path='/products'>
                <Products />
            </Route>

            <Route exact path="/">
                <Landing /> 
            </Route>
            
          </Switch>
        </Router>
            
    </div>
  );
}

export default App;
