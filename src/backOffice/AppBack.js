import React, { Component } from "react";
import TopBar from "./components/topBar/TopBar";
import SideBar from "./components/SideBar/SideBar";
import Annonces from "./components/Annonces/Annonces";
import { BrowserRouter, Route } from "react-router-dom";
import AjouterAnnocne from "./components/AjouterAnnonce/AjouterAnnonce";
import Image from "./components/image/Image";

class AppBack extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App" />
        <TopBar />
        <Route path="/admin/annonces" component={Annonces} />
        <Route path="/admin/ajouterAnnonce" component={AjouterAnnocne} />
        <Route path="/admin/image" component={Image} />
        <SideBar />
      </BrowserRouter>
    );
  }
}

export default AppBack;
