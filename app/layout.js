import { Inter } from "next/font/google";
import "./global.css";
import ClientLayout from '@/app/components/ClientLayout';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "FlowAid - AI-Driven Hospital Management",
  description: "Revolutionizing hospital management with AI-driven patient flow optimization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
