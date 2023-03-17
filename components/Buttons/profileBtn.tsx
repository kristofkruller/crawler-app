"use client"

import { SiteData } from '@root/crawl'
import { useRouter } from 'next/navigation';
import React, { FC } from 'react'
import styles from "./buttons.module.scss"

interface BtnProp {
  row: SiteData;
}

const MoreBtn: FC<BtnProp> = ({ row }) => {
  const router = useRouter();

  const profileRoute = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.push(`/${row['Site']}`);
  }

  return (
    <button className={styles.more} onClick={profileRoute}>More</button>
  )
}

export default MoreBtn

