import { DataProp, SiteData } from '@root/crawl';
import Link from 'next/link';
import React, { FC } from 'react';
import styles from "./table.module.scss";

const Table: FC<DataProp & React.PropsWithChildren> = ({ data, children }) => {
  const header = Object.keys(data[0]);

  return (
    <section className={styles.table}>
      <div className={styles.header}>
        {header.map(title => {
          const tUp = title.toUpperCase();
          return <p className={styles.content} key={tUp}>{tUp}</p>;
        })}
      </div>
      <div className={styles.body}>
        {data.map((row: any, index: number) => (
          <Link key={index} 
          href={`/api/${row['Domain Name']}`}
          className={styles.row}
          >
            {
              header.map((val: string, _) => {
                return <p className={styles.content} key={row[val]}>{row[val]}</p>
              })
            }
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Table