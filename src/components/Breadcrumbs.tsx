"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  // Don't show breadcrumbs on home page
  if (pathname === "/") return null;

  const paths = pathname.split("/").filter((path) => path !== "");
  
  // Format path names (e.g. engine-rebuild -> Engine Rebuild)
  const formatName = (name: string) => {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <nav className="flex mb-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-xs font-bold text-slate-500 hover:text-primary uppercase tracking-widest transition-colors"
          >
            <Home className="w-3 h-3 mr-2" />
            Home
          </Link>
        </li>
        {paths.map((path, index) => {
          const href = `/${paths.slice(0, index + 1).join("/")}`;
          const isLast = index === paths.length - 1;

          return (
            <li key={path}>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-slate-400 mx-1" />
                {isLast ? (
                  <span className="text-xs font-black text-primary uppercase tracking-widest">
                    {formatName(path)}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="text-xs font-bold text-slate-500 hover:text-primary uppercase tracking-widest transition-colors"
                  >
                    {formatName(path)}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
