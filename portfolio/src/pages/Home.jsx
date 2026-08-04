// Home.jsx
import { useState, useCallback, useMemo } from 'react'
import { motion, useInView } from 'framer-motion'
import Footer from '../components/footer.jsx';
import Sidenavbar from '../components/sidenavbar.jsx'
import homepic from '../assets/images/homepic.jpeg'
import homepicHover from '../assets/images/homepic2.jpeg'
import exp1 from '../assets/images/exp111.png'
import storyImage from '../assets/images/ph1.jpeg';
import growthImage from '../assets/images/ph2.jpeg';
import excellenceImage from '../assets/images/ph3.jpeg';
import fireQuakeImage from '../assets/images/fqe-logo.jpeg'
import nestCafeImage from '../assets/images/p2.jpeg'
import bulsuSnapImage from '../assets/images/p4.png'
import { useNavigate } from 'react-router-dom';

const fadeInUpVariants = {
    hidden: {
        opacity: 0,
        y: 30, // Reduced from 60
        scale: 0.98 // Reduced from 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5, // Reduced from 0.8
            ease: [0.25, 0.1, 0.25, 1.0],
            staggerChildren: 0.08, // Reduced from 0.2
            delayChildren: 0.05 // Reduced from 0.1
        }
    }
};

const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.06, // Reduced from 0.15
            delayChildren: 0.03 // Reduced from 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 12 }, // Reduced from 20
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.35, // Reduced from 0.6
            ease: [0.25, 0.1, 0.25, 1.0]
        }
    }
};


const sectionVariants = {
    hidden: {
        opacity: 0,
        y: 15 // Reduced from 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.35, // Reduced from 0.8
            ease: [0.25, 0.1, 0.25, 1.0],
            staggerChildren: 0.04, // Reduced from 0.1
            delayChildren: 0.03 // Reduced from 0.2
        }
    }
};


const cardVariants = {
    hidden: {
        opacity: 0,
        y: 20, // Reduced from 50
        scale: 0.97 // Reduced from 0.92
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.3, // Reduced from 0.7
            ease: [0.25, 0.1, 0.25, 1.0]
        }
    }
};

// Optimized image variants
const imageVariants = {
    hidden: {
        scale: 1.03, // Reduced from 1.05
        opacity: 0.9 // Reduced from 0.8
    },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.3, // Reduced from 0.6
            ease: [0.25, 0.1, 0.25, 1.0],
            delay: 0.05 // Reduced from 0.1
        }
    }
};

// Optimized content variants
const contentVariants = {
    hidden: {
        opacity: 0,
        y: 5 // Reduced from 10
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2, // Reduced from 0.4
            ease: [0.25, 0.1, 0.25, 1.0]
        }
    }
};



const viewportConfig = {
    once: true,
    amount: 0.08, // Reduced from 0.1-0.2
    margin: "-20px" // Reduced from -50px
};

const keywords = ['']

const homeNavItems = [
    { label: 'Home', href: '/', icon: HomeIcon },
    { label: 'Projects', href: '/projects', icon: FolderIcon },
    { label: 'Experience', href: '/experience', icon: BriefcaseIcon },
    { label: 'Contacts', href: '/contacts', icon: PhoneIcon },
]

const projects = [
    {
        title: 'FireQuakeEscape',
        category: 'Mobile evacuation game',
        image: fireQuakeImage,
        accent: 'from-red-400/35 via-red-600/20 to-[#303133]',
    },
    {
        title: 'The Nest Cafe',
        category: 'Cafe website system',
        image: nestCafeImage,
        accent: 'from-red-400/35 via-red-600/20 to-[#303133]',
    },
    {
        title: 'Pasta Nest',
        category: 'Pasta ordering website',
        image: bulsuSnapImage,
        accent: 'from-red-400/35 via-red-600/20 to-[#303133]',
    },
]

const experiences = [
    {
        id: 'smesoft',
        company: 'SMESoft Inc.',
        role: 'Frontend Developer Intern',
        summary: 'Built interface components and strengthened responsive layout skills while improving UI consistency and overall user experience.',
        duration: 'Dec 2025 – Mar 2026',
        location: 'Remote',
        image: exp1,
    },
]

const getDelayStyle = (index, base = 0.08, step = 0.06) => ({
    animationDelay: `${(base + index * step).toFixed(2)}s`,
})

function HomeIcon({ className }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M3 11.5 12 4l9 7.5" />
            <path d="M5.5 10.5V20h13V10.5" />
            <path d="M10 20v-6h4v6" />
        </svg>
    )
}

