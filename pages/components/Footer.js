import { FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <div className="bg-azul-make-sense w-screen pt-4 px-6 pb-4">
      <section className="flex items-center justify-between">
        <div className="w-1/3">
          <img src="/img/logo.png" />
          <p className="text-white mt-4  md:text-sm">
            somos una organización internacional que diseña programas de impacto
            social y ambiental, impulsando colaboraciones entre ciudadanos
            comprometidos, emprendedores apasionados y organizaciones
            vanguardistas.
          </p>
        </div>
        <div className="flex space-x-6">
          <p className="text-white  md:text-sm">Términos y condiciones</p>
          <p className="text-white  md:text-sm">Preguntas frecuentes</p>
        </div>
      </section>
      <div className="flex items-center justify-center space-x-8 cursor-pointer">
        <FaTwitter className="text-amarillo-make-sense text-xl" />
        <AiOutlineInstagram className="text-amarillo-make-sense text-xl" />
        <FaFacebookF className="text-amarillo-make-sense text-xl" />
        <FaLinkedinIn className="text-amarillo-make-sense text-xl" />
      </div>
    </div>
    <div className="bg-footer-make-sense flex items-center justify-center w-screen">
          <p className="text-white text-base py-2  md:text-sm">© derechos reservados make_sense</p>
      </div>
    </div>
  );
};

export default Footer;
