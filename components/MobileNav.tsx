"use client"
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from 'next/navigation';

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image 
            src="/icons/hamburger.svg" 
            width={30} 
            height={30} 
            alt="menu" 
            className="cursor-pointer" 
          />
        </SheetTrigger>
        <SheetTitle></SheetTitle>
        <SheetContent side="left" className='border-none bg-white'>
          {/* Logo */}
          <Link href="/" className=" cursor-pointer flex items-center gap-1 px-4">
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="PayFlow Logo"
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">PayFlow</h1>
          </Link>
          <div className='mobilenav-sheet'>
            <SheetClose asChild>
                <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
                {sidebarLinks.map((item) => {
            const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
            return (
                <SheetClose asChild key={item.route}>
              <Link
                href={item.route}
                key={item.label}
                className={cn('mobilenav-sheet_close w-full', { 'bg-bankGradient': isActive })}
              >
                  <Image 
                    src={item.imgURL} 
                    alt={item.label} 
                    width={20}
                    height={20}
                    className={cn({ 'brightness-50': isActive })}
                  />
                <p className={cn('text-16 font-semibold text-black-2', { '!text-white': isActive })}>
                  {item.label}
                </p>
              </Link>
              </SheetClose>
            );
          })}
          USER 
                </nav>
            </SheetClose>
            FOOTER 
            </div>
          
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