function Home() {
    const navigate = useNavigate();
    const [isClicked, setIsClicked] = useState(false)
    const displayedImage = isClicked ? homepicHover : homepic

    const handleImageClick = useCallback(() => {
        setIsClicked(prev => !prev)
    }, [])

    return (
        <div className="min-h-screen bg-[#131415] text-white ">
            <Sidenavbar navItems={homeNavItems} />

            <main className="lg:pl-[244px] ">
                <div className="mx-auto max-w-[1280px] px-4 py-2 sm:px-6 lg:px-8 lg:py-3 ">
                    {/* Main container - stays as a rectangle with rounded corners */}
                    <section id="home" className="mt-4 sm:mt-6 mb-3 sm:mb-4 overflow-y-auto overflow-x-hidden no-scrollbar rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] bg-[#303133] shadow-[0_30px_100px_rgba(0,0,0,0.35)] ring-1 ring-white/5 w-full h-[calc(100vh-2rem)] sm:h-[calc(100vh-4rem)]">
                        {/* Hero Section - Fully Responsive */}
                        <div className="px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-40 py-3 xs:py-4 sm:py-5 md:py-6 lg:py-8 xl:py-12 2xl:py-56 overflow-hidden">
                            <div className="flex flex-col lg:grid lg:grid-cols-[1.1fr_0.9fr] gap-4 xs:gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 lg:items-center">

                                {/* Content Container */}
                                <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-full lg:max-w-[560px] lg:pl-4 xl:pl-16 2xl:px-10 order-last lg:order-first">

                                    {/* Badge */}
                                    <p className="animate-fade-up text-[0.4rem] xs:text-[0.45rem] sm:text-[0.5rem] md:text-[0.55rem] lg:text-[0.65rem] xl:text-[0.7rem] 2xl:text-[0.75rem] font-bold uppercase tracking-[0.2em] xs:tracking-[0.25em] sm:tracking-[0.3em] md:tracking-[0.35em] lg:tracking-[0.4em] xl:tracking-[0.5em] 2xl:tracking-[0.6em] text-emerald-300/80 inline-block" style={getDelayStyle(0)}>
                                        FRONTEND DEVELOPER / UI/UX DESIGNER
                                    </p>

                                    {/* Image - Mobile/Tablet: Between badge and heading */}
                                    <div className="flex items-center justify-center lg:hidden mt-2 xs:mt-3 sm:mt-4 md:mt-5 mb-2 xs:mb-3 sm:mb-4 md:mb-5 animate-pop-in w-full" style={getDelayStyle(1.5)}>
                                        <div
                                            className="w-full max-w-[120px] xs:max-w-[140px] sm:max-w-[160px] md:max-w-[180px] rounded-[18px] xs:rounded-[20px] sm:rounded-[22px] md:rounded-[24px] border-[2.5px] xs:border-[3px] sm:border-[4px] md:border-[5px] border-[#1c1d1f] bg-[#1c1d1f] shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] cursor-pointer"
                                            onClick={handleImageClick}
                                        >
                                            <div className="overflow-hidden rounded-[14px] xs:rounded-[16px] sm:rounded-[18px] md:rounded-[20px] bg-[#15161a]">
                                                <img
                                                    src={displayedImage}
                                                    alt="Mark Justin portrait"
                                                    className="aspect-[3/4] w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                                                    loading="eager"
                                                    decoding="async"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Heading */}
                                    <h1 className="mt-1 xs:mt-2 sm:mt-3 md:mt-4 lg:mt-6 xl:mt-8 2xl:mt-10 text-[clamp(1.4rem,4.5vw,2rem)] xs:text-[clamp(1.6rem,5vw,2.2rem)] sm:text-[clamp(1.8rem,5.5vw,2.5rem)] md:text-[clamp(2rem,5vw,2.8rem)] lg:text-[clamp(2.2rem,4.8vw,3.2rem)] xl:text-[clamp(2.4rem,4.5vw,3.4rem)] 2xl:text-[clamp(2.6rem,4.5vw,3.6rem)] font-bold leading-[1.1] tracking-tight text-white w-full">
                                        <span className="inline-block animate-typing overflow-hidden whitespace-nowrap border-r-2 border-emerald-400/60 pr-1 max-w-full">
                                            Hey, I&apos;m Mark Justin!
                                        </span>
                                    </h1>

                                    {/* Description */}
                                    <p className="animate-fade-up mt-1.5 xs:mt-2.5 sm:mt-3.5 md:mt-4.5 lg:mt-6 xl:mt-8 2xl:mt-10 max-w-full lg:max-w-[45rem] text-[0.65rem] xs:text-[0.7rem] sm:text-[0.75rem] md:text-[0.85rem] lg:text-[0.95rem] xl:text-[1rem] 2xl:text-[1.05rem] leading-[1.4] xs:leading-[1.45] sm:leading-[1.5] md:leading-[1.6] lg:leading-[1.7] xl:leading-[1.8] tracking-wide text-white/60 px-1 xs:px-0" style={getDelayStyle(2)}>
                                        I&apos;m a BSIT graduate crafting responsive web interfaces and continuously enhancing my UI/UX design and frontend development skills through real-world projects. Passionate about creating clean, user-friendly digital experiences.
                                    </p>

                                    {/* Download CV Button - with pulse and hover effects */}
                                    <div className="animate-fade-up mt-3 xs:mt-4 sm:mt-5 md:mt-6 lg:mt-7 xl:mt-8 2xl:mt-10" style={getDelayStyle(2.5)}>
                                        <a
                                            href="/cv.pdf"
                                            download
                                            className="group relative inline-flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 px-3 xs:px-4 sm:px-4.5 md:px-5 py-1.5 xs:py-2 sm:py-2.5 text-[0.6rem] xs:text-[0.65rem] sm:text-[0.7rem] md:text-[0.75rem] lg:text-xs xl:text-sm font-medium text-white/70 hover:text-white border border-white/15 hover:border-white/30 rounded-lg transition-all duration-300 hover:bg-white/5 overflow-hidden"
                                        >
                                            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent"></span>

                                            <svg className="w-3 xs:w-3.5 sm:w-4 h-3 xs:h-3.5 sm:h-4 text-white/50 group-hover:text-white/80 transition-colors duration-300 group-hover:animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                                <polyline points="7 10 12 15 17 10" />
                                                <line x1="12" y1="15" x2="12" y2="3" />
                                            </svg>
                                            <span>Download CV</span>
                                            <svg className="w-2.5 xs:w-3 sm:w-3.5 h-2.5 xs:h-3 sm:h-3.5 text-white/30 group-hover:text-white/60 transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-[-10deg]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14" />
                                                <path d="m12 5 7 7-7 7" />
                                            </svg>
                                        </a>
                                    </div>

                                </div>

                                {/* Image - Desktop: Right side */}
                                <div className="hidden lg:flex items-center justify-center lg:justify-end animate-pop-in" style={getDelayStyle(1.5)}>
                                    <div
                                        className="w-full max-w-[220px] xl:max-w-[260px] 2xl:max-w-[282px] rounded-[28px] lg:rounded-[30px] xl:rounded-[34px] border-[5px] lg:border-[6px] border-[#1c1d1f] bg-[#1c1d1f] shadow-[0_15px_40px_rgba(0,0,0,0.4)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.5)] lg:mr-4 xl:mr-8 cursor-pointer"
                                        onClick={handleImageClick}
                                    >
                                        <div className="overflow-hidden rounded-[22px] lg:rounded-[24px] xl:rounded-[28px] bg-[#15161a]">
                                            <img
                                                src={displayedImage}
                                                alt="Mark Justin portrait"
                                                className="aspect-[3/4] w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                                                loading="eager"
                                                decoding="async"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sections - all content stays inside the gray container */}
                        <div className="divide-y divide-white/8 border-t border-white/8">
                            {/* STORY SECTION */}
                            <FlowSection id="story" icon={SparkIcon} title="Where it all started" subtitle="Turning creativity into UI/UX and frontend development.">
                                <div className="mx-auto max-w-4xl px-3 xs:px-4 sm:px-6 md:px-8">
                                    {/* Section 1 - Image Left, Content Right */}
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={viewportConfig}
                                        variants={fadeInUpVariants}
                                        className="flex flex-col md:grid md:grid-cols-[0.8fr_1.2fr] gap-3 xs:gap-5 sm:gap-8 md:gap-10 lg:gap-12 items-center py-2.5 xs:py-4 sm:py-5 md:py-6 lg:py-8"
                                    >
                                        <motion.div
                                            variants={itemVariants}
                                            className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] max-w-[240px] xs:max-w-[280px] sm:max-w-[340px] md:max-w-full w-full shadow-lg shadow-black/20 group"
                                        >
                                            <img
                                                src={storyImage}
                                                alt="Creative Foundations - Where it all started"
                                                className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105 will-change-transform"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                                            <div className="absolute bottom-0 left-0 right-0 p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6">
                                                <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2">
                                                    <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 rounded-full bg-green-400/60 animate-pulse" />
                                                    <span className="text-[0.3rem] xs:text-[0.35rem] sm:text-[0.4rem] md:text-[0.45rem] lg:text-[0.5rem] font-medium uppercase tracking-[0.15em] xs:tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-white/80">Phase 01</span>
                                                </div>
                                                <p className="text-[0.45rem] xs:text-[0.5rem] sm:text-[0.55rem] md:text-[0.6rem] lg:text-xs font-light text-white/70 mt-0.5 xs:mt-1">The foundation</p>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            variants={itemVariants}
                                            className="space-y-1.5 xs:space-y-2.5 sm:space-y-3.5 md:space-y-4.5 lg:space-y-5 text-left w-full"
                                        >
                                            <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 md:gap-3">
                                                <span className="text-[0.35rem] xs:text-[0.4rem] sm:text-[0.45rem] md:text-[0.5rem] font-medium uppercase tracking-[0.15em] xs:tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-white/30">01</span>
                                                <div className="flex-1 max-w-6 xs:max-w-8 sm:max-w-10 md:max-w-12 h-px bg-white/10" />
                                                <span className="text-[0.35rem] xs:text-[0.4rem] sm:text-[0.45rem] md:text-[0.5rem] font-medium uppercase tracking-[0.15em] xs:tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-white/30">Beginnings</span>
                                            </div>
                                            <motion.h3
                                                variants={itemVariants}
                                                className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-tight text-white leading-tight"
                                            >
                                                Creative Foundations
                                            </motion.h3>
                                            <motion.p
                                                variants={itemVariants}
                                                className="text-[0.7rem] xs:text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem] lg:text-base font-light text-white/60 leading-relaxed"
                                            >
                                                My journey started with drawing and making creative projects.
                                                Inspired by others, I grew passionate about UI/UX design and
                                                frontend web development.
                                            </motion.p>
                                            <motion.div
                                                variants={itemVariants}
                                                className="flex flex-wrap gap-0.5 xs:gap-1 sm:gap-1.5 md:gap-2 pt-0.5 xs:pt-1"
                                            >
                                                <span className="text-[0.3rem] xs:text-[0.35rem] sm:text-[0.4rem] md:text-[0.45rem] font-medium uppercase tracking-[0.12em] xs:tracking-[0.15em] sm:tracking-[0.18em] md:tracking-[0.2em] text-white/40 bg-white/5 px-1.5 xs:px-2 sm:px-2.5 md:px-3 py-0.5 xs:py-1 rounded-full border border-white/5 hover:border-white/20 transition-all duration-300">Drawing</span>
                                                <span className="text-[0.3rem] xs:text-[0.35rem] sm:text-[0.4rem] md:text-[0.45rem] font-medium uppercase tracking-[0.12em] xs:tracking-[0.15em] sm:tracking-[0.18em] md:tracking-[0.2em] text-white/40 bg-white/5 px-1.5 xs:px-2 sm:px-2.5 md:px-3 py-0.5 xs:py-1 rounded-full border border-white/5 hover:border-white/20 transition-all duration-300">UI/UX</span>
                                                <span className="text-[0.3rem] xs:text-[0.35rem] sm:text-[0.4rem] md:text-[0.45rem] font-medium uppercase tracking-[0.12em] xs:tracking-[0.15em] sm:tracking-[0.18em] md:tracking-[0.2em] text-white/40 bg-white/5 px-1.5 xs:px-2 sm:px-2.5 md:px-3 py-0.5 xs:py-1 rounded-full border border-white/5 hover:border-white/20 transition-all duration-300">Frontend</span>
                                            </motion.div>
                                        </motion.div>
                                    </motion.div>

                                    {/* Timeline Connector - Minimal dot */}
                                    <motion.div
                                        initial={{ scaleY: 0 }}
                                        whileInView={{ scaleY: 1 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
                                        className="flex justify-center py-1 xs:py-1.5 sm:py-2 md:py-2.5 lg:py-3"
                                        style={{ transformOrigin: 'top' }}
                                    >
                                        <div className="w-px h-4 xs:h-5 sm:h-6 md:h-8 lg:h-12 bg-white/10" />
                                    </motion.div>

                                    {/* Section 2 - Image Right, Content Left */}
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={viewportConfig}
                                        variants={fadeInUpVariants}
                                        className="flex flex-col md:grid md:grid-cols-[1.2fr_0.8fr] gap-3 xs:gap-5 sm:gap-8 md:gap-10 lg:gap-12 items-center py-2.5 xs:py-4 sm:py-5 md:py-6 lg:py-8"
                                    >
                                        <motion.div
                                            variants={itemVariants}
                                            className="space-y-1.5 xs:space-y-2.5 sm:space-y-3.5 md:space-y-4.5 lg:space-y-5 text-left w-full order-2 md:order-1"
                                        >
                                            <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 md:gap-3">
                                                <span className="text-[0.35rem] xs:text-[0.4rem] sm:text-[0.45rem] md:text-[0.5rem] font-medium uppercase tracking-[0.15em] xs:tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-white/30">02</span>
                                                <div className="flex-1 max-w-6 xs:max-w-8 sm:max-w-10 md:max-w-12 h-px bg-white/10" />
                                                <span className="text-[0.35rem] xs:text-[0.4rem] sm:text-[0.45rem] md:text-[0.5rem] font-medium uppercase tracking-[0.15em] xs:tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-white/30">Growth</span>
                                            </div>
                                            <motion.h3
                                                variants={itemVariants}
                                                className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-tight text-white leading-tight"
                                            >
                                                Skill Development
                                            </motion.h3>
                                            <motion.p
                                                variants={itemVariants}
                                                className="text-[0.7rem] xs:text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem] lg:text-base font-light text-white/60 leading-relaxed"
                                            >
                                                Through continuous learning and hands-on projects, I developed
                                                expertise in modern frontend technologies and design systems,
                                                bridging the gap between creativity and functionality.
                                            </motion.p>
                                            <motion.div
                                                variants={itemVariants}
                                                className="flex flex-wrap gap-0.5 xs:gap-1 sm:gap-1.5 md:gap-2 pt-0.5 xs:pt-1"
                                            >
                                                <span className="text-[0.3rem] xs:text-[0.35rem] sm:text-[0.4rem] md:text-[0.45rem] font-medium uppercase tracking-[0.12em] xs:tracking-[0.15em] sm:tracking-[0.18em] md:tracking-[0.2em] text-white/40 bg-white/5 px-1.5 xs:px-2 sm:px-2.5 md:px-3 py-0.5 xs:py-1 rounded-full border border-white/5 hover:border-white/20 transition-all duration-300">React</span>
                                                <span className="text-[0.3rem] xs:text-[0.35rem] sm:text-[0.4rem] md:text-[0.45rem] font-medium uppercase tracking-[0.12em] xs:tracking-[0.15em] sm:tracking-[0.18em] md:tracking-[0.2em] text-white/40 bg-white/5 px-1.5 xs:px-2 sm:px-2.5 md:px-3 py-0.5 xs:py-1 rounded-full border border-white/5 hover:border-white/20 transition-all duration-300">Design</span>
                                                <span className="text-[0.3rem] xs:text-[0.35rem] sm:text-[0.4rem] md:text-[0.45rem] font-medium uppercase tracking-[0.12em] xs:tracking-[0.15em] sm:tracking-[0.18em] md:tracking-[0.2em] text-white/40 bg-white/5 px-1.5 xs:px-2 sm:px-2.5 md:px-3 py-0.5 xs:py-1 rounded-full border border-white/5 hover:border-white/20 transition-all duration-300">Prototyping</span>
                                            </motion.div>
                                        </motion.div>

                                        <motion.div
                                            variants={itemVariants}
                                            className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] max-w-[240px] xs:max-w-[280px] sm:max-w-[340px] md:max-w-full w-full shadow-lg shadow-black/20 group order-1 md:order-2"
                                        >
                                            <img
                                                src={growthImage}
                                                alt="Skill Development - Building expertise"
                                                className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105 will-change-transform"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                                            <div className="absolute bottom-0 left-0 right-0 p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6">
                                                <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2">
                                                    <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 rounded-full bg-green-400/60 animate-pulse" />
                                                    <span className="text-[0.3rem] xs:text-[0.35rem] sm:text-[0.4rem] md:text-[0.45rem] lg:text-[0.5rem] font-medium uppercase tracking-[0.15em] xs:tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-white/80">Phase 02</span>
                                                </div>
                                                <p className="text-[0.45rem] xs:text-[0.5rem] sm:text-[0.55rem] md:text-[0.6rem] lg:text-xs font-light text-white/70 mt-0.5 xs:mt-1">Building expertise</p>
                                            </div>
                                        </motion.div>
                                    </motion.div>

                                    {/* Timeline Connector */}
                                    <motion.div
                                        initial={{ scaleY: 0 }}
                                        whileInView={{ scaleY: 1 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.1 }}
                                        className="flex justify-center py-1 xs:py-1.5 sm:py-2 md:py-2.5 lg:py-3"
                                        style={{ transformOrigin: 'top' }}
                                    >
                                        <div className="w-px h-4 xs:h-5 sm:h-6 md:h-8 lg:h-12 bg-white/10" />
                                    </motion.div>

                                    {/* Section 3 - Image Left, Content Right */}
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={viewportConfig}
                                        variants={fadeInUpVariants}
                                        className="flex flex-col md:grid md:grid-cols-[0.8fr_1.2fr] gap-3 xs:gap-5 sm:gap-8 md:gap-10 lg:gap-12 items-center py-2.5 xs:py-4 sm:py-5 md:py-6 lg:py-8"
                                    >
                                        <motion.div
                                            variants={itemVariants}
                                            className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] max-w-[240px] xs:max-w-[280px] sm:max-w-[340px] md:max-w-full w-full shadow-lg shadow-black/20 group"
                                        >
                                            <img
                                                src={excellenceImage}
                                                alt="Creative Excellence - Current focus"
                                                className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105 will-change-transform"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                                            <div className="absolute bottom-0 left-0 right-0 p-2 xs:p-3 sm:p-4 md:p-5 lg:p-6">
                                                <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2">
                                                    <div className="w-1 h-1 xs:w-1.5 xs:h-1.5 rounded-full bg-green-400/60 animate-pulse" />
                                                    <span className="text-[0.3rem] xs:text-[0.35rem] sm:text-[0.4rem] md:text-[0.45rem] lg:text-[0.5rem] font-medium uppercase tracking-[0.15em] xs:tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-white/80">Phase 03</span>
                                                </div>
                                                <p className="text-[0.45rem] xs:text-[0.5rem] sm:text-[0.55rem] md:text-[0.6rem] lg:text-xs font-light text-white/70 mt-0.5 xs:mt-1">Current focus</p>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            variants={itemVariants}
                                            className="space-y-1.5 xs:space-y-2.5 sm:space-y-3.5 md:space-y-4.5 lg:space-y-5 text-left w-full"
                                        >
                                            <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 md:gap-3">
                                                <span className="text-[0.35rem] xs:text-[0.4rem] sm:text-[0.45rem] md:text-[0.5rem] font-medium uppercase tracking-[0.15em] xs:tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-white/30">03</span>
                                                <div className="flex-1 max-w-6 xs:max-w-8 sm:max-w-10 md:max-w-12 h-px bg-white/10" />
                                                <span className="text-[0.35rem] xs:text-[0.4rem] sm:text-[0.45rem] md:text-[0.5rem] font-medium uppercase tracking-[0.15em] xs:tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-white/30">Now</span>
                                            </div>
                                            <motion.h3
                                                variants={itemVariants}
                                                className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-tight text-white leading-tight"
                                            >
                                                Creative Excellence
                                            </motion.h3>
                                            <motion.p
                                                variants={itemVariants}
                                                className="text-[0.7rem] xs:text-[0.75rem] sm:text-[0.8rem] md:text-[0.85rem] lg:text-base font-light text-white/60 leading-relaxed"
                                            >
                                                Today, I combine artistic vision with technical precision to
                                                create immersive digital experiences that are both beautiful
                                                and functional, always pushing the boundaries of what's possible.
                                            </motion.p>
                                            <motion.div
                                                variants={itemVariants}
                                                className="flex flex-wrap gap-0.5 xs:gap-1 sm:gap-1.5 md:gap-2 pt-0.5 xs:pt-1"
                                            >
                                                <span className="text-[0.3rem] xs:text-[0.35rem] sm:text-[0.4rem] md:text-[0.45rem] font-medium uppercase tracking-[0.12em] xs:tracking-[0.15em] sm:tracking-[0.18em] md:tracking-[0.2em] text-white/40 bg-white/5 px-1.5 xs:px-2 sm:px-2.5 md:px-3 py-0.5 xs:py-1 rounded-full border border-white/5 hover:border-white/20 transition-all duration-300">Animation</span>
                                                <span className="text-[0.3rem] xs:text-[0.35rem] sm:text-[0.4rem] md:text-[0.45rem] font-medium uppercase tracking-[0.12em] xs:tracking-[0.15em] sm:tracking-[0.18em] md:tracking-[0.2em] text-white/40 bg-white/5 px-1.5 xs:px-2 sm:px-2.5 md:px-3 py-0.5 xs:py-1 rounded-full border border-white/5 hover:border-white/20 transition-all duration-300">Performance</span>
                                                <span className="text-[0.3rem] xs:text-[0.35rem] sm:text-[0.4rem] md:text-[0.45rem] font-medium uppercase tracking-[0.12em] xs:tracking-[0.15em] sm:tracking-[0.18em] md:tracking-[0.2em] text-white/40 bg-white/5 px-1.5 xs:px-2 sm:px-2.5 md:px-3 py-0.5 xs:py-1 rounded-full border border-white/5 hover:border-white/20 transition-all duration-300">UI/UX</span>
                                            </motion.div>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </FlowSection>

                            {/* PROJECTS SECTION */}
                            <FlowSection
                                id="projects"
                                icon={FolderIcon}
                                title="Projects"
                                subtitle="Showcasing skills through real-world web solutions."
                            >
                                {/* Mobile horizontal scroll container */}
                                <div className="sm:hidden overflow-x-auto overflow-y-visible pb-3 px-1 xs:px-2 -mx-1 xs:-mx-2 scrollbar-hide">
                                    <div className="flex gap-3 xs:gap-4 w-max px-1 xs:px-2">
                                        {projects.map((project, index) => (
                                            <motion.article
                                                key={project.title}
                                                initial={{ opacity: 0, y: 15 }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                    transition: {
                                                        duration: 0.3,
                                                        delay: Math.min(index * 0.03, 0.15),
                                                        ease: [0.25, 0.1, 0.25, 1.0],
                                                    }
                                                }}
                                                viewport={{
                                                    once: true,
                                                    amount: 0.05,
                                                    margin: "-15px"
                                                }}
                                                whileHover={{
                                                    scale: 1.02,
                                                    transition: { duration: 0.15, ease: [0.25, 0.1, 0.25, 1.0] }
                                                }}
                                                className="group w-[200px] xs:w-[220px] flex-shrink-0 rounded-lg xs:rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl transition-all duration-200 hover:shadow-2xl hover:bg-white/10 cursor-pointer"
                                                onClick={() => navigate('/projects')}
                                            >
                                                <div className="relative overflow-hidden rounded-lg xs:rounded-xl aspect-[4/5]">
                                                    {/* Image with optimized reveal */}
                                                    <motion.div
                                                        initial={{ scale: 1.03, opacity: 0.9 }}
                                                        whileInView={{
                                                            scale: 1,
                                                            opacity: 1,
                                                            transition: {
                                                                duration: 0.3,
                                                                delay: Math.min(index * 0.03 + 0.03, 0.18),
                                                                ease: [0.25, 0.1, 0.25, 1.0],
                                                            }
                                                        }}
                                                        viewport={{ once: true, amount: 0.05 }}
                                                        className="absolute inset-0 w-full h-full"
                                                    >
                                                        <img
                                                            src={project.image}
                                                            alt={project.title}
                                                            className="w-full h-full object-cover transition-transform duration-400 ease-out group-hover:scale-105 will-change-transform"
                                                            loading="lazy"
                                                            decoding="async"
                                                        />
                                                    </motion.div>

                                                    {/* Gradient overlay */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/65 to-transparent transition-opacity duration-300 group-hover:from-black/90 group-hover:via-black/75" />

                                                    {/* Decorative float elements */}
                                                    <div className="absolute inset-0 opacity-5 xs:opacity-10">
                                                        <div className="absolute top-0 right-0 w-16 xs:w-20 h-16 xs:h-20 bg-white/10 rounded-full blur-2xl transform translate-x-4 xs:translate-x-6 -translate-y-4 xs:-translate-y-6" />
                                                        <div className="absolute bottom-0 left-0 w-20 xs:w-24 h-20 xs:h-24 bg-white/5 rounded-full blur-3xl transform -translate-x-4 xs:-translate-x-6 translate-y-4 xs:translate-y-6" />
                                                    </div>

                                                    {/* Content with staggered reveals */}
                                                    <div className="absolute inset-x-0 bottom-0 p-2.5 xs:p-3">
                                                        <div className="space-y-0.5 xs:space-y-1">
                                                            {/* Category badge */}
                                                            <motion.div
                                                                initial={{ opacity: 0, y: 6 }}
                                                                whileInView={{
                                                                    opacity: 1,
                                                                    y: 0,
                                                                    transition: {
                                                                        duration: 0.25,
                                                                        delay: Math.min(index * 0.03 + 0.06, 0.2),
                                                                        ease: [0.25, 0.1, 0.25, 1.0],
                                                                    }
                                                                }}
                                                                viewport={{ once: true, amount: 0.05 }}
                                                                className="inline-flex items-center gap-1 xs:gap-1.5 px-1.5 xs:px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/20"
                                                            >
                                                                <p className="text-[0.3rem] xs:text-[0.35rem] font-medium uppercase tracking-[0.15em] xs:tracking-[0.18em] text-white/80">
                                                                    {project.category}
                                                                </p>
                                                            </motion.div>

                                                            {/* Title */}
                                                            <motion.h3
                                                                initial={{ opacity: 0, y: 6 }}
                                                                whileInView={{
                                                                    opacity: 1,
                                                                    y: 0,
                                                                    transition: {
                                                                        duration: 0.25,
                                                                        delay: Math.min(index * 0.03 + 0.09, 0.23),
                                                                        ease: [0.25, 0.1, 0.25, 1.0],
                                                                    }
                                                                }}
                                                                viewport={{ once: true, amount: 0.05 }}
                                                                className="font-light tracking-tight text-white leading-tight text-sm xs:text-base transition-all duration-300 group-hover:tracking-wide"
                                                            >
                                                                {project.title}
                                                            </motion.h3>

                                                            {/* Description */}
                                                            <motion.p
                                                                initial={{ opacity: 0, y: 6 }}
                                                                whileInView={{
                                                                    opacity: 1,
                                                                    y: 0,
                                                                    transition: {
                                                                        duration: 0.25,
                                                                        delay: Math.min(index * 0.03 + 0.12, 0.26),
                                                                        ease: [0.25, 0.1, 0.25, 1.0],
                                                                    }
                                                                }}
                                                                viewport={{ once: true, amount: 0.05 }}
                                                                className="text-[0.5rem] xs:text-[0.55rem] text-white/60 font-light leading-relaxed max-w-[90%] xs:max-w-full line-clamp-2 transition-colors duration-300 group-hover:text-white/70"
                                                            >
                                                                {project.summary}
                                                            </motion.p>

                                                            {/* View Project */}
                                                            <motion.div
                                                                initial={{ opacity: 0, y: 6 }}
                                                                whileInView={{
                                                                    opacity: 1,
                                                                    y: 0,
                                                                    transition: {
                                                                        duration: 0.25,
                                                                        delay: Math.min(index * 0.03 + 0.15, 0.29),
                                                                        ease: [0.25, 0.1, 0.25, 1.0],
                                                                    }
                                                                }}
                                                                viewport={{ once: true, amount: 0.05 }}
                                                                className="pt-1 xs:pt-1.5 flex items-center gap-1 xs:gap-1.5 text-white/40 transition-colors duration-300 group-hover:text-white/80"
                                                            >
                                                                <span className="text-[0.35rem] xs:text-[0.4rem] font-medium tracking-wider uppercase transition-all duration-300 group-hover:tracking-[0.12em]">
                                                                    View in Projects
                                                                </span>
                                                                <div className="w-4 xs:w-4.5 h-4 xs:h-4.5 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:border-white/40 group-hover:bg-white/5">
                                                                    <svg className="w-2 xs:w-2 h-2 xs:h-2 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                                    </svg>
                                                                </div>
                                                            </motion.div>
                                                        </div>
                                                    </div>

                                                    {/* Hover overlay */}
                                                    <div className="absolute inset-0 bg-white/5 opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:bg-white/[0.05]" />

                                                    {/* Corner decorative */}
                                                    <div className="absolute top-1 xs:top-1.5 right-1 xs:right-1.5 w-4 xs:w-4.5 h-4 xs:h-4.5 border border-white/10 rounded-full backdrop-blur-sm bg-white/5 flex items-center justify-center transition-all duration-400 opacity-0 group-hover:opacity-100 group-hover:rotate-12 group-hover:border-white/20 group-hover:bg-white/10">
                                                        <svg className="w-1.5 xs:w-1.5 text-white/40 transition-all duration-300 group-hover:text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                                        </svg>
                                                    </div>

                                                    {/* Accent lines */}
                                                    <div className="absolute bottom-0 left-0 w-2rem h-0.5 bg-gradient-to-r from-white/30 to-transparent transition-all duration-400 group-hover:w-8 xs:group-hover:w-10" />
                                                    <div className="absolute top-0 right-0 w-1.5rem h-0.5 bg-gradient-to-l from-white/20 to-transparent transition-all duration-400 group-hover:w-6 xs:group-hover:w-8" />
                                                </div>

                                                {/* Click hint */}
                                                <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 text-[0.25rem] xs:text-[0.3rem] font-light text-white/10 group-hover:text-white/30 transition-colors duration-300 opacity-0 group-hover:opacity-100">
                                                    Click to view all projects
                                                </div>
                                            </motion.article>
                                        ))}
                                    </div>
                                </div>

                                {/* Desktop/Tablet grid layout */}
                                <motion.div
                                    className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 xs:gap-4 sm:gap-5 md:gap-6 p-1 xs:p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 font-['Montserrat',sans-serif]"
                                >
                                    {projects.map((project, index) => (
                                        <motion.article
                                            key={project.title}
                                            initial={{ opacity: 0, y: 15 }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    duration: 0.3,
                                                    delay: Math.min(index * 0.03, 0.15),
                                                    ease: [0.25, 0.1, 0.25, 1.0],
                                                }
                                            }}
                                            viewport={{
                                                once: true,
                                                amount: 0.05,
                                                margin: "-15px"
                                            }}
                                            whileHover={{
                                                scale: 1.02,
                                                transition: { duration: 0.15, ease: [0.25, 0.1, 0.25, 1.0] }
                                            }}
                                            className="group break-inside-avoid rounded-lg xs:rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl transition-all duration-200 hover:shadow-2xl hover:bg-white/10 cursor-pointer"
                                            onClick={() => navigate('/projects')}
                                        >
                                            <div className="relative overflow-hidden rounded-lg xs:rounded-xl sm:rounded-2xl aspect-[4/5]">
                                                {/* Image with optimized reveal */}
                                                <motion.div
                                                    initial={{ scale: 1.03, opacity: 0.9 }}
                                                    whileInView={{
                                                        scale: 1,
                                                        opacity: 1,
                                                        transition: {
                                                            duration: 0.3,
                                                            delay: Math.min(index * 0.03 + 0.03, 0.18),
                                                            ease: [0.25, 0.1, 0.25, 1.0],
                                                        }
                                                    }}
                                                    viewport={{ once: true, amount: 0.05 }}
                                                    className="absolute inset-0 w-full h-full"
                                                >
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-full object-cover transition-transform duration-400 ease-out group-hover:scale-105 will-change-transform"
                                                        loading="lazy"
                                                        decoding="async"
                                                    />
                                                </motion.div>

                                                {/* Gradient overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/65 to-transparent transition-opacity duration-300 group-hover:from-black/90 group-hover:via-black/75" />

                                                {/* Decorative float elements */}
                                                <div className="absolute inset-0 opacity-5 xs:opacity-10 sm:opacity-15 md:opacity-20">
                                                    <div className="absolute top-0 right-0 w-16 xs:w-20 sm:w-24 md:w-28 lg:w-32 h-16 xs:h-20 sm:h-24 md:h-28 lg:h-32 bg-white/10 rounded-full blur-2xl transform translate-x-4 xs:translate-x-6 sm:translate-x-8 -translate-y-4 xs:-translate-y-6 sm:-translate-y-8" />
                                                    <div className="absolute bottom-0 left-0 w-20 xs:w-24 sm:w-28 md:w-32 lg:w-40 h-20 xs:h-24 sm:h-28 md:h-32 lg:h-40 bg-white/5 rounded-full blur-3xl transform -translate-x-4 xs:-translate-x-6 sm:-translate-x-10 translate-y-4 xs:translate-y-6 sm:translate-y-10" />
                                                </div>

                                                {/* Content with staggered reveals */}
                                                <div className="absolute inset-x-0 bottom-0 p-2.5 xs:p-3 sm:p-4 md:p-5 lg:p-6">
                                                    <div className="space-y-0.5 xs:space-y-1 sm:space-y-2">
                                                        {/* Category badge */}
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 6 }}
                                                            whileInView={{
                                                                opacity: 1,
                                                                y: 0,
                                                                transition: {
                                                                    duration: 0.25,
                                                                    delay: Math.min(index * 0.03 + 0.06, 0.2),
                                                                    ease: [0.25, 0.1, 0.25, 1.0],
                                                                }
                                                            }}
                                                            viewport={{ once: true, amount: 0.05 }}
                                                            className="inline-flex items-center gap-1 xs:gap-1.5 sm:gap-2 px-1.5 xs:px-2 sm:px-2.5 md:px-3 py-0.5 xs:py-0.5 sm:py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/20"
                                                        >
                                                            <p className="text-[0.3rem] xs:text-[0.35rem] sm:text-[0.4rem] md:text-[0.45rem] lg:text-[0.5rem] xl:text-[0.55rem] font-medium uppercase tracking-[0.15em] xs:tracking-[0.18em] sm:tracking-[0.2em] md:tracking-[0.25em] lg:tracking-[0.28em] xl:tracking-[0.3em] text-white/80">
                                                                {project.category}
                                                            </p>
                                                        </motion.div>

                                                        {/* Title */}
                                                        <motion.h3
                                                            initial={{ opacity: 0, y: 6 }}
                                                            whileInView={{
                                                                opacity: 1,
                                                                y: 0,
                                                                transition: {
                                                                    duration: 0.25,
                                                                    delay: Math.min(index * 0.03 + 0.09, 0.23),
                                                                    ease: [0.25, 0.1, 0.25, 1.0],
                                                                }
                                                            }}
                                                            viewport={{ once: true, amount: 0.05 }}
                                                            className="font-light tracking-tight text-white leading-tight text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl transition-all duration-300 group-hover:tracking-wide"
                                                        >
                                                            {project.title}
                                                        </motion.h3>

                                                        {/* Description */}
                                                        <motion.p
                                                            initial={{ opacity: 0, y: 6 }}
                                                            whileInView={{
                                                                opacity: 1,
                                                                y: 0,
                                                                transition: {
                                                                    duration: 0.25,
                                                                    delay: Math.min(index * 0.03 + 0.12, 0.26),
                                                                    ease: [0.25, 0.1, 0.25, 1.0],
                                                                }
                                                            }}
                                                            viewport={{ once: true, amount: 0.05 }}
                                                            className="text-[0.5rem] xs:text-[0.55rem] sm:text-[0.6rem] md:text-xs lg:text-sm text-white/60 font-light leading-relaxed max-w-[90%] xs:max-w-full line-clamp-2 transition-colors duration-300 group-hover:text-white/70"
                                                        >
                                                            {project.summary}
                                                        </motion.p>

                                                        {/* View Project */}
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 6 }}
                                                            whileInView={{
                                                                opacity: 1,
                                                                y: 0,
                                                                transition: {
                                                                    duration: 0.25,
                                                                    delay: Math.min(index * 0.03 + 0.15, 0.29),
                                                                    ease: [0.25, 0.1, 0.25, 1.0],
                                                                }
                                                            }}
                                                            viewport={{ once: true, amount: 0.05 }}
                                                            className="pt-1 xs:pt-1.5 sm:pt-2 md:pt-2.5 lg:pt-3 flex items-center gap-1 xs:gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 text-white/40 transition-colors duration-300 group-hover:text-white/80"
                                                        >
                                                            <span className="text-[0.35rem] xs:text-[0.4rem] sm:text-[0.45rem] md:text-[0.5rem] lg:text-[0.55rem] xl:text-[0.6rem] font-medium tracking-wider uppercase transition-all duration-300 group-hover:tracking-[0.12em]">
                                                                View in Projects
                                                            </span>
                                                            <div className="w-4 xs:w-4.5 sm:w-5 md:w-6 lg:w-7 xl:w-8 h-4 xs:h-4.5 sm:h-5 md:h-6 lg:h-7 xl:h-8 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:border-white/40 group-hover:bg-white/5">
                                                                <svg className="w-2 xs:w-2 sm:w-2.5 md:w-3 lg:w-3.5 h-2 xs:h-2 sm:h-2.5 md:h-3 lg:h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                                </svg>
                                                            </div>
                                                        </motion.div>
                                                    </div>
                                                </div>

                                                {/* Hover overlay */}
                                                <div className="absolute inset-0 bg-white/5 opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:bg-white/[0.05]" />

                                                {/* Corner decorative */}
                                                <div className="absolute top-1 xs:top-1.5 sm:top-2 md:top-2.5 lg:top-3 xl:top-4 right-1 xs:right-1.5 sm:right-2 md:right-2.5 lg:right-3 xl:right-4 w-4 xs:w-4.5 sm:w-5 md:w-6 lg:w-7 xl:w-8 2xl:w-9 h-4 xs:h-4.5 sm:h-5 md:h-6 lg:h-7 xl:h-8 2xl:h-9 border border-white/10 rounded-full backdrop-blur-sm bg-white/5 flex items-center justify-center transition-all duration-400 opacity-0 group-hover:opacity-100 group-hover:rotate-12 group-hover:border-white/20 group-hover:bg-white/10">
                                                    <svg className="w-1.5 xs:w-1.5 sm:w-2 md:w-2.5 lg:w-3 text-white/40 transition-all duration-300 group-hover:text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                                    </svg>
                                                </div>

                                                {/* Accent lines */}
                                                <div className="absolute bottom-0 left-0 w-2rem h-0.5 bg-gradient-to-r from-white/30 to-transparent transition-all duration-400 group-hover:w-8 xs:group-hover:w-10 sm:group-hover:w-12 md:group-hover:w-14 lg:group-hover:w-16 xl:group-hover:w-18 2xl:group-hover:w-20" />
                                                <div className="absolute top-0 right-0 w-1.5rem h-0.5 bg-gradient-to-l from-white/20 to-transparent transition-all duration-400 group-hover:w-6 xs:group-hover:w-8 sm:group-hover:w-10 md:group-hover:w-12 lg:group-hover:w-14 xl:group-hover:w-16" />
                                            </div>

                                            {/* Click hint */}
                                            <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 text-[0.25rem] xs:text-[0.3rem] sm:text-[0.35rem] font-light text-white/10 group-hover:text-white/30 transition-colors duration-300 opacity-0 group-hover:opacity-100">
                                                Click to view all projects
                                            </div>
                                        </motion.article>
                                    ))}
                                </motion.div>
                            </FlowSection>
                            {/* EXPERIENCE SECTION */}
                            <FlowSection
                                id="experience"
                                icon={BriefcaseIcon}
                                title="Experience"
                                subtitle="A professional training ground for honing frontend development skills."
                            >
                                <div className="space-y-5 xs:space-y-6 sm:space-y-7 md:space-y-8 max-w-5xl mx-auto px-3 xs:px-4 sm:px-5 md:px-6">
                                    {experiences.map((item, index) => (
                                        <motion.article
                                            key={item.title}
                                            initial={{ opacity: 0, y: 20, scale: 0.98 }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                                transition: {
                                                    duration: 0.35,
                                                    delay: Math.min(index * 0.05, 0.15),
                                                    ease: [0.25, 0.1, 0.25, 1.0],
                                                }
                                            }}
                                            viewport={{ once: true, amount: 0.1, margin: "-20px" }}
                                            className="group bg-white/[0.02] rounded-lg xs:rounded-xl sm:rounded-2xl border border-white/5 p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 xl:p-10 transition-all duration-500 hover:bg-white/[0.04] hover:border-white/10 cursor-pointer"
                                            onClick={() => navigate('/experience')}
                                        >
                                            <div className="flex flex-col md:flex-row lg:flex-row items-start gap-4 xs:gap-5 sm:gap-6 md:gap-7 lg:gap-8">
                                                {/* Image - Responsive sizing */}
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.95 }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        scale: 1,
                                                        transition: {
                                                            duration: 0.3,
                                                            delay: Math.min(index * 0.05 + 0.05, 0.2),
                                                            ease: [0.25, 0.1, 0.25, 1.0],
                                                        }
                                                    }}
                                                    viewport={{ once: true, amount: 0.1 }}
                                                    className="flex-shrink-0 w-16 xs:w-18 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-16 xs:h-18 sm:h-20 md:h-24 lg:h-28 xl:h-32 rounded-lg xs:rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 bg-white/5 transition-all duration-500 group-hover:border-white/20"
                                                >
                                                    {item.image ? (
                                                        <img
                                                            src={item.image}
                                                            alt={item.company}
                                                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
                                                            loading="lazy"
                                                            decoding="async"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center">
                                                            <BriefcaseIcon className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-white/20 transition-all duration-300 group-hover:text-white/30" />
                                                        </div>
                                                    )}
                                                </motion.div>

                                                {/* Content - Responsive text sizing */}
                                                <motion.div
                                                    initial={{ opacity: 0, x: -8 }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        x: 0,
                                                        transition: {
                                                            duration: 0.3,
                                                            delay: Math.min(index * 0.05 + 0.08, 0.23),
                                                            ease: [0.25, 0.1, 0.25, 1.0],
                                                        }
                                                    }}
                                                    viewport={{ once: true, amount: 0.1 }}
                                                    className="flex-1 min-w-0 space-y-2 xs:space-y-2.5 sm:space-y-3"
                                                >
                                                    <div className="flex flex-wrap items-center gap-x-2 xs:gap-x-3 sm:gap-x-4 md:gap-x-5 lg:gap-x-6 gap-y-1.5 xs:gap-y-2">
                                                        <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-tight text-white">
                                                            {item.role}
                                                        </h3>
                                                        <span className="text-[0.45rem] xs:text-[0.5rem] sm:text-[0.55rem] md:text-[0.6rem] lg:text-[0.65rem] font-medium uppercase tracking-[0.2em] xs:tracking-[0.22em] sm:tracking-[0.25em] md:tracking-[0.3em] lg:tracking-[0.35em] text-white/50 bg-white/[0.04] px-3 xs:px-3.5 sm:px-4 md:px-5 py-1 xs:py-1.5 sm:py-2 rounded-full border border-white/5 transition-all duration-300 group-hover:bg-white/[0.06] group-hover:border-white/15 group-hover:text-white/70">
                                                            {item.title}
                                                        </span>
                                                    </div>

                                                    <p className="text-xs xs:text-sm sm:text-base lg:text-lg font-light text-white/60 leading-relaxed max-w-2xl transition-all duration-300 group-hover:text-white/70">
                                                        {item.summary}
                                                    </p>

                                                    {/* Duration - Visible on mobile, hidden on desktop (moved to right column) */}
                                                    <div className="md:hidden mt-1 xs:mt-1.5 sm:mt-2">
                                                        <span className="text-xs xs:text-sm sm:text-base font-medium text-white/40 tracking-wide">
                                                            {item.duration}
                                                        </span>
                                                    </div>
                                                </motion.div>

                                                {/* Arrow Indicator & Duration - Desktop layout */}
                                                <motion.div
                                                    initial={{ opacity: 0, x: 8 }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        x: 0,
                                                        transition: {
                                                            duration: 0.3,
                                                            delay: Math.min(index * 0.05 + 0.11, 0.26),
                                                            ease: [0.25, 0.1, 0.25, 1.0],
                                                        }
                                                    }}
                                                    viewport={{ once: true, amount: 0.1 }}
                                                    className="flex-shrink-0 self-center ml-2 md:ml-3 lg:ml-4 flex flex-col items-end gap-2"
                                                >
                                                    {/* Duration - Desktop only */}
                                                    <span className="hidden md:block text-sm md:text-base lg:text-lg font-medium text-white/40 tracking-wide whitespace-nowrap">
                                                        {item.duration}
                                                    </span>

                                                    <div className="w-8 xs:w-9 sm:w-10 md:w-11 lg:w-12 h-8 xs:h-9 sm:h-10 md:h-11 lg:h-12 rounded-full border border-white/20 bg-white/[0.03] flex items-center justify-center transition-all duration-500 group-hover:border-white/40 group-hover:bg-white/[0.08] group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-white/5">
                                                        <svg className="w-4 xs:w-4.5 sm:w-5 md:w-5.5 lg:w-6 h-4 xs:h-4.5 sm:h-5 md:h-5.5 lg:h-6 text-white/30 transition-all duration-500 group-hover:text-white/60 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                        </svg>
                                                    </div>
                                                </motion.div>
                                            </div>

                                            {/* Subtle bottom accent line */}
                                            <motion.div
                                                initial={{ opacity: 0, width: 0 }}
                                                whileInView={{
                                                    opacity: 1,
                                                    width: "100%",
                                                    transition: {
                                                        duration: 0.4,
                                                        delay: Math.min(index * 0.05 + 0.15, 0.3),
                                                        ease: [0.25, 0.1, 0.25, 1.0],
                                                    }
                                                }}
                                                viewport={{ once: true, amount: 0.1 }}
                                                className="mt-4 xs:mt-5 sm:mt-6 md:mt-7 lg:mt-8 h-px bg-gradient-to-r from-white/5 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                            />
                                        </motion.article>
                                    ))}
                                </div>
                            </FlowSection>

                            {/* CONTACTS SECTION */}
                            <FlowSection
                                id="contacts"
                                icon={PhoneIcon}
                                title="Contacts"
                                subtitle="Lets work together."
                            >
                                <div className="min-h-[calc(0vh-200px)] flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 lg:py-0">
                                    <div className="w-full max-w-4xl mx-auto">
                                        <div className="text-center">
                                            {/* Main heading */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                    transition: {
                                                        duration: 0.35,
                                                        delay: 0.05,
                                                        ease: [0.25, 0.1, 0.25, 1.0],
                                                    }
                                                }}
                                                viewport={{ once: true, amount: 0.1 }}
                                                className="space-y-1 sm:space-y-2"
                                            >
                                                <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
                                                    Ready to
                                                </h2>
                                                <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
                                                    create something
                                                </h2>
                                                <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold tracking-tight text-white/90 leading-[1.1]">
                                                    remarkable?
                                                </h2>
                                            </motion.div>

                                            {/* Decorative line */}
                                            <motion.div
                                                initial={{ opacity: 0, scaleX: 0 }}
                                                whileInView={{
                                                    opacity: 1,
                                                    scaleX: 1,
                                                    transition: {
                                                        duration: 0.4,
                                                        delay: 0.15,
                                                        ease: [0.25, 0.1, 0.25, 1.0],
                                                    }
                                                }}
                                                viewport={{ once: true, amount: 0.1 }}
                                                style={{ transformOrigin: "center" }}
                                                className="w-16 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent mx-auto my-8 sm:my-10"
                                            />

                                            {/* Description */}
                                            <motion.p
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                    transition: {
                                                        duration: 0.3,
                                                        delay: 0.25,
                                                        ease: [0.25, 0.1, 0.25, 1.0],
                                                    }
                                                }}
                                                viewport={{ once: true, amount: 0.1 }}
                                                className="max-w-lg mx-auto text-sm sm:text-base font-light text-white/40 leading-relaxed"
                                            >
                                                I'm always open to discussing new projects, creative ideas,
                                                and opportunities to build meaningful digital experiences
                                                together.
                                            </motion.p>

                                            {/* CTA - Navigate to Contacts page */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 12, scale: 0.97 }}
                                                whileInView={{
                                                    opacity: 1,
                                                    y: 0,
                                                    scale: 1,
                                                    transition: {
                                                        duration: 0.35,
                                                        delay: 0.35,
                                                        ease: [0.25, 0.1, 0.25, 1.0],
                                                    }
                                                }}
                                                viewport={{ once: true, amount: 0.1 }}
                                                className="mt-10 sm:mt-12"
                                            >
                                                <button
                                                    onClick={() => navigate('/contacts')}
                                                    className="group inline-flex items-center gap-3 text-sm sm:text-base font-medium text-white/80 bg-white/5 border border-white/10 rounded-full px-8 sm:px-10 py-3.5 sm:py-4 transition-all duration-500 hover:bg-white hover:text-[#0a0a0a] hover:border-white hover:shadow-2xl hover:shadow-white/5"
                                                >
                                                    <span>Get in touch</span>
                                                    <svg className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                                    </svg>
                                                </button>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </FlowSection>
                            {/* Footer inside the gray container */}
                            <Footer />
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

