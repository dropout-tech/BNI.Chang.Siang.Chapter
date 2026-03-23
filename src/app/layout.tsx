import type { Metadata } from "next";
import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "BNI 長翔名人堂白金分會 | 長翔展翼 商機無限",
  description:
    "BNI 長翔名人堂白金分會 — 匯聚各產業精英的金質商務交流平台。透過專業引薦與深度合作，為您打開無限商機。加入長翔，讓事業展翅高飛。",
  keywords: [
    "BNI",
    "長翔分會",
    "商務引薦",
    "商業交流",
    "名人堂",
    "白金分會",
    "企業人脈",
    "業務拓展",
  ],
  openGraph: {
    title: "BNI 長翔名人堂白金分會 | 長翔展翼 商機無限",
    description:
      "匯聚各產業精英的金質商務交流平台。透過專業引薦與深度合作，為您打開無限商機。",
    type: "website",
    locale: "zh_TW",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={`${notoSansTC.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
