import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Resume from './components/Resume';
import Greeting3D from './components/Greeting3D';
import {
  Code,
  Terminal,
  Menu,
  X,
  Moon,
  Sun,
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  Smartphone,
  Globe,
  Trophy,
  BookOpen,
  GraduationCap,
  Award,
  Target,
  Users,
  Heart
} from 'lucide-react';

const FadeInSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

const roles = [
  'Computer Science Student',
  'Aspiring Engineer',
  'Problem Solver',
  'Tech Enthusiast'
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const [typedText, setTypedText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let currentChar = 0;
    const typingInterval = setInterval(() => {
      if (currentChar <= currentRole.length) {
        setTypedText(currentRole.slice(0, currentChar));
        currentChar++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentRoleIndex]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };



  const skills = {
    programming: [
      { name: 'C++', level: 85 },
      { name: 'Java', level: 75 },
      { name: 'Python', level: 70 }
    ],
    development: [
      { name: 'Android Studio', level: 80 },
      { name: 'Web Development', level: 70 },
      { name: 'Node.js', level: 60 }
    ],
    aiTools: [
      { name: 'ChatGPT', level: 85 },
      { name: 'Gemini AI', level: 80 },
      { name: 'Machine Learning', level: 70 }
    ],
    softSkills: [
      { name: 'Teamwork', level: 90 },
      { name: 'Adaptability', level: 85 },
      { name: 'Communication', level: 80 }
    ]
  };

  const projects = [
    {
      title: 'Android App Development',
      description: 'Developed a mobile application as part of a team, focusing on user experience and backend integration.',
      tags: ['Android Studio', 'Java', 'UI/UX'],
      icon: <Smartphone className="text-emerald-400" size={28} />,
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'FloodGuardX',
      description: 'IoT-based flood detection system using real-time water-level monitoring sensors, alert automation, and mobile app notification to enhance community safety.',
      tags: ['IoT', 'Sensors', 'Mobile App', 'Automation'],
      icon: <Globe className="text-blue-400" size={28} />,
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Fake Profile Detector',
      description: 'AI-powered full-stack web app that analyzes profile metadata and content to detect the likelihood of a fake account.',
      tags: ['AI/ML', 'Full Stack', 'Web App', 'Security'],
      icon: <Target className="text-purple-400" size={28} />,
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Security Dashboard',
      description: 'Comprehensive security monitoring dashboard for tracking and analyzing security threats and vulnerabilities in real-time.',
      tags: ['Dashboard', 'Security', 'Analytics', 'Monitoring'],
      icon: <Trophy className="text-red-400" size={28} />,
      gradient: 'from-red-500 to-orange-600'
    },
    {
      title: 'Productivity App',
      description: 'Task management and productivity application designed to help users organize their work, track progress, and boost efficiency.',
      tags: ['Mobile App', 'Productivity', 'Task Management'],
      icon: <Smartphone className="text-cyan-400" size={28} />,
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'NasaFarm-3D Farm Simulation',
      description: 'Web-based 3D farm simulation game developed for NASA Farm Navigators idea, providing interactive agricultural planning experience.',
      tags: ['3D', 'Game Dev', 'Web', 'NASA'],
      icon: <Globe className="text-green-400" size={28} />,
      gradient: 'from-green-500 to-emerald-600'
    }
  ];

  const certifications = [
    { title: 'Cyber Security (Cisco)', icon: <Award className="text-yellow-400" /> },
    { title: 'Applied Ethical Hacking, AI for All (Infosys)', icon: <Award className="text-blue-400" /> },
    { title: 'Introduction to Industry 4.0 and Industrial IoT (NPTEL)', icon: <Award className="text-emerald-400" /> },
    { title: 'NASA Space App Challenge', icon: <Trophy className="text-purple-400" /> },
    { title: 'Python Course (SCALER)', icon: <Code className="text-orange-400" /> },
    { title: 'Android App Development (ICT Academy)', icon: <Code className="text-pink-400" /> },
    { title: 'Full Stack Web Development (InternForte)', icon: <Code className="text-cyan-400" /> }
  ];

  const timeline = [
    {
      year: '2022 - Present',
      title: 'B.Tech in Computer Science',
      institution: 'Jyothi Engineering College',
      location: 'Palakkad, Kerala',
      description: 'CGPA: 7.21/10 | Key Courses: OS, Networks, ML, Ethical Hacking',
      icon: <GraduationCap className="text-blue-400" size={24} />,
      color: 'blue'
    },
    {
      year: '2020 - 2022',
      title: 'Higher Secondary (Science)',
      institution: 'PKHSS Higher Secondary School',
      location: 'Palakkad, Kerala',
      description: 'Percentage: 93% | Science quiz winner',
      icon: <BookOpen className="text-emerald-400" size={24} />,
      color: 'emerald'
    },
    {
      year: '2021',
      title: 'Secondary Education',
      institution: 'Bhavans Vidya Mandir Mannapra',
      location: 'Palakkad, Kerala',
      description: 'Percentage: 87%',
      icon: <BookOpen className="text-purple-400" size={24} />,
      color: 'purple'
    }
  ];


  if (showResume) {
    return <Resume onBack={() => setShowResume(false)} darkMode={darkMode} />;
  }

  return (
    <div className={`min-h-screen font-sans selection:bg-cyan-500/20 ${darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'} transition-colors duration-500 antialiased`}>
      {/* Enhanced Background - Subtle Gradient Mesh */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -inset-[50%] opacity-20 blur-[120px] ${darkMode ? 'animate-aurora bg-[radial-gradient(circle_at_50%_20%,#10b981_0%,transparent_40%),radial-gradient(circle_at_80%_80%,#3b82f6_0%,transparent_40%),radial-gradient(circle_at_20%_80%,#8b5cf6_0%,transparent_40%)]' : 'animate-aurora bg-[radial-gradient(circle_at_50%_20%,#d1fae5_0%,transparent_40%),radial-gradient(circle_at_80%_80%,#dbeafe_0%,transparent_40%),radial-gradient(circle_at_20%_80%,#ede9fe_0%,transparent_40%)]'}`} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_60%,transparent_100%)]"></div>
      </div>

      {/* Enhanced Header with Glass Effect */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'backdrop-blur-2xl bg-white/60 dark:bg-slate-950/60 border-b border-slate-200/50 dark:border-white/5 shadow-sm shadow-slate-900/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection('home')}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-xl blur opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              <div className="relative w-11 h-11 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/30 transition-all duration-300">
                <Terminal className="text-white" size={20} />
              </div>
            </div>
            <div>
              <span className={`text-xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>Anaswar CS</span>
              <div className={`text-xs ${darkMode ? 'text-emerald-400' : 'text-emerald-600'} font-mono tracking-wide`}>./developer</div>
            </div>
          </motion.div>

          {/* Desktop Menu - Enhanced */}
          <div className="hidden md:flex items-center gap-2">
            {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item, idx) => (
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`px-4 py-2 rounded-lg ${darkMode ? 'text-slate-300 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'} transition-all duration-300 capitalize text-sm font-medium relative group`}
              >
                {item}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-gradient-to-r from-emerald-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </motion.button>
            ))}
            <div className="w-px h-6 bg-slate-200 dark:bg-slate-800 mx-2"></div>
            <button
              onClick={toggleDarkMode}
              className={`p-2.5 rounded-xl ${darkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'} transition-all duration-300 hover:scale-105 active:scale-95`}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setShowResume(true)}
              className="px-6 py-2.5 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            >
              View Resume <BookOpen size={16} />
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className={darkMode ? 'text-white' : 'text-slate-900'} /> : <Menu className={darkMode ? 'text-white' : 'text-slate-900'} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`md:hidden ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} border-t`}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`${darkMode ? 'text-slate-300 hover:text-emerald-400' : 'text-slate-600 hover:text-emerald-600'} transition-colors capitalize text-left`}
                >
                  {item}
                </button>
              ))}
              <button onClick={toggleDarkMode} className={`flex items-center gap-2 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {darkMode ? <><Sun size={20} /> Light Mode</> : <><Moon size={20} /> Dark Mode</>}
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section - Enhanced */}
      <section id="home" className="relative pt-40 pb-24 px-6 lg:px-8 min-h-screen flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full backdrop-blur-md border ${darkMode ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-700'} mb-10 shadow-sm`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-medium tracking-wide">Available for opportunities</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-8 tracking-tight leading-[1.1]`}
              >
                Hi, I'm <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 animate-gradient-x">Anaswar CS</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="h-14 mb-10"
              >
                <span className={`text-xl md:text-2xl lg:text-3xl ${darkMode ? 'text-slate-400' : 'text-slate-600'} font-light tracking-tight`}>
                  {typedText}
                  <span className="animate-pulse text-emerald-500">|</span>
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className={`text-lg md:text-xl ${darkMode ? 'text-slate-400' : 'text-slate-600'} mb-12 leading-relaxed max-w-xl`}
              >
                B.Tech student at Jyothi Engineering College with hands-on experience in programming, app development, and cybersecurity. Proven teamwork and a passion for technology innovation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-wrap gap-4 items-center"
              >
                <button
                  onClick={() => scrollToSection('projects')}
                  className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-2xl flex items-center gap-3 font-semibold shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Code size={20} />
                  View My Work
                  <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform duration-300" />
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className={`px-8 py-4 rounded-2xl flex items-center gap-3 font-semibold border-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${darkMode
                    ? 'border-slate-700 bg-slate-800/50 hover:bg-slate-800 text-white backdrop-blur-sm'
                    : 'border-slate-200 bg-white/50 hover:bg-white text-slate-900 backdrop-blur-sm shadow-sm'
                    }`}
                >
                  <Mail size={20} />
                  Get In Touch
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex gap-4 mt-10"
              >
                {[
                  { icon: <Github size={20} />, link: 'https://github.com/anaswar-cs', label: 'GitHub' },
                  { icon: <Linkedin size={20} />, link: 'https://www.linkedin.com/in/anaswar-cs-8649aa286', label: 'LinkedIn' },
                  { icon: <Mail size={20} />, link: 'mailto:anaswarcs00@gmail.com', label: 'Email' }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${darkMode
                      ? 'bg-slate-800 text-slate-400 hover:bg-emerald-500 hover:text-white'
                      : 'bg-slate-200 text-slate-600 hover:bg-emerald-500 hover:text-white'
                      }`}
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Visual Element - 3D Greeting */}
            <div className="hidden lg:block relative z-10 w-full h-full min-h-[500px] flex items-center justify-center">
              <Greeting3D darkMode={darkMode} />
            </div>
          </div>
        </div>
      </section >

      {/* About Section - Enhanced */}
      <section id="about" className={`py-24 px-6 lg:px-8 ${darkMode ? 'bg-slate-900/40' : 'bg-slate-50/50'}`}>
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <div className={`inline-block px-4 py-2 rounded-full ${darkMode ? 'bg-emerald-500/10 border border-emerald-500/20' : 'bg-emerald-50 border border-emerald-200'} mb-6`}>
                <span className={`text-sm font-mono font-medium ${darkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>./about-me</span>
              </div>
              <h2 className={`text-4xl md:text-5xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'} mb-6`}>
                About Me
              </h2>
              <p className={`text-lg md:text-xl ${darkMode ? 'text-slate-400' : 'text-slate-600'} max-w-2xl mx-auto font-light`}>
                Passionate about technology and innovation
              </p>
            </div>
          </FadeInSection>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeInSection delay={0.2}>
              <div className={`${darkMode ? 'bg-slate-900/80 border-slate-800/50 shadow-2xl shadow-slate-950/20' : 'bg-white border-slate-200/60 shadow-xl shadow-slate-200/50'} border rounded-[2rem] p-8 md:p-10 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/30`}>
                <div className="space-y-8">
                  <div>
                    <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-5 flex items-center gap-3`}>
                      <div className="w-1.5 h-8 bg-emerald-500 rounded-full"></div>
                      Profile
                    </h3>
                    <p className={`text-lg ${darkMode ? 'text-slate-300' : 'text-slate-700'} leading-relaxed font-light`}>
                      Motivated Computer Science Engineering student with hands-on experience in programming, app development, and cybersecurity. Proven teamwork, and a passion for technology innovation.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-1 gap-6 pt-4 border-t border-slate-200/10 dark:border-slate-800/50">
                    <div className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                        <MapPin size={20} />
                      </div>
                      <span className={`font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Palakkad, Kerala, India</span>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                        <Mail size={20} />
                      </div>
                      <a href="mailto:anaswarcs00@gmail.com" className={`font-medium ${darkMode ? 'text-slate-300 hover:text-emerald-400' : 'text-slate-700 hover:text-emerald-600'} transition-colors`}>
                        anaswarcs00@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                        <Globe size={20} />
                      </div>
                      <a href="https://anaswarportfolio.craftofolio.com/" target="_blank" rel="noopener noreferrer" className={`font-medium ${darkMode ? 'text-slate-300 hover:text-emerald-400' : 'text-slate-700 hover:text-emerald-600'} transition-colors truncate`}>
                        anaswarportfolio.craftofolio.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Code className="text-emerald-500" />, label: 'Programming', value: 'C++, Java, Python', bg: 'bg-emerald-500/5', border: 'hover:border-emerald-500/40' },
                  { icon: <Smartphone className="text-blue-500" />, label: 'Development', value: 'Android, Web', bg: 'bg-blue-500/5', border: 'hover:border-blue-500/40' },
                  { icon: <Heart className="text-pink-500" />, label: 'Interests', value: 'IoT, AI/ML, Security', bg: 'bg-pink-500/5', border: 'hover:border-pink-500/40' },
                  { icon: <Users className="text-purple-500" />, label: 'Soft Skills', value: 'Team Player', bg: 'bg-purple-500/5', border: 'hover:border-purple-500/40' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className={`${darkMode ? 'bg-slate-900/60 border-slate-800/50 shadow-xl shadow-slate-950/10' : 'bg-white border-slate-200/60 shadow-md shadow-slate-200/40'} border rounded-[1.5rem] p-6 text-center transition-all duration-300 ${item.border}`}
                  >
                    <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mx-auto mb-5 shadow-inner`}>
                      {item.icon}
                    </div>
                    <div className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-2`}>{item.label}</div>
                    <div className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'} font-light leading-snug`}>{item.value}</div>
                  </motion.div>
                ))}
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Skills Section - Enhanced */}
      <section id="skills" className={`py-32 px-6 lg:px-8 ${darkMode ? 'bg-slate-950/80' : 'bg-slate-50/20'}`}>
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-20">
              <div className={`inline-block px-4 py-2 rounded-full ${darkMode ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-blue-50 border border-blue-200'} mb-6`}>
                <span className={`text-sm font-mono font-medium ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>./skills</span>
              </div>
              <h2 className={`text-4xl md:text-5xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'} mb-6`}>
                Technical Skills
              </h2>
              <p className={`text-lg md:text-xl ${darkMode ? 'text-slate-400' : 'text-slate-600'} max-w-2xl mx-auto font-light`}>
                My technical expertise and capabilities
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items], idx) => (
              <FadeInSection key={category} delay={idx * 0.1}>
                <div className={`${darkMode ? 'bg-slate-900/60 border-slate-800/50 shadow-2xl shadow-slate-950/20' : 'bg-white border-slate-200/60 shadow-xl shadow-slate-200/40'} border rounded-3xl p-8 hover:border-blue-500/30 transition-all duration-500 flex flex-col h-full group`}>
                  <div className="mb-8">
                    <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 ${category === 'programming' ? 'bg-emerald-500/10 text-emerald-500 shadow-emerald-500/10' :
                      category === 'development' ? 'bg-blue-500/10 text-blue-500 shadow-blue-500/10' :
                        category === 'aiTools' ? 'bg-pink-500/10 text-pink-500 shadow-pink-500/10' :
                          'bg-purple-500/10 text-purple-500 shadow-purple-500/10'
                      }`}>
                      {category === 'programming' && <Code size={28} />}
                      {category === 'development' && <Terminal size={28} />}
                      {category === 'aiTools' && <Target size={28} />}
                      {category === 'softSkills' && <Users size={28} />}
                    </div>
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} capitalize tracking-tight`}>
                      {category.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                  </div>

                  <div className="space-y-6 flex-grow">
                    {items.map((skill, skillIdx) => (
                      <div key={skillIdx} className="group/skill">
                        <div className="flex justify-between mb-2 items-end">
                          <span className={`text-sm font-semibold tracking-wide ${darkMode ? 'text-slate-300 group-hover/skill:text-white' : 'text-slate-700 group-hover/skill:text-slate-900'} transition-colors duration-300`}>{skill.name}</span>
                          <span className={`text-xs font-mono font-bold ${darkMode ? 'text-emerald-400/80' : 'text-emerald-600/80'}`}>{skill.level}%</span>
                        </div>
                        <div className={`w-full ${darkMode ? 'bg-slate-800/50' : 'bg-slate-100'} rounded-full h-1.5 overflow-hidden shadow-inner`}>
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: idx * 0.1 + skillIdx * 0.1, ease: "circOut" }}
                            className={`h-full bg-gradient-to-r ${category === 'programming' ? 'from-emerald-600 to-emerald-400' :
                              category === 'development' ? 'from-blue-600 to-blue-400' :
                                category === 'aiTools' ? 'from-pink-600 to-pink-400' :
                                  'from-purple-600 to-purple-400'
                              } rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          {/* Certifications */}
          <FadeInSection delay={0.3}>
            <div className="mt-16">
              <h3 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-8 text-center`}>
                Certifications & Achievements
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'} border-2 rounded-xl p-6 flex items-center gap-4 hover:shadow-xl transition-all`}
                  >
                    <div className="flex-shrink-0">{cert.icon}</div>
                    <div className={`text-sm font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{cert.title}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Featured Projects - Enhanced Card Design */}
      <section id="projects" className={`py-32 px-6 lg:px-8 ${darkMode ? 'bg-slate-900/40' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-20">
              <div className={`inline-block px-4 py-2 rounded-full ${darkMode ? 'bg-purple-500/10 border border-purple-500/20' : 'bg-purple-50 border border-purple-200'} mb-6`}>
                <span className={`text-sm font-mono font-medium ${darkMode ? 'text-purple-400' : 'text-purple-700'}`}>./projects</span>
              </div>
              <h2 className={`text-4xl md:text-5xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'} mb-6`}>
                Featured Projects
              </h2>
              <p className={`text-lg md:text-xl ${darkMode ? 'text-slate-400' : 'text-slate-600'} max-w-2xl mx-auto font-light`}>
                Solutions I've built to solve real-world problems
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, idx) => (
              <FadeInSection key={idx} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -12 }}
                  className={`${darkMode ? 'bg-slate-900/60 border-slate-800/50 shadow-2xl shadow-slate-950/20' : 'bg-white border-slate-200/60 shadow-xl shadow-slate-200/50'} border rounded-[2.5rem] p-10 backdrop-blur-sm transition-all duration-500 group h-full flex flex-col relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent pointer-events-none transform translate-x-10 -translate-y-10 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-700"></div>

                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    {project.icon}
                  </div>

                  <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-5 group-hover:text-emerald-500 transition-colors duration-300`}>
                    {project.title}
                  </h3>

                  <p className={`text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'} mb-10 leading-relaxed flex-grow font-light`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto pt-8 border-t border-slate-200/10 dark:border-white/5">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className={`px-4 py-1.5 rounded-xl text-xs font-bold tracking-wide transition-all duration-300 ${darkMode
                          ? 'bg-slate-800 text-emerald-400 group-hover:bg-emerald-500/20'
                          : 'bg-emerald-50 text-emerald-700 group-hover:bg-emerald-500 group-hover:text-white'
                          }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Education Timeline - Enhanced */}
      <section id="education" className={`py-32 px-6 lg:px-8 ${darkMode ? 'bg-slate-950/40' : 'bg-slate-50/50'}`}>
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-20">
              <div className={`inline-block px-4 py-2 rounded-full ${darkMode ? 'bg-orange-500/10 border border-orange-500/20' : 'bg-orange-50 border border-orange-200'} mb-6`}>
                <span className={`text-sm font-mono font-medium ${darkMode ? 'text-orange-400' : 'text-orange-700'}`}>./education</span>
              </div>
              <h2 className={`text-4xl md:text-5xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'} mb-6`}>
                Education Journey
              </h2>
              <p className={`text-lg md:text-xl ${darkMode ? 'text-slate-400' : 'text-slate-600'} max-w-2xl mx-auto font-light`}>
                My academic background and achievements
              </p>
            </div>
          </FadeInSection>

          <div className="relative space-y-12 before:absolute before:inset-0 before:ml-10 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-800 before:to-transparent">
            {timeline.map((item, idx) => (
              <FadeInSection key={idx} delay={idx * 0.1}>
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  {/* Icon/Dot */}
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-white dark:border-slate-900 shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-500 group-hover:scale-125 z-10 ${item.color === 'blue' ? 'bg-blue-500 shadow-blue-500/20' :
                    item.color === 'emerald' ? 'bg-emerald-500 shadow-emerald-500/20' :
                      'bg-purple-500 shadow-purple-500/20'
                    }`}>
                    {item.icon}
                  </div>
                  {/* Card */}
                  <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] ${darkMode ? 'bg-slate-900/60 border-slate-800/50 shadow-2xl' : 'bg-white border-slate-200/60 shadow-xl'} border p-8 rounded-[2rem] backdrop-blur-sm transition-all duration-500 group-hover:border-emerald-500/30`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div className={`text-sm font-mono font-bold ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>{item.year}</div>
                    </div>
                    <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-1`}>{item.title}</h3>
                    <div className={`text-lg font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{item.institution}</div>
                    <div className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-500'} mb-4 flex items-center gap-2 font-medium`}>
                      <MapPin size={14} className="text-slate-400" />
                      {item.location}
                    </div>
                    <p className={`leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'} font-light`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Enhanced */}
      <section id="contact" className={`py-32 px-6 lg:px-8 ${darkMode ? 'bg-slate-900/40' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-16">
              <div className={`inline-block px-4 py-2 rounded-full ${darkMode ? 'bg-pink-500/10 border border-pink-500/20' : 'bg-pink-50 border border-pink-200'} mb-6`}>
                <span className={`text-sm font-mono font-medium ${darkMode ? 'text-pink-400' : 'text-pink-700'}`}>./contact</span>
              </div>
              <h2 className={`text-4xl md:text-5xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'} mb-6`}>
                Let's Connect
              </h2>
              <p className={`text-lg md:text-xl ${darkMode ? 'text-slate-400' : 'text-slate-600'} font-light`}>
                Have a project in mind or want to collaborate? Reach out!
              </p>
            </div>
          </FadeInSection>

          {/* Quick Contact Links - Enhanced Grid */}
          <FadeInSection delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Mail className="text-blue-500" />,
                  label: 'Email',
                  value: 'anaswarcs00@gmail.com',
                  link: 'mailto:anaswarcs00@gmail.com',
                  color: 'blue'
                },
                {
                  icon: <Linkedin className="text-emerald-500" />,
                  label: 'LinkedIn',
                  value: 'Anaswar CS',
                  link: 'https://www.linkedin.com/in/anaswar-cs-8649aa286',
                  color: 'emerald'
                },
                {
                  icon: <Github className="text-purple-500" />,
                  label: 'GitHub',
                  value: 'anaswar-cs',
                  link: 'https://github.com/anaswar-cs',
                  color: 'purple'
                }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${darkMode ? 'bg-slate-900/60 border-slate-800/50 hover:bg-slate-800' : 'bg-white border-slate-200/60 hover:bg-slate-50'} border rounded-3xl p-8 transition-all duration-300 group flex flex-col items-center text-center hover:scale-[1.05] hover:shadow-2xl shadow-slate-950/20`}
                >
                  <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-lg ${item.color === 'blue' ? 'bg-blue-500/10 shadow-blue-500/10' :
                    item.color === 'emerald' ? 'bg-emerald-500/10 shadow-emerald-500/10' :
                      'bg-purple-500/10 shadow-purple-500/10'
                    }`}>
                    {item.icon}
                  </div>
                  <div className={`text-sm font-bold ${darkMode ? 'text-slate-400' : 'text-slate-500'} mb-1`}>{item.label}</div>
                  <div className={`text-base font-semibold ${darkMode ? 'text-white' : 'text-slate-900'} group-hover:text-emerald-500 transition-colors`}>{item.value}</div>
                </a>
              ))}
            </div>
          </FadeInSection>

          {/* Footer - Reimagined */}
          <footer className="mt-32 pt-16 border-t border-slate-200/10 dark:border-white/5">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <Terminal className="text-white" size={18} />
                  </div>
                  <span className={`text-xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>Anaswar CS</span>
                </div>
                <p className={`text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'} leading-relaxed max-w-sm font-light`}>
                  Building digital experiences with focus on clean code, modern design, and robust functionality.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'} uppercase tracking-widest mb-6`}>Navigation</h4>
                  <ul className="space-y-4">
                    {['About', 'Skills', 'Projects', 'Education'].map((link) => (
                      <li key={link}>
                        <button
                          onClick={() => scrollToSection(link.toLowerCase())}
                          className={`text-sm font-medium ${darkMode ? 'text-slate-400 hover:text-emerald-400' : 'text-slate-600 hover:text-emerald-600'} transition-colors`}
                        >
                          {link}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'} uppercase tracking-widest mb-6`}>Social</h4>
                  <ul className="space-y-4">
                    {[
                      { name: 'GitHub', link: 'https://github.com/anaswar-cs' },
                      { name: 'LinkedIn', link: 'https://www.linkedin.com/in/anaswar-cs-8649aa286' },
                      { name: 'Portfolio', link: 'https://anaswarportfolio.craftofolio.com/' }
                    ].map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-sm font-medium ${darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors`}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className={`pt-12 border-t ${darkMode ? 'border-slate-800' : 'border-slate-100'} flex flex-col md:flex-row justify-between items-center gap-6 pb-12`}>
              <p className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'} font-light tracking-wide`}>
                © {new Date().getFullYear()} Anaswar CS. Built with React & Tailwind CSS.
              </p>
              <div className="flex items-center gap-6">
                <span className={`text-[10px] font-mono ${darkMode ? 'text-slate-600' : 'text-slate-300'}`}>v2.0.0 Refined</span>
              </div>
            </div>
          </footer>
        </div>
      </section>

      {/* Back to Top Button */}
      < AnimatePresence >
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-full shadow-lg flex items-center justify-center z-50 hover:shadow-xl hover:shadow-emerald-500/20 transition-all"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence >
    </div >
  );
}

export default App;