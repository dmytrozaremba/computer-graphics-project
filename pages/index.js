import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Computer Grapics</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.header}>Computer Graphics</h1>
        <div className={styles.grid}>
          <Link href="/fractals/h/info">
            <div className={styles.card}>
              <Image
                src="/fractal_picture.jpg"
                width={600}
                height={800}
                className={styles.rounded}
              />
              <div className={styles.title}>Фрактали</div>
              <div className={styles.content}>
                Модуль для побудови Т-фракталів та Н-фракталів різних кольорів
                та стилів.
              </div>
            </div>
          </Link>
          <Link href="/color/info">
            <div className={styles.card}>
              <Image
                src="/color_picture.jpg"
                width={600}
                height={800}
                className={styles.rounded}
              />
              <div className={styles.title}>Колірні моделі</div>
              <div className={styles.content}>
                Модуль для зміни насиченості по зеленому кольору колірних
                моделей RGB та HSV.
              </div>
            </div>
          </Link>
          <Link href="/affine/info">
            <div className={styles.card}>
              <Image
                src="/affine_picture.jpg"
                width={600}
                height={800}
                layout="responsive"
                className={styles.rounded}
              />
              <div className={styles.title}>Афінні перетворення</div>
              <div className={styles.content}>
                Модуль для зображення трикутниука проти годинникової стрілки та
                його масштабування.
              </div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
