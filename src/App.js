import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Footer from "./components/Footer/Footer";
function App() {
  return (
  <BrowserRouter>
    <Navbar/>
    <AppRoutes/>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
