import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import Contacts from "./components/Contacts/Contacts";
import Decoration from "./components/Decoration/Decoration";
import Birthday from "./components/Decoration/Birthday/Birthday";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/decoration" element={<Decoration />}></Route>
        <Route path="/decoration/bday" element={<Birthday />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
