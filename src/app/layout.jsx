import "./globals.css";

export const metadata = {
  title: "Project Test Elemes",
  description: "Frontend Test Elemes",
};

import { Rubik } from "next/font/google";

const rubikFont = Rubik({
	subsets: ["latin"],
	weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${rubikFont.className}`}
      >
        {children}
      </body>
    </html>
  );
}
