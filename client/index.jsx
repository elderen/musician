import React from "react";
import ReactDOM from "react-dom";
import SpotifyPlayer from 'react-spotify-player';

const size = {
  width: '45%',
  height: 80,
};
const view = 'coverart'; // or 'coverart'
const theme = 'white'; // or 'white'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: ["spotify:track:4tiZtoRBKOnAmZ3c95DMOo", "spotify:track:2ZitZzpm4i01kZm1nNPRPg", "spotify:track:2XeZi7qwChzLOt32tsoPXV", "spotify:track:4PouRT4KlI9TRHp45uMqdO", "spotify:track:1D2L6MefbXon28PzIk9I3r", "spotify:track:7LnU4vflcZ8fyuFaVxGtuN"]
    }
  }
  render() {
    return (
      <>
        {/* <div className="navbar">
          <p id="nv-about"> About </p>
          <p id="nv-video"> Video </p>
          <p id="nv-music"> Music </p>
          <p id="nv-contact"> Contact </p>
        </div> */}

        <div id="filler" />
        <div className="spotify">
          {this.state.uri.map((id) => {
            return <SpotifyPlayer
              className="song"
              key={id}
              uri={id}
              size={size}
              view={view}
              theme={theme}
            />
          })}
        </div>
        <div id="filler2" />
          <div className="links">
            <p id="twitter-link">Twitter</p>
            <p id="facebook-link">Facebook</p>
            <p id="instagram-link">Instagram</p>
            <p id="itunes-link">iTunes</p>
            <p id="spotify-link">Spotify</p>
            <p id="soundcloud-link">SoundCloud</p>
            <p id="youtube-link">YouTube</p>
          </div>
        <div id="filler2" />
      </>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("app"));