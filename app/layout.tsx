import { StaticHomeSeo } from "@root/components/seo";
import { Raleway } from "next/font/google";

import "@root/styles/globals.scss";

const raleway = Raleway({ subsets: ['latin'] });

export const metadata = StaticHomeSeo();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${raleway.className}`}>
      <body>{children}</body>
    </html>
  )
}
