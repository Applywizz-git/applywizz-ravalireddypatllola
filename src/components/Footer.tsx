import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    // {
    //   icon: Github,
    //   href: "https://github.com",
    //   label: "GitHub",
    // },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ravali-reddyp/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:ravalip0411@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-3 glass rounded-lg hover:glow-teal transition-all group"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5 group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center text-muted-foreground"
          >
            © {currentYear}{" "}
            <span className="font-semibold animate-pulse-glow">
              Ravali Reddy Patllola
            </span>
            . All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
