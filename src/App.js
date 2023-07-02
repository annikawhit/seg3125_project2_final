
import NavBar from './NavBar';
import Home from './home';
import Classes from './Classes';
import Gallery from './Gallery';
import ContactUs from './ContactUs';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">

        <NavBar />

        <div className="content">
          <Switch>
            <Route exact path="/seg3125_project2/"> 
              <Home />
            </Route>
            <Route path="/seg3125_project2/classes"> 
              <Classes />
            </Route>
            <Route path="/seg3125_project2/gallery"> 
              <Gallery />
            </Route>
            <Route path="/seg3125_project2/contactus"> 
              <ContactUs />
            </Route>
          </Switch>
        </div>

        <Footer />

      </div>
    </Router>
    
  );
}

export default App;
