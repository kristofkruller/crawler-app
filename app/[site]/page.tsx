import { SiteData } from "@root/crawl";
import data from "../../assets/data/dataset.json"
import BackBtn from "@root/components/Buttons/backBtn";
import styles from "@root/styles/siteProfile.module.scss"
import Link from "next/link";

export default async function DomainPage ({
  params,
  searchParams,
}: {
  params: { site: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  let siteData: SiteData[] = data;
  siteData = siteData.filter(site => site["Site"].replaceAll(" ", "%20") === params.site);

  return (
    <main className={styles.wrap}>
      {siteData.map(site => (
        <>
        <section key={site.Category} className={styles.card}>
          <h1 key={site.Site}>{site.Site}</h1>
          <h2 key={site["Domain Name"]}>{site["Domain Name"]}</h2>
          <div className={styles.content}>
            <p key={site.rank}>This site in category</p> 
            <span>{site.Category}</span>
            <p>achieved rank</p>
            <span>{`${Number(site.rank) + 1}.`}</span> 
            <p>of the world most visited websites according to</p>
            <Link className={styles.url} href="https://www.kaggle.com/datasets/thedevastator/the-top-websites-in-the-world" target="_blank">{`https://www.kaggle.com/datasets/thedevastator/the-top-websites-in-the-world`}</Link>
          </div>
          <BackBtn />

        </section>
</>
      ))}
    </main>
  )
}