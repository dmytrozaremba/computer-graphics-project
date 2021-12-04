import { useRef, useEffect } from 'react';

function drawGrid(x_axis, y_axis, x_max, y_max, ctx) {
  ctx.clearRect(0, 0, x_axis * 2, y_axis * 2);
  var x_scale = x_axis / (x_max + 1);
  var y_scale = y_axis / (y_max + 1);

  var x_offset = x_axis + 0.5; // location on canvas
  var y_offset = y_axis + 0.5; // of graph's origin

  ctx.font = '10px sans-serif';
  ctx.lineWidth = 1;

  // draw x values
  let j = -x_max;
  while (j <= x_max) {
    let x = j * x_scale;
    ctx.strokeStyle = '#eee';
    if (x_max < 15 || j % 3 == 0) ctx.strokeStyle = '#ccc';
    ctx.beginPath();
    ctx.moveTo(x + x_offset, 0);
    ctx.lineTo(x + x_offset, y_offset * 2);
    ctx.stroke();
    ctx.closePath();

    ctx.strokeStyle = '#666';
    if (x_max < 15 || j % 3 == 0)
      ctx.fillText(j, x + x_offset - 6, y_offset + 15);

    // draw x-axis
    ctx.beginPath();
    ctx.moveTo(0, y_offset);
    ctx.lineTo(x_axis * 2, y_offset);
    ctx.stroke();
    ctx.closePath();

    // draw arrow
    ctx.beginPath();
    ctx.moveTo(x_axis * 2 + 0.5, y_axis + 0.5);
    ctx.lineTo(x_axis * 2 + 0.5 - 8, y_axis + 0.5 - 3);
    ctx.lineTo(x_axis * 2 + 0.5 - 8, y_axis + 0.5 + 3);
    ctx.stroke();
    ctx.closePath();
    ctx.fill();

    j++;
    if (j == 0) {
      j++;
    }
  }

  // draw y values
  j = -y_max;
  while (j <= y_max) {
    let y = j * y_scale;
    ctx.strokeStyle = '#eee';
    if (x_max < 15 || j % 3 == 0) ctx.strokeStyle = '#ccc';
    ctx.beginPath();
    ctx.moveTo(0, y + y_offset);
    ctx.lineTo(x_offset * 2, y + y_offset);
    ctx.stroke();
    ctx.closePath();

    ctx.strokeStyle = '#666';
    if (y_max < 15 || j % 3 == 0)
      ctx.fillText(-j, x_offset + 7, y + y_offset + 3);

    // draw y-axis
    ctx.beginPath();
    ctx.moveTo(x_offset, 0);
    ctx.lineTo(x_offset, y_axis * 2);
    ctx.stroke();
    ctx.closePath();

    // draw arrow
    ctx.beginPath();
    ctx.moveTo(x_axis + 0.5, 0.5);
    ctx.lineTo(x_axis + 0.5 - 3, 0.5 + 8);
    ctx.lineTo(x_axis + 0.5 + 3, 0.5 + 8);
    ctx.stroke();
    ctx.closePath();
    ctx.fill();

    j++;
    if (j == 0) {
      j++;
    }
  }
  ctx.font = '14px sans-serif';
  ctx.fillText('0', x_axis + 2, y_axis + 13);
  ctx.fillText('Y', x_axis - 15, 15);
  ctx.fillText('X', x_axis * 2 - 10, y_axis - 10);
}

function drawTriangle(a, b, c, context, ticks, height) {
  const offset = height / (ticks * 2);

  context.strokeStyle = '#006147';

  context.beginPath();
  context.moveTo((a.x + ticks) * offset, (ticks - a.y) * offset);

  context.lineTo((b.x + ticks) * offset, (ticks - b.y) * offset);

  context.lineTo((c.x + ticks) * offset, (ticks - c.y) * offset);
  context.closePath();

  context.fillStyle = '#0f0';
  context.fillRect(
    (a.x + ticks) * offset - 2.5,
    (ticks - a.y) * offset - 2.5,
    5,
    5
  );

  context.fillStyle = '#00f';
  context.fillRect(
    (b.x + ticks) * offset - 2.5,
    (ticks - b.y) * offset - 2.5,
    5,
    5
  );

  context.fillStyle = '#f00';
  context.fillRect(
    (c.x + ticks) * offset - 2.5,
    (ticks - c.y) * offset - 2.5,
    5,
    5
  );

  // the outline
  context.lineWidth = 1;
  context.strokeStyle = 'black';
  context.stroke();
}

const Canvas = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (props.redrawClicked) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      canvas.width = 600;
      canvas.height = 600;

      const scaling = -(-props.canvasScaling);
      drawGrid(300, 300, scaling, scaling, context);
      drawTriangle(...props.cords, context, scaling + 1, 600);
      props.setRedrawClicked(false);
    }
  }, [props.redrawClicked]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 600;

    const scaling = -(-props.canvasScaling);
    drawGrid(300, 300, scaling, scaling, context);
    drawTriangle(...props.cords, context, scaling + 1, 600);
  }, [props.canvasScaling]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 600;
    const scaling = -(-props.canvasScaling);
    drawGrid(300, 300, scaling, scaling, context);
    drawTriangle(...props.cords, context, scaling + 1, 600);
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default Canvas;
