"use client"

import { useRouter } from 'next/navigation';
import React from 'react'
import styles from "./buttons.module.scss"

const BackBtn = () => {
  const router = useRouter();
  const showJson = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.push("/");
  }

  return (
    <button className={styles.basic} onClick={showJson}>Back</button>
  )
}

export default BackBtn