function FlowSection({ id, icon: Icon, title, subtitle, action, children }) {
    return (
        <section id={id} className="animate-section-reveal px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-65 py-4 sm:py-6 lg:py-8 xl:py-30">
            <SectionTitle icon={Icon} title={title} subtitle={subtitle} action={action} />
            <div className="mt-6 sm:mt-8 lg:mt-10 mb-3 sm:mb-4 lg:mb-20">{children}</div>
        </section>
    )
}

function SectionTitle({ icon: Icon, title, subtitle, action }) {
    return (
        <div className="animate-fade-up flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 md:gap-5 w-full mb-4 sm:mb-6 md:mb-8 lg:mb-12 xl:mb-16 2xl:mb-20">
            <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 md:gap-4 ml-2 sm:ml-4 md:ml-6 lg:ml-5">
                {Icon && (
                    <div className="grid h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 xl:h-13 xl:w-13 shrink-0 place-items-center rounded-lg sm:rounded-xl border border-white/20 bg-white/10 shadow-lg shadow-white/5">
                        <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5 md:h-5 md:w-5 lg:h-5.5 lg:w-5.5 xl:h-6 xl:w-6 text-white/85" />
                    </div>
                )}
                <div className="space-y-0.5 sm:space-y-1 text-left">
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold tracking-tight text-white">
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="text-[0.6rem] sm:text-xs md:text-sm font-normal text-white/55 max-w-xl leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
            {action && (
                <div className="shrink-0 self-start sm:self-auto ml-2 sm:ml-0 mr-2 sm:mr-4 md:mr-6 lg:mr-5">
                    <button
                        type="button"
                        className="group inline-flex items-center gap-1 sm:gap-1.5 text-[0.6rem] sm:text-xs md:text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
                    >
                        <span className="tracking-wide">{action}</span>
                        <ArrowIcon className="h-3 w-3 sm:h-3.5 md:h-4 opacity-70 group-hover:opacity-100 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                </div>
            )}
        </div>
    );
}

