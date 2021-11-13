const Cards = ({ id, title, description, img, logo, subtitle, botton}) => {
  return (
    <div>
      <div>
        <img src={img} className="rounded-lg shadow-xl" />
        <div className="-mt-16">
          <img src={logo} className="" />
          <p className="font-black">{title}</p>
          <p className="text-gray-600  md:text-sm">{subtitle}</p>
          <p className="md:text-sm p-2">{description}</p>
          <button className="text-rojo-make-sense">{botton}</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
