import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./frontOffice/components/Header/Header";
import Footer from "./frontOffice/components/Footer/Footer";
import Home from "./frontOffice/components/Home/Home";
import AchatComponent from "./frontOffice/components/AchatComponent/AchatComponent";
import LocationComponent from "./frontOffice/components/LocationComponent/LocationComponent";
import Contact from "./frontOffice/components/Contact/Contact";
import Login from "./frontOffice/components/Login/Login";
import Profile from "./frontOffice/components/Profile/Profile";
import CreeAnnonce from "./frontOffice/components/CreerAnnonce/CreerAnnonce";
import Favoris from "./frontOffice/components/Favoris/Favoris";
import MesProprietes from "./frontOffice/components/MesProprietes/MesProprietes";
import DetailsAchat from "./frontOffice/components/DetailsAchat/DetailsAchat";
import DetailsLocation from "./frontOffice/components/DetailsLocation/DetailsLocation";
import Conseils from "./frontOffice/components/Conseils/Conseils";
import Autre from "./frontOffice/components/Autre/Autre";
import Reclamation from "./frontOffice/components/Reclamation/Reclamation";
import Agents from "./frontOffice/components/Agents/Agents";
import ProfilAgent from "./frontOffice/components/ProfilAgent/ProfilAgent";

import EtudeProjet from "./frontOffice/components/EtudeProjet/EtudeProjet";
import TopBar from "./backOffice/components/topBar/TopBar";
import SideBar from "./backOffice/components/SideBar/SideBar";

class AppRouter extends React.Component {
  render() {
    const { url } = this.props;
    return (
      <Switch>
        <Header />

        <Route exact path={`${url}/`} component={Home} />
        <Route path={`${url}/achat`} component={AchatComponent} />
        <Route path={`${url}/location`} component={LocationComponent} />
        {/* <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/vente" component={CreeAnnonce} />
        <Route path="/favoris" component={Favoris} />
        <Route path="/mesProprietes" component={MesProprietes} />
        <Route path="/detailsAchat" component={DetailsAchat} />
        <Route path="/detailsLocation/:id" component={DetailsLocation} />
        <Route path="/etudeProjet" component={EtudeProjet} />
        <Route path="/conseils" component={Conseils} />
        <Route path="/autre" component={Autre} />
        <Route path="/reclamation" component={Reclamation} />
        <Route path="/agents" component={Agents} />
        <Route path="/profilAgent" component={ProfilAgent} />

        <Footer />
        <Route exact path="/chef" component={TopBar} />
        <SideBar /> */}
      </Switch>
    );
  }
}

export default AppRouter;
