// import type { AppProps } from "next/app";
// export type PageProps = AppProps["pageProps"];
export type PageProps = {
  params: Promise<Record<string, string>>;
  searchParams: Promise<Record<string, string>>;
};
