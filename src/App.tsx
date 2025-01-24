import { Routes, Route } from "react-router-dom";
import Footer from "./components/Layout/Footer/Footer";
import { AuthProvider } from "./context/AuthContext";
import { routes } from "./routes";
import Navigation from "./components/Layout/Navigation/Navigation";


const App: React.FC = () => {
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
};

export default App;
