"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { translations } from "@/lib/translations";




const skills = [
  {
    name: "Web Design",
    description: "Designing visually appealing and user-friendly websites with a focus on aesthetics",
    icon: "🎨",
  },
  {
    name: "SEO Strategy",
    description: "Developing effective SEO strategies to boost website ranking and visibility",
    icon: "🎯",
  },
  {
    name: "Content Creation",
    description: "Crafting engaging and optimized content to drive traffic and conversions",
    icon: "📃",
  },
  {
    name: "E-Commerce Development",
    description: "Building robust, user-friendly online stores that enhance customer experience",
    icon: "🛒",
  },
  {
    name: "Performance Optimization",
    description: "Enhancing website speed and performance for seamless user interactions",
    icon: "📈",
  },
  {
    name: "Technical SEO",
    description: "Implementing technical SEO practices to ensure website health and search engine compatibility",
    icon: "⚙️",
  },
];



const videos = [
  {
    title: "Web Development Best Practices",
    videoId: "your-video-id-1",
    description: "Learn modern web development practices and techniques",
  },
  {
    title: "Cloud Architecture Deep Dive",
    videoId: "your-video-id-2",
    description: "Understanding cloud architecture and scalability",
  },
  {
    title: "UI/UX Design Principles",
    videoId: "your-video-id-3",
    description: "Master the fundamentals of user interface design",
  },
];

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [language, setLanguage] = useState<'en' | 'it'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('language') as 'en' | 'it') || 'en';
    }
    return 'en';
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.dir = language === 'it' ? 'ltr' : 'ltr';
  }, [language]);

  const t = translations[language];


  
  return (
    <main className={`min-h-screen bg-background ${language === 'it' ? 'ltr' : 'ltr'}`}>
      <Navbar language={language} setLanguage={setLanguage} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="container px-4 mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Button variant="default" size="lg" className="btn-bounce">
                <a href="#projects">{t.hero.cta.projects}</a>
              </Button>
              <Button variant="outline" size="lg" className="btn-bounce">
                <a href="#contact">{t.hero.cta.contact}</a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square rounded-full overflow-hidden border-4 border-primary/20"
          >
            <img
              src="/images/Mainpic.avif"
              alt={t.hero.title}
              className="w-full h-full object-cover image-hover"
            />
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8"
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </motion.div>
      </section>


      {/* Skills Section */}
      <section id="skills" className="py-20 section-transition">
  <div className="container px-4 mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">{t.sections.skills.title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {t.skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="p-6 rounded-lg bg-card card-hover"
        >
                <div className="text-4xl mb-4 transform transition-transform duration-300 ">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>






      {/* Projects Section */}
{/* Projects Section */}
<section id="projects" className="py-20 bg-muted/30 section-transition">
  <div className="container px-4 mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">{t.sections.projects.title}</h2>
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
              <p className="text-muted-foreground mb-4">{project.description}</p>
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



      {/* Video Section */}
      <section id="videos" className="py-20 bg-muted/30 section-transition">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t.sections.videos.title}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="aspect-video rounded-lg overflow-hidden card-hover">
                  <iframe
                    className="w-full h-full rounded-lg shadow-lg"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <h3 className="text-xl font-semibold">{video.title}</h3>
                <p className="text-muted-foreground">{video.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 section-transition">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">{t.sections.contact.title}</h2>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/PickleRick9092" className="text-muted-foreground hover:text-primary social-hover">
              <Github className="w-8 h-8 " />
            </a>
            <a href="https://www.linkedin.com/in/mohammad-kalateh-46b65a239/" className="text-muted-foreground hover:text-primary social-hover">
              <Linkedin className="w-8 h-8 text-sky-700" />
            </a>
            <a href="mailto:mr.math9092@gmail.com" className="text-muted-foreground hover:text-primary social-hover">
              <Mail className="w-8 h-8 text-rose-600" />
            </a>
            <a href="https://wa.me/989123903257" className="text-muted-foreground hover:text-primary social-hover">
              <MessageCircle className="w-8 h-8 text-emerald-500" />
            </a>
            <a href="https://t.me/Mohammad9092" className="text-muted-foreground hover:text-primary social-hover">
              <Send className="w-8 h-8 text-sky-600" />
            </a>
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
