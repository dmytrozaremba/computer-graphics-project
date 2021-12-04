import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Nav from '../../../components/Nav';

const info = () => {
  return (
    <div>
      <Head>
        <title>Fractals</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="container">
        <Nav />
        <div className="info-container">
          <Image src="/t-fract-example.png" width={640} height={640} />
          <div className="parameters-box" style={{ height: '25%' }}>
            <p style={{ fontSize: '1.4rem', width: '80%' }}>
              Побудова Т-фракталу розпочинається із одиничного квадрата. На
              першому кроці необхідно зафарбувати в центрі квадрат зі стороною
              1/2. Потім потрібно подумки розділити квадрат на 4 однакових
              квадрати і в центрі кожного з них зафарбувати квадрат зі стороною
              ¼. Далі кожен з цих 4 квадратів знову ділиться на 4 частини,
              всього вийде 16 квадратиків, і з кожним з них потрібно повторити
              процедуру. І так далі до нескінченності.
            </p>
            <div className="buttons">
              <Link href="/fractals/h/info">
                <button className="btn">Н-фрактали</button>
              </Link>
              <Link href="/fractals/t">
                <button className="btn" style={{ width: '100%' }}>
                  Почати
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default info;
