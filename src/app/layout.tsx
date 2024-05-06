import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "700", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "STW Digital Résumé",
  description: "This is my resume and growin developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={'min-h-screen flex flex-col text-slate-700' + poppins.className}>
        <header className="flex p-4 sm:p-5 border-b">
          <div className="flex font-semibold text-xs sm:text-sm items-center max-w-[900px] mx-auto w-full">
            <Link href={'/'} className="hidden sm:inline">Sean Widmer</Link>
            <Link href={'/'} className="sm:hidden">SW</Link>
          </div>
        </header>
        {children}
        <footer className="flex p-4 py-16 text-xs text-slate-600 sm:text-sm border-t items-center justify-center flex-col gap-6">
          <div className="flex items-center justify-center gap-4">
            <a  href="/online-resume.pdf" target="_blank" className="cursor-pointer hover:opacity-60 duration-200">PDF Résumé</a>
            <p>|</p>
            <a href={'/projects'} className="cursor-pointer hover:opacity-60 duration-200">Projects</a>
            <p>|</p>
            <a href="https://www.seanslife.com" target="_blank" className="cursor-pointer hover:opacity-60 duration-200">Sean's Life</a>
          </div>
          <div className="flex items-center justify-center gap-4 text-lg sm:text-xl">
            <a className="cursor-pointer hover:opacity-60 duration-200" href="https://github.com/Bomberooski" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a>
            <a className="cursor-pointer hover:opacity-60 duration-200" href="https://www.linkedin.com/in/sean-widmer-98113730/" target="_blank">
              <i className="fa-brands fa-linkedin" ></i>
            </a>
            <a className="cursor-pointer hover:opacity-60 duration-200" href="https://www.seanslife.com/podcast" target="_blank">
              <i className="fa-solid fa-podcast"></i>
            </a>     
          </div>
        </footer>
      </body>
    </html>
  );
}
