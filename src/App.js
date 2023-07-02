
import NavBar from './NavBar';
import Home from './home';
import Classes from './Classes';
import Gallery from './Gallery';
import ContactUs from './ContactUs';
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    
      <div className="App">

        <NavBar />

        <div className="content">
          <Routes >
              <Route exact path="/seg3125_project2/" element={<Home />}> </Route>
              <Route exact path="/seg3125_project2/classes" element={<Classes />}></Route>
              <Route exact path="/seg3125_project2/gallery" element={<Gallery />}></Route>
              <Route exact path="/seg3125_project2/contactus" element={<ContactUs />}></Route>
          </Routes>
        </div>

        <Footer />

      </div>
    
    
  );
}

export default App;
