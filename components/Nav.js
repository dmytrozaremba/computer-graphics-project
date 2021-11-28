import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.home}>
        <Link href="/">
          <a>На головну</a>
        </Link>
      </div>
      <div style={{ marginBottom: '12rem' }}>
        <div className={navStyles.item}>
          <Link href="/fractals/h/info">
            <a>Фрактали</a>
          </Link>
        </div>
        <div className={navStyles.item}>
          <Link href="/color/info">
            <a>Кольори</a>
          </Link>
        </div>
        <div className={navStyles.item}>
          <Link href="/affine/info">
            <a>Перетворення</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
