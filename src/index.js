import React from "react";
import ReactDOM from "react-dom";

import "./module.scss";

function App() {
  return (
    <div className="progress-bar-v2">
      <section>
        <article>
          <input type="radio" name="switch-color" id="red" defaultChecked />
          <div className="chart">
            <div className="bar bar-75 white">
              <div className="face top">
                <div className="growing-bar" />
              </div>
              <div className="face side-0">
                <div className="growing-bar" />
              </div>
              <div className="face floor">
                <div className="growing-bar" />
              </div>
              <div className="face side-a" />
              <div className="face side-b" />
              <div className="face side-1">
                <div className="growing-bar" />
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
