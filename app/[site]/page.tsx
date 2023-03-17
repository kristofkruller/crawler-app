import { SiteData } from "@root/crawl";
import Link from "next/link";
import data from "../../assets/data/dataset.json"

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
    <>
      <Link href="/">Back</Link>
      {siteData.map(site => (
        <section key={site.Category}>
          <h1 key={site.Site}>{site.Site}</h1>
          <h2 key={site["Domain Name"]}>{site["Domain Name"]}</h2>
          <p key={site.rank}>{`This site in category ${site.Category} achieved rank ${site.rank} of the world most visited websites according to https://www.kaggle.com/datasets/thedevastator/the-top-websites-in-the-world`}</p>
        </section>
      ))}
    </>
  )
}