import Nav from '../../components/Nav';
import Canvas from '../../components/canvases/CanvasAffine';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const affine = () => {
  const [cords, setCords] = useState([
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 1 },
  ]);

  const [rotationPoint, setRotationPoint] = useState(0);

  const [angle, setAngle] = useState(0);

  const [scaleX, setScaleX] = useState(1);
  const [scaleY, setScaleY] = useState(1);

  const [redrawClicked, setRedrawClicked] = useState(false);

  const [canvasScaling, setCanvasScaling] = useState(8.0);

  function Rotate(cords, angle, rp, xScale, yScale) {
    const [a, b, c] = cords;

    const rotPoint = cords[rp];

    const triangleMatrix = [
      [a.x, a.y, 1],
      [b.x, b.y, 1],
      [c.x, c.y, 1],
    ];

    const moveMatrix = [
      [1, 0, 0],
      [0, 1, 0],
      [-rotPoint.x, -rotPoint.y, 1],
    ];

    const moveBackMatrix = [
      [1, 0, 0],
      [0, 1, 0],
      [rotPoint.x, rotPoint.y, 1],
    ];

    const scaleMatrix = [
      [xScale, 0, 0],
      [0, yScale, 0],
      [0, 0, 1],
    ];

    let res = [[], [], []];

    for (let i = 0; i < triangleMatrix.length; i++) {
      for (let j = 0; j < triangleMatrix[i].length; j++) {
        let tres = 0;
        for (let k = 0; k < triangleMatrix[i].length; k++) {
          tres += triangleMatrix[i][k] * moveMatrix[k][j];
        }
        res[i].push(tres);
      }
    }

    let rotateMatrix = [
      [Math.cos(angle * (Math.PI / 180)), Math.sin(angle * (Math.PI / 180)), 0],
      [
        -Math.sin(angle * (Math.PI / 180)),
        Math.cos(angle * (Math.PI / 180)),
        0,
      ],
      [0, 0, 1],
    ];

    let resrot = [[], [], []];

    for (let i = 0; i < res.length; i++) {
      for (let j = 0; j < res[i].length; j++) {
        let tres = 0;
        for (let k = 0; k < res[i].length; k++) {
          tres += res[i][k] * rotateMatrix[k][j];
        }
        resrot[i].push(tres);
      }
    }

    let finalRes = [[], [], []];

    for (let i = 0; i < resrot.length; i++) {
      for (let j = 0; j < resrot[i].length; j++) {
        let tres = 0;
        for (let k = 0; k < resrot[i].length; k++) {
          tres += resrot[i][k] * moveBackMatrix[k][j];
        }
        finalRes[i].push(tres);
      }
    }

    let scaleRes = [[], [], []];
    for (let i = 0; i < finalRes.length; i++) {
      for (let j = 0; j < finalRes[i].length; j++) {
        let tres = 0;
        for (let k = 0; k < finalRes[i].length; k++) {
          tres += finalRes[i][k] * scaleMatrix[k][j];
        }
        scaleRes[i].push(tres);
      }
    }

    return [
      {
        x: parseFloat(scaleRes[0][0].toFixed(4)),
        y: parseFloat(scaleRes[0][1].toFixed(4)),
      },
      {
        x: parseFloat(scaleRes[1][0].toFixed(4)),
        y: parseFloat(scaleRes[1][1].toFixed(4)),
      },
      {
        x: parseFloat(scaleRes[2][0].toFixed(4)),
        y: parseFloat(scaleRes[2][1].toFixed(4)),
      },
    ];
  }

  return (
    <div>
      <Head>
        <title>Affine Transgormations</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="container">
        <Nav />
        <div className="content">
          <div className="canvas-box">
            <Canvas
              cords={cords}
              setCords={setCords}
              rotationPoint={rotationPoint}
              angle={angle}
              scaleX={scaleX}
              scaleY={scaleY}
              canvasScaling={canvasScaling}
              redrawClicked={redrawClicked}
              setRedrawClicked={setRedrawClicked}
            />
          </div>
          <div
            className="parameters-box"
            style={{ justifyContent: 'space-around' }}
          >
            <div className="cords">
              <h4 style={{ marginBottom: '0' }}>Вершини:</h4>
              <div className="field">
                <h4 style={{ marginRight: '.3rem' }}>Green:</h4>
                <h4>X:</h4>
                <input
                  type="number"
                  value={cords[0].x}
                  onChange={(e) => {
                    setCords([
                      { ...cords[0], x: e.target.value },
                      { ...cords[1] },
                      { ...cords[2] },
                    ]);
                  }}
                />
                <h4>Y:</h4>
                <input
                  type="number"
                  value={cords[0].y}
                  onChange={(e) => {
                    setCords([
                      { ...cords[0], y: e.target.value },
                      { ...cords[1] },
                      { ...cords[2] },
                    ]);
                  }}
                />
              </div>
              <div className="field">
                <h4 style={{ marginRight: '.3rem' }}>Blue:</h4>
                <h4>X:</h4>
                <input
                  type="number"
                  value={cords[1].x}
                  onChange={(e) => {
                    setCords([
                      { ...cords[0] },
                      { ...cords[1], x: e.target.value },
                      { ...cords[2] },
                    ]);
                  }}
                />
                <h4>Y:</h4>
                <input
                  type="number"
                  value={cords[1].y}
                  onChange={(e) => {
                    setCords([
                      { ...cords[0] },
                      { ...cords[1], y: e.target.value },
                      { ...cords[2] },
                    ]);
                  }}
                />
              </div>
              <div className="field">
                <h4 style={{ marginRight: '.3rem' }}>Red:</h4>
                <h4>X:</h4>
                <input
                  type="number"
                  value={cords[2].x}
                  onChange={(e) => {
                    setCords([
                      { ...cords[0] },
                      { ...cords[1] },
                      { ...cords[2], x: e.target.value },
                    ]);
                  }}
                />
                <h4>Y:</h4>
                <input
                  type="number"
                  value={cords[2].y}
                  onChange={(e) => {
                    setCords([
                      { ...cords[0] },
                      { ...cords[1] },
                      { ...cords[2], y: e.target.value },
                    ]);
                  }}
                />
              </div>
            </div>
            <div className="other-params">
              <div className="field">
                <h4 htmlFor="point-select" style={{ marginRight: '0.3rem' }}>
                  Вершина обертаня:{' '}
                </h4>

                <select
                  name="points"
                  id="point-select"
                  onChange={(e) => {
                    setRotationPoint(e.target.value);
                  }}
                >
                  <option value={0}>Green</option>
                  <option value={1}>Blue</option>
                  <option value={2}>Red</option>
                </select>
              </div>
              <div className="field">
                <h4>Кут повороту: </h4>
                <input
                  type="number"
                  value={angle}
                  onChange={(e) => setAngle(e.target.value)}
                  style={{ marginLeft: '2rem' }}
                />
              </div>
              <div className="field">
                <h4>Масштаб сітки: </h4>
                <input
                  type="number"
                  min={5}
                  value={canvasScaling}
                  onChange={(e) => setCanvasScaling(e.target.value)}
                  style={{ width: '25%', marginLeft: '1.69rem' }}
                />
              </div>
            </div>
            <div className="scale-box">
              <h4 style={{ marginBottom: '0' }}>Масштабування: </h4>
              <div className="field">
                <h4>По X: </h4>
                <input
                  type="number"
                  step={0.2}
                  value={scaleX}
                  onChange={(e) => setScaleX(e.target.value)}
                />
              </div>
              <div className="field">
                <h4>По Y: </h4>
                <input
                  type="number"
                  step={0.2}
                  value={scaleY}
                  onChange={(e) => setScaleY(e.target.value)}
                />
              </div>
            </div>
            <div
              className="buttons-container"
              style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}
            >
              <button
                className="btn"
                style={{ padding: '.4rem', margin: '0 3rem 0 0' }}
                onClick={(e) => {
                  setCords(Rotate(cords, angle, rotationPoint, scaleX, scaleY));
                  setRedrawClicked(true);
                }}
              >
                Перемалювати
              </button>
              <Link href="/affine/info">
                <button className="btn btn-info">Довідка</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default affine;
