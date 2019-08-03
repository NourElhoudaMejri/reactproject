import React, { Component } from "react";
class FormulaireReclamation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row">
        <form className="callus clearfix border_radius">
          <div className="single-query form-group">
            <label>Titre de réclamation :</label>
            <input
              type="text"
              className="keyword-input"
              placeholder="Titre de réclamation"
            />
          </div>
          <div className="single-query form-group top10">
            <label>Message :</label>
            <textarea
              type="text"
              className="keyword-input"
              placeholder="Message"
              style={{ width: "350px" }}
            />
          </div>
          <button type="Envoyer" className="btn-blue border_radius top15">
            Envoyer
          </button>
        </form>
      </div>
    );
  }
}

export default FormulaireReclamation;
