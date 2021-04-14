import './App.css';
import BrandHeader from './components/BrandHeader/BrandHeader';
import Home from './components/Pages/Home';
import Covid from './components/Pages/Covid/Covid';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
 
    <Router>
    <section>
      <BrandHeader></BrandHeader>
      <section class="body">
      <Switch>
        <Route path="/" exact>
            <Home />
        </Route>
        <Route path="/covid" exact>
          <Covid></Covid>
        </Route>
      </Switch>
      </section>
      <Footer></Footer>
    </section>
  </Router>
);
 
}

export default App;
