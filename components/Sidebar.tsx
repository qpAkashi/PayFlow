"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname(); 

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="PayFlow Logo"
            className="flex w-[24px] h-[24px] max-xl:w-[14px] max-xl:h-[14px]"
          />
          <h1 className="sidebar-logo">PayFlow</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn('sidebar-link', {'bg-bankGradient':isActive})}
            >
              <div className="relative size-6">
                <Image src={`${item.imgURL}`} alt='{item.label}' fill  className={cn({'brightness-50':isActive})}></Image>
              </div>
              <p className={cn('sidebar-label',{'!text-white':isActive})}>{item.label}</p>
            </Link>
          );
        })}


        USER
      </nav>
      USER
    </section>
  );
};

export default Sidebar;
