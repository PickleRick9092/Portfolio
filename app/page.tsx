"use client";
import Image from 'next/image';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { translations } from "@/lib/translations";

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

  const t = translations[language];


  
  return (
    <main className={`min-h-screen bg-background ${language === 'fa' ? 'rtl' : 'ltr'}`}>
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
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 name-align">
              {t.hero.title}
            </h1>
            <p className="hero-sub text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed sm:leading-snug">
  {t.hero.subtitle}
</p>



            <div className="flex flex-wrap justify-center md:justify-start gap-4  center-items">
              <Button variant="default" size="lg" className="btn-bounce  px-4 py-2 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition " aria-label="project section">
                <a href="#projects" className="cta-text">{t.hero.cta.projects}</a>
              </Button>
              <Button variant="default" size="lg" className="btn-bounce min-w-11 min-h-11 px-4 py-2 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition " aria-label="contact section">
                <a href="#contact" className="cta-text">{t.hero.cta.contact}</a>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square rounded-full overflow-hidden border-4 border-primary/20"
          >
            <Image
  src="/images/Main.webp"
  alt={t.hero.title}
  width={350} // عرض تصویر
  height={350} // ارتفاع تصویر
  priority // برای لود سریع‌تر تصویر

   className="w-full h-full object-cover "
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
                <p className="text-muted-foreground text-redecor">{skill.description}</p>
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
    <div className="flex justify-center">
    <Button variant="default" size="lg" className="btn-bounce mt-10  p-4 rounded-lg" aria-label="view all projects">
                <a href="/projects" className="cta-text">{t.sections.projects.viewallprojects}</a>
              </Button>
</div>

  </div>
</section>


<section id="linkedin-posts" className="py-20 section-transition bg-muted/20">
  <div className="container px-4 mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12 text-primary drop-shadow-md">{t.sections.linkedin.title}</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {t.linkedinPosts.map((post, index) => (
        <motion.a
          key={index}
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="group block rounded-2xl p-4 backdrop-blur-xl bg-white/10 border border-white/20 shadow-inner shadow-white/10 hover:shadow-xl hover:shadow-primary/30 transition-all duration-500"
        >
<div className="relative w-full">
  <img
    src={post.image}
    alt={post.title}
    className="object-contain w-full max-h-96 mx-auto transition-transform duration-500"
  />
</div>


<div className="space-y-3 px-2  mt-8 text-center">
  <h3 className="text-xl font-semibold mb-2 ">{post.title}</h3>
  <p className="text-muted-foreground text-xl mb-4">{post.description}</p>
  <span className="inline-flex items-center justify-center text-sky-700 hover:text-sky-400 font-medium mt-2">
    {t.sections.linkedin.viewPost}
    <ExternalLink className="ml-2 w-4 h-4" />
  </span>
</div>
        </motion.a>
      ))}
    </div>
  </div>
  <div className="flex justify-center">
    <Button variant="default" size="lg" className="btn-bounce mt-10  p-4 rounded-lg" aria-label="view all posts">
                <a href="https://www.linkedin.com/in/mohammad-kalateh-46b65a239/" className="cta-text">{t.sections.linkedin.viewAllPosts}</a>
              </Button>
</div>
</section>


{/* Video Section */}
<section id="videos" className="py-20 bg-muted/30 section-transition relative">
  <div className="container px-4 mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">{t.sections.videos.title}</h2>

    {/* باکس شیشه‌ای روی ویدیوها */}
    <div className="relative">
    <div className="absolute inset-0 flex items-center justify-center bg-white/5 backdrop-blur-md rounded-lg z-10">
    <span className="text-4xl font-bold text-yellow-400">Coming Soon 😉</span>
      </div>

      {/* ویدیوها */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-0">
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
                src={`https://www.youtube-nocookie.com/embed/${video.videoId}`}
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
  </div>
</section>


      {/* Contact Section */}
      <section id="contact" className="py-20 section-transition">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">{t.sections.contact.title}</h2>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/PickleRick9092" className="text-muted-foreground hover:text-primary social-hover" aria-label="github account">
              <Github className="w-8 h-8 f" />
            </a>
            <a href="https://www.linkedin.com/in/mohammad-kalateh-46b65a239/" className="text-muted-foreground hover:text-primary social-hover" aria-label="linkdin account">
              <Linkedin className="w-8 h-8 text-sky-700" />
            </a>
            <a href="mailto:mr.math9092@gmail.com" className="text-muted-foreground hover:text-primary social-hover" aria-label="mail button">
              <Mail className="w-8 h-8 text-rose-600" />
            </a>
            <a href="https://wa.me/989123903257" className="text-muted-foreground hover:text-primary social-hover" aria-label="whatsapp account">
              <MessageCircle className="w-8 h-8 text-emerald-500" />
            </a>
            <a href="https://t.me/Mohammad9092" className="text-muted-foreground hover:text-primary social-hover" aria-label="telegram account">
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
