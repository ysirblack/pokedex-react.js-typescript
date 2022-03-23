import React from "react";
import { SiPokemon } from "react-icons/si";
const footerYear = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className="footer pb-3 bg-red-600 text-primary-content footer-center">
      <div>
        <SiPokemon className="text-8xl" />
        <p>Made with ❤️ by y`Sir bLack</p>
        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
