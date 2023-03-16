import { NextResponse } from "next/server";

const fs = require("fs");
const puppeteer = require("puppeteer");

export async function GET(request: Request, res:NextResponse, { params }: {params: { domain: string }}) {
  
  // const targetUrl = request.url.substring(request.url.lastIndexOf("/") + 1);
  const targetUrl = await params.domain;
  console.log(targetUrl);

  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  
  await page.goto(`https://${targetUrl}`);

  await page.screenshot({ path: `webscrape-${targetUrl}.png`, fullPage: true });

  const thirdPartyUrls = await page.evaluate(() => {
    const thirdPartyUrls = [];

    const scriptElements = document.querySelectorAll("script");

    for (let i = 0; i < scriptElements.length; i++) {
      const src = scriptElements[i].src;

      if (
        src &&
        src.startsWith("http") &&
        !src.startsWith(window.location.origin)
      ) {
        thirdPartyUrls.push(src);
      }
    }

    return thirdPartyUrls;
  });

  // Save data to JSON file
  // fs.writeFile('thirdparty.json', JSON.stringify(thirdpartyUrls), (err) => {
  //   if (err) throw err;
  //   console.log('File saved');
  // });

  await browser.close();
}
// module.exports = crawl;
