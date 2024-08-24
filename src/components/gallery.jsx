import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Galería</h2>
          <p>
            Selecciono personalmente cada uno de los ingredientes utilizados en la
            preparación de mis recetas y puedo decir con satisfacción que he desarrollado
            una relación única con pequeños productores y proveedores basada en el
            respeto y la confianza. Ellos comparten conmigo la pasión por el trabajo bien
            hecho y los productos orgánicos y de óptima calidad.
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
