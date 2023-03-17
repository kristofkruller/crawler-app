"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import styles from "./buttons.module.scss"

const JsonBtn = () => {
  const router = useRouter();
  useEffect(() => {
    router.prefetch("/api/domains");
    console.log("%cjson prefetched for client side", "color: #d3d3d385; font-size: smaller;")
  }, [])

  return (
    <Link className={styles.basic} href="/api/domains" target="_blank">Show Top50 as Json</Link>
  )
}

export default JsonBtn