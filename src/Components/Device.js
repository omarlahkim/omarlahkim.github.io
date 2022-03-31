import React from "react";

function Device(props) {
  switch (props.device) {
    case "ios":
      return (
        <div className="device device-iphone-x">
          <div className="device-frame">
            <img
              className="device-content"
              alt="iphone x"
              src={props.content}
            ></img>
          </div>
          <div className="device-stripe"></div>
          <div className="device-header"></div>
          <div className="device-sensors"></div>
          <div className="device-btns"></div>
          <div className="device-power"></div>
          <div className="device-home"></div>
        </div>
      );

    case "android":
      return (
        <div className="device device-galaxy-s8 device-black">
          <div className="device-frame">
            <img
              alt="galaxy s8"
              className="device-content"
              src={props.content}
            />
          </div>
          <div className="device-stripe"></div>
          <div className="device-header"></div>
          <div className="device-sensors"></div>
          <div className="device-btns"></div>
          <div className="device-power"></div>
        </div>
      );

    case "tablet":
      return (
        <div className="device device-surface-pro">
          <div className="device-frame">
            <img
              alt="surface pro"
              className="device-content"
              src={props.content}
            />
          </div>
          <div className="device-stripe"></div>
          <div className="device-header"></div>
          <div className="device-sensors"></div>
          <div className="device-btns"></div>
          <div className="device-power"></div>
        </div>
      );

    case "watch":
      return (
        <div className="gif-content">
          <img className="gif-content" alt="insta feed" src={props.content} />
        </div>
      );

    case "web":
      return (
        <div className="device device-macbook-pro device-spacegray">
          <div className="device-frame">
            <img
              alt="macbook pro"
              className="device-content"
              src={props.content}
            />
          </div>
          <div className="device-stripe"></div>
          <div className="device-header"></div>
          <div className="device-sensors"></div>
          <div className="device-btns"></div>
          <div className="device-power"></div>
        </div>
      );

    default:
      return null;
  }
}

export default Device;
