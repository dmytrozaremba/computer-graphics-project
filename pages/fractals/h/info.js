import Image from 'next/image';
import Link from 'next/link';
import Nav from '../../../components/Nav';

const info = () => {
  return (
    <div className="container">
      <Nav />
      <div className="info-container">
        <Image src="/h-fract-example.png" width={640} height={640} />
        <div className="parameters-box" style={{ height: '25%' }}>
          <p style={{ fontSize: '1.4rem', width: '80%' }}>
            Для побудови цього фракталу будують фігуру у вигляді букви Н, у якої
            вертикальні і горизонтальні відрізки рівні. Потім до кожної з 4
            вершин фігури присвоюється її копія, зменшена в два рази. Знову до
            кожного кінця (їх вже 16) необхідно присвоювати копії літери Н,
            зменшені вже в 4 рази. І так далі. Якщо кількість кроків спрямувати
            в нескінченність, то вийде фрактал, який візуально майже заповнює
            деякий квадрат. Н-фрактал всюди щільний у ньому. Тобто в будь-якому
            околі будь-якої точки квадрата знайдуться точки фрактала.
          </p>
          <div className="buttons">
            <Link href="/fractals/t/info">
              <button className="btn">Т-фрактали</button>
            </Link>
            <Link href="/fractals/h">
              <button className="btn" style={{ width: '100%' }}>
                Почати
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default info;
