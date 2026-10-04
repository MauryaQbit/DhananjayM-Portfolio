"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { githubUrl, linkedinUrl, navLinks, profile } from "@/data/portfolio";
import LocalTime from "./LocalTime";

function sectionId(href: string) {
  return href.split("#").pop() ?? href;
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const isBlogPage = pathname?.startsWith("/blog") ?? false;
  const resolveHref = (href: string) => (isBlogPage ? `/${href}` : href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => sectionId(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [isBlogPage]);

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-background/90 backdrop-blur-md border-b border-line"
          : "bg-gradient-to-b from-background/90 to-transparent border-b border-transparent"
      }`}
    >
      {/* top ledger strip */}
      <div className="hidden md:block border-b border-line-soft">
        <div className="section-shell flex h-7 items-center justify-between">
          <span className="font-mono text-[0.65rem] tracking-[0.2em] text-muted">
            FIELD LOG — VOL. 2026
          </span>
          <LocalTime />
        </div>
      </div>

      <nav
        aria-label="Primary"
        className="section-shell flex h-16 items-center justify-between gap-4"
      >
        <a
          href={resolveHref("#home")}
          className="flex items-center gap-3 group"
          aria-label="Back to home"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-[#1a0e05] font-display font-bold text-lg leading-none border border-[#7a2c0c] shadow-[3px_3px_0_#000] group-hover:rotate-[-4deg] transition-transform">
            {profile.initials.charAt(0)}
          </span>
          <span className="leading-tight">
            <span className="block text-heading font-semibold text-sm tracking-tight">
              {profile.name}
            </span>
            <span className="block font-mono text-[0.62rem] tracking-[0.18em] text-muted">
              MUMBAI — BUILDING
            </span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-5">
          {navLinks.map((link, i) => {
            const active = activeSection === sectionId(link.href);
            return (
              <li key={link.href}>
                <a
                  href={resolveHref(link.href)}
                  className={`group inline-flex items-baseline gap-1.5 text-[0.83rem] transition-colors ${
                    active ? "text-heading" : "text-body hover:text-heading"
                  }`}
                >
                  <span className="font-mono text-[0.62rem] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={active ? "underline decoration-accent decoration-2 underline-offset-4" : "group-hover:underline group-hover:decoration-line group-hover:underline-offset-4"}
                  >
                    {link.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-2.5">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn !w-9 !h-9"
            aria-label="GitHub profile"
          >
            <FaGithub size={15} aria-hidden />
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn !w-9 !h-9"
            aria-label="LinkedIn profile"
          >
            <FaLinkedinIn size={15} aria-hidden />
          </a>
          <a
            href="/SDE.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary !py-2 !px-3.5 !text-[0.8rem]"
          >
            <FiDownload aria-hidden />
            SDE.pdf
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden icon-btn"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            className="lg:hidden overflow-hidden border-t border-line bg-background/97 backdrop-blur-md"
          >
            <ul className="section-shell flex flex-col py-4">
              {navLinks.map((link, i) => (
                <li key={link.href} className="border-b border-line-soft last:border-0">
                  <a
                    href={resolveHref(link.href)}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-baseline gap-3 py-3 ${
                      activeSection === sectionId(link.href)
                        ? "text-heading"
                        : "text-body"
                    }`}
                  >
                    <span className="font-mono text-xs text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base font-medium">{link.label}</span>
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3 pt-4 pb-2">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub profile">
                  <FaGithub size={17} aria-hidden />
                </a>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn profile">
                  <FaLinkedinIn size={17} aria-hidden />
                </a>
                <a href="/SDE.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary ml-auto py-2 px-4">
                  <FiDownload aria-hidden />
                  SDE.pdf
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
