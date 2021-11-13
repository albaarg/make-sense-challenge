import Link from "next/link";



const NavBar = () => {
  return (
    <div className="flex bg-azul-make-sense  sticky top-0 z-50  md:bg-contain w-screen p-4 px-12 text-1xl md:text-1xl  items-center justify-center md:space-x-28 space-x-6 md:text-center">
      <div className="font-raleway w-screen flex item-center justify-between text-white">
        <div className="flex items-center space-x-4">
          <img src="/img/logo.png" />
          <p className=" md:text-sm"> Categorias de emprendimiento</p>
        </div>
        <div className="flex items-center space-x-4">
        <Link href="/components/HowWorks">
          <button className=" md:text-sm">¿de que trata?</button>
          </Link>
          <Link href="/components/HoldUp">
          <button className=" md:text-sm">¿como funciona?</button>
          </Link>
          <button className="border-2 border-amarillo-make-sense rounded-full px-4 py-2 md:text-sm">Ingresar</button>
          <button className="border-2 border-amarillo-make-sense rounded-full px-4 py-2 md:text-sm">Registrate</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
