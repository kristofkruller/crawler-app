"use client"

import { SiteData } from '@root/crawl'
import axios from 'axios';
import React, { FC, useRef } from 'react'

interface BtnProp {
  row: SiteData;
}

const CrawlBtn: FC<BtnProp> = ({ row }) => {
  const { current } = useRef(row['Domain Name']);
  const handleCrawl = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try { 
      const data = await axios.get(`/api/${current}`)
      .then(response => response.data);
    // .then(data => {
    //   // Update the UI with the list of third-party libraries
    //   const list = document.getElementById('libraries-list');
    //   list.innerHTML = '';

    //   data.forEach(library => {
    //     const listItem = document.createElement('li');
    //     listItem.textContent = library;
    //     list.appendChild(listItem);
    //   });
    // });

    } catch (error) { console.error(error) }

  }

  return (
    <button onClick={handleCrawl}>crawlBtn</button>
  )
}

export default CrawlBtn

