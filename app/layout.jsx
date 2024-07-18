
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import TopLeftImage from "@/components/TopLeftImage";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], 
  weight:["100","200","300","400","500","600","700","800"],
  variable:'--font-jetbrainsMono' 
});

export const metadata = {
  title: "SK Portfolio",
  description: "Shahzeb Khan Portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-primary bg-cover bg-no-repeat ${jetbrainsMono.variable}`}>
        <TopLeftImage />
        
        <Header />
        
        <StairTransition />
        <PageTransition>        
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
