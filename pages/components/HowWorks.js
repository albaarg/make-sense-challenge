const HowWorks = () => {
    return (
        <div className="bg-bg-how-works text-center">
            <h1 className="text-white font-black p-6 text-4xl">_cómo funciona?</h1>
           <div className="flex items-center justify-center p-6">
               <div>
               <img src="/img/crearbuscar.png"/>
               <h1 className="font-black text-amarillo-make-sense text-6xl">1</h1>
            <p className="text-amarillo-make-sense">Crea o explora un emprendimiento</p>
               </div>
               <div>
               <img src="/img/crea-responde.png"/>
               <h1 className="font-black text-amarillo-make-sense text-6xl">2</h1>
            <p className="text-amarillo-make-sense">Crea o responde un reto elegido</p>
               </div>
               <div>
               <img src="/img/recibe-conocimiento.png"/>
               <h1 className="font-black text-amarillo-make-sense text-6xl">3</h1>
            <p className="text-amarillo-make-sense">Recibe o empieza a colaborar con conocimientos</p>
               </div>      
           </div>
        </div>
    )
}

export default HowWorks
