import Nav from '../components/Nav';
import Head from 'next/head';

const color = () => {
  return (
    <div>
      <Head>
        <title>Color Models</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Nav />
    </div>
  );
};

export default color;
