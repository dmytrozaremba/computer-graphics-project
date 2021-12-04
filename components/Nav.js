import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();

  const styleFract = {
    backgroundColor: router.pathname.includes('/fractals')
      ? '#373737'
      : '#e3e1e1',
    color: router.pathname.includes('/fractals') ? '#fff' : '#000',
    cursor: router.pathname.includes('/fractals') ? 'default' : 'pointer',
  };
  const styleColor = {
    backgroundColor: router.pathname.includes('/color') ? '#373737' : '#e3e1e1',
    color: router.pathname.includes('/color') ? '#fff' : '#000',
    cursor: router.pathname.includes('/color') ? 'default' : 'pointer',
  };
  const styleAffine = {
    backgroundColor: router.pathname.includes('/affine')
      ? '#373737'
      : '#e3e1e1',
    color: router.pathname.includes('/affine') ? '#fff' : '#000',
    cursor: router.pathname.includes('/affine') ? 'default' : 'pointer',
  };

  return (
    <nav className={navStyles.nav}>
      <Link href="/">
        <div className={navStyles.home} style={{ cursor: 'pointer' }}>
          <a>На головну</a>
        </div>
      </Link>
      <div style={{ marginBottom: '12rem' }}>
        <Link href="/fractals/h/info">
          <div className={navStyles.item} style={styleFract}>
            <a>Фрактали</a>
          </div>
        </Link>
        <Link href="/color/info">
          <div className={navStyles.item} style={styleColor}>
            <a>Кольори</a>
          </div>
        </Link>
        <Link href="/affine/info">
          <div className={navStyles.item} style={styleAffine}>
            <a>Перетворення</a>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
