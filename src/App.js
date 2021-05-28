import './App.css';
import Header from './containers/Header'
import {BrowserRouter, 
  Switch,
  Route} from 'react-router-dom'
import ProductListing from './containers/ProductListing'
import ProductDetail from './containers/ProductDetail'

function App() {
  return (
    <div>
    <div className="App">
    <Header></Header>
    <BrowserRouter>
        <Switch>
          <Route path= "/" exact component = {ProductListing}/>
          <Route path= "/test" exact component = {ProductDetail}/>
          <Route>404 Not Found!</Route>
        </Switch>
    </BrowserRouter>

    </div>
    
    </div>

  );
}

export default App;
