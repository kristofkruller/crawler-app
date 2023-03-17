import { NextResponse } from "next/server";
const puppeteer = require("puppeteer");
// import {Cloudinary} from '@cloudinary/url-gen';

// const cldInstance = new Cloudinary({cloud: {cloudName: 'dxpyqnmmf'}});

export async function GET(request: Request) {

  const targetUrl = request.url.substring(request.url.lastIndexOf("/") + 1);

  const browser = await puppeteer.launch();

  const page = await browser.newPage();
  
  await page.goto(`https://${targetUrl}`);

  // await page.screenshot({ path: `webscrape-${targetUrl}.png`, fullPage: true });
  // console.log(cldInstance)
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

  await browser.close();
  return NextResponse.json(thirdPartyUrls);
}
