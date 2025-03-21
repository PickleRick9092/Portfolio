"use client";
import Image from 'next/image';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { projecttranslations } from "@/lib/projecttranslitaions";



export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [language, setLanguage] = useState<'en' | 'fa' | 'it'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('language') as 'en' | 'fa' | 'it') || 'en';
    }
    return 'en';
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
  }, [language]);

  const t = projecttranslations[language];


  
  return (
    <main className={`min-h-screen bg-background ${language === 'fa' ? 'rtl' : 'ltr'}`}>
      <Navbar language={language} setLanguage={setLanguage} />
      







      {/* Projects Section */}
{/* Projects Section */}
<section id="projects" className="py-20 bg-muted/30 section-transition">
  <div className="container px-4 mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">{t.sections.projects.title}</h2>
    <p className="max-w-full mx-auto mb-8 p-6 text-center text-justify text-2xl leading-relaxed bg-white/20 backdrop-blur-xl border border-transparent rounded-lg shadow-lg dark:bg-gray-800/40 dark:border-transparent text-base sm:text-lg md:text-2xl">

{t.sections.projects.desc}
</p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {t.projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden group card-hover">
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 project-text">{project.description}</p>
              <a
                href={project.link}
                className="inline-flex items-center text-primary hover:text-primary/80 link-hover"
                target="_blank" rel="noopener"
              >
                {t.sections.projects.viewProject} <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>




      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container px-4 mx-auto text-center text-muted-foreground">
          <p>{t.footer.copyright}</p>
        </div>
      </footer>
    </main>
  );
}
