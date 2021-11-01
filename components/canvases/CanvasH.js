import { useRef, useEffect } from 'react';

const Canvas = (props) => {
  const canvasRef = useRef(null);

  // recursive func
  const hTree = (ctx, point, len, depth) => {
    if (depth === 0) {
      return;
    }

    ctx.strokeStyle = props.lineColor;

    switch (props.lineStyle) {
      case 'dashed':
        ctx.setLineDash([10, 10]);
        break;
      case 'doted':
        ctx.setLineDash([1, 1]);
        break;
      default:
        ctx.setLineDash([]);
        break;
    }

    // draw horizontal line
    const h1 = { x: point.x - len / 2.0, y: point.y };
    const h2 = { x: point.x + len / 2.0, y: point.y };
    drawLine(ctx, h1, h2);

    const v1 = { x: h1.x, y: h1.y - len / 2.0 };
    const v2 = { x: h1.x, y: h1.y + len / 2.0 };
    drawLine(ctx, v1, v2);

    const v3 = { x: h2.x, y: h2.y - len / 2.0 };
    const v4 = { x: h2.x, y: h2.y + len / 2.0 };
    drawLine(ctx, v3, v4);

    // compute new length, depth
    depth--;
    len = len / 2;

    // recurse recurse recurse recurse
    hTree(ctx, v1, len, depth);
    hTree(ctx, v2, len, depth);
    hTree(ctx, v3, len, depth);
    hTree(ctx, v4, len, depth);
  };

  // line helper
  const drawLine = (context, from, to) => {
    context.beginPath();
    context.moveTo(from.x, from.y);
    context.lineTo(to.x, to.y);
    context.stroke();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    let depth = props.iteration;

    canvas.height = 600;
    canvas.width = canvas.height;

    const center = {
      x: canvas.width / 2.0 + -(-props.x),
      y: canvas.height / 2.0 + -(-props.y),
    };

    // constants
    const len = canvas.width / 2;

    // paint helper
    const paint = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      hTree(context, center, len, depth);
    };

    paint();
  }, [hTree]);

  return <canvas ref={canvasRef}></canvas>;
};

export default Canvas;
