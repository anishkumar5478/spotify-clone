import React, { useState, useEffect } from "react";
import "./App.css";
import Login from "./Login.js";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log(" user---> ", user);
      });
    }

    console.log("here  ur token is ", _token);
  }, []);

  return <div className="app">{token ? <h1>I am Logged</h1> : <Login />}</div>;
}

export default App;
