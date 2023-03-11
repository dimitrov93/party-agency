import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Contacts from "./components/Contacts/Contacts";
import Decoration from "./components/Decoration/Decoration";
import Album from "./components/Decoration/Album/Album";
import Catering from "./components/Catering/Catering";
import Card from "./components/Cards/Card";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import { AuthProvider } from "./context/AuthContext";
import Add from "./components/Decoration/Add/Add";

function App() {
  return (
    <AuthProvider>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/catering" element={<Catering />}></Route>
        <Route path="/cards" element={<Card />}></Route>

        <Route path="/decoration" element={<Decoration />}></Route>
        <Route path="/decoration/:albumType" element={<Album />} />
        <Route path="/decoration/:albumType/add" element={<Add />} />

        <Route path="/api/login" element={<Login />}></Route>
        <Route path="/api/logout" element={<Logout />}></Route>
      </Routes>

      <Footer />
    </AuthProvider>
  );
}

export default App;
