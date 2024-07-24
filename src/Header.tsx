
import logo from "../public/assets/model/textures/logoWhite.png";
import monitorOld from "../public/assets/model/textures/monitor-old.png";
import monitor from "../public/assets/model/textures/monitor.png";
import notebook from "../public/assets/model/textures/notebook.png";
import smartphone from "../public/assets/model/textures/smartphone.png";
import tablet from "../public/assets/model/textures/tablet.png";
import "./style.css";

export default function Header({
  device,
  setDevice,
  setCameraPosition,
  initialPosition,
  finalPosition,
  setCameraPositionIndex,
}) {
  return (
    <header className="header">
      <div className="deviceContainer no-select">
        <p>
          <img src={logo} className="dbLogo" />
        </p>
        <div
          onClick={() => {
            setDevice("notebook");
            setCameraPosition(initialPosition);
            setCameraPositionIndex(0);
          }}
        >
          <img src={notebook} />
        </div>

        <div
          onClick={() => {
            setDevice("monitor");
            setCameraPosition(initialPosition);
            setCameraPositionIndex(0);
          }}
        >
          <img src={monitor} />
        </div>

        <div
          onClick={() => {
            setDevice("monitorOld");
            setCameraPosition(initialPosition);
            setCameraPositionIndex(0);
          }}
        >
          <img src={monitorOld} />
        </div>

        <div
          onClick={() => {
            setDevice("smartphone");
            setCameraPosition(initialPosition);
            setCameraPositionIndex(0);
          }}
        >
          <img src={smartphone} />
        </div>

        <div
          onClick={() => {
            setDevice("tablet");
            setCameraPosition(initialPosition);
            setCameraPositionIndex(0);
          }}
        >
          <img src={tablet} />
        </div>
      </div>

      <div className="zoomContainer no-select">
        <b>Zoom</b>
        <div>
          <a
            onClick={() => {
              setCameraPosition(initialPosition);
              setCameraPositionIndex(0);
            }}
          >
            zoom 1
          </a>
        </div>
        <div>
          <a
            onClick={() => {
              setCameraPosition(finalPosition);
              setCameraPositionIndex(1);
            }}
          >
            zoom 2
          </a>
        </div>
      </div>
    </header>
  );
}
