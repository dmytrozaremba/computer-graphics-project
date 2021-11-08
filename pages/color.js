import Nav from '../components/Nav';
import Head from 'next/head';
import Canvas from '../components/canvases/CanvasColors';
import { useState } from 'react';

const color = () => {
  const [saturation, setSaturation] = useState(50);
  const [imgUrl, setImgUrl] = useState('/Squidward-Normal.png');
  return (
    <div>
      <Head>
        <title>Color Models</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="container">
        <Nav />
        <div className="content">
          <div className="canvas-box">
            <Canvas saturation={50} imgUrl={imgUrl} />
            <Canvas saturation={saturation} imgUrl={imgUrl} />
          </div>
          <div className="parameters-box">
            <div className="range-field">
              <h4>Насиченість:</h4>
              <input
                type="range"
                min="0"
                max="100"
                value={saturation}
                onChange={(e) => setSaturation(e.target.value)}
                className="saturation-range"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default color;
