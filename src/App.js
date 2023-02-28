import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import Contacts from "./components/Contacts/Contacts";
import Decoration from "./components/Decoration/Decoration";

import Birthday from "./components/Decoration/Album/Birthday";
import Baptism from "./components/Decoration/Album/Baptism";

import Catering from "./components/Catering/Catering";
import Card from "./components/Cards/Card";
import Wedding from "./components/Decoration/Album/Wedding";
import Prom from "./components/Decoration/Album/Cake";
import Anniversary from "./components/Decoration/Album/Anniversary";

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
        <Route path="/decoration/wedding" element={<Wedding />}></Route>
        <Route path="/decoration/prom" element={<Prom />}></Route>
        <Route path="/decoration/anniversary" element={<Anniversary />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
