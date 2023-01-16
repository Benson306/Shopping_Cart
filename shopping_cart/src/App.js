import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './Landing';
import Navigation from './Navigation';
import Products from './Products';

import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './redux/cart';

function App() {

  const count = useSelector(state => state.counter.count);

  const dispatch = useDispatch();

  return (
    <div class="App bg-zinc-900 min-h-screen">
        
        <Router>
        {/* <div class='bg-white'>
          <h1>The Count is: { count }</h1>
          <button class='bg-gray text-blue p-2'onClick={()=> dispatch(increment())}>increment</button>
          <button onClick={()=> dispatch(decrement())}>decrement</button> 
          <button onClick={()=> dispatch(incrementByAmount(33))}>Increment By 33</button> 
          <br />
        </div> */}
      

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
