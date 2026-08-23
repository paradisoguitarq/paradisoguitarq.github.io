import { Route, Routes } from "react-router-dom";

import Footer from "./components/navigation/Footer";
import NavBar from "./components/navigation/NavBar";
import logoWhite from "./assets/images/logo-pgq-white.svg";
import { navItems } from "./lib/pgq/nav";
import { socialLinks } from "./lib/pgq/social";
import Concerti from "./pages/Concerti";
import Contatti from "./pages/Contatti";
import Discografia from "./pages/Discografia";
import Ensemble from "./pages/Ensemble";
import Galleria from "./pages/Galleria";
import Home from "./pages/Home";

import styles from "./App.module.css";

const footerSocial = socialLinks.map(({ label, href, Icon }) => ({ label, href, icon: <Icon size={18} /> }));

export default function App() {
  return (
    <>
      <NavBar logoSrc={logoWhite} items={navItems} />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ensemble" element={<Ensemble />} />
          <Route path="/discografia" element={<Discografia />} />
          <Route path="/concerti" element={<Concerti />} />
          <Route path="/galleria" element={<Galleria />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </main>
      <Footer logoSrc={logoWhite} social={footerSocial} />
    </>
  );
}
