import styles from '@root/styles/home.module.scss'
import Table from '@root/components/Table/table'
import SiteData from "@root/assets/data/dataset.json";
import SearchBox from '@root/components/Search/SearchBox';
import JsonBtn from '@root/components/Buttons/jsonBtn';
import ReduxProvider from '@root/assets/store/ReduxProvider';

export default function Home() {
  return (
    <main className={styles.wrap}>
      <ReduxProvider>
        <section className={styles.title}>
          <h2>this is a</h2>
          <div className={styles.anim}>
            <div className={styles.fir}><h1>Crawler</h1></div>
            <div className={styles.sec}><h1>Scraper</h1></div>
            <div className={styles.thr}><h1>Spider</h1></div>
          </div>
          <p>for the top 50&apos;s</p>
          <h2>Just pick one site from the list and let the <span>crawler</span> do his job</h2>
        </section>
        <JsonBtn />
        <SearchBox data={SiteData} />
        <Table data={SiteData} />
      </ReduxProvider>
    </main>
  )
}
