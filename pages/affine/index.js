import Nav from '../../components/Nav';
import Head from 'next/head';
import Link from 'next/link';

const affine = () => {
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
              iteration={iteration}
              x={x}
              y={y}
              lineStyle={lineStyle}
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
              <h4>Стиль ліній:</h4>
              <input
                type="text"
                value={lineStyle}
                onChange={(e) => setLineStyle(e.target.value)}
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
            <div
              className="buttons-container"
              style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}
            >
              <Link href="/fractals/t">
                <button
                  className="btn"
                  style={{ padding: '.4rem', margin: '0 3rem 0 0' }}
                >
                  Т-фрактали
                </button>
              </Link>
              <Link href="/fractals/h/info">
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
