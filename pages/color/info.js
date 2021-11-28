import Image from 'next/image';
import Link from 'next/link';
import Nav from '../../components/Nav';

const info = () => {
  return (
    <div className="container">
      <Nav />
      <div className="info-container">
        <Image src="/colors_example.png" width={1400} height={640} />
        <div className="parameters-box" style={{ height: '25%' }}>
          <p style={{ fontSize: '1.4rem', width: '90%' }}>
            Колірні моделі потрібні для математичного опису спектру кольорів,
            видимих на екрані монітора, або на скануючих та друкуючих пристроях.
            Кольори представляються моделлю як результат змішення декількох
            базових (основних) кольорів, з яких вони складаються. Розглянуто
            моделі RGB та HSV
          </p>
          <div className="buttons">
            <Link href="/color">
              <button className="btn">Почати</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default info;
