import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Complex Recruitment | Specialist Operational Staffing",
  description:
    "Reliable temporary and permanent staffing across four specialist operational sectors.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
