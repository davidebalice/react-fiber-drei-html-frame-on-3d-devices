# React Fiber HTML Frame on 3D Devices

A demo that renders a live website inside 3D device models, built with React Three Fiber and Drei.
The page is embedded with Drei's `<Html>` component as an iframe on the screen of a notebook, monitor, old monitor, smartphone, tablet or TV.

**Live demo:** <https://html-frame-3d-devices.davidebalice.dev>

![Screenshot](https://www.aroundweb.it/screenshot/frame1.jpg)

![Screenshot](https://www.aroundweb.it/screenshot/frame2.jpg)

## Features

- Live website rendered in an iframe on the screen of 3D device models
- Six devices: notebook, monitor, old monitor, smartphone, tablet and TV
- Zoom in and out with the buttons or the mouse wheel, with smooth camera movement
- Drag to rotate the scene (presentation controls)
- Environment lighting and contact shadows
- Loading screen and info modal

## Tech stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Three.js](https://threejs.org/)
- [React Three Fiber](https://r3f.docs.pmnd.rs/) and [Drei](https://drei.docs.pmnd.rs/)

## Getting started

### Requirements

- Node.js 20 or later
- npm

### Installation

```bash
git clone https://github.com/davidebalice/react-fiber-drei-html-frame-on-3d-devices.git
cd react-fiber-drei-html-frame-on-3d-devices
npm install
```

### 3D models and assets

The 3D models and textures are **not included** in the repository (`public/assets/` is ignored by git).
Place the glTF models in `public/assets/model/` and the interface images in `public/assets/model/textures/`
(see the paths used in the components in `src/`).

The app loads the models from `./public/assets/...`, so in production the `public` folder must be
served next to the built files.

### Configuration

The website shown on the devices is set by `websiteUrl` in `src/App.tsx`.

### Available scripts

| Command           | Description                                          |
| ----------------- | ---------------------------------------------------- |
| `npm run dev`     | Start the development server                         |
| `npm run build`   | Type-check and create a production build in `dist/`  |
| `npm run preview` | Preview the production build locally                 |

## Author

**Davide Balice** – [davidebalice.dev](https://www.davidebalice.dev)
