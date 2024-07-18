import React from "react";

export default function NowPlaying() {
  return (
    <div>
      <div id="music" className="item">
        {/* <img
          src="https://images.emojiterra.com/google/noto-emoji/unicode-15/animated/1f3b6.gif"
          alt="now playing music animation"
          className="new-article"
        /> */}
        {/* <p>Now Playing</p> */}
        <img
          src="https://lastfm-recently-played.vercel.app/api?user=omarigg&loved=true&header_size=none&footer_style=normal_stats&width=300&bg_color=00000088"
          alt="currently playing music from last.fm"
        />
      </div>
    </div>
  );
}