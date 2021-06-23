import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Banner from '../public/banner.png';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>StaticShield + Nextjs</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div
        style={{
          maxWidth: '400px',
          margin: '20px',
          marginTop: '50px',
          marginBottom: '-60px',
        }}>
        <Image src={Banner} alt='' placeholder='blur' />
      </div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {/* Welcome to <a href='https://staticshield.vercel.app'>StaticShield</a> */}
          StaticShield + Nextjs = 🖤
        </h1>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a className={styles.link} href='/protected'>
          Visit protected page
        </a>
        <small>Password id 123123123, thats `123` thrice</small>
        <div className={styles.grid}>
          <a href='https://nextjs.org/docs' className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>
              Find in-depth information about StaticShield and its features.
            </p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/master/examples'
            className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>
              Discover StaticShield boilerplate projects with various
              frameworks.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
