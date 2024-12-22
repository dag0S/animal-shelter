import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Header } from "@/src/widgets/header";

import "../../styles/globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Лапки и сердца",
  description: "Приют для животных",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${roboto.className} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
