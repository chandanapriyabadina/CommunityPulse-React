import React from 'react'; 
// Always import React first
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'; // Import CSS files next
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Group imports from the same package
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import About from './About/About';
import Services from './Services/Services';
import Contact from './Contact/Contact';
import Login from './Login/Login';
import Crud from './Crud/Crud';
import Ser from './Ser/Ser';
import Register from './Register';
import Schools from './Schools/Schools';
import Roads from './Roads/Roads';
import Farms from './Farms/Farms';
import GovtSchemes from './GovtSchemes/GovtSchemes';
import Community from './Community/Community';
import LocalOffices from './LocalOffices/LocalOffices';
import StarRating from './StarRating';


function App() {
  return (
    <>
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Crud' element={<Crud />} />
          <Route path='/Register' element={<Register/>} />
          <Route path='/Ser' element={<Ser />} />
          <Route path="/Schools" element={<Schools />} />
          <Route path="/Roads" element={<Roads />} />
          <Route path="/GovtSchemes" element={<GovtSchemes />} />
          <Route path="/Farms" element={<Farms />} />
          <Route path="/Community" element={<Community />} />
          <Route path="/LocalOffices" element={<LocalOffices />} />





        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
