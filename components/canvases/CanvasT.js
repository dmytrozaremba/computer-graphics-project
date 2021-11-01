import { useRef, useEffect } from 'react';

const Canvas = (props) => {
  const canvasRef = useRef(null);

  // recursive func
  const tSquare = (ctx, point, side, depth) => {
    if (depth === 0) {
      return;
    }

    console.log('inside');

    ctx.fillStyle = props.backgroundColor;

    const newSide = side / 2.0;

    const a1 = { x: point.x - side / 2.0, y: point.y - side / 2.0 };
    const a2 = { x: point.x - side / 2.0, y: point.y + side / 2.0 };
    const a3 = { x: point.x + side / 2.0, y: point.y + side / 2.0 };
    const a4 = { x: point.x + side / 2.0, y: point.y - side / 2.0 };

    console.log(a1, a2, a3, a4);

    ctx.fillRect(a1.x, a1.y, side, side);

    // compute new length, depth
    depth--;

    // recurse recurse recurse recurse
    tSquare(ctx, a1, newSide, depth);
    tSquare(ctx, a2, newSide, depth);
    tSquare(ctx, a3, newSide, depth);
    tSquare(ctx, a4, newSide, depth);
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
    const side = canvas.width / 2;

    // paint helper
    const paint = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      tSquare(context, center, side, depth);
    };

    paint();
  }, [tSquare]);

  return (
    <canvas
      style={{ backgroundColor: props.lineColor }}
      ref={canvasRef}
    ></canvas>
  );
};

export default Canvas;
