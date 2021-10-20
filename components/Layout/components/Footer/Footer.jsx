import React from 'react'

export default function Footer() {
    return (
        <footer id="footer">

    

    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-contact">
            <h3>Lodestar Holdings</h3>
            <p>
              
              7th Floor Peaksun Bldg., 1505 Princeton St., corner Shaw Blvd., <br/>
              Brgy. Wack Wack Greenhills East,<br/>
              Mandaluyong City <br/><br/>
              <strong>Phone:</strong> (632) 8920-9306<br/>
              <strong>Email:</strong> ilodestar@yahoo.com<br/>
            </p>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="/">Home</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="investor">Investor Relation</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="regulardirectors">Meet the team</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="downloadables">Downloadables</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Downloadables</h4>
            <ul>
              <li><i className="bx bx-chevron-right"></i> <a href="downloadables">Corporate Governance</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="companydisclosures">Company Disclosure</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="others">Others</a></li>
             
            </ul>
          </div>

       

        </div>
      </div>
    </div>

    <div className="container footer-bottom clearfix">
      <div className="copyright">
        <script type="text/javascript">var year = new Date();document.write(year.getFullYear()); </script>
        <a>2021 | Lodestar Investment Holdings Corporation </a>
      </div>
    </div>
  </footer>
    )
}
