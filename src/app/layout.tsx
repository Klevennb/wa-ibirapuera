import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { EditorProvider } from "@/contexts/editor-context";
import SidebarWrapper from "@/components/sidebar/sidebar-wrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Write Away",
  description: "The gateway to a world of words",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <EditorProvider>
          <SidebarWrapper>{children}</SidebarWrapper>
        </EditorProvider>
      </body>
    </html>
  );
}
