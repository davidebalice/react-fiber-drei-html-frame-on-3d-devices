import "./style.css";
import logo from "../public/assets/model/textures/logoWhite.png";

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
      <nav>
        <img src={logo} className="dbLogo"/>
        <ul>
          <li>
            <a
              onClick={() => {
                setDevice("notebook");
                setCameraPosition(initialPosition);
                setCameraPositionIndex(0);
              }}
            >
              notebook
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setDevice("monitor");
                setCameraPosition(initialPosition);
                setCameraPositionIndex(0);
              }}
            >
              monitor
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setDevice("monitorOld");
                setCameraPosition(initialPosition);
                setCameraPositionIndex(0);
              }}
            >
              monitor-old
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setDevice("smartphone");
                setCameraPosition(initialPosition);
                setCameraPositionIndex(0);
              }}
            >
              smartphone
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setDevice("tablet");
                setCameraPosition(initialPosition);
                setCameraPositionIndex(0);
              }}
            >
              tablet
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setCameraPosition(initialPosition);
                setCameraPositionIndex(0);
              }}
            >
              zoom 1
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setCameraPosition(finalPosition);
                setCameraPositionIndex(1);
              }}
            >
              zoom 2
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}