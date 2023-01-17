import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';

import './App.css';

import Landing from './Landing';
import Navigation from './Navigation';
import Products from './Products';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Cart from './Cart';

function App() {

  return (
    <div class="App bg-zinc-900 min-h-screen">
        
        <Router>

        <ToastContainer />

        <Navigation />

            <Switch>
              <Route path='/products'>
                  <Products />
              </Route>

              <Route path="/cart">
                <Cart />
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
