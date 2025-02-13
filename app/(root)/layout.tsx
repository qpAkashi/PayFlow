"use client";

import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image"; 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const loggedIn = { firstName: "Rares", lastName: "Basfalion" };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex flex-col w-full">
        <div className="root-layout flex items-center justify-between p-4">
          <Image
            src="/icons/logo.svg"
            width={30}
            height={30}
            alt="menu icon"
            className="cursor-pointer"
          />
          <div>
            <MobileNav user={loggedIn}/>
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
