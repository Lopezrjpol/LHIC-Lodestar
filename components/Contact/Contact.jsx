import React from 'react'

export default function Contact() {
    return (
        <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
  
          <div className="section-title">
            <h2>GET IN TOUCH</h2>
            <p>Need help? Send us questions, comments or inquiries and our team will discuss your needs.</p>
          </div>
  
          <div className="row">
  
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="icofont-google-map"></i>
                  <h4>Location:</h4>
                  <p>7th Floor Peaksun Bldg., 1505 Princeton St., corner Shaw Blvd.,<br/> Brgy. Wack Wack Greenhills East, Mandaluyong City</p>
                </div>
  
                <div className="email">
                  <i className="icofont-envelope"></i>
                  <h4>Email:</h4>
                  <p>ilodestar@yahoo.com</p>
                </div>
  
                <div className="phone">
                  <i className="icofont-phone"></i>
                  <h4>Call:</h4>
                  <p>(632) 8920-9306</p>
                </div>
              
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15444.93685460226!2d121.0488735!3d14.5857257!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdf4a9324beaed1dd!2sPeaksun%20Enterprises%20And%20Export%20Corporation!5e0!3m2!1sen!2sph!4v1614050178000!5m2!1sen!2sph" frameBorder={0} style={{border: 0, width: '100%', height: 290}} allowFullScreen />

                
              </div>
  
            </div>
  
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" className="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div className="validate"></div>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Email</label>
                    <input type="email" className="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                    <div className="validate"></div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Subject</label>
                  <input type="text" className="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div className="validate"></div>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Message</label>
                  <textarea className="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
                  <div className="validate"></div>
                </div>
                <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>
  
          </div>
  
        </div>
      </section>
    )
}
