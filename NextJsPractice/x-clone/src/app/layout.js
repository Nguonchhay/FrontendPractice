import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import News from "@/components/News";
import SessionWrapper from "@/components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "X Clone",
  description: "A clone of X social website build with NextJs and Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>
          <div className="flex justify-between max-w-6xl mx-auto">
            <div className="hidden sm:block border-r h-screen">
              <Sidebar />
            </div>
            
            {children}

            <div className="lg-flex lg:flex-col w-[24rem] hidden sm:block border-l h-screen p-3 ">
              <div className="sticky-top-0">
                <input type="text" placeholder="Search" className="bg-gray-100 border border-gray-200 rounded-3xl text-sm w-full px-4 py-2" />
              </div>
              <News />
            </div>
          </div>
        </SessionWrapper>
      </body>
    </html>
  );
}
