import React from "react";

function Device(props) {
  switch (props.device) {
    case "ios":
      return (
        <div class="marvel-device iphone-x">
          <div class="notch">
            <div class="camera"></div>
            <div class="speaker"></div>
          </div>
          <div class="top-bar"></div>
          <div class="sleep"></div>
          <div class="bottom-bar"></div>
          <div class="volume"></div>
          <div class="overflow">
            <div class="shadow shadow--tr"></div>
            <div class="shadow shadow--tl"></div>
            <div class="shadow shadow--br"></div>
            <div class="shadow shadow--bl"></div>
          </div>
          <div class="inner-shadow"></div>
          <div class="screen">
            <img src={props.content} style={{ height: "100%" }} />
          </div>
        </div>
      );
      break;
    case "android":
      return (
        <div class="marvel-device note8">
          <div class="inner"></div>
          <div class="overflow">
            <div class="shadow"></div>
          </div>
          <div class="speaker"></div>
          <div class="sensors"></div>
          <div class="more-sensors"></div>
          <div class="sleep"></div>
          <div class="volume"></div>
          <div class="camera"></div>
          <div class="screen">
            <img src={props.content} style={{ height: "100%" }} />
          </div>
        </div>
      );
      break;
    case "tablet":
      return (
        <div class="marvel-device ipad black landscape">
          <div class="camera"></div>
          <div class="screen">
            <img
              src={props.content}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div class="home"></div>
        </div>
      );
      break;
    case "web":
      return (
        <div class="marvel-device macbook">
          <div class="top-bar"></div>
          <div class="camera"></div>
          <div class="screen">
            <img
              src={props.content}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div class="bottom-bar"></div>
        </div>
      );

    default:
      return null;
  }
}

export default Device;
