import { DataProp } from '@root/crawl';
import React, { FC } from 'react';
import styles from "./table.module.scss";

const Table: FC<DataProp> = ({ data }) => {
  const header = Object.keys(data[0]);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {header.map(title => {
            const tu = title.toUpperCase();
            return <th key={tu}>{tu}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row: any, index: number) => (
          <>
          <tr key={index}>
              {
                header.map((val: string, _) => {
                  return <td key={row[val]}>{row[val]}</td>
                })
              }
          </tr>
          </>
        ))
        }
      </tbody>
    </table>
  );
};

export default Table