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
  
                
              </div>
  
            </div>
  
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="name">Your Name</label>
                    <input type="text" name="name" className="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div className="validate"></div>
                  </div>
                  <div className="form-group col-md-6">
                    <label for="name">Your Email</label>
                    <input type="email" className="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                    <div className="validate"></div>
                  </div>
                </div>
                <div className="form-group">
                  <label for="name">Subject</label>
                  <input type="text" className="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div className="validate"></div>
                </div>
                <div className="form-group">
                  <label for="name">Message</label>
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
