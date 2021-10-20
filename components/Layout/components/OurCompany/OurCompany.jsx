import React from 'react'

export default function OurCompany() {
    return (
        <section  className="why-us section-bg">
      <div className="container-fluid" data-aos="fade-up">

        <div className="row">

          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

            <div className="content">
              <h3><strong>Our Company</strong></h3>
            
            </div>

            <div className="accordion-list">
              <ul>
                <li>
                  <a data-toggle="collapse"  href="#accordion-list-1" className="collapsed"><span>01</span>Business Profile <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-1" className="collapse" data-parent=".accordion-list">
                    <p className="indent">
                      <strong>LODESTAR</strong> is an investment holding company incorporated on January 3, 1974 with the following primary purpose:
                      “To purchase , subscribe for, or otherwise acquire, own, hold, use, sell, assign, transfer, mortgage, pledge, exchange or dispose of real and/or personal properties of every kind and description, including shares of stock and other securities, contracts, or obligations of any corporation or association, domestic or foreign, and to pay therefore, in whole or in part, in cash or in property or by exchanging stocks, bonds or other corporation, and while the owner or holder of any such real or personal property, stocks, or other securities, contracts or obligations, to receive, collect, and/or dispose of the interest, dividend and/or income from such property, and to possess and exercise in respect thereof all the rights, powers and privileges of ownership, including all voting powers on any stocks so owned; and to do every act and thing covered generally by the denomination “Holding Corporation of other Corporations” through the ownership of stocks therein, provided, however, that the corporation shall not act as an“To purchase , subscribe for, or otherwise acquire, own, hold, use, sell, assign, transfer, mortgage, pledge, exchange or dispose of real and/or personal properties of every kind and description, including shares of stock and other securities, contracts, or obligations of any corporation or association, domestic or foreign, and to pay therefore, in whole or in part, in cash or in property or by exchanging stocks, bonds or other corporation, and while the owner or holder of any such real or personal property, stocks, or other securities, contracts or obligations, to receive, collect, and/or dispose of the interest, dividend and/or income from such property, and to possess and exercise in respect thereof all the rights, powers and privileges of ownership, including all voting powers on any stocks so owned; and to do every act and thing covered generally by the denomination “Holding Corporation of other Corporations” through the ownership of stocks therein, provided, however, that the corporation shall not act as an investment company or security broker and/or dealer nor exercise the functions of a trust corporation.”

                    </p>
                  </div>
                </li>

                <li>
                  <a data-toggle="collapse" href="#accordion-list-2" className="collapsed"><span>02</span>Mission, Vision and Values <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-2" className="collapse" data-parent=".accordion-list">
                    <p className="indent">
                      <strong>Lodestar Investment Holdings Corporation</strong> (the Company) shall strive to become one of the leaders in its industry through the development and implementation of strategic plans, operating goals and objectives across its entire organization of competent directors, management and personnel.
                    </p>
                  </div>
                </li>

                <li>
                  <a data-toggle="collapse" href="#accordion-list-3" className="collapsed"><span>03</span>Board of directors, management team and executive officers <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-3" className="collapse" data-parent=".accordion-list">
                    <p className="indent">
                      It is the Board of Directors’ (Board) responsibility to foster the long-term success of the Corporation, and to sustain its competitiveness and profitability in a manner consistent with corporate objectives and the best interests of shareholders. The Board’s role is one of stewardship. It is mandated to take care of the interests of the shareholders 
                      and protect their investments through the implementation of sound corporate policies and plans while maintaining its independent assessment on Management’s performance. As currently provided under its By-laws, the Board is composed of seven (7) directors including two (2) independent directors.The membership of the Board may be a combination of executive 
                      and non-executive directors (which include independent directors) in order that no director or small group of directors can dominate the decision- making process.
                    </p>
                  </div>
                </li>

              </ul>
            </div>

          </div>

          <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img" style={{backgroundImage: 'url("assets/img/third.png")'}} data-aos="zoom-in" data-aos-delay="150">&nbsp;</div>


        </div>

      </div>
    </section>
    )
}
