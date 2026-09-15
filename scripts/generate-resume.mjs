// Generates a clean one-page resume at public/resume.pdf from the content below.
// Run: node scripts/generate-resume.mjs
import { writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, "..", "public", "resume.pdf");

const esc = (s) => s.replace(/\/g, "\\\\").replace(/\(/g, "\(").replace(/\)/g, "\)");

const L = [];
let y = 756;
const line = (text, { font = "F1", size = 10, x = 72, gap = 15, color = "0.16 0.17 0.21" } = {}) => {
  L.push({ font, size, x, y, text, color });
  y -= gap;
};

const NAME = "Dhananjay Maurya";
const ROLE = "Software Engineer  |  Full-Stack Developer";
const CONTACT = "dhananjaymaury366@gmail.com  |  +91-8268303521  |  github.com/MauryaQbit  |  linkedin.com/in/dhananjay-maurya";

line(NAME, { font: "F2", size: 22, x: 72, color: "0.06 0.07 0.12" });
y -= 6;
line(ROLE, { size: 11.5, x: 72, color: "0.24 0.26 0.38" });
y -= 4;
line(CONTACT, { size: 8.6, x: 72, gap: 22, color: "0.35 0.37 0.46" });

const heading = (t) => {
  y -= 6;
  line(t.toUpperCase(), { font: "F2", size: 10.5, gap: 16, color: "0.24 0.26 0.55" });
};
const bullet = (t, gap = 14.5) => line("-  " + t, { gap });

heading("Summary");
bullet("Full-stack developer building modern web applications, AI-powered products, and real-world");
bullet("software systems with React, Next.js, TypeScript, Node.js, and Python. Experience across");
bullet("AI-powered analytics, real-time applications, REST APIs, ML pipelines, and open source.");

heading("Experience");
bullet("Web Developer Intern - Zidio Development (Jul 2026 - Present)", 14);
bullet("Designing, developing, and deploying responsive web applications; integrating third-party", 13);
bullet("APIs; collaborating with UI/UX teams; participating in code reviews and agile workflows.", 13);
bullet("Open Source Contributor - Corsair Open Source (2026)", 14);
bullet("Delivered 7+ pull requests, all merged into production, building TypeScript API plugins", 13);
bullet("via REST APIs; participated in maintainer-led code reviews and CI/CD workflows.", 13);

heading("Projects");
bullet("AI Customer Feedback Intelligence Platform - Next.js 14, TypeScript, PostgreSQL, Prisma,", 14);
bullet("Claude API. Multi-tenant feedback analytics with RBAC, sentiment classification, theme", 13);
bullet("clustering, and RAG-based Q&A. Led a 4-member team.", 13);
bullet("CampusSync - React, Firebase. Smart campus platform with role-based access, real-time room", 14);
bullet("availability, QR check-in/out, and predictive booking. Top Team - NEOFuture Hackathon 2026.", 13);
bullet("Smart City Traffic Forecasting - Python, Scikit-learn, Streamlit. ML pipeline over a", 14);
bullet("48,120-row dataset across 4 junctions; Random Forest best at MAE ~2.89.", 13);

heading("Technical Skills");
bullet("Frontend:  React.js, Next.js, HTML5, CSS3, Tailwind CSS", 14);
bullet("Backend:  Node.js, Django, Flask, REST APIs, JWT Authentication", 14);
bullet("Languages:  Python, JavaScript, TypeScript", 14);
bullet("Databases:  PostgreSQL, MongoDB, Firebase / Firestore, MySQL", 14);
bullet("Cloud & DevOps:  AWS EC2, AWS S3, Git, GitHub, Jenkins, CI/CD, Linux", 14);
bullet("AI / ML:  Pandas, NumPy, Scikit-learn, Anthropic Claude API", 14);

heading("Education");
bullet("B.E. in Information Technology - Shree L.R. Tiwari College of Engineering, Mumbai", 14);
bullet("(2023 - 2027, Pursuing)   |   Higher Secondary - Aditya Academy, Mumbai (2023)", 13);

heading("Achievements");
bullet("Top Team Recognition - NEOFuture Hackathon 2026  |  JPMorgan Chase Software Engineering", 14);
bullet("Job Simulation (Forage, Sep 2025)  |  7+ merged open-source pull requests", 13);

const content = L.map(
  ({ font, size, x, y: ty, text, color }) =>
    `BT /${font} ${size} Tf ${color} rg ${x} ${ty} Td (${esc(text)}) Tj ET`
).join("\n");

const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
  `<< /Length ${Buffer.byteLength(content)} >>\nstream\n${content}\nendstream`,
];

let pdf = "%PDF-1.4\n";
const offsets = [];
objects.forEach((body, i) => {
  offsets.push(Buffer.byteLength(pdf));
  pdf += `${i + 1} 0 obj\n${body}\nendobj\n`;
});
const xrefStart = Buffer.byteLength(pdf);
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
for (const off of offsets) pdf += `${String(off).padStart(10, "0")} 00000 n \n`;
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;

writeFileSync(outPath, pdf, "latin1");
console.log("wrote", outPath);
