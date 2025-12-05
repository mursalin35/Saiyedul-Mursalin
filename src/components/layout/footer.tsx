import * as React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-muted/50 py-12 border-t">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} Developer M.S Mursalin. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/mursalin35"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/mursalin07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.facebook.com/mursalin07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Facebook"
          >
            <FaFacebook size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
