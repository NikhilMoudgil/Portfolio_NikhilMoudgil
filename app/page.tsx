"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Smartphone, Code2, Database, Cloud, Terminal, Cpu, Menu, X, ChevronRight } from 'lucide-react';

export default function Portfolio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle sticky navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-200 font-sans selection:bg-teal-500 selection:text-white scroll-smooth">
      {/* Background Tech Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-900 via-gray-950 to-gray-950"></div>

      {/* NAVIGATION BAR */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-950/80 backdrop-blur-md border-b border-gray-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-white tracking-tighter">
            Nikhil<span className="text-teal-500">.Dev</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-gray-400 hover:text-teal-400 transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-300 hover:text-teal-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-gray-950/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-gray-300 hover:text-teal-400"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 space-y-32 pb-24">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-screen flex flex-col justify-center pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-teal-400 font-mono tracking-widest text-sm uppercase mb-3 flex items-center gap-2">
              <Terminal size={14} /> System Online
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-tight">
              Nikhil Moudgil
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mt-6 max-w-2xl leading-relaxed">
              Software Engineering Student & Full-Stack Developer specializing in modern web architectures, API ecosystems, and scalable cloud solutions.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 mt-10"
          >
            <a href="#projects" className="flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-gray-950 font-bold px-6 py-3 rounded-lg transition-all duration-300">
              View Work <ChevronRight size={18} />
            </a>
            <a href="mailto:nikhilmoudgil799@gmail.com" className="flex items-center justify-center gap-2 bg-gray-900 border border-gray-800 hover:border-teal-500 hover:text-teal-400 px-6 py-3 rounded-lg transition-all duration-300">
              <Mail size={18} /> nikhilmoudgil799@gmail.com
            </a>
            <div className="flex gap-4 sm:ml-auto">
              <a href="#" className="p-3 bg-gray-900 border border-gray-800 hover:border-teal-500 hover:text-teal-400 rounded-lg transition-all duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="p-3 bg-gray-900 border border-gray-800 hover:border-teal-500 hover:text-teal-400 rounded-lg transition-all duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-12">
            <Cpu className="text-teal-500" size={32} />
            <h3 className="text-4xl font-bold text-white tracking-tight">Technical Arsenal</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard icon={<Code2 />} title="Languages" skills={['C++', 'Python', 'Java', 'JavaScript/TypeScript']} />
            <SkillCard icon={<Terminal />} title="Dev & Arch" skills={['Git', 'Docker', 'Microservices', 'REST APIs']} />
            <SkillCard icon={<Database />} title="Data & Core CS" skills={['DBMS / SQL', 'Operating Systems', 'Computer Networks']} />
            <SkillCard icon={<Cloud />} title="Cloud & Web" skills={['Cloud Computing', 'LLMs', 'Next.js', 'React']} />
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-12">
            <Code2 className="text-teal-500" size={32} />
            <h3 className="text-4xl font-bold text-white tracking-tight">Engineering Projects</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ProjectCard 
              title="EduNexus"
              role="Full-Stack Developer"
              description="A dynamic roadmap generating platform with a built-in community. Built a robust API ecosystem where users can generate personalized learning paths based on their interests."
              tech={['Next.js', 'React', 'REST API', 'Data Fetching']}
              link="https://edu-nexus-teal.vercel.app"
              featured={true}
            />
            <ProjectCard 
              title="Airisto"
              role="Web Developer"
              description="A comprehensive web platform featuring an administration panel and marketplace for AC services, heavily relying on optimized database management systems."
              tech={['HTML/CSS', 'JavaScript', 'DBMS']}
            />
            <ProjectCard 
              title="Venture-Bridge"
              role="Creator"
              description="A unique interactive ecosystem connecting entrepreneurs and investors. Allows founders to pitch ideas and attract funding through seamless interaction."
              tech={['Web Stack', 'UI/UX']}
            />
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION SECTION */}
        <section id="experience" className="scroll-mt-24 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-teal-500 rounded-full"></span> Education
              </h3>
              <div className="space-y-8">
                <TimelineItem 
                  title="B.Tech Computer Science Engineering"
                  subtitle="IKGPTU Mohali Campus - 1"
                  date="Pursuing | Expected 2027"
                />
                <TimelineItem 
                  title="Diploma in Computer Engineering"
                  subtitle="Govt Polytechnic Hamirpur"
                  date="75% | 2024"
                />
                <TimelineItem 
                  title="Diploma in Computer Application"
                  subtitle="Hartron Skill Center Chandigarh"
                  date="2020 - 2021"
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-teal-500 rounded-full"></span> Experience
              </h3>
              <div className="space-y-8">
                <TimelineItem 
                  title="Industrial Training: Web & App Dev"
                  subtitle="Ex-Trainer Mohali & Prerna-Gati Technologies"
                  date="12 Weeks Total"
                  desc="Completed rigorous 6-week modules in both Web Development and Application Development."
                />
                <TimelineItem 
                  title="Hack-2 Hatch Hackathon"
                  subtitle="PEC Chandigarh"
                  date="Participant"
                />
                <TimelineItem 
                  title="HACK-O-OCTO Hackathon"
                  subtitle="Chandigarh University Kharar"
                  date="Participant"
                />
                <TimelineItem 
                  title="VLSI Design Workshop"
                  subtitle="JUIT Wakhnaghat Solan"
                  date="1-Week Hands-on"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-12 border-t border-gray-900/50 text-center text-sm text-gray-500">
          <p>I hereby declare that all the above information is true and correct to the best of my knowledge.</p>
          <p className="mt-2 text-gray-600">© {new Date().getFullYear()} Nikhil Moudgil. Engineered for performance.</p>
        </footer>

      </main>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function SkillCard({ icon, title, skills }: { icon: React.ReactNode, title: string, skills: string[] }) {
  return (
    <div className="bg-gray-900/40 border border-gray-800/60 p-6 rounded-2xl hover:bg-gray-800/40 hover:border-teal-500/50 transition-all duration-300">
      <div className="text-teal-400 mb-5 bg-teal-500/10 w-12 h-12 flex items-center justify-center rounded-xl">{icon}</div>
      <h4 className="text-xl font-semibold text-white mb-4">{title}</h4>
      <ul className="space-y-3">
        {skills.map((skill, idx) => (
          <li key={idx} className="text-sm text-gray-400 flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500/50"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, role, description, tech, link, featured = false }: any) {
  return (
    <div className={`relative group bg-gray-900/30 border ${featured ? 'border-teal-500/30 shadow-[0_0_30px_-15px_rgba(20,184,166,0.3)]' : 'border-gray-800'} p-8 rounded-2xl hover:bg-gray-900/60 transition-all duration-300 flex flex-col h-full`}>
      {featured && <div className="absolute top-0 right-0 bg-teal-500/10 text-teal-400 text-xs px-4 py-1.5 rounded-bl-2xl rounded-tr-2xl font-mono font-medium border-b border-l border-teal-500/20">Live Demo</div>}
      <h4 className="text-2xl font-bold text-white mt-2 mb-1">{title}</h4>
      <p className="text-teal-400 text-sm font-mono mb-4">{role}</p>
      <p className="text-gray-400 text-base mb-8 leading-relaxed flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((t: string, idx: number) => (
          <span key={idx} className="bg-gray-950/50 text-gray-300 text-xs font-medium px-3 py-1.5 rounded-lg border border-gray-800/60">
            {t}
          </span>
        ))}
      </div>
      {link && (
        <a href={link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-teal-400 transition-colors w-fit">
          Launch Project <ChevronRight size={16} />
        </a>
      )}
    </div>
  );
}

function TimelineItem({ title, subtitle, date, desc }: any) {
  return (
    <div className="relative pl-8 border-l-2 border-gray-800 group">
      <div className="absolute w-4 h-4 bg-gray-900 border-2 border-teal-500 rounded-full -left-[9px] top-1 group-hover:bg-teal-500 transition-colors duration-300"></div>
      <h4 className="text-xl font-bold text-white mb-1">{title}</h4>
      <p className="text-teal-400 text-sm font-mono mb-2">{subtitle}</p>
      <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3">{date}</p>
      {desc && <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>}
    </div>
  );
}