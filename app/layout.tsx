import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Complex Recruitment | Driving, Industrial & Construction Staffing",
  description:
    "Reliable temporary and permanent staffing across Driving, Industrial and Construction.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
