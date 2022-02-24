import type { NextPage } from 'next';
import Head from 'next/head';
import FaqList from '../components/faq/faqList.component';
import Nav from '../components/navs/nav.component.en'
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frequently Asked Questions | Stand For Trees </title>
        <meta name="description" content="Coding challenge Meta Carbon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <div className={styles.image}></div>
      <div className={styles.contentContainer}>

        <div className={styles.verticalSpacer}></div>

        <div className={styles.faqContainer}>
          <div className={styles.titleContainer}>
            <div className={styles.titleStripe}></div>
            <div className={styles.title}>
              <h2>Frequently Asked Questions</h2>
            </div>
          </div>

          <div className={styles.faqs}>
            <FaqList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home