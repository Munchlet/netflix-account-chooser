import React from "react";
import ReactDOM from "react-dom";

import "./module.scss";

function App() {
  return (
    <div id="body">
      <div id="navbar">
        <img src="/img/logo.png" alt="netflix" height="25px" />
      </div>
      <section id="profile-chooser">
        <span>Who's watching?</span>
        <div id="profile-img-container">
          <div class="avatar-wrapper">
            <img
              alt="profile 1"
              src="https://occ-0-1633-58.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABSLII-o6GmYPFo09Nlv7D5jVLJGKsBJnZFzFAj82yk-WfGl7mV_vbCPIK5h65iTgGTs1dobHjU5Nlwc0EwKaty5KYhoV.png?r=a41"
            />
            <span>Apolline</span>
          </div>
          <div class="avatar-wrapper">
            <img
              alt="profile 2"
              src="https://occ-0-1633-58.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABas8Ah2dmxDUKIc58IJy3YSUEmN6R4aI6rx7-geD8OKA95XhlQ5iwF3NUJ73ymL6AbIcehgSkyG9srfiEkuEgj-PWVc9.png?r=9fe"
            />
            <span>Cathenna</span>
          </div>
          <div class="avatar-wrapper">
            <img
              alt="profile 3"
              src="https://occ-0-1633-58.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABetSBwloIwB0Ss1qJgsixWqtFvdQVBeMOP4kfWcXq9LdsxRB-PQtEzoOBmsT6nrMxRlbFifymQdW_BpnCHFMlsBKdQWv.png?r=247"
            />
            <span>Dev</span>
          </div>
          <div class="avatar-wrapper">
            <img
              alt="profile 3"
              src="https://occ-0-1633-58.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABYCq-HPaBmwWzyEo8UjC3jQ7a2mKJhU4uPbQwFrauKbu9_-6GpfPccnQh3UWZvsGLQ1MwLo_4YZ-kuTiAsqpq0oEdPXS.png?r=f71"
            />
            <span>Elanie</span>
          </div>
          <div class="avatar-wrapper">
            <img
              alt="profile 3"
              src="https://occ-0-1633-58.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABRG6IEnqKwQ7tyof-O-hrXWzHoVXAmxah9vY-ZLgKV1-qHCbs4wowVQYELnE4y10PoY6Mgww-hh7jh36WX45MADbs0gf.png?r=e50"
            />
            <span>Chiyo</span>
          </div>
        </div>
        <div id="profile-chooser-manage">
          <span>Manage Profiles</span>
        </div>
      </section>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
