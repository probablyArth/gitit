import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import "../styles/global.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: "JetBrains Mono, monospace",
        headings: {
          fontFamily: "JetBrains Mono, monospace",
        },
        globalStyles: (theme) => ({
          body: {
            height: "100vh",
            background: "rgba(255, 255, 255, 0)",
            borderRadius: 16,
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(200px)",
            "-webkit-backdrop-filter": "blur(7.8px)",
            border: "1px solid rgba(255, 255, 255, 0.36)",
          },
          html: {
            background:
              "linear-gradient(142deg, rgba(9,9,9,1) 0%, rgba(19,10,31,1) 28%, rgba(0,0,0,1) 100%)",
          },
          ".glow": {
            textShadow:
              "0 0 7px #fff,0 0 10px #fff,0 0 21px #fff,0 0 42px #fff,0 0 82px #fff,0 0 92px #fff,0 0 102px #fff,0 0 151px #fff",
          },
        }),
        colorScheme: "dark",
        defaultGradient: {
          deg: 120,
          from: "#fff",
          to: "#000",
        },
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp;
