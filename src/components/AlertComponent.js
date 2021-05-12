import React from "react";

function AlertComponent({ showalert }) {
  if (showalert !== "Item successfully removed from the Wishlist !!!") {
    return (
      <div className="alert">
        <h3 className="alert-success">
          <i className="fa fa-check-circle" aria-hidden="true"></i> {showalert}
        </h3>
      </div>
    );
  } else {
    return (
      <div className="alert">
        <h3 className="alert-warning">
          <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
          {showalert}
        </h3>
      </div>
    );
  }
}
export default AlertComponent;
