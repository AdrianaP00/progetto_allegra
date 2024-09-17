import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <p>{props.data ? props.data.paragraph : "Loading"}</p>
                  <span></span>
                </h1>
                <span></span>
             <div className="btn-position">
             <a
                  href="#contact"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Contactame
                </a>{" "}
             </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
