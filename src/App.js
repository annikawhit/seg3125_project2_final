
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
          <Routes>
            <Route path="/" element={<Home />}> </Route>
            <Route path="/classes" element={<Classes />}></Route>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/contactus" element={<ContactUs />}></Route>
          </Routes>
        </div>

        <Footer />

      </div>
    
    
  );
}

export default App;
