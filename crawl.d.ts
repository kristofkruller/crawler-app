export interface SiteData {
  "Site": string;
  "Domain Name": string;
  "Category": string;
  "Principal country/territory": string;
  "rank": string | number;
}
export interface DataProp {
  data: SiteData[];
}