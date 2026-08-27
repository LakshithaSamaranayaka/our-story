import type { Metadata } from "next";
import "./globals.css";
import CursorEffects from "@/components/CursorEffects";
import MusicPlayer from "@/components/MusicPlayer";

export const metadata: Metadata = {
  title: "Our Story ❤️",
  description: "Romantic Date Invitation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Great+Vibes&family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[var(--background)] text-[var(--text)]">
        <CursorEffects />
        {children}
        <MusicPlayer />
      </body>
    </html>
  );
}