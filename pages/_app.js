import { AppProvider } from "@/contexts/AppContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return(
  <AppProvider>
      <Component {...pageProps}/>
  </AppProvider>
  )
}
