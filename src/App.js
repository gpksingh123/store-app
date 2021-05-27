import './App.css';
import Header from './containers/Header'
import {BrowserRouter, 
  Switch,
  Route} from 'react-router-dom'
import ProductListing from './containers/ProductListing'
import ProductDetail from './containers/ProductDetail'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    
        <Header></Header> 
        <Switch>
          <Route path= "/" exact component = {ProductListing}/>
          <Route path= "/test" exact component = {ProductDetail}/>
          <Route>404 Not Found!</Route>
        </Switch>



        
    </BrowserRouter>

    </div>
  );
}

export default App;
