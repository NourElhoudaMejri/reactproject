import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <footer className="padding_top footer2">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6">
                <div className="footer_panel bottom30">
                  <a href="#." className="logo bottom30">
                    <img
                      src={require("../../images/logo-white.png")}
                      alt="logo"
                    />
                  </a>
                  <p className="bottom15">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh tempor cum consectetuer adipiscing.
                  </p>
                  <p className="bottom15">
                    If you are interested in castle do not wait and{" "}
                    <a href="#.">BUY IT NOW!</a>
                  </p>
                  <ul className="social_share">
                    <li>
                      <a href="#." className="facebook">
                        <i className="icon-facebook-1" />
                      </a>
                    </li>
                    <li>
                      <a href="#." className="twitter">
                        <i className="icon-twitter-1" />
                      </a>
                    </li>
                    <li>
                      <a href="#." className="google">
                        <i className="icon-google4" />
                      </a>
                    </li>
                    <li>
                      <a href="#." className="linkden">
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li>
                      <a href="#." className="vimo">
                        <i className="icon-vimeo3" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="footer_panel bottom30">
                  <h4 className="bottom30">Search by Area</h4>
                  <ul className="area_search">
                    <li>
                      <a href="#.">
                        <i className="icon-icons74" />
                        Bayonne, New Jersey
                      </a>
                    </li>
                    <li className="active">
                      <a href="#.">
                        <i className="icon-icons74" />
                        Greenville, New Jersey
                      </a>
                    </li>
                    <li>
                      <a href="#.">
                        {" "}
                        <i className="icon-icons74" />
                        The Heights, New Jersey
                      </a>
                    </li>
                    <li>
                      <a href="#.">
                        <i className="icon-icons74" />
                        West Side, New York
                      </a>
                    </li>
                    <li>
                      <a href="#.">
                        <i className="icon-icons74" />
                        Upper East Side, New York
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="footer_panel bottom30">
                  <h4 className="bottom30">Latest News</h4>
                  <div className="media">
                    <a className="media-object">
                      <img
                        src={require("../../images/footer-news1.png")}
                        alt="news"
                      />
                    </a>
                    <div className="media-body">
                      <a href="#.">Nearest mall in high tech Goes your villa</a>
                      <span>
                        <i className="icon-clock4" />
                        Feb 22, 2017
                      </span>
                    </div>
                  </div>
                  <div className="media">
                    <a className="media-object">
                      <img
                        src={require("../../images/footer-news1.png")}
                        alt="news"
                      />
                    </a>
                    <div className="media-body">
                      <a href="#.">Nearest mall in high tech Goes your villa</a>
                      <span>
                        <i className="icon-clock4" />
                        Feb 22, 2017
                      </span>
                    </div>
                  </div>
                  <div className="media">
                    <a className="media-object">
                      <img
                        src={require("../../images/footer-news1.png")}
                        alt="news"
                      />
                    </a>
                    <div className="media-body">
                      <a href="#.">Nearest mall in high tech Goes your villa</a>
                      <span>
                        <i className="icon-clock4" />
                        Feb 22, 2017
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="footer_panel bottom30">
                  <h4 className="bottom30">Get in Touch</h4>
                  <ul className="getin_touch">
                    <li>
                      <i className="icon-telephone114" />
                      01 900 234 567 - 68
                    </li>
                    <li>
                      <a href="#.">
                        <i className="icon-icons142" />
                        info@castle.com
                      </a>
                    </li>
                    <li>
                      <a href="#.">
                        <i className="icon-global" />
                        www.castle.com
                      </a>
                    </li>
                    <li>
                      <i className="icon-icons74" />
                      Castle Melbourne, Merrick Way,FL 12345 australia
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
