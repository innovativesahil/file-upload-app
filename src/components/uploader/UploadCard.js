import React, { Component } from "react";
import "./UploadCard.css";
import Upload from "./upload/Upload";

class UploadCard extends Component {
  render() {
    return (
      <div className="Panel">
        <div className="Card">
          <Upload />
        </div>
      </div>
    );
  }
}

export default UploadCard;
