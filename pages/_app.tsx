import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <PageTransition key={router.pathname}>
        <Component {...pageProps} />
      </PageTransition>
    </AnimatePresence>
  );
}
