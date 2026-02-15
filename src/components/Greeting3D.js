import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const Greeting3D = ({ darkMode }) => {
    const ref = useRef(null);

    // Mouse position state
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring animation for the tilt
    const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

    function handleMouseMove(e) {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const xPct = (e.clientX - rect.left) / width - 0.5;
        const yPct = (e.clientY - rect.top) / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    // ENHANCED: Stronger Rotation
    const rotateX = useTransform(mouseY, [-0.5, 0.5], [20, -20]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-20, 20]);

    // ENHANCED: Dynamic Shadow Movement
    const shadowX = useTransform(mouseX, [-0.5, 0.5], [-20, 20]);
    const shadowY = useTransform(mouseY, [-0.5, 0.5], [-20, 20]);

    // Glow & Glare

    const glareX = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%']);
    const glareY = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%']);

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
                perspective: 1200, // Slightly increased perspective for better depth
                transformStyle: "preserve-3d"
            }}
            className="relative w-full h-[600px] flex items-center justify-center cursor-pointer group"
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d"
                }}
                className="relative w-full max-w-[500px] aspect-[4/5] md:aspect-square flex items-center justify-center p-8"
            >
                {/* ENHANCED: Floating Particles Background */}
                <div className="absolute inset-0 transform-style-3d pointer-events-none">
                    <motion.div
                        animate={{ y: [0, -20, 0], x: [0, 10, 0], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        style={{ translateZ: -50 }}
                        className="absolute top-10 left-10 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"
                    />
                    <motion.div
                        animate={{ y: [0, 30, 0], x: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        style={{ translateZ: -80 }}
                        className="absolute bottom-20 right-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-xl"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        style={{ translateZ: -20 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl"
                    />
                </div>

                {/* 3D Image Container with Gradient Border */}
                <motion.div
                    className="relative w-full h-full transform-style-3d transition-transform duration-200 ease-out"
                    style={{
                        boxShadow: useTransform(
                            [shadowX, shadowY],
                            ([x, y]) => `${x}px ${y}px 50px rgba(0,0,0,0.3)`
                        )
                    }}
                >
                    {/* Gradient Border Wrapper */}
                    <div className={`absolute -inset-1 rounded-[26px] bg-gradient-to-br from-emerald-400 via-blue-500 to-purple-600 opacity-70 blur-sm group-hover:opacity-100 transition-opacity duration-500`}></div>

                    <div className={`relative w-full h-full rounded-3xl overflow-hidden ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>

                        {/* Glare/Sheen Effect */}
                        <motion.div
                            style={{
                                background: `linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.4) 45%, rgba(255,255,255,0.2) 50%, transparent 54%)`,
                                backgroundSize: '200% 200%',
                                backgroundPositionX: glareX,
                                backgroundPositionY: glareY,
                                mixBlendMode: 'overlay'
                            }}
                            className="absolute inset-0 z-20 pointer-events-none opacity-50"
                        />

                        {/* Main Image */}
                        <img
                            src={`/assets/profile.png?t=${new Date().getTime()}`}
                            alt="Anaswar"
                            className="w-full h-full object-cover transform scale-105" // Slight scale to prevent edge gaps
                            onError={(e) => {
                                e.target.src = 'https://placehold.co/400x500/10b981/ffffff?text=Add+Image';
                            }}
                        />

                        {/* Inner Shadow/Vignette */}
                        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.2)]" />
                    </div>
                </motion.div>

                {/* Enhanced Floating Elements */}
                <motion.div
                    style={{ translateZ: 60, rotateX: useTransform(rotateX, r => -r), rotateY: useTransform(rotateY, r => -r) }} // Counter-rotate to keep upright
                    className={`absolute -right-6 top-16 px-6 py-4 rounded-2xl backdrop-blur-xl border border-white/20 shadow-2xl
    ${darkMode ? 'bg-slate-900/60 text-white' : 'bg-white/60 text-slate-800'}
  `}
                >
                    <span className="text-4xl filter drop-shadow-lg">👋</span>
                </motion.div>

                <motion.div
                    style={{ translateZ: 80, rotateX: useTransform(rotateX, r => -r * 0.5), rotateY: useTransform(rotateY, r => -r * 0.5) }}
                    className={`absolute -left-6 bottom-24 px-6 py-4 rounded-2xl backdrop-blur-xl border border-white/20 shadow-2xl
    ${darkMode ? 'bg-slate-900/60 text-white' : 'bg-white/60 text-slate-800'}
  `}
                >
                    <div className="flex flex-col">
                        <span className="text-xs font-semibold uppercase tracking-wider opacity-70 mb-1">Status</span>
                        <span className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Online & Ready
                        </span>
                    </div>
                </motion.div>

            </motion.div>
        </motion.div>
    );
};

export default Greeting3D;
