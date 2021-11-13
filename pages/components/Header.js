const Header = () => {
  return (
    <div className="bg-azul-make-sense flex w-screen">
      <div className="text-white w-1/2 px-8 ">
        <h1 className="text-5xl font-black my-6">¡participa en el hold-up!</h1>
        <p className="font-bold">
          explorá la plataforma y ayuda a emprendores a resolver retos de su
          proyecto a través de la inteligencia colectiva
        </p>
        <p className="mt-6 font-bold">participar como:</p>
        <div className="flex  space-x-2">
        <button className="bg-verde-make-sense rounded-full my-2 px-6 py-2 text-white">
          ciudadano
        </button>
        <button className="bg-rojo-make-sense rounded-full my-2 px-6 py-2 text-white">
          emprendedor
        </button>
        </div>
        <p className="my-4">
          Si soy ciudadano puedo registrarme en la plataforma y dar ideas de
          como los emprendedores pueden resolver sus retos apoyándolos desde mi
          área de conocimiento
        </p>
      </div>
      <div className="w-1/2">
        <img src="/img/logo-make.png" />
      </div>
    </div>
  );
};

export default Header;
