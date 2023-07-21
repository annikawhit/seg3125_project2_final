
import NavBar from './NavBar';
import Home from './home';
import Classes from './Classes';
import Gallery from './Gallery';
import ContactUs from './ContactUs';
import Register from './Register';
import Confirmation from './Confirmation';
import Footer from './Footer';
import NotFoundPage from './NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import React, {useState, useEffect} from 'react';


function App() {

  const [data, setData] = useState({
    title: '',
    instructor: '',
    dateTime1:'',
    dateTime2:'',
    dateTime3:''
  });
  

  return (
    
      <div className="App">

        <NavBar />

        <div className="content">
          <Routes >
              <Route exact path="/seg3125_project2_final" element={<Home />}> </Route>
              <Route exact path="/seg3125_project2_final/classes" element={<Classes data={data} setData={setData}/>}></Route>
              <Route exact path="/seg3125_project2_final/gallery" element={<Gallery />}></Route>
              <Route exact path="/seg3125_project2_final/contactus" element={<ContactUs />}></Route>
              <Route exact path="/seg3125_project2_final/register" element={<Register  data={data}/>}></Route>
              <Route exact path="/seg3125_project2_final/confirmation" element={<Confirmation data={data}/>}></Route>
              <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </div>

        <Footer />

        
      </div>
    
    
  );
}

export default App;
