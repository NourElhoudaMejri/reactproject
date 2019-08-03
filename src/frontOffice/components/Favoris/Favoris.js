import React, { Component } from "react";
import NavBarItem from "./../Profile/navBarItem";
import FavorisList from "./favorisList";
class Favoris extends Component {
  render() {
    return (
      <div className="Favoris">
        {/* Page Banner Start*/}
        <section className="page-banner padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="text-uppercase"> PROPRIÉTÉS PRÉFÉRÉES</h1>
                <p>
                  Serving you since 1999. Lorem ipsum dolor sit amet consectetur
                  adipiscing elit.
                </p>
                <ol className="breadcrumb text-center">
                  <li>
                    <a href="#">Acceuil</a>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                  </li>
                  <li className="active">Favoris</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        {/* Page Banner End */}
        {/* Favorite Properties  */}
        <section id="property" className="padding_top listing1">
          <div className="container">
            <div className="row">
              <NavBarItem />

              <h2 className="text-uppercase text-center">
                MES PROPRIÉTÉS PRÉFÉRÉES
              </h2>
              <p className="heading_space text-center">
                Nous avons des propriétés dans ces régions Voir une liste de
                Properties.
              </p>
            </div>
            <div className="row">
              <FavorisList />
            </div>
            <div className="row">
              <div className="padding_bottom text-center">
                <ul className="pager">
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li className="active">
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Favorite Properties End */}
      </div>
    );
  }
}

export default Favoris;
