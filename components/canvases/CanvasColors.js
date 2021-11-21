import { useEffect, useRef, useState } from 'react';

const CanvasColors = (props) => {
  const canvasRef = useRef(null);

  const [rgb, setRgb] = useState('');
  const [hsv, setHsv] = useState('');
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [absPos, setAbsPos] = useState({ x: -1, y: -1 });

  function rgbToHsv(r, g, b) {
    if (arguments.length === 1) {
      (g = r.g), (b = r.b), (r = r.r);
    }
    var max = Math.max(r, g, b),
      min = Math.min(r, g, b),
      d = max - min,
      h,
      s = max === 0 ? 0 : d / max,
      v = max / 255;

    switch (max) {
      case min:
        h = 0;
        break;
      case r:
        h = g - b + d * (g < b ? 6 : 0);
        h /= 6 * d;
        break;
      case g:
        h = b - r + d * 2;
        h /= 6 * d;
        break;
      case b:
        h = r - g + d * 4;
        h /= 6 * d;
        break;
    }

    return {
      h: h,
      s: s,
      v: v,
    };
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const maxWidth = 680;

    const baseImage = new Image();
    baseImage.src = props.imgUrl;

    baseImage.onload = function () {
      const { width, height } = baseImage;
      if (width > maxWidth) {
        const ratio = maxWidth / width;
        canvas.width = width * ratio;
        canvas.height = height * ratio;
      } else {
        canvas.width = width;
        canvas.height = height;
      }

      context.drawImage(baseImage, 0, 0);
      context.globalCompositeOperation = 'saturation';
      context.fillStyle = `hsl(120,${props.saturation}%,50%)`;
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.globalCompositeOperation = 'source-over';
    };
  }, [props.saturation, props.imgUrl]);

  useEffect(() => {
    const canvas = canvasRef.current;

    const rect = canvas.getBoundingClientRect();
    setAbsPos({
      x: Math.round(pos.x - rect.left),
      y: Math.round(pos.y - rect.top),
    });

    if (absPos.x > -1 && absPos.y > -1) {
      const imageData = canvas
        .getContext('2d')
        .getImageData(0, 0, canvas.width, canvas.height).data;
      let basePos = absPos.y * canvas.width + absPos.x;
      basePos *= 4;

      const rgbObj = {
        r: imageData[basePos],
        g: imageData[basePos + 1],
        b: imageData[basePos + 2],
      };

      const hsvObj = rgbToHsv({ ...rgbObj });

      setRgb(`(${rgbObj.r}, ${rgbObj.g}, ${rgbObj.b})`);
      setHsv(
        `(${Math.round(hsvObj.h * 360)}°, ${hsvObj.s.toFixed(
          3
        )}, ${hsvObj.v.toFixed(3)})`
      );
    }
  }, [pos]);

  return (
    <div>
      <div>
        <canvas
          ref={canvasRef}
          style={{ padding: '0px', border: 'none' }}
          onMouseMove={(e) => {
            setPos({ x: e.clientX, y: e.clientY });
          }}
          onMouseOut={(e) => {
            setRgb('');
            setHsv('');
          }}
        ></canvas>
      </div>
      <div className="parameters-box-colors">
        <div className="color-field">RGB: {rgb}</div>
        <div className="color-field">HSV: {hsv}</div>
      </div>
    </div>
  );
};

export default CanvasColors;
