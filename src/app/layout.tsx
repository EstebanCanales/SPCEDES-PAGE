import "./global.css";
import { NavBar } from "@/components/NavBar-MainComponent";

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
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
