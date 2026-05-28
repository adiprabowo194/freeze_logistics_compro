"use client";

import Logo from "./TopNavbar";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

function Footer() {
  const [active, setActive] = useState(false);
  // link active
  const pathname = usePathname();

  const linkClass = (path: string) =>
    pathname === path
      ? "font-semibold text-blue-500"
      : "text-[#0F253C] hover:text-blue-500 transition-colors";

  return (
    <footer className="w-full bg-white border-t border-gray-100 py-8 z-50">
      <div className="container mx-auto px-4">
        {/* Top Section: Logo, Navigation, and Contact Info */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 pb-6 border-b border-gray-100">
          {/* Logo & Address */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <Logo width={340} height={340} />
            <p className="text-sm text-[#0F253C]/80 mt-2">
              Dandenong South, VIC 3175
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center gap-4">
            <ul className="flex flex-row gap-8 md:gap-12 justify-center">
              <li>
                <Link
                  href="/whyUs"
                  className={`${linkClass("/whyUs")} font-medium`}
                >
                  Why Us?
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={`${linkClass("/services")} font-medium`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/tracking"
                  className={`${linkClass("/tracking")} font-medium`}
                >
                  Tracking
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-2 text-[#0F253C]">
            <a
              href="tel:0485866860"
              className="text-sm font-medium hover:text-blue-500 transition-colors"
            >
              <span className="md:hidden">📞 </span>0485 866 860
            </a>
            <a
              href="mailto:admin@freezelogistics.com.au"
              className="text-sm font-medium hover:text-blue-500 transition-colors"
            >
              <span className="md:hidden">✉️ </span>admin@freezelogistics.com.au
            </a>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-6 flex justify-center text-[#0F253C]/70 text-sm">
          <div className="flex items-center gap-1.5 text-center">
            <i className="ri-copyright-line"></i>
            <span>2026 Freeze Logistics Pty Ltd</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
