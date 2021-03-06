import React from "react";
import {Link} from "react-router-dom";

export default function Error() {
  return(
      <section className="error-page section">
        <div className="error-container">
          <h1>Sorry ! Nothing found here</h1>
          <Link to={"/"} className={"btn btn-primary"}>Go Home</Link>
        </div>
      </section>
  );
}
