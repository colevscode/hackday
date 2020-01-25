import React from "react";
import ReactDOM from "react-dom";
import Survey from "./Survey";

class Layout extends React.Component {
  render() {
    return (
      <>
        <div className="image-bg" />
        <div className="site-frame">
          <div className="content">
            <h1>It's a Hack Day!<br/>Wanna come?</h1>
              <Survey />
          </div>
        </div>
      </>
    );
  }
}

function bootstrap() {
  ReactDOM.render(<Layout />, document.getElementById("app-container"));
}

window.addEventListener("load", bootstrap);
