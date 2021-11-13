import Cards from "./Cards";

const card = [
  {
    id: "1",
    title: "eco carbón",
    description:
      "es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras...",
    img: "/img/img-cover.png",
    logo: "/img/img-empresa.png",
    subtitle: "_energias limpias",
    botton:"Ver emprendimiento ->"
  },
  {
    id: "2",
    title: "eco carbón",
    description:
      "el punto de colocar aquie el reto actual de este emprendimiento lorem Ipsum es que tiene una",
    img: "/img/img-cover.png",
    logo: "/img/img-empresa.png",
    subtitle: "_energias limpias",
    botton:"Ver emprendimiento ->"
  },
  {
    id: "3",
    title: "veolia",
    description:
      "el punto de colocar aquie el reto actual de este emprendimiento lorem Ipsum es que tiene una distribución más o menos normal",
    img: "/img/img-cover.png",
    logo: "/img/img-empresa.png",
    subtitle: "_energias limpias",
    botton:"Ver emprendimiento ->"
  },
  {
    id: "4",
    title: "eco carbon",
    description:
      "el punto de colocar aquie el reto actual de este emprendimiento lorem Ipsum es",
    img: "/img/img-cover.png",
    logo: "/img/img-empresa.png",
    subtitle: "_energias limpias",
    botton:"Ver emprendimiento ->"
  },
  {
    id: "5",
    title: "eco carbon",
    description:
      "el punto de colocar aquie el reto actual de este emprendimiento lorem Ipsum es",
    img: "/img/img-cover.png",
    logo: "/img/img-empresa.png",
    subtitle: "_energias limpias",
    botton:"Ver emprendimiento ->"
  },
  {
    id: "6",
    title: "eco carbon",
    description:
      "es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras...",
    img: "/img/img-cover.png",
    logo: "/img/img-empresa.png",
    subtitle: "_energias limpias",
    botton:"Ver emprendimiento ->"
  },
  {
    id: "7",
    title: "eco carbon",
    description:
      "el punto de colocar aquie el reto actual de este emprendimiento lorem Ipsum es que tiene",
    img: "/img/img-cover.png",
    logo: "/img/img-empresa.png",
    subtitle: "_energias limpias",
    botton:"Ver emprendimiento ->"
  },
  {
    id: "8",
    title: "eco carbon",
    description:
      "el punto de colocar aquie el reto actual de este emprendimiento lorem Ipsum es que tiene una distribución más",
    img: "/img/img-cover.png",
    logo: "/img/img-empresa.png",
    subtitle: "_energias limpias",
    botton:"Ver emprendimiento ->"
  },
];

function Card() {
  return (
    <div>
      <h1 className="text-black font-black text-4xl justify-center items-center p-6">_últimos emprendimientos</h1>
      <div className="grid grid-cols-4 gap-4 p-4">
        {card.map((cards) => (
          <Cards className="flex flex-col"
            key={cards.id}
            id={cards.id}
            title={cards.title}
            description={cards.description}
            img={cards.img}
            logo={cards.logo}
            subtitle={cards.subtitle}
            botton={cards.botton}
          />
        ))}
      </div>
    </div>
  );
}

export default Card;
