import { useState } from 'react';

const Parameters = () => {
  const maxIteration = 8;
  const minIteration = 1;

  const [iteration, setIteration] = useState(3);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [lineStyle, setLineStyle] = useState('dashed');
  const [lineColor, setLineColor] = useState('#ee3366');

  const onIterationChange = (e) => {
    if (e.target.value > maxIteration) return setIteration(maxIteration);
    if (e.target.value < minIteration) return setIteration(minIteration);
    return setIteration(e.target.value);
  };

  return (
    <div className="parameters-box">
      <div className="field">
        <h4>Кількість ітерацій:</h4>
        <input type="number" value={iteration} onChange={onIterationChange} />
      </div>
      <div className="field">
        <h4 style={{ marginRight: '0.3rem' }}>Кординати центру: </h4>
        <h4>X:</h4>
        <input type="number" value={x} onChange={(e) => setX(e.target.value)} />
        <h4>Y:</h4>
        <input type="number" value={y} onChange={(e) => setY(e.target.value)} />
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
      <div className="field">
        <input type="button" value="Generate" />
      </div>
    </div>
  );
};

export default Parameters;
