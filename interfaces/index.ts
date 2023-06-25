import { Url } from "next/dist/shared/lib/router/router";

export type User = {
  website: Url;
  id: number;
  name: string;
};
export type Photos = {
  url: string;
  title: string;
  id: number;

};
