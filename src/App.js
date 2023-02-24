import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import Contacts from "./components/Contacts/Contacts";
import Decoration from "./components/Decoration/Decoration";
import Birthday from "./components/Decoration/Birthday/Birthday";
import Baptism from "./components/Decoration/Baptism/Baptism";
import Catering from "./components/Catering/Catering";
import Card from "./components/Cards/Card";

function App() {
  return (
    <>
    
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/catering" element={<Catering />}></Route>
        <Route path="/cards" element={<Card />}></Route>


        <Route path="/decoration" element={<Decoration />}></Route>
        <Route path="/decoration/bday" element={<Birthday />}></Route>
        <Route path="/decoration/baptism" element={<Baptism />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
