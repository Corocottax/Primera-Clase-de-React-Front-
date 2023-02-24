import React from "react";
import MiniHome from "./MiniHome";

const Home = ({clave, color, ojos, imagen}) => {
  
/*     console.log("ESTAS SON LAS PROPS QUE RECOGE EL COMPONENTE HIJO", props); */

    //! object destructuring - ES6
    //! const {clave, color, ojos, imagen} = props; */

    //? const props = {
    //?    clave: valor,
    //?    color: valor,
    //?    ojos: valor,
    //?    imagen: valor,
    //? }

  //!  concepto de inputs -> por qué utilizar un input? con que finalidad? -> para pasar un dato que está en el componente padre al hijo.

  return (
    /* ng-template no sale en el html (etiqueta fantasma)  en react es <></> (fragments)*/
    <>
      <img src={imagen} alt=""/>
      <MiniHome />
    </>
  );
};

export default Home;
