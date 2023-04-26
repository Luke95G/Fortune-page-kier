import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTiktok,
  faYoutube,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="https://open.spotify.com/artist/1CtuBKJfOnrOkdUDnbl8Da?si=dcNO_kO_TsOsc0IPzp7J1Q&nd=1">
            <FontAwesomeIcon icon={faSpotify} size="2x" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/kierofficialmusic/?hl=en-gb">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/KIEROFFICIALMUSIC1/">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@kierofficialmusic?is_from_webapp=1&sender_device=pc">
            <FontAwesomeIcon icon={faTiktok} size="2x" />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@KIEROFFICIALMUSIC/featured">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
