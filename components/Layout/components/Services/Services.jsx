import React from 'react'

export default function Services() {
    return (
        <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Downloadables</h2>
         
        </div>

        <div className="row">
        
            
              <div className="col-xl-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                <div className="icon-box">
                <div className="icon"><i className="bx bxl-dribbble"></i></div>
              <h4><a href="downloadables">Corporate Governance</a></h4>
              <p>Collection  processes and relations  to operate a corporation.</p>
            </div>
          </div>

          <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-file"></i></div>
              <h4><a href="companydisclosures">Company Disclosures</a></h4>
              <p>Communication of information by people inside the public firms towards people outside. </p>
            </div>
          </div>

          <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-tachometer"></i></div>
              <h4><a href="others">Others</a></h4>
              <p>Collection of other processes and information within the corporation. </p>
            </div>
          </div>


        </div>

      </div>
    </section>
    )
}
