import "./style.css";

export default function Modal({ setShowModal }) {
  return (
    <div className="modal">
      <div className="modalContent">
        <div onClick={() => setShowModal(false)} className="modalClose">
          close
        </div>

        <div>
          <b>3D website visualization on different devices.</b>
          <br />
          <br />
          Developed in React Fiber and drei.
          <br />
          <br />
          Various examples of implementation of html frame in 3d scene.
          <br />
          <br />
          <br />
          <a href="https://www.davidebalice.dev" target="_blank">
            www.davidebalice.dev
          </a>
        </div>
      </div>
    </div>
  );
}
