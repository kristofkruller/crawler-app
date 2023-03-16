"use client"
import { DataProp } from '@root/crawl';
import Link from 'next/link';
import React, { FC, useState } from 'react';
import styles from "./search.module.scss";

const SearchBox: FC<DataProp> = ( { data } ) => {
  
  const [input, setInput] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setInput(event.target.value);
  
  const filteredVal = data.filter(data => {
    return (
      data["Site"].toLowerCase().includes(input.toLowerCase()) 
      || data["Domain Name"].toLowerCase().includes(input.toLowerCase()) 
      || data["Category"].toLowerCase().includes(input.toLowerCase())
      || data['Principal country/territory'].toLowerCase().includes(input.toLowerCase())
    );
  });
  
  return (
    <>
      <input className={styles.input}
        key="search"
        type="search"
        placeholder="Search for site form the list below"
        onChange={handleChange}
      />
    {input.length > 0 ?
      <div className={styles.field} key="filteredVal">{ filteredVal.map(val => <Link href={`/${val.Site}`} key={val.rank}>{val.Site}</Link>) }</div>  
    : <p className={styles.hint} key="hint">you can search by site, domain name, category or territory</p> 
    }
    </>
  )
}

export default SearchBox