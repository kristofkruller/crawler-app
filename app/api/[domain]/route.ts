import { NextResponse } from "next/server";
import scrnHeadMeta from "../../../assets/scrnHeadMeta"

// PUPPETEER
const puppeteer = require("puppeteer");

// GET CALL
export async function GET(request: Request) {

  const startPoint = request.headers.get("referer");
  const targetUrl = request.url.substring(request.url.lastIndexOf("/") + 1);
 
  // BROWSER INSTANCE / incognito
  const browser = await puppeteer.launch();
  const context = await browser.createIncognitoBrowserContext();
  // NEW PAGE THERE
  const page = await context.newPage();
  await page.setDefaultNavigationTimeout(0); //handle TimeoutError
  await page.goto(`https://${targetUrl}`, { waitUntil: ['networkidle0', 'load', 'domcontentloaded'] });
  // { waitUntil: 'networkidle0' } will ensure that there are no more than 0 network connections for at least 500ms before the navigation is considered to be finished.
  
  await page.evaluate(() => {
    const selector = 'a[id*=cookie i], a[class*=cookie i], button[id*=cookie i] , button[class*=cookie i]';
    const expectedTextRegex = /^(Accept|Accept all cookies|Accept all|Allow|Allow all|Allow all cookies|OK)$/i;
    const elements = document.querySelectorAll(selector);
    const elementsArray = [...elements];
    
    for (const element of elementsArray) {
      // if with non-null assertion operator for content and element typeguard
      if (expectedTextRegex.test(element.textContent!.trim()) && element instanceof HTMLElement) {
          (element as HTMLElement).click();
          return;
      }
    }
  });

  const imgBuffer = await page.screenshot({
    // path: `webscrape-${targetUrl}.jpg`, 
    encoding: "base64",
    fullPage: true 
  });
  // Encode the screenshot as base64 so that it can be displayed as an image in HTML
  const scrnHtml = `
    <html lang="en">
      <head>
        <title>Screenshot of ${targetUrl}</title>
        <style> body div { background-image: url(data:image/jpg;base64,${imgBuffer}); } </style>
        ${scrnHeadMeta}
      </head>
      <body>
          <main>
            <a href=${startPoint}>Back</a>
            <div></div>
          </main>
      </body>
    </html>
  `

  await browser.close();

  return new NextResponse(`${scrnHtml}`, {headers: {"Content-Type": "text/html"}});
}
