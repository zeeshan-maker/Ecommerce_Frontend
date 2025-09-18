import { HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
  <HashRouter>
    <ScrollToTop/>
    <Navbar/>
    <AppRoutes/>
    <Footer/>
    <ToastContainer />
  </HashRouter>
  );
}

export default App;
