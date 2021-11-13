const Subscribe = () => {
  return (
    <div className="bg-bg-make-sense flex py-4">
      <img src="/img/subscribe.png" />
      <div className="flex-col w-1/2">
        <h1 className="text-6xl font-black p-6 mt-4">suscribite a _hold-up!</h1>
        <p className="text-lg">
          suscribete a nuestro newsletter y enterate de los nuevos
          emprendimientos en los que puedes apoyar!{" "}
        </p>
        <div>
          <input
            type="text"
            placeholder="Tu email"
            className=" bg-bg-make-sense border-azul-make-sense rounded-l-full md:text-sm px-4 py-2 my-4"
          />
          <label className="bg-azul-make-sense text-white rounded-r-full px-4 py-2 ">Suscribirse</label>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
