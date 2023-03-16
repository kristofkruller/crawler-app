import Image from 'next/image'
import styles from '../styles/home.module.scss'
import Table from '@root/components/Table/table'
import SiteData from "../assets/data/dataset.json";
import SearchBox from '@root/components/Search/SearchBox';

export default function Home() {
  return (
    <main className={styles.wrap}>
      <section className={styles.title}>
        <h2>this is a</h2>
        <div className={styles.anim}>
          <div className={styles.fir}><h1>Crawler</h1></div>
          <div className={styles.sec}><h1>Scraper</h1></div>
          <div className={styles.thr}><h1>Spider</h1></div>
        </div>
        <p>for the top 50's</p>
        <h2>Just pick one site from the list and let the <span>crawler</span> do his job</h2>
      </section>
      {/* <section className={styles.crawler}>
        <Image
        alt='spider with orange background represents the phrase "crawler"'
        src={"https://images.unsplash.com/photo-1611763806287-7f9858f4da69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
        width={682}
        height={455}
        />
      </section> */}
      <SearchBox data={SiteData} />
      <Table data={SiteData} />
    </main>
  )
}
