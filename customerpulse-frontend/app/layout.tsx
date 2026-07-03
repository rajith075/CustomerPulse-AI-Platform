import "./globals.css";

import QueryProvider from "@/src/providers/QueryProvider";
import SpotlightSearch from "@/components/search/spotlight-search";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="en">

      <body>

        <QueryProvider>

          {/* Global Command Palette */}

          <SpotlightSearch />

          {children}

        </QueryProvider>

      </body>

    </html>

  );

}