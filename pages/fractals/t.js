import Nav from '../../components/Nav';
import Head from 'next/head';
import Canvas from '../../components/canvases/CanvasT';
import { useState } from 'react';

const fractal = () => {
  const maxIteration = 8;
  const minIteration = 1;

  const [iteration, setIteration] = useState(1);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [lineColor, setLineColor] = useState('#fff');
  const [backgroundColor, setBackgroundColor] = useState('#000');

  const onIterationChange = (e) => {
    if (e.target.value > maxIteration) return setIteration(maxIteration);
    if (e.target.value < minIteration) return setIteration(minIteration);
    return setIteration(e.target.value);
  };

  return (
    <div>
      <Head>
        <title>Fractals</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="container">
        <Nav />
        <div className="content">
          <div className="canvas-box">
            <Canvas
              iteration={iteration}
              x={x}
              y={y}
              backgroundColor={backgroundColor}
              lineColor={lineColor}
            />
          </div>
          <div className="parameters-box">
            <div className="field">
              <h4>Кількість ітерацій:</h4>
              <input
                type="number"
                value={iteration}
                onChange={onIterationChange}
              />
            </div>
            <div className="field">
              <h4 style={{ marginRight: '0.3rem' }}>Кординати центру: </h4>
              <h4>X:</h4>
              <input
                type="number"
                value={x}
                onChange={(e) => setX(e.target.value)}
              />
              <h4>Y:</h4>
              <input
                type="number"
                value={y}
                onChange={(e) => setY(e.target.value)}
              />
            </div>
            <div className="field">
              <h4>Колір фону:</h4>
              <input
                type="color"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
              />
            </div>
            <div className="field">
              <h4>Колір ліній:</h4>
              <input
                type="color"
                value={lineColor}
                onChange={(e) => setLineColor(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default fractal;
