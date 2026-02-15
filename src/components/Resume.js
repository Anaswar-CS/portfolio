import React from 'react';
import { Mail, Phone, MapPin, Globe, Linkedin, Download, ArrowLeft } from 'lucide-react';
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
                        Aspiring Engineer | Computer Science Student
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
                            <a href="https://anaswarportfolio.craftofolio.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">anaswarportfolio.craftofolio.com</a>
                        </div>
                        <div className="flex items-center gap-2">
                            <Linkedin size={16} />
                            <a href="https://www.linkedin.com/in/anaswar-cs-8649aa286" target="_blank" rel="noopener noreferrer" className="hover:underline">anaswar-cs</a>
                        </div>
                    </div>
                </header>

                <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 print:grid-cols-[1.5fr_1fr]">

                    {/* Left Column */}
                    <div className="space-y-8">
                        {/* Profile */}
                        <section>
                            <h3 className="text-2xl font-serif font-bold uppercase border-b-2 border-slate-800 mb-4 print:border-black text-slate-900 dark:text-white print:text-black">Profile</h3>
                            <p className="text-justify leading-relaxed">
                                Motivated Computer Science Engineering student with hands-on experience in programming, app development, and cybersecurity. Proven teamwork, and a passion for technology-driven solutions.
                            </p>
                        </section>

                        {/* Education */}
                        <section>
                            <h3 className="text-2xl font-serif font-bold uppercase border-b-2 border-slate-800 mb-4 print:border-black text-slate-900 dark:text-white print:text-black">Education</h3>

                            <div className="mb-6">
                                <div className="font-bold text-lg">B.Tech in Computer Science Engineering</div>
                                <div className="font-semibold text-slate-700 dark:text-emerald-400 print:text-black">Jyothi Engineering College</div>
                                <div className="flex justify-between text-sm italic mb-2">
                                    <span>2023 – Present</span>
                                    <span>Palakkad, Kerala</span>
                                </div>
                                <ul className="list-disc ml-5 space-y-1">
                                    <li><span className="font-bold">CGPA:</span> 7.21/10 (current)</li>
                                    <li><span className="font-bold">Key Courses:</span> Operating Systems, Computer Networks, Machine Learning, Ethical Hacking, Statistical Analysis</li>
                                    <li><span className="font-bold">Activities:</span> Coding Club member, technical event organizer, app development project contributor</li>
                                </ul>
                            </div>

                            <div className="mb-6">
                                <div className="font-bold text-lg">Higher Secondary (Science)</div>
                                <div className="font-semibold text-slate-700 dark:text-emerald-400 print:text-black">PKHSS Higher Secondary School</div>
                                <div className="flex justify-between text-sm italic mb-2">
                                    <span>2020 – 2022</span>
                                    <span>Palakkad, Kerala</span>
                                </div>
                                <ul className="list-disc ml-5 space-y-1">
                                    <li><span className="font-bold">Percentage:</span> 93%</li>
                                    <li><span className="font-bold">Subjects:</span> Physics, Chemistry, Mathematics, Biology, English, Malayalam</li>
                                    <li><span className="font-bold">Achievements:</span> Science quiz winner</li>
                                </ul>
                            </div>

                            <div>
                                <div className="font-bold text-lg">Secondary Education(Cbse)</div>
                                <div className="font-semibold text-slate-700 dark:text-emerald-400 print:text-black">Bhavans Vidya Mandir Mannapra</div>
                                <div className="flex justify-between text-sm italic mb-2">
                                    <span>2021</span>
                                    <span>Palakkad, Kerala</span>
                                </div>
                                <ul className="list-disc ml-5 space-y-1">
                                    <li><span className="font-bold">Percentage:</span> 87%</li>
                                </ul>
                            </div>
                        </section>

                        {/* Projects */}
                        <section>
                            <h3 className="text-2xl font-serif font-bold uppercase border-b-2 border-slate-800 mb-4 print:border-black text-slate-900 dark:text-white print:text-black">Projects</h3>

                            <div className="mb-4">
                                <div className="font-bold text-lg">1) Android App Development</div>
                                <ul className="list-disc ml-5 mt-1">
                                    <li>Developed a mobile application as part of a team, focusing on user experience and backend integration.</li>
                                </ul>
                            </div>

                            <div className="mb-4">
                                <div className="font-bold text-lg">2) FloodGuardX – Flood Detection System</div>
                                <ul className="list-disc ml-5 mt-1">
                                    <li>Designed and developed an IoT-based flood detection system using real-time water-level monitoring sensors, alert automation, and mobile app notifications to enhance community safety</li>
                                </ul>
                            </div>

                            <div>
                                <div className="font-bold text-lg">3) Fake Profile Detector — AI-powered Fake Social Media Profile Detection</div>
                                <ul className="list-disc ml-5 mt-1">
                                    <li>Developed a full-stack web app that analyzes profile metadata and content (posts, followers, engagement patterns) to predict the likelihood of a fake account</li>
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
                                <li>Cyber Security(Cisco)</li>
                                <li>Applied Ethical Hacking, Artificial Intelligence for All (Infosys)</li>
                                <li>Introduction to Industry 4.0 and Industrial IoT (NPTEL)</li>
                                <li>Participated as a Galactic Problem Solver for NASA International Space App Challenge</li>
                                <li>Completed Python course for beginners: Mastering the Essentials (SCALER)</li>
                                <li>Completed 1-month Monsoon Internship with ICT Academy of Kerala on 'Android App Development'</li>
                                <li>Successfully completed training course on Full Stack Web Development from (intrnForte)</li>
                            </ul>
                        </section>

                        {/* Skills */}
                        <section>
                            <h3 className="text-2xl font-serif font-bold uppercase border-b-2 border-slate-800 mb-4 print:border-black text-slate-900 dark:text-white print:text-black">Skills</h3>
                            <ul className="list-disc ml-5 space-y-2">
                                <li><span className="font-bold">Programming:</span> C++, Java</li>
                                <li><span className="font-bold">App Development:</span> Android Studio</li>
                                <li><span className="font-bold">Soft Skills:</span> Teamwork, adaptability, communication</li>
                            </ul>
                        </section>

                        {/* Achievements */}
                        <section>
                            <h3 className="text-2xl font-serif font-bold uppercase border-b-2 border-slate-800 mb-4 print:border-black text-slate-900 dark:text-white print:text-black">Achievements</h3>
                            <ul className="list-disc ml-5 space-y-2">
                                <li>Made a web-based game for Nasa Farm Navigators idea</li>
                                <li>Colead member of FOSS club</li>
                            </ul>
                        </section>

                        {/* Interests */}
                        <section>
                            <h3 className="text-2xl font-serif font-bold uppercase border-b-2 border-slate-800 mb-4 print:border-black text-slate-900 dark:text-white print:text-black">Interests</h3>
                            <ul className="list-disc ml-5 space-y-2">
                                <li>Games and fitness</li>
                                <li>Reading and self-learning</li>
                                <li>Technology and innovation</li>
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
