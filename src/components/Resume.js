import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Github, Download, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const Resume = ({ onBack, darkMode }) => {
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className={`min-h-screen ${darkMode ? 'bg-slate-900 text-slate-300' : 'bg-white text-slate-800'} py-10 px-4 md:px-8 print:p-0 print:bg-white print:text-black`}>
            {/* Navigation and Actions (Hidden in Print) */}
            <div className="max-w-5xl mx-auto mb-8 flex justify-between items-center print:hidden">
                <button
                    onClick={onBack}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg ${darkMode ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'} transition-colors`}
                >
                    <ArrowLeft size={20} />
                    Back to Portfolio
                </button>
                <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white transition-colors"
                >
                    <Download size={20} />
                    Download PDF
                </button>
            </div>

            {/* Resume Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`max-w-[210mm] mx-auto ${darkMode ? 'bg-slate-950' : 'bg-white'} shadow-2xl print:shadow-none print:w-full print:max-w-none rounded-xl p-8 md:p-12 print:p-0`}
            >
                {/* Header */}
                <header className="border-b-2 border-slate-800 pb-6 mb-8 print:border-black">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold uppercase tracking-wider mb-2 text-slate-900 dark:text-white print:text-black">Anaswar CS</h1>
                    <h2 className="text-xl font-semibold mb-4 text-slate-700 dark:text-emerald-400 print:text-black">
                        Building Intelligent Systems • Full-Stack • AI/ML • IoT
                    </h2>

                    <div className="flex flex-wrap gap-4 text-sm md:text-base print:text-sm">
                        <div className="flex items-center gap-2">
                            <Mail size={16} />
                            <span>anaswarcs00@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Phone size={16} />
                            <span>7306019262</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>Palakkad, Kerala, India</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe size={16} />
                            <a href="https://anaswarportfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">anaswarportfolio.netlify.app</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Linkedin size={16} />
                            <a href="https://www.linkedin.com/in/anaswarcs" target="_blank" rel="noopener noreferrer" className="hover:underline">anaswarcs</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Github size={16} />
                            <a href="https://github.com/Anaswar-CS" target="_blank" rel="noopener noreferrer" className="hover:underline">Anaswar-CS</a>
                        </div>
                    </div>
                </header>

                <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 print:grid-cols-[1.5fr_1fr]">

                    {/* Left Column */}
                    <div className="space-y-8">
                        {/* Profile */}
                        <section>
                            <h3 className="text-2xl font-serif font-bold uppercase border-b-2 border-slate-800 mb-4 print:border-black text-slate-900 dark:text-white print:text-black">About</h3>
                            <p className="text-justify leading-relaxed">
                                CSE student with hands-on industry experience building real systems. Work spans AI-powered disease detection, fake-profile analysis, and IoT-based flood-warning infrastructure. Currently contributing to internal product development at Fluxnode Technologies while pursuing a B.Tech at Jyothi Engineering College.
                            </p>
                        </section>

                        {/* Work Experience */}
                        <section>
                            <h3 className="text-2xl font-serif font-bold uppercase border-b-2 border-slate-800 mb-4 print:border-black text-slate-900 dark:text-white print:text-black">Work Experience</h3>

                            <div className="mb-6">
                                <div className="font-bold text-lg">Project Associate</div>
                                <div className="font-semibold text-slate-700 dark:text-emerald-400 print:text-black">Fluxnode Technologies Pvt Ltd</div>
                                <div className="flex justify-between text-sm italic mb-2">
                                    <span>2025 – Present</span>
                                    <span>Kerala</span>
                                </div>
                                <ul className="list-disc ml-5 space-y-1">
                                    <li>Contributed to building the company website using HTML, CSS, and JavaScript, collaborating with the product team on core pages and functionality</li>
                                    <li>Contributed to development of the company's first mobile app using Android Studio, partnering directly with the product lead from concept to internal release</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <div className="font-bold text-lg">AI/Edge Computing Intern</div>
                                <div className="font-semibold text-slate-700 dark:text-emerald-400 print:text-black">V-Robotics Innovations Pvt Ltd</div>
                                <div className="flex justify-between text-sm italic mb-2">
                                    <span>Jun 2026 (Summer Internship)</span>
                                    <span>Palakkad, Kerala</span>
                                </div>
                                <ul className="list-disc ml-5 space-y-1">
                                    <li>Built and benchmarked local LLM deployment pipelines using Ollama and llama.cpp, evaluating models including Qwen3 4B for edge inference performance and accuracy</li>
                                    <li>Developed PyLM Studio, a custom desktop AI application for local model management, implementing RAG and multimodal AI workflows, and resolving Windows Unicode encoding issues for regional language support</li>
                                </ul>
                            </div>

                            <div>
                                <div className="font-bold text-lg">Android App Development Intern</div>
                                <div className="font-semibold text-slate-700 dark:text-emerald-400 print:text-black">ICT Academy</div>
                                <div className="flex justify-between text-sm italic mb-2">
                                    <span>Monsoon 2024 (1 Month)</span>
                                    <span>Kerala</span>
                                </div>
                                <ul className="list-disc ml-5 space-y-1">
                                    <li>Completed a 1-month, hands-on Android training program covering app UI design, activity lifecycles, and core SDK components</li>
                                </ul>
                            </div>
                        </section>

                        {/* Education */}
                        <section>
                            <h3 className="text-2xl font-serif font-bold uppercase border-b-2 border-slate-800 mb-4 print:border-black text-slate-900 dark:text-white print:text-black">Education</h3>

                            <div className="mb-6">
                                <div className="font-bold text-lg">B.Tech in Computer Science and Engineering</div>
                                <div className="font-semibold text-slate-700 dark:text-emerald-400 print:text-black">Jyothi Engineering College</div>
                                <div className="flex justify-between text-sm italic mb-2">
                                    <span>2023 – 2027 (Ongoing)</span>
                                    <span>Thrissur, Kerala</span>
                                </div>
                                <ul className="list-disc ml-5 space-y-1">
                                    <li><span className="font-bold">CGPA:</span> 7.25/10</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <div className="font-bold text-lg">Higher Secondary (Class XII, Science)</div>
                                <div className="font-semibold text-slate-700 dark:text-emerald-400 print:text-black">PKHSS Higher Secondary School</div>
                                <div className="flex justify-between text-sm italic mb-2">
                                    <span>2021 – 2022</span>
                                    <span>Palakkad, Kerala</span>
                                </div>
                                <ul className="list-disc ml-5 space-y-1">
                                    <li><span className="font-bold">Score:</span> 93%</li>
                                </ul>
                            </div>

                            <div>
                                <div className="font-bold text-lg">Secondary School (Class X, CBSE)</div>
                                <div className="font-semibold text-slate-700 dark:text-emerald-400 print:text-black">Bhavans Vidya Mandir Mannapra</div>
                                <div className="flex justify-between text-sm italic mb-2">
                                    <span>2020 – 2021</span>
                                    <span>Palakkad, Kerala</span>
                                </div>
                                <ul className="list-disc ml-5 space-y-1">
                                    <li><span className="font-bold">Score:</span> 87%</li>
                                </ul>
                            </div>
                        </section>

                        {/* Projects */}
                        <section>
                            <h3 className="text-2xl font-serif font-bold uppercase border-b-2 border-slate-800 mb-4 print:border-black text-slate-900 dark:text-white print:text-black">Projects</h3>

                            <div className="mb-4">
                                <div className="font-bold text-lg">Medical AI Analyzer — AI-Powered Disease Detection Web App</div>
                                <div className="text-sm italic mb-1">github.com/Anaswar-CS/disease-prediction</div>
                                <ul className="list-disc ml-5 mt-1">
                                    <li>Web app for early detection of diabetes and cardiac abnormalities using Python, Scikit-learn, Streamlit, and OpenCV. Trained 3 ML models reaching 77.92% accuracy on the Pima Indians Diabetes dataset, plus an ECG analyzer classifying 5 heart conditions with OCR-based report parsing</li>
                                </ul>
                            </div>

                            <div className="mb-4">
                                <div className="font-bold text-lg">Security Dashboard — Real-Time Security Monitoring Web App</div>
                                <div className="text-sm italic mb-1">github.com/Anaswar-CS/security-dashboard</div>
                                <ul className="list-disc ml-5 mt-1">
                                    <li>Full-stack Flask and JavaScript app tracking 45+ system, security, and network metrics in real time, with a RESTful API, auto-refresh dashboard, and live alerts</li>
                                </ul>
                            </div>

                            <div className="mb-4">
                                <div className="font-bold text-lg">FloodGuardX — IoT-Based Flood Detection System</div>
                                <div className="text-sm italic mb-1">github.com/Anaswar-CS/floodguardx-dashboard</div>
                                <ul className="list-disc ml-5 mt-1">
                                    <li>Low-cost IoT flood-warning system using ESP32, water-level and rain sensors, with automatic power cutoff, an SOS distress button, and a React dashboard for rescue coordination. Built under ₹3,000, scalable to district-level deployment</li>
                                </ul>
                            </div>

                            <div>
                                <div className="font-bold text-lg">Fake Profile Detector — ML-Based Social Media Authenticity Classifier</div>
                                <div className="text-sm italic mb-1">github.com/Anaswar-CS/fake-profile-detector</div>
                                <ul className="list-disc ml-5 mt-1">
                                    <li>Full-stack fake and bot account detector using Logistic Regression with TF-IDF vectorization across 30+ signals (text patterns, engagement metrics, account behavior), achieving 95%+ accuracy with explainable, real-time predictions. Built with React, TypeScript, and FastAPI</li>
                                </ul>
                            </div>
                        </section>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        {/* Certifications */}
                        <section>
                            <h3 className="text-2xl font-serif font-bold uppercase border-b-2 border-slate-800 mb-4 print:border-black text-slate-900 dark:text-white print:text-black">Certifications</h3>
                            <ul className="list-disc ml-5 space-y-2">
                                <li>NIT Calicut — Embedded Systems Workshop (Mar 2025)</li>
                                <li>Cisco — Cyber Security (Dec 2024)</li>
                                <li>Infosys — Cyber Security and Applied Ethical Hacking; AI for All (Jun 2025)</li>
                                <li>NASA International Space Apps Challenge — Galactic Problem Solver (Oct 2025)</li>
                                <li>NPTEL — Introduction to Industry 4.0 and Industrial IoTs (Jul–Oct 2025)</li>
                                <li>InternForte — Full Stack Web Development (Jun 2025)</li>
                            </ul>
                        </section>

                        {/* Skills */}
                        <section>
                            <h3 className="text-2xl font-serif font-bold uppercase border-b-2 border-slate-800 mb-4 print:border-black text-slate-900 dark:text-white print:text-black">Technical Skills</h3>
                            <ul className="list-disc ml-5 space-y-2">
                                <li><span className="font-bold">Programming:</span> Python, Java, TypeScript, SQL, C++</li>
                                <li><span className="font-bold">Web Development:</span> Node.js, FastAPI, REST APIs, API Design, React, HTML, CSS</li>
                                <li><span className="font-bold">AI/ML:</span> Machine Learning, Scikit-learn, Computer Vision, Face Recognition, LLM Workflows</li>
                                <li><span className="font-bold">App Development:</span> Android Studio, Android SDK, Kotlin</li>
                                <li><span className="font-bold">Tools:</span> Git, GitHub, VS Code, Firebase</li>
                            </ul>
                        </section>

                        {/* Memberships */}
                        <section>
                            <h3 className="text-2xl font-serif font-bold uppercase border-b-2 border-slate-800 mb-4 print:border-black text-slate-900 dark:text-white print:text-black">Memberships</h3>
                            <ul className="list-disc ml-5 space-y-2">
                                <li><span className="font-bold">FOSS Club</span> — Co-lead member; conducted workshops, led open-source initiatives, organized community learning activities</li>
                                <li><span className="font-bold">CSI</span> — Member of the Computer Society of India, participating in technical events and seminars</li>
                                <li><span className="font-bold">NDLI Club</span> — Participant in AI and digital literacy workshops</li>
                            </ul>
                        </section>

                        {/* Languages */}
                        <section>
                            <h3 className="text-2xl font-serif font-bold uppercase border-b-2 border-slate-800 mb-4 print:border-black text-slate-900 dark:text-white print:text-black">Languages</h3>
                            <ul className="list-disc ml-5 space-y-2">
                                <li>English</li>
                                <li>Malayalam (Native)</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Resume;