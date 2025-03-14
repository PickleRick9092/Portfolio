"use client";

import { useState } from "react";
import { Moon, Sun, Menu, X, Languages } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { translations } from "@/lib/translations";

export function Navbar({ language, setLanguage }: { language: 'en' | 'it', setLanguage: (lang: 'en' | 'it') => void }) {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[language];

  return (
    <nav className={`fixed w-full z-50 top-0 left-0 backdrop-blur-md bg-white/75 dark:bg-black/75 border-b border-border ${language === 'it' ? 'ltr' : 'ltr'}`}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-xl font-bold hover:text-primary transition-colors">{t.hero.title}</a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#projects" className="link-hover">{t.nav.projects}</a>
            <a href="#skills" className="link-hover">{t.nav.skills}</a>
            <a href="#videos" className="link-hover">{t.nav.videos}</a>
            <a href="#contact" className="link-hover">{t.nav.contact}</a>
            
            <Button
              variant="ghost"
              size="icon"
              className="btn-bounce"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-500" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="btn-bounce"
              onClick={() => setLanguage(language === 'en' ? 'it' : 'en')}
            >
              <Languages className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              
            </Button>

          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="btn-bounce"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-500 " />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-blue-400" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="btn-bounce"
              onClick={() => setLanguage(language === 'en' ? 'it' : 'en')}
            >
              <Languages className="h-5 w-5 text-amber-600 dark:text-amber-400" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="btn-bounce"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a
              href="#projects"
              className="block hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.projects}
            </a>
            <a
              href="#skills"
              className="block hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.skills}
            </a>
            <a
              href="#videos"
              className="block hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.videos}
            </a>
            <a
              href="#contact"
              className="block hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.contact}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}