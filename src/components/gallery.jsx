import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Instantes gastronómicos</h2>
          <p></p>
          <p></p>
          <p>
            Mi deseo principal de Progetto Allegra es crear instantes gastronómicos
            personalizados. Organizo pequeños y exclusivos eventos, cenas, cócteles,
            comidas privados y de negocios en vuestras residencias o en el lugar que os
            apetezca.
            Mi savoir- faire me permite junto a mi equipo de sala, ofrecerles una experiencia
            única , en la que cada plato tiene una historia que revindica el placer de
            compartir y en la que cada decoración de mesa pone el escenario. Preparo para
            el deleite de mis comensales una cocina
            creativa con raíces sicilianas, suma y fusión de sabores, cocciones y aromas del
            mediterráneo, Selecciono personalmente cada uno de los ingredientes utilizados en la
            preparación de mis recetas y puedo decir con satisfacción que he desarrollado
            una relación única con pequeños productores y proveedores basada en el
            respeto y la confianza.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-sm-6 col-md-4 col-lg-4"
                >
                  <Image
                    title={d.title}
                    largeImage={d.largeImage}
                    smallImage={d.smallImage}
                  />
                </div>

              ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
