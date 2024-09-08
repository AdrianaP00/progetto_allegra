import React from "react";

export const Services = (props) => {
  return (
    <div id="radio" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Entrevistas</h2>
          <p>Escuchame aquí</p>
        </div>
        <div id="row" className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div>    <div key={`${d.name}-${i}`} className="col-md-6 col-sm-6 radio">
                <div>

                  <a href={d.link}>
                    <img src={d.img} alt="..." className="radio-img" />
                  </a>

                  <div className="caption">
                    <h4>{d.name}</h4>
                    <p>{d.job}</p>
                  </div>
                </div>
              </div></div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
