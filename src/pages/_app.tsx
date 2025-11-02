import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Quattrocento_Sans, Rozha_One } from "next/font/google";

const quattrocentoSans = Quattrocento_Sans({
  variable: "--font-quattrocento-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const rozhaOne = Rozha_One({
  variable: "--font-rozha-one",
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${rozhaOne.variable} ${quattrocentoSans.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
