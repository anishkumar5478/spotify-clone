import React from "react";
import { loginUrl } from "./spotify.js";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <h1></h1>
      {/* spotify logo */}
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify"
      ></img>

      {/* spotify lpogin with button */}

      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
