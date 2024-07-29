import "./global.css";
import { NavBar } from "@/ui/components/NavBar-MainComponent";
import { Noto_Sans } from 'next/font/google'

const noto_sans = Noto_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "SP-CEDES",
  description: "El mejor sitema de seguridad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={noto_sans.className}>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
