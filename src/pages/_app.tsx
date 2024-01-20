import "@/styles/globals.css";
import type { AppProps } from "next/app";

// configure kepatihan font
import localFont from "next/font/local";
const kepatihanFont = localFont({
  src: "../../public/fonts/kepatihan.ttf",
  weight: "400",
  variable: "--font-kepatihan",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={kepatihanFont.variable}>
      <Component {...pageProps} />
    </div>
  );
}
