
import NavBar from './NavBar';
import Home from './home';
import Classes from './Classes';
import Gallery from './Gallery';
import ContactUs from './ContactUs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">

        <NavBar />

        <div className="content">
          <Switch>
            <Route exact path="/"> 
              <Home />
            </Route>
            <Route path="/classes"> 
              <Classes />
            </Route>
            <Route path="/gallery"> 
              <Gallery />
            </Route>
            <Route path="/contactus"> 
              <ContactUs />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
