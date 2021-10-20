import React from "react";

export default function Header()
{
    return(
        <section id="hero" className="d-flex align-items-center">

        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
              <h1>Investor Relations</h1>
             
              
            </div>
            <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
              <img src="assets/img/first.png" className="img-fluid animated" alt=""/>
            </div>
          </div>
        </div>
    
      </section>

    );
}