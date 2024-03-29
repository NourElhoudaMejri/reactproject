import React, { Component } from 'react';
import MapContainer from "./../google-map/googleMap";
import SimplePagination from './../pagination/pagination';


class AchatComponent extends Component {
  render() {
    return (
      <div className="AchatComponent">
        
        {/*Maps*/}
        <section id="banner-map">
          <div className="container-fluid">
            <h3 className="hidden">hiden</h3>
            <div className="row property-list-area property-list-map-area">
              <div className="property-list-map"> 
                {/* <div id="property-listing-map" className="multiple-location-map" style={{width: '100%', height: '545px'}} /> */}
                <MapContainer/>
              </div>
            </div>
          </div>
        </section>
        {/* Map Ends */}
        {/* Search */}
        <section className="property-query-area padding_bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h2 className="uppercase">Recherche Avancée</h2>
                <p className="heading_space"> Nous avons des propriétés dans ces zones. Voir une liste des propriétés.</p>
              </div>
            </div>
            <div className="row">
              <form className="callus">
                <div className="col-md-3 col-sm-6">
                  <div className="single-query form-group">
                    <input type="text" className="keyword-input" placeholder="Mot clé" />
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="single-query form-group">
                    <div className="intro">
                      <select>
                        <option>Toutes Les Régions</option>
                        <option>Ariana </option>
                        <option>Beja</option>
                        <option>Ben Arous</option>
                        <option>Bizerte</option>
                        <option>Gabes</option>
                        <option>Gafsa</option>
                        <option>Jendouba</option>
                        <option>Kairouan</option>
                        <option>Kasserine</option>
                        <option>Kebili</option>
                        <option>Kef</option>
                        <option>Mahdia</option>
                        <option>Mannouba</option>
                        <option>Medenine</option>
                        <option>Monastir</option>
                        <option>Nabeul</option>
                        <option>Sfax</option>
                        <option>Sidi Bouzid</option>
                        <option>Siliana</option>
                        <option>Sousse</option>
                        <option>Tataouine</option>
                        <option>Touzeur</option>
                        <option>Tunis</option>
                        <option>Zaghouan</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="single-query form-group">
                    <div className="intro">
                      <select>
                        <option className="active">Toutes les Catégories</option>
                        <option>Appartement</option>
                        <option>Bureau</option>
                        <option>Local Commerciale</option>
                        <option>Maison </option>
                        <option>Résidence</option>
                        <option>Terre/Terrain</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="single-query form-group">
                    <div className="intro">
                      <select>
                        <option> Statut de bien</option>
                        <option>Acheter</option>
                        <option>Louer </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6"style={{    marginLeft:" -292px"
}}>
                  <div className="row search-2">
                    <div className="col-md-6 col-sm-6">
                      <div className="single-query form-group">
                        <div className="intro">
                          <select>
                            <option className="active">Min Lits</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="single-query form-group">
                        <div className="intro">
                          <select>
                            <option className="active">Salle de bain</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6"style={{    width: "299px"  , marginLeft: "-4px",
    marginRight: "-3px"}}>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="single-query form-group">
                        <input type="text" className="keyword-input" placeholder="Surface Min(m²)" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="single-query form-group">
                        <input type="text" className="keyword-input" placeholder="Surface Max(m²)" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-md-8 bottom15">
                      <div className="single-query-slider">
                        <label>Échelle des prix:</label>
                        <div className="price text-right">
                          <span>DT</span>
                          <div className="leftLabel" />
                          <span > À DT</span>
                          <div className="rightLabel" />
                        </div>
                        <div data-range_min={0} data-range_max={1000000} data-cur_min={0} data-cur_max={1500000} className="nstSlider">
                          <div className="bar" />
                          <div className="leftGrip" />
                          <div className="rightGrip" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-right form-group">
                      <button type="submit" className="btn-blue border_radius">Recherche</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="group-button-search">
              <a href="plus.html" className="more-filter">
                <i className="fa fa-plus" />
                Afficher plus d'options de recherche
              </a>
            </div>
            <div className="search-propertie-filters collapse">
              <div className="container-2">
                <div className="row">
                  <div className="col-md-3 col-sm-3 col-xs-4">
                    <div className="search-form-group white">
                      <input type="checkbox" name="check-box" />
                      <span>Rap music</span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-4">
                    <div className="search-form-group white">
                      <input type="checkbox" name="check-box" />
                      <span>Rap music</span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-4">
                    <div className="search-form-group white">
                      <input type="checkbox" name="check-box" />
                      <span>Rap music</span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-4">
                    <div className="search-form-group white">
                      <input type="checkbox" name="check-box" />
                      <span>Rap music</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-3 col-sm-3 col-xs-4">
                    <div className="search-form-group white">
                      <input type="checkbox" name="check-box" />
                      <span>Rap music</span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-4">
                    <div className="search-form-group white">
                      <input type="checkbox" name="check-box" />
                      <span>Rap music</span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-4">
                    <div className="search-form-group white">
                      <input type="checkbox" name="check-box" />
                      <span>Rap music</span>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-3 col-xs-4">
                    <div className="search-form-group white">
                      <input type="checkbox" name="check-box" />
                      <span>Rap music</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Search End */}
        {/* Listing Filer */}
        <section id="property" className="padding">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h2 className="uppercase">Photos des Proprietés</h2>
                <p className="heading_space">Nous avons des propriétés dans ces zones Voir une liste des propriétés exceptionnelles.</p>
              </div>
            </div>
            <div className="clearfix">
              <div id="filters-property" className="cbp-l-filters-button text-center">
                <div data-filter=".sale" className="cbp-filter-item-active cbp-filter-item">A VENDRE</div>
                <div data-filter=".latest" className="cbp-filter-item">A LA UNE</div>
              </div>
            </div>
            <div id="property-gallery" className="cbp listing1">
              <div className="cbp-item sale">
                <div className="property_item">
                  <div className="image">
                    <a href="/detailsAchat"><img src={require("../../images/listing1.jpg")} alt="latest property" className="img-responsive" /></a>
                    <div className="price clearfix">
                      <span className="tag pull-right">$8,600 Per Month</span>
                    </div>
                    <span className="tag_t">A VENDRE</span>
                  </div>
                  <div className="proerty_content">
                    <div className="proerty_text">
                      <h3 className="captlize"><a href="#.">Park avenue apartment</a></h3>
                      <p>45 Regent Street, London, UK</p>
                    </div>
                    <div className="property_meta transparent">
                      <span><i className="icon-select-an-objecto-tool" />4800 sq ft</span>
                      <span><i className="icon-bed" />2 Office Rooms</span>
                      <span><i className="icon-safety-shower" />1 Bathroom</span>
                    </div>
                    <div className="property_meta transparent bottom30">
                      <span><i className="icon-old-television" />TV Lounge</span>
                      <span><i className="icon-garage" />1 Garage</span>
                      <span />
                    </div>
                    <div className="favroute clearfix">
                      <p><i className="icon-calendar2" />&nbsp;5 Days ago </p>
                      <ul className="pull-right">
                        <li><a href="javascript:void(0)"><i className="icon-like" /></a></li>
                        <li><a href="#seven" className="share_expender" data-toggle="collapse"><i className="icon-share3" /></a></li>
                      </ul>
                    </div>
                    <div className="toggle_share collapse" id="seven">
                      <ul>
                        <li><a href="javascript:void(0)" className="facebook"><i className="icon-facebook-1" /> Facebook</a></li>
                        <li><a href="javascript:void(0)" className="twitter"><i className="icon-twitter-1" /> Twitter</a></li>
                        <li><a href="javascript:void(0)" className="vimo"><i className="icon-vimeo3" /> Vimeo</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cbp-item latest">
                <div className="property_item">
                  <div className="image">
                    <a href="/detailsAchat"><img src={require("../../images/listing1.jpg")} alt="latest property" className="img-responsive" /></a>
                    <div className="price clearfix">
                      <span className="tag pull-right">$8,600 Per Month</span>
                    </div>
                    <span className="tag_t">A VENDRE</span>
                  </div>
                  <div className="proerty_content">
                    <div className="proerty_text">
                      <h3 className="captlize"><a href="#.">Park avenue apartment</a></h3>
                      <p>45 Regent Street, London, UK</p>
                    </div>
                    <div className="property_meta transparent">
                      <span><i className="icon-select-an-objecto-tool" />4800 sq ft</span>
                      <span><i className="icon-bed" />2 Office Rooms</span>
                      <span><i className="icon-safety-shower" />1 Bathroom</span>
                    </div>
                    <div className="property_meta transparent bottom30">
                      <span><i className="icon-old-television" />TV Lounge</span>
                      <span><i className="icon-garage" />1 Garage</span>
                      <span />
                    </div>
                    <div className="favroute clearfix">
                      <p><i className="icon-calendar2" />&nbsp;5 Days ago </p>
                      <ul className="pull-right">
                        <li><a href="javascript:void(0)"><i className="icon-like" /></a></li>
                        <li><a href="#six" className="share_expender" data-toggle="collapse"><i className="icon-share3" /></a></li>
                      </ul>
                    </div>
                    <div className="toggle_share collapse" id="six">
                      <ul>
                        <li><a href="javascript:void(0)" className="facebook"><i className="icon-facebook-1" /> Facebook</a></li>
                        <li><a href="javascript:void(0)" className="twitter"><i className="icon-twitter-1" /> Twitter</a></li>
                        <li><a href="javascript:void(0)" className="vimo"><i className="icon-vimeo3" /> Vimeo</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cbp-item rent sale">
                <div className="property_item">
                  <div className="image">
                    <a href="/detailsAchat"><img src={require("../../images/listing1.jpg")} alt="latest property" className="img-responsive" /></a>
                    <div className="price clearfix">
                      <span className="tag pull-right">$8,600 Per Month</span>
                    </div>
                    <span className="tag_t">A VENDRE</span>
                  </div>
                  <div className="proerty_content">
                    <div className="proerty_text">
                      <h3 className="captlize"><a href="#.">Park avenue apartment</a></h3>
                      <p>45 Regent Street, London, UK</p>
                    </div>
                    <div className="property_meta transparent">
                      <span><i className="icon-select-an-objecto-tool" />4800 sq ft</span>
                      <span><i className="icon-bed" />2 Office Rooms</span>
                      <span><i className="icon-safety-shower" />1 Bathroom</span>
                    </div>
                    <div className="property_meta transparent bottom30">
                      <span><i className="icon-old-television" />TV Lounge</span>
                      <span><i className="icon-garage" />1 Garage</span>
                      <span />
                    </div>
                    <div className="favroute clearfix">
                      <p><i className="icon-calendar2" />&nbsp;5 Days ago </p>
                      <ul className="pull-right">
                        <li><a href="javascript:void(0)"><i className="icon-like" /></a></li>
                        <li><a href="#three" className="share_expender" data-toggle="collapse"><i className="icon-share3" /></a></li>
                      </ul>
                    </div>
                    <div className="toggle_share collapse" id="three">
                      <ul>
                        <li><a href="javascript:void(0)" className="facebook"><i className="icon-facebook-1" /> Facebook</a></li>
                        <li><a href="javascript:void(0)" className="twitter"><i className="icon-twitter-1" /> Twitter</a></li>
                        <li><a href="javascript:void(0)" className="vimo"><i className="icon-vimeo3" /> Vimeo</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cbp-item rent">
                <div className="property_item">
                  <div className="image">
                    <a href="/detailsAchat"><img src={require("../../images/listing1.jpg")} alt="latest property" className="img-responsive" /></a>
                    <div className="price clearfix">
                      <span className="tag pull-right">$8,600 Per Month</span>
                    </div>
                    <span className="tag_t">A VENDRE</span>
                  </div>
                  <div className="proerty_content">
                    <div className="proerty_text">
                      <h3 className="captlize"><a href="#.">Park avenue apartment</a></h3>
                      <p>45 Regent Street, London, UK</p>
                    </div>
                    <div className="property_meta transparent">
                      <span><i className="icon-select-an-objecto-tool" />4800 sq ft</span>
                      <span><i className="icon-bed" />2 Office Rooms</span>
                      <span><i className="icon-safety-shower" />1 Bathroom</span>
                    </div>
                    <div className="property_meta transparent bottom30">
                      <span><i className="icon-old-television" />TV Lounge</span>
                      <span><i className="icon-garage" />1 Garage</span>
                      <span />
                    </div>
                    <div className="favroute clearfix">
                      <p><i className="icon-calendar2" />&nbsp;5 Days ago </p>
                      <ul className="pull-right">
                        <li><a href="javascript:void(0)"><i className="icon-like" /></a></li>
                        <li><a href="#twe" className="share_expender" data-toggle="collapse"><i className="icon-share3" /></a></li>
                      </ul>
                    </div>
                    <div className="toggle_share collapse" id="twe">
                      <ul>
                        <li><a href="javascript:void(0)" className="facebook"><i className="icon-facebook-1" /> Facebook</a></li>
                        <li><a href="javascript:void(0)" className="twitter"><i className="icon-twitter-1" /> Twitter</a></li>
                        <li><a href="javascript:void(0)" className="vimo"><i className="icon-vimeo3" /> Vimeo</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cbp-item sale">
                <div className="property_item">
                  <div className="image">
                    <a href="/detailsAchat"><img src={require("../../images/listing1.jpg" )}alt="latest property" className="img-responsive" /></a>
                    <div className="price clearfix">
                      <span className="tag pull-right">$8,600 Per Month</span>
                    </div>
                    <span className="tag_t">A VENDRE</span>
                  </div>
                  <div className="proerty_content">
                    <div className="proerty_text">
                      <h3 className="captlize"><a href="#.">Park avenue apartment</a></h3>
                      <p>45 Regent Street, London, UK</p>
                    </div>
                    <div className="property_meta transparent">
                      <span><i className="icon-select-an-objecto-tool" />4800 sq ft</span>
                      <span><i className="icon-bed" />2 Office Rooms</span>
                      <span><i className="icon-safety-shower" />1 Bathroom</span>
                    </div>
                    <div className="property_meta transparent bottom30">
                      <span><i className="icon-old-television" />TV Lounge</span>
                      <span><i className="icon-garage" />1 Garage</span>
                      <span />
                    </div>
                    <div className="favroute clearfix">
                      <p><i className="icon-calendar2" />&nbsp;5 Days ago </p>
                      <ul className="pull-right">
                        <li><a href="javascript:void(0)"><i className="icon-like" /></a></li>
                        <li><a href="#onemore" className="share_expender" data-toggle="collapse"><i className="icon-share3" /></a></li>
                      </ul>
                    </div>
                    <div className="toggle_share collapse" id="onemore">
                      <ul>
                        <li><a href="javascript:void(0)" className="facebook"><i className="icon-facebook-1" /> Facebook</a></li>
                        <li><a href="javascript:void(0)" className="twitter"><i className="icon-twitter-1" /> Twitter</a></li>
                        <li><a href="javascript:void(0)" className="vimo"><i className="icon-vimeo3" /> Vimeo</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cbp-item latest rent">
                <div className="property_item">
                  <div className="image">
                    <a href="/detailsAchat"><img src={require("../../images/listing1.jpg")} alt="latest property" className="img-responsive" /></a>
                    <div className="price clearfix">
                      <span className="tag pull-right">$8,600 Per Month</span>
                    </div>
                    <span className="tag_t">A VENDRE</span>
                  </div>
                  <div className="proerty_content">
                    <div className="proerty_text">
                      <h3 className="captlize"><a href="#.">Park avenue apartment</a></h3>
                      <p>45 Regent Street, London, UK</p>
                    </div>
                    <div className="property_meta transparent">
                      <span><i className="icon-select-an-objecto-tool" />4800 sq ft</span>
                      <span><i className="icon-bed" />2 Office Rooms</span>
                      <span><i className="icon-safety-shower" />1 Bathroom</span>
                    </div>
                    <div className="property_meta transparent bottom30">
                      <span><i className="icon-old-television" />TV Lounge</span>
                      <span><i className="icon-garage" />1 Garage</span>
                      <span />
                    </div>
                    <div className="favroute clearfix">
                      <p><i className="icon-calendar2" />&nbsp;5 Days ago </p>
                      <ul className="pull-right">
                        <li><a href="javascript:void(0)"><i className="icon-like" /></a></li>
                        <li><a href="#one" className="share_expender" data-toggle="collapse"><i className="icon-share3" /></a></li>
                      </ul>
                    </div>
                    <div className="toggle_share collapse" id="one">
                      <ul>
                        <li><a href="javascript:void(0)" className="facebook"><i className="icon-facebook-1" /> Facebook</a></li>
                        <li><a href="javascript:void(0)" className="twitter"><i className="icon-twitter-1" /> Twitter</a></li>
                        <li><a href="javascript:void(0)" className="vimo"><i className="icon-vimeo3" /> Vimeo</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Listing Filer End */}
        <div className="padding_bottom text-center">
          <SimplePagination/>
        </div>
      </div>
    );
  }
}

export default AchatComponent;