// ============================================
// HELPER COMPONENTS (UNCHANGED)
// ============================================

function Field({ label, placeholder }) {
    return (
        <label className="block">
            <span className="mb-1.5 sm:mb-2 block text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] sm:tracking-[0.28em] text-white/65">{label}</span>
            <input
                className="w-full rounded-xl sm:rounded-2xl border border-white/6 bg-white/6 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-white outline-none transition placeholder:text-white/30 focus:border-white/15"
                placeholder={placeholder}
            />
        </label>
    )
}

function ArrowIcon({ className }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
        </svg>
    )
}

function PaperPlaneIcon({ className }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M21 3 10.5 13.5" />
            <path d="M21 3 14.5 21l-4-7-7-4z" />
        </svg>
    )
}

function ClockIcon({ className }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <circle cx="12" cy="12" r="8.5" />
            <path d="M12 8v4l2.5 1.5" />
        </svg>
    )
}

function FolderIcon({ className }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M3.5 7.5A2.5 2.5 0 0 1 6 5h4l2 2h6a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 18 19H6a2.5 2.5 0 0 1-2.5-2.5z" />
        </svg>
    )
}

function BriefcaseIcon({ className }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M9 6.5V5.8A1.8 1.8 0 0 1 10.8 4h2.4A1.8 1.8 0 0 1 15 5.8v.7" />
            <path d="M4 9h16v9.2A1.8 1.8 0 0 1 18.2 20H5.8A1.8 1.8 0 0 1 4 18.2z" />
            <path d="M4 12h16" />
        </svg>
    )
}

function PhoneIcon({ className }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M7.5 4.5h2.2l1.2 4-1.8 1.8a14 14 0 0 0 4.6 4.6l1.8-1.8 4 1.2v2.2A2 2 0 0 1 17.5 19a15.5 15.5 0 0 1-12.5-12.5A2 2 0 0 1 7.5 4.5Z" />
        </svg>
    )
}

function SparkIcon({ className }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z" />
            <path d="M19 14.5 19.8 17 22 17.8l-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8Z" />
        </svg>
    )
}

export default Home