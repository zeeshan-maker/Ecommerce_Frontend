import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
function App() {
  return (
  <BrowserRouter>
    <ScrollToTop/>
    <Navbar/>
    <AppRoutes/>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
