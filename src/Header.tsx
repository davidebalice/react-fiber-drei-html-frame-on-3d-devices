import logo from "../public/assets/model/textures/logoWhite.png";
import minus from "../public/assets/model/textures/minus.png";
import monitorOld from "../public/assets/model/textures/monitor-old.png";
import monitor from "../public/assets/model/textures/monitor.png";
import notebook from "../public/assets/model/textures/notebook.png";
import plus from "../public/assets/model/textures/plus.png";
import smartphone from "../public/assets/model/textures/smartphone.png";
import tablet from "../public/assets/model/textures/tablet.png";
import tv from "../public/assets/model/textures/tv.png";
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
    <>
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

          <div
            onClick={() => {
              setDevice("tv");
              setCameraPosition(initialPosition);
              setCameraPositionIndex(0);
            }}
          >
            <img src={tv} />
          </div>
        </div>
      </header>
      <div className="zoomContainer no-select">
        <p>Zoom</p>
        <div
          onClick={() => {
            setCameraPosition(initialPosition);
            setCameraPositionIndex(0);
          }}
        >
          <img src={minus} />
        </div>
        <div
          onClick={() => {
            setCameraPosition(finalPosition);
            setCameraPositionIndex(1);
          }}
        >
          <img src={plus} />
        </div>
      </div>
    </>
  );
}
