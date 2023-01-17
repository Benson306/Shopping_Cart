import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './Landing';
import Navigation from './Navigation';
import Products from './Products';

import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './redux/cartReducer/cart';

function App() {

  // const count = useSelector(state => state.counter.count);

  // const dispatch = useDispatch();

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
