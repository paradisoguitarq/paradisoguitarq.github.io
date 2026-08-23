import { Route, Routes } from "react-router-dom";

import Footer from "./components/navigation/Footer";
import NavBar from "./components/navigation/NavBar";
import logoDark from "./assets/images/logo-pgq-dark.png";
import logoWhite from "./assets/images/logo-pgq-white.png";
import { navItems } from "./lib/pgq/nav";
import { socialLinks } from "./lib/pgq/social";
import Concerti from "./pages/Concerti";
import Contatti from "./pages/Contatti";
import Discografia from "./pages/Discografia";
import Ensemble from "./pages/Ensemble";
import Galleria from "./pages/Galleria";
import Home from "./pages/Home";

const footerSocial = socialLinks.map(({ label, href, Icon }) => ({ label, href, icon: <Icon size={18} /> }));

export default function App() {
  return (
    <>
      <NavBar logoSrc={logoDark} items={navItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ensemble" element={<Ensemble />} />
        <Route path="/discografia" element={<Discografia />} />
        <Route path="/concerti" element={<Concerti />} />
        <Route path="/galleria" element={<Galleria />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
      <Footer logoSrc={logoWhite} note="Paradiso Guitar Quartet & Bass, quattro chitarre classiche e un contrabbasso." social={footerSocial} />
    </>
  );
}
