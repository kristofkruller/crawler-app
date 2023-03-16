import { SiteData } from "@root/crawl";

const data = require("../../../assets/data/dataset.json");

export async function GET(request: Request) {
  // return new Response(data.map((e: SiteData)=> (e["Domain Name"])));
  return new Response(JSON.stringify(data));

}
