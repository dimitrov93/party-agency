import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
