import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fredy Mfuko @ Social Commerce Summit",
  description: "Connect with Fredy Mfuko of Mission 101 Media — creative direction, video, photography and digital experiences.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Fredy Mfuko @ Social Commerce Summit",
    description: "Let's make something move.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Fredy Mfuko at Social Commerce Summit" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fredy Mfuko @ Social Commerce Summit",
    description: "Let's make something move.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
