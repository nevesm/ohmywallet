import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  weight: ["300"],
  subsets: ["latin"],
});

export const metadata = {
  title: "OhMyWallet",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${cairo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
