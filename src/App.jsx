import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./component/Header";
import Hero from "./component/Hero";
import Visi from "./component/Visi";
import Facilities from "./component/Facilities";
import WhyUs from "./component/WhyUs";
import Rating from "./component/Rating";
import HeroVideo from "./component/HeroVideo";
import Footer from "./component/Footer";

import Ekskul from "./pages/Ekskul";
import Jurusan from "./pages/Jurusan";
import Kontak from "./pages/Kontak";
import Organisasi from "./pages/Organisasi";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Hero />
              <Visi />
              <HeroVideo />
              <WhyUs />
              <Facilities />
              <Rating />
            </div>
          }
        />

        <Route path="/facilities" element={<Facilities />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/ekskul" element={<Ekskul />} />
        <Route path="/jurusan" element={<Jurusan />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/organisasi" element={<Organisasi />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
