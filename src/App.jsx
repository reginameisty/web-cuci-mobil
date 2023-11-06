import {Routes, Route} from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import Lapak from "./pages/Lapak";
import Testimonial from "./pages/Testimonial";
import FaqPage from "./pages/FaqPage";

function App() {
  return <div>
    <NavbarComponent />

    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/lapak" Component={Lapak} />
      <Route path="/testimonial" Component={Testimonial} />
      <Route path="/buatlapak" Component={FaqPage} />
    </Routes>

    <Footer />
  </div>
}

export default App
