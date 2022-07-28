import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MyComponent from "../components/MyComponent";
import FooterB2c from "../components/FooterB2c";
import React, {useState} from "react";
import ModalWindow from "../components/ModalWindow";
import NvbHeaderB2c from "../components/NvbHeaderB2c";
import Link from "next/link";
import IolHeaderB2c from "../components/IolHeaderB2c";

const Home: NextPage = () => {
  const [showComponents, setShowComponents] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showHr, setShowHr] = useState(true);
  const [userName, setUserName] = useState<string | null>(null);
  return (
    <div>
      <Head>
        <title>Welcome home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <style dangerouslySetInnerHTML={{ __html: '/*!@:host*/.sc-my-component-h{display:block}/*!@button*/button.sc-my-component{color:#AA00CC}'}} />
      </Head>

      <IolHeaderB2c emailAddress={userName} />
      <NvbHeaderB2c isAuthenticated={!!userName} />
      <Link href="/"><a>Home</a></Link>
      <Link href="/search"><a>Search</a></Link>

      <main className={styles.main}>
        <h1 className={styles.title}>
          DEMO Stencil
        </h1>
        {showComponents && <MyComponent />}
        {showComponents && <MyComponent />}
        {showComponents && <MyComponent />}

        {showComponents && <FooterB2c userName={userName} />}

        {showComponents && <ModalWindow title="This is a modal" isVisible={showModal} setIsVisible={setShowModal} text={'This is the modal content'} />}

        <ul>
          <li>
            <button onClick={() => setShowComponents(prevState => !prevState)}>Toggle components</button>
          </li>
          <li>
            <button onClick={() => setShowHr(prevState => !prevState)}>Toggle horizontal rule</button>
          </li>
          <li>
            <button onClick={() => setUserName(prevState => prevState ? null : 'Vitalii')}>Toggle user</button>
          </li>
          <li>
            <button onClick={() => setShowModal(prevState => !prevState)}>Show modal (only when components are toggled)</button>
          </li>
        </ul>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
