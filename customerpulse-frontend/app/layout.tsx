import "./globals.css";

import QueryProvider from "@/src/providers/QueryProvider";
import SpotlightSearch from "@/components/search/spotlight-search";
import ThemeProvider from "@/components/providers/theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>

        <ThemeProvider>

          <QueryProvider>

            <SpotlightSearch />

            {children}

          </QueryProvider>

        </ThemeProvider>

      </body>
    </html>
  );
}