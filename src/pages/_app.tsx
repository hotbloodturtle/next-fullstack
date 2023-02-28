import "@/styles/reset.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import LayoutContainer from "@/containers/layouts/LayoutContainer";
import ReactQueryProvider from "@/containers/ReactQueryProvider";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import MainLayout from "@/components/layouts/MainLayout";
import TokenContainer from "@/containers/TokenContainer";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ||
    ((page: ReactElement) => (
      <LayoutContainer.Provider>
        <MainLayout>{page}</MainLayout>
      </LayoutContainer.Provider>
    ));

  return (
    <ReactQueryProvider>
      <TokenContainer.Provider>
        {getLayout(<Component {...pageProps} />)}
      </TokenContainer.Provider>
    </ReactQueryProvider>
  );
}
