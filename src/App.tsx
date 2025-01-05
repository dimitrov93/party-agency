import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { AuthProvider } from "./context/AuthContext";
import Navigation from "./components/Navigation/Navigation";
import { routes } from "./routes";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <AuthProvider>
        <Navigation />

        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>

        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
