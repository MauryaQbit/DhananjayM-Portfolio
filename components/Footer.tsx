import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FiArrowUp, FiMail } from "react-icons/fi";
import { githubUrl, linkedinUrl, profile } from "@/data/portfolio";
import LocalTime from "./LocalTime";

const socialLinks = [
  { label: "GitHub", url: githubUrl, Icon: FaGithub },
  { label: "LinkedIn", url: linkedinUrl, Icon: FaLinkedinIn },
  { label: "Email", url: `mailto:${profile.email}`, Icon: FiMail },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-[#0e0c09]">
      <div className="section-shell flex flex-col gap-8 py-12">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
          <div>
            <p className="font-display text-2xl text-heading">{profile.name}</p>
            <p className="mt-1 font-mono text-[0.7rem] tracking-[0.18em] text-muted uppercase">
              {profile.role}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-body">
              A one-person workshop in Mumbai. Designed and built by hand — no
              template, no page-builder, every pixel argued over.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:items-end">
            <ul className="flex items-center gap-2">
              {socialLinks.map(({ label, url, Icon }) => (
                <li key={label}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-btn"
                    aria-label={`${profile.name} on ${label}`}
                  >
                    <Icon size={16} aria-hidden />
                  </a>
                </li>
              ))}
              <li>
                <a href="#home" className="icon-btn" aria-label="Back to top">
                  <FiArrowUp size={16} aria-hidden />
                </a>
              </li>
            </ul>
            <LocalTime />
          </div>
        </div>

        <div className="ticket-perf" aria-hidden />

        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="font-mono text-[0.68rem] tracking-[0.14em] text-muted">
            © {new Date().getFullYear()} {profile.name.toUpperCase()} — ALL LOGS KEPT
          </p>
          <p className="font-mono text-[0.68rem] tracking-[0.14em] text-muted">
            SET IN FRANCES ✳ GROTESK ✳ JETBRAINS — NEXT.JS
          </p>
        </div>
      </div>
    </footer>
  );
}
