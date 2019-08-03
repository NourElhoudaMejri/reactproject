import React, { Component } from "react";
import "./Autre.css";

class AutreServices extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="AutreServices">
        <div className="form-group -animated">
          <input
            type="text"
            className="form-control"
            placeholder="Nom & prénom "
            style={{
              backgroundColor: "#ffffff0a",
              fontSize: "18px",
              color: "white"
            }}
          />
        </div>
        <div className="form-group">
          <input
            type="adress"
            className="form-control"
            placeholder="Adresse Email"
            style={{
              backgroundColor: "#ffffff0a",
              fontSize: "18px",
              color: "white"
            }}
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            className="form-control"
            placeholder="Téléphone"
            style={{
              backgroundColor: " #ffffff0a",
              fontSize: "18px",
              color: "white"
            }}
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            className="form-control"
            placeholder="Titre de service demandé"
            style={{
              backgroundColor: " #ffffff0a",
              fontSize: "18px",
              color: "white"
            }}
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Description"
            style={{
              backgroundColor: " #ffffff0a",
              fontSize: "18px",
              color: "white"
            }}
            defaultValue={""}
          />
        </div>
      </div>
    );
  }
}

export default AutreServices;
