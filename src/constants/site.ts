export const SITE = {
  name: "Kapil Kukreja",
  shortName: "Kapil",
  role: "Software Engineer",
  title: "Kapil Kukreja — Software Engineer",
  description:
    "Software Engineer building scalable backends, AI-powered applications, and cloud-native software. Associate Software Engineer at Infor. Open to backend, AI & full-stack roles.",
  url: "https://kapilkukreja.vercel.app",
  locale: "en_US",
  location: "Hyderabad, India",
  email: "kapil.kukreja07@gmail.com",
  phone: "+91 70422 73798",
  resumePath: "/resume/Kapil-Kukreja-Resume.pdf",
  ogImage: "/api/og",
} as const;

export const SOCIALS = {
  github: "https://github.com/kxpil09",
  linkedin: "https://linkedin.com/in/kapil-kukreja",
  email: `mailto:${SITE.email}`,
  telegram: "https://t.me/TheTradeCartel",
  telegramHandle: "@TheTradeCartel",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Signals", href: "/signals" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/#contact" },
] as const;
