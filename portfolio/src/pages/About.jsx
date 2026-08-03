import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Footer from '../components/footer.jsx';
import Sidenavbar from '../components/sidenavbar.jsx'
import profileImage from '../assets/images/userabare2.jpeg'
import certImage from '../assets/images/cert1.jpeg'
import certImage2 from '../assets/images/cert1.jpeg'
import certImage3 from '../assets/images/cert1.jpeg'
import coverPhoto from '../assets/images/twce.jpg' // Add your cover image

// Scroll Reveal Variants
const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
            duration: 0.5, 
            ease: [0.25, 0.1, 0.25, 1.0] 
        }
    }
}

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { 
            duration: 0.5, 
            ease: [0.25, 0.1, 0.25, 1.0] 
        }
    }
}

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.05
        }
    }
}

const staggerItem = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { 
            duration: 0.4, 
            ease: [0.25, 0.1, 0.25, 1.0] 
        }
    }
}

const viewportConfig = {
    once: true,
    amount: 0.1,
    margin: "-30px"
}

const aboutNavItems = [
    { label: 'Home', href: '/', icon: HomeIcon },
    { label: 'Projects', href: '/projects', icon: FolderIcon },
    { label: 'Experience', href: '/experience', icon: BriefcaseIcon },
    { label: 'Contacts', href: '/contacts', icon: PhoneIcon },
]

const getDelayStyle = (index, base = 0.12, step = 0.08) => ({
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

function About() {
    const [selectedCertificate, setSelectedCertificate] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openCertificateModal = (image, alt, title, issuer, year) => {
        setSelectedCertificate({
            src: image,
            alt: alt,
            title: title,
            issuer: issuer,
            year: year
        })
        setIsModalOpen(true)
        document.body.style.overflow = 'hidden'
    }

    const closeCertificateModal = () => {
        setIsModalOpen(false)
        setTimeout(() => {
            setSelectedCertificate(null)
        }, 300)
        document.body.style.overflow = 'unset'
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isModalOpen) {
                closeCertificateModal()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isModalOpen])
    return (

        <div className="min-h-screen bg-[#131415] text-white">
            <Sidenavbar navItems={aboutNavItems} />

            <main className="lg:pl-[244px]">
                <div className="mx-auto max-w-[1320px] px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3">
                    <section className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 mb-2 sm:mb-3 md:mb-4 overflow-y-auto overflow-x-hidden no-scrollbar rounded-[20px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[32px] bg-[#303133] shadow-[0_30px_100px_rgba(0,0,0,0.35)] ring-1 ring-white/5 w-full h-[calc(100vh-1rem)] sm:h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)]">

                        <div className="px-4 py-5 sm:px-6 sm:py-7 md:px-8 md:py-9 lg:px-10 lg:py-11 xl:px-14 xl:py-14 2xl:px-20 2xl:py-18">
                            {/* About Header - Left Aligned */}
                            <motion.div 
                                initial="hidden"
                                whileInView="visible"
                                viewport={viewportConfig}
                                variants={fadeUp}
                                className="flex flex-col items-start w-full 2xl:px-70"
                            >
                                <div className="flex items-center gap-4 sm:gap-5 md:gap-6 animate-fade-up" style={getDelayStyle(0)}>
                                    <div className="flex-shrink-0">
                                        <div className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-18 lg:w-18 xl:h-20 xl:w-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-2.5 sm:p-3 ring-2 ring-white/20 shadow-lg flex items-center justify-center backdrop-blur-sm">
                                            <svg className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 xl:h-11 xl:w-11 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                                            About
                                        </p>
                                        <p className="text-[0.55rem] sm:text-xs md:text-sm text-white/40 tracking-wider">
                                            Know Me Better
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* About Content - Cover Photo Layout */}
                            {/* About Content - Cover Photo Layout */}
                            <section id="about" className="mt-6 xs:mt-7 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-16 px-1 xs:px-2 sm:px-0 lg:px-70">
                                <div className="max-w-5xl mx-auto">
                                    {/* Cover Photo Container */}
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={viewportConfig}
                                        variants={fadeUp}
                                        className="animate-fade-up relative rounded-lg xs:rounded-xl sm:rounded-2xl border border-white/10 overflow-visible"
                                        style={getDelayStyle(0.1)}
                                    >
                                        {/* Cover Image */}
                                        <div className="relative w-full h-28 xs:h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 2xl:h-72 bg-[#303133] overflow-hidden rounded-lg xs:rounded-xl sm:rounded-2xl z-0">
                                            {coverPhoto ? (
                                                <img
                                                    src={coverPhoto}
                                                    alt="Cover"
                                                    className="w-full h-full object-cover"
                                                    loading="lazy"
                                                    decoding="async"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-[#303133] flex items-center justify-center">
                                                    <span className="text-white/20 text-xs sm:text-sm font-light">
                                                        Cover Photo
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Profile Picture - Overlay bottom center with proper z-index */}
                                        <div className="absolute inset-x-0 -bottom-6 xs:-bottom-8 sm:-bottom-10 md:-bottom-12 lg:-bottom-14 xl:-bottom-16 2xl:-bottom-20 flex flex-col items-center z-10 pointer-events-none">
                                            <div className="relative z-20 pointer-events-auto">
                                                <div className="h-16 w-16 xs:h-18 xs:w-18 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 xl:h-32 xl:w-32 2xl:h-36 2xl:w-36 rounded-full ring-2 xs:ring-3 sm:ring-4 ring-[#303133] overflow-hidden bg-[#303133] shadow-lg shadow-black/40">
                                                    <img
                                                        src={profileImage}
                                                        alt="Mark Justin Abare"
                                                        className="h-full w-full object-cover object-center"
                                                        loading="lazy"
                                                        decoding="async"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Profile Info - Below cover photo */}
                                    <motion.div 
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={viewportConfig}
                                        variants={fadeUp}
                                        className="mt-10 xs:mt-12 sm:mt-14 md:mt-16 lg:mt-20 xl:mt-24 2xl:mt-28"
                                    >
                                        {/* Name and Title - Centered */}
                                        <div className="text-center mb-5 xs:mb-6 sm:mb-8 md:mb-10">
                                            <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                                                Mark Justin Abare
                                            </h1>
                                            <p className="text-[0.55rem] xs:text-[0.6rem] sm:text-xs md:text-sm font-light text-white/50 tracking-wider mt-1">
                                                FRONTEND DEVELOPER / UI/UX DESIGNER
                                            </p>
                                        </div>

                                        {/* About Me - Full width */}
                                        <motion.div 
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={viewportConfig}
                                            variants={fadeUp}
                                            className="animate-fade-up bg-white/5 rounded-lg xs:rounded-xl sm:rounded-2xl border border-white/10 p-4 xs:p-5 sm:p-6 md:p-8"
                                            style={getDelayStyle(0.15)}
                                        >
                                            <h2 className="text-[0.55rem] xs:text-[0.6rem] sm:text-xs font-medium uppercase tracking-[0.25em] xs:tracking-[0.3em] text-white/30 mb-3 xs:mb-4">
                                                About Me
                                            </h2>
                                            <p className="text-xs xs:text-sm sm:text-base font-light text-white/60 leading-relaxed text-justify">
                                                I'm a BSIT graduate with a strong passion for frontend development and UI/UX design. I enjoy creating responsive, user-friendly web interfaces that combine clean design with functional user experiences. I'm continuously improving my skills through personal projects and hands-on learning, with a focus on building modern, accessible, and visually engaging websites.
                                            </p>
                                        </motion.div>

                                        {/* Education & Quick Facts - Side by Side */}
                                        <motion.div 
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={viewportConfig}
                                            variants={fadeUp}
                                            className="grid grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-5 sm:gap-6 md:gap-8 mt-4 xs:mt-5 sm:mt-6 md:mt-8"
                                        >
                                            {/* Education */}
                                            <div className="animate-fade-up bg-white/5 rounded-lg xs:rounded-xl sm:rounded-2xl border border-white/10 p-4 xs:p-5 sm:p-6 md:p-8" style={getDelayStyle(0.3)}>
                                                <h2 className="text-[0.55rem] xs:text-[0.6rem] sm:text-xs font-medium uppercase tracking-[0.25em] xs:tracking-[0.3em] text-white/30 mb-3 xs:mb-4">
                                                    Education
                                                </h2>
                                                <div className="space-y-3 xs:space-y-4">
                                                    <div>
                                                        <h3 className="text-sm xs:text-base font-medium text-white/70">BS in Information Technology</h3>
                                                        <p className="text-xs xs:text-sm font-light text-white/40">Web and Mobile Development</p>
                                                        <p className="text-xs xs:text-sm font-light text-white/40">Bulacan State University</p>
                                                        <p className="text-xs xs:text-sm font-light text-white/30 mt-0.5">2022 - 2026</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Quick Facts */}
                                            <div className="animate-fade-up bg-white/5 rounded-lg xs:rounded-xl sm:rounded-2xl border border-white/10 p-4 xs:p-5 sm:p-6 md:p-8" style={getDelayStyle(0.22)}>
                                                <h2 className="text-[0.55rem] xs:text-[0.6rem] sm:text-xs font-medium uppercase tracking-[0.25em] xs:tracking-[0.3em] text-white/30 mb-3 xs:mb-4">
                                                    Quick Facts
                                                </h2>
                                                <div className="grid grid-cols-1 gap-2 xs:gap-3 sm:gap-4">
                                                    <div className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                                                        <span className="text-[0.55rem] xs:text-[0.6rem] sm:text-xs font-medium uppercase tracking-[0.12em] xs:tracking-[0.15em] text-white/30">Location</span>
                                                        <span className="text-xs xs:text-sm sm:text-base font-light text-white/60">Angat, Bulacan</span>
                                                    </div>
                                                    <div className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                                                        <span className="text-[0.55rem] xs:text-[0.6rem] sm:text-xs font-medium uppercase tracking-[0.12em] xs:tracking-[0.15em] text-white/30">Focus</span>
                                                        <span className="text-xs xs:text-sm sm:text-base font-light text-white/60">UI/UX Design</span>
                                                    </div>
                                                    <div className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                                                        <span className="text-[0.55rem] xs:text-[0.6rem] sm:text-xs font-medium uppercase tracking-[0.12em] xs:tracking-[0.15em] text-white/30">Status</span>
                                                        <span className="text-xs xs:text-sm sm:text-base font-light text-emerald-400/80">Open to Work</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Core Strengths - Multi-column layout */}
                                        <motion.div 
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={viewportConfig}
                                            variants={fadeUp}
                                            className="animate-fade-up bg-white/5 rounded-lg xs:rounded-xl sm:rounded-2xl border border-white/10 p-4 xs:p-5 sm:p-6 md:p-8 mt-4 xs:mt-5 sm:mt-6 md:mt-8"
                                            style={getDelayStyle(0.18)}
                                        >
                                            <h2 className="text-[0.55rem] xs:text-[0.6rem] sm:text-xs font-medium uppercase tracking-[0.25em] xs:tracking-[0.3em] text-white/30 mb-3 xs:mb-4">
                                                Core Strengths
                                            </h2>
                                            <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-2.5 sm:gap-3 md:gap-4">
                                                <div className="flex items-start gap-2 xs:gap-2.5">
                                                    <span className="text-emerald-400/60 text-[0.6rem] xs:text-xs sm:text-sm mt-0.5">▸</span>
                                                    <span className="text-xs xs:text-sm sm:text-base font-light text-white/60">Responsive Web Design</span>
                                                </div>
                                                <div className="flex items-start gap-2 xs:gap-2.5">
                                                    <span className="text-emerald-400/60 text-[0.6rem] xs:text-xs sm:text-sm mt-0.5">▸</span>
                                                    <span className="text-xs xs:text-sm sm:text-base font-light text-white/60">UI/UX Design & Prototyping</span>
                                                </div>
                                                <div className="flex items-start gap-2 xs:gap-2.5">
                                                    <span className="text-emerald-400/60 text-[0.6rem] xs:text-xs sm:text-sm mt-0.5">▸</span>
                                                    <span className="text-xs xs:text-sm sm:text-base font-light text-white/60">Frontend Development (React, Tailwind)</span>
                                                </div>
                                                <div className="flex items-start gap-2 xs:gap-2.5">
                                                    <span className="text-emerald-400/60 text-[0.6rem] xs:text-xs sm:text-sm mt-0.5">▸</span>
                                                    <span className="text-xs xs:text-sm sm:text-base font-light text-white/60">Problem Solving & Debugging</span>
                                                </div>
                                                <div className="flex items-start gap-2 xs:gap-2.5">
                                                    <span className="text-emerald-400/60 text-[0.6rem] xs:text-xs sm:text-sm mt-0.5">▸</span>
                                                    <span className="text-xs xs:text-sm sm:text-base font-light text-white/60">Cross-Browser Compatibility</span>
                                                </div>
                                                <div className="flex items-start gap-2 xs:gap-2.5">
                                                    <span className="text-emerald-400/60 text-[0.6rem] xs:text-xs sm:text-sm mt-0.5">▸</span>
                                                    <span className="text-xs xs:text-sm sm:text-base font-light text-white/60">Team Collaboration & Communication</span>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Tech Stacks - Multi-column layout */}
                                        <motion.div 
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={viewportConfig}
                                            variants={fadeUp}
                                            className="animate-fade-up bg-white/5 rounded-lg xs:rounded-xl sm:rounded-2xl border border-white/10 p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 mt-4 xs:mt-5 sm:mt-6 md:mt-8"
                                            style={getDelayStyle(0.35)}
                                        >
                                            <h2 className="text-[0.55rem] xs:text-[0.6rem] sm:text-xs md:text-sm font-medium uppercase tracking-[0.25em] xs:tracking-[0.3em] text-white/30 mb-4 xs:mb-5 sm:mb-6 md:mb-8">
                                                Tech Stacks
                                            </h2>

                                            <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 xs:gap-2.5 sm:gap-3 md:gap-4">
                                                {/* HTML5 */}
                                                <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 p-2 xs:p-2.5 sm:p-3 md:p-4 border border-white/10 rounded-lg xs:rounded-xl bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                                                    <div className="flex-shrink-0 w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
                                                        <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#E34F26] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill="#e44d26" d="M14.021 90.034 6 0h88.187l-8.022 89.985L50.02 100" />
                                                            <path fill="#f16529" d="M50.093 92.344V7.39h36.048l-6.88 76.811" />
                                                            <path fill="#ebebeb" d="M22.383 18.4h27.71v11.036H34.488L35.51 40.74h14.584v11.01H25.397zm3.5 38.893h11.084l.778 8.823 12.348 3.306v11.521l-22.654-6.32" />
                                                            <path fill="#fff" d="M77.706 18.4H50.044v11.036h26.64zm-2.018 22.34H50.044v11.035h13.612l-1.288 14.341-12.324 3.306v11.473l22.606-6.271" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-[0.6rem] xs:text-xs sm:text-sm md:text-base font-medium text-white/80 group-hover:text-white transition-colors">HTML</span>
                                                </div>

                                                {/* CSS3 */}
                                                <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 p-2 xs:p-2.5 sm:p-3 md:p-4 border border-white/10 rounded-lg xs:rounded-xl bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                                                    <div className="flex-shrink-0 w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
                                                        <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#1572B6] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill="#264de4" d="m94.175 0-8.033 89.99L50.034 100l-36.01-9.996L6 0z" />
                                                            <path fill="#2965f1" d="m79.265 84.26 6.865-76.9H50.088v84.988z" />
                                                            <path fill="#ebebeb" d="m24.396 40.74.99 11.039h24.702V40.74zm25.692-22.342h-27.68l1.003 11.038h26.676zm0 62.495V69.408l-.049.013-12.294-3.32-.786-8.803H25.878l1.547 17.332 22.612 6.277z" />
                                                            <path fill="#fff" d="m63.642 51.779-1.281 14.316-12.312 3.323v11.484l22.63-6.272.166-1.865 2.594-29.06.27-2.965L77.7 18.398H50.05v11.038h15.555L64.599 40.74H50.05v11.04z" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-[0.6rem] xs:text-xs sm:text-sm md:text-base font-medium text-white/80 group-hover:text-white transition-colors">CSS</span>
                                                </div>

                                                {/* JavaScript */}
                                                <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 p-2 xs:p-2.5 sm:p-3 md:p-4 border border-white/10 rounded-lg xs:rounded-xl bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                                                    <div className="flex-shrink-0 w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
                                                        <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#F7DF1E] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#a)"><path fill="#f7df1e" d="M100 0H0v100h100z" /><path fill="#000" d="M67.175 78.125c2.014 3.29 4.634 5.707 9.27 5.707 3.893 0 6.38-1.946 6.38-4.635 0-3.222-2.555-4.364-6.84-6.238l-2.35-1.008c-6.781-2.89-11.286-6.508-11.286-14.159 0-7.047 5.37-12.413 13.762-12.413 5.975 0 10.27 2.08 13.365 7.524l-7.317 4.699c-1.612-2.89-3.35-4.027-6.048-4.027-2.752 0-4.497 1.746-4.497 4.027 0 2.819 1.746 3.96 5.778 5.706l2.35 1.006c7.983 3.424 12.491 6.915 12.491 14.762 0 8.46-6.646 13.096-15.571 13.096-8.727 0-14.365-4.16-17.124-9.61zm-33.196.815c1.477 2.619 2.82 4.833 6.048 4.833 3.087 0 5.035-1.208 5.035-5.905V45.916h9.397v32.08c0 9.73-5.705 14.158-14.032 14.158-7.524 0-11.881-3.894-14.097-8.583z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h100v100H0z" /></clipPath></defs>
                                                        </svg>
                                                    </div>
                                                    <span className="text-[0.6rem] xs:text-xs sm:text-sm md:text-base font-medium text-white/80 group-hover:text-white transition-colors">JavaScript</span>
                                                </div>

                                                {/* React */}
                                                <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 p-2 xs:p-2.5 sm:p-3 md:p-4 border border-white/10 rounded-lg xs:rounded-xl bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                                                    <div className="flex-shrink-0 w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
                                                        <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#61DAFB] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#a)"><path fill="#61dafb" d="M50.307 58.816a8.816 8.816 0 1 0 0-17.632 8.816 8.816 0 0 0 0 17.632" /><path stroke="#61dafb" strokeWidth="5" d="M50.307 68.063c26.126 0 47.306-8.087 47.306-18.063s-21.18-18.062-47.306-18.062C24.18 31.938 3 40.024 3 50s21.18 18.063 47.307 18.063Z" /><path stroke="#61dafb" strokeWidth="5" d="M34.664 59.031C47.727 81.658 65.321 95.957 73.96 90.97c8.64-4.988 5.053-27.374-8.01-50C52.885 18.342 35.291 4.043 26.652 9.03s-5.052 27.374 8.011 50Z" /><path stroke="#61dafb" strokeWidth="5" d="M34.664 40.969c-13.063 22.626-16.65 45.012-8.01 50 8.638 4.988 26.232-9.311 39.295-31.938s16.65-45.012 8.01-50c-8.638-4.988-26.232 9.311-39.295 31.938Z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h100v100H0z" /></clipPath></defs>
                                                        </svg>
                                                    </div>
                                                    <span className="text-[0.6rem] xs:text-xs sm:text-sm md:text-base font-medium text-white/80 group-hover:text-white transition-colors">React</span>
                                                </div>

                                                {/* Tailwind */}
                                                <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 p-2 xs:p-2.5 sm:p-3 md:p-4 border border-white/10 rounded-lg xs:rounded-xl bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                                                    <div className="flex-shrink-0 w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
                                                        <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#06B6D4] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#a)"><path fill="#06b6d4" d="M50 20q-20 0-25 19.994 7.5-9.997 17.5-7.498c3.804.95 6.522 3.71 9.532 6.764 4.902 4.974 10.576 10.731 22.969 10.731q20 0 24.999-19.995-7.5 9.997-17.5 7.5c-3.803-.951-6.521-3.71-9.531-6.765C68.067 25.758 62.392 20 50 20M25 49.991q-20 0-25 19.995 7.5-9.998 17.5-7.498c3.803.952 6.522 3.71 9.532 6.763C31.933 74.225 37.608 79.984 50 79.984q20 0 25-19.995-7.5 9.997-17.5 7.498c-3.803-.95-6.522-3.71-9.532-6.763C43.066 55.75 37.393 49.991 25 49.991" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h100v100H0z" /></clipPath></defs>
                                                        </svg>
                                                    </div>
                                                    <span className="text-[0.6rem] xs:text-xs sm:text-sm md:text-base font-medium text-white/80 group-hover:text-white transition-colors">Tailwind</span>
                                                </div>

                                                {/* PHP */}
                                                <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 p-2 xs:p-2.5 sm:p-3 md:p-4 border border-white/10 rounded-lg xs:rounded-xl bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                                                    <div className="flex-shrink-0 w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
                                                        <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#777BB4] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill="url(#a)" d="M0 50c0 14.526 22.386 26.303 50 26.303S100 64.526 100 50c0-14.525-22.387-26.302-50-26.302S0 35.475 0 50" />
                                                            <path fill="#777bb3" d="M50 74.35c26.535 0 48.047-10.903 48.047-24.35S76.535 25.651 50 25.651s-48.047 10.9-48.047 24.35C1.953 63.446 23.465 74.35 50 74.35" />
                                                            <path fill="#000" d="M27.166 53.018c2.182 0 3.81-.402 4.84-1.195 1.02-.786 1.724-2.146 2.094-4.043.344-1.773.212-3.011-.39-3.68-.616-.683-1.948-1.029-3.96-1.029h-3.487l-1.932 9.947zM15.76 65.271a.54.54 0 0 1-.531-.647l5.123-26.358a.54.54 0 0 1 .53-.438h11.043c3.47 0 6.053.942 7.677 2.8 1.632 1.868 2.136 4.48 1.498 7.762a12.4 12.4 0 0 1-1.328 3.69 12.4 12.4 0 0 1-2.444 3.063c-1.196 1.119-2.55 1.931-4.02 2.409-1.448.472-3.307.71-5.524.71h-4.472l-1.277 6.57a.54.54 0 0 1-.533.439z" />
                                                            <path fill="#fff" d="M26.711 43.613h3.04c2.427 0 3.27.533 3.557.851.474.527.565 1.638.258 3.213-.343 1.763-.978 3.014-1.89 3.715-.933.719-2.452 1.083-4.51 1.083h-2.177zm5.214-6.328H20.884a1.086 1.086 0 0 0-1.066.878L14.695 64.52a1.086 1.086 0 0 0 1.065 1.291h5.742a1.086 1.086 0 0 0 1.065-.878l1.192-6.13h4.024c2.275 0 4.19-.248 5.693-.737 1.544-.501 2.965-1.352 4.223-2.529 1.013-.922 1.873-2 2.546-3.193a13 13 0 0 0 1.387-3.852c.672-3.456.126-6.222-1.622-8.222-1.731-1.982-4.451-2.987-8.085-2.987zM23.673 53.56h3.493q3.473 0 5.172-1.308t2.295-4.368q.57-2.94-.52-4.147t-4.362-1.208h-3.934zm8.253-15.191q4.983 0 7.268 2.616t1.375 7.301a11.8 11.8 0 0 1-1.27 3.53 11.8 11.8 0 0 1-2.336 2.927q-1.719 1.61-3.822 2.293-2.102.685-5.357.684h-4.92l-1.36 7.008H15.76l5.124-26.359z" />
                                                            <path fill="#000" d="M54.265 58.264a.543.543 0 0 1-.533-.646l2.265-11.663c.217-1.11.164-1.904-.148-2.242-.191-.206-.765-.55-2.46-.55h-4.107l-2.849 14.663a.54.54 0 0 1-.533.437h-5.695a.545.545 0 0 1-.534-.645l5.123-26.359a.54.54 0 0 1 .533-.438h5.695a.543.543 0 0 1 .534.645L50.32 37.83h4.416c3.365 0 5.647.592 6.976 1.813 1.353 1.244 1.777 3.234 1.256 5.916l-2.384 12.267a.54.54 0 0 1-.533.438z" />
                                                            <path fill="#fff" d="M51.023 30.278h-5.696a1.086 1.086 0 0 0-1.065.878l-5.123 26.358a1.085 1.085 0 0 0 1.065 1.292H45.9a1.086 1.086 0 0 0 1.066-.878l2.763-14.223h3.658c1.693 0 2.05.362 2.063.378.103.11.238.621.015 1.769l-2.266 11.662a1.086 1.086 0 0 0 1.066 1.292h5.787a1.086 1.086 0 0 0 1.065-.878l2.384-12.266c.558-2.88.08-5.04-1.422-6.42-1.435-1.317-3.836-1.957-7.342-1.957h-3.758l1.11-5.714a1.087 1.087 0 0 0-1.066-1.293m0 1.085-1.361 7.007h5.075q4.79 0 6.607 1.672 1.818 1.67 1.092 5.414L60.05 57.72h-5.786l2.266-11.663q.387-1.99-.285-2.714-.672-.723-2.858-.723h-4.554L45.9 57.72h-5.697l5.123-26.359h5.697z" />
                                                            <path fill="#000" d="M71.981 53.018c2.182 0 3.811-.402 4.843-1.195 1.018-.786 1.723-2.146 2.093-4.043.343-1.773.213-3.011-.391-3.68-.616-.683-1.948-1.029-3.959-1.029h-3.486l-1.934 9.947zM60.578 65.271a.542.542 0 0 1-.533-.647l5.123-26.358a.54.54 0 0 1 .533-.438h11.041c3.47 0 6.053.942 7.677 2.8 1.632 1.868 2.136 4.48 1.498 7.762a12.4 12.4 0 0 1-1.328 3.69 12.4 12.4 0 0 1-2.444 3.063c-1.195 1.119-2.55 1.931-4.02 2.409-1.448.472-3.307.71-5.525.71h-4.471l-1.276 6.57a.54.54 0 0 1-.533.439z" />
                                                            <path fill="#fff" d="M71.527 43.613h3.04c2.428 0 3.27.533 3.557.851.476.527.565 1.638.26 3.213-.344 1.763-.98 3.014-1.892 3.715-.933.719-2.452 1.083-4.51 1.083h-2.176zm5.215-6.328H65.7a1.086 1.086 0 0 0-1.065.878L59.512 64.52a1.085 1.085 0 0 0 1.065 1.291h5.743a1.086 1.086 0 0 0 1.065-.878l1.19-6.13H72.6c2.275 0 4.19-.248 5.692-.737 1.546-.501 2.967-1.352 4.225-2.53a12.9 12.9 0 0 0 2.546-3.192 13 13 0 0 0 1.386-3.852c.672-3.456.127-6.222-1.621-8.222-1.732-1.982-4.451-2.987-8.086-2.987zM68.489 53.56h3.492q3.473 0 5.174-1.308 1.7-1.308 2.293-4.368.572-2.94-.519-4.147t-4.362-1.208h-3.933zm8.252-15.191q4.983 0 7.269 2.616 2.284 2.615 1.374 7.301a11.8 11.8 0 0 1-1.27 3.53 11.8 11.8 0 0 1-2.337 2.927q-1.719 1.61-3.821 2.293-2.102.685-5.357.684h-4.918l-1.363 7.008h-5.742l5.123-26.359z" />
                                                            <defs><radialGradient id="a" cx="0" cy="0" r="1" gradientTransform="translate(30.02 32.945)scale(65.6573)" gradientUnits="userSpaceOnUse"><stop stop-color="#aeb2d5" /><stop offset=".3" stop-color="#aeb2d5" /><stop offset=".75" stop-color="#484c89" /><stop offset="1" stop-color="#484c89" /></radialGradient></defs>
                                                        </svg>
                                                    </div>
                                                    <span className="text-[0.6rem] xs:text-xs sm:text-sm md:text-base font-medium text-white/80 group-hover:text-white transition-colors">PHP</span>
                                                </div>

                                                {/* Continue with remaining tech stacks... */}
                                                {/* Python */}
                                                <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 p-2 xs:p-2.5 sm:p-3 md:p-4 border border-white/10 rounded-lg xs:rounded-xl bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                                                    <div className="flex-shrink-0 w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
                                                        <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#3776AB] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#a)"><path fill="url(#b)" d="M49.866 0c-4.08.02-7.973.367-11.4.974C28.368 2.757 26.537 6.49 26.537 13.376v9.092h23.856v3.03h-32.81c-6.934 0-13.005 4.168-14.904 12.098-2.191 9.086-2.288 14.758 0 24.246 1.695 7.063 5.745 12.095 12.68 12.095h8.203v-10.9c0-7.875 6.812-14.82 14.903-14.82h23.83c6.633 0 11.928-5.463 11.928-12.123V13.377c0-6.466-5.455-11.323-11.928-12.402-4.1-.682-8.352-.993-12.43-.974M36.964 7.314c2.464 0 4.477 2.046 4.477 4.562 0 2.505-2.013 4.53-4.477 4.53-2.473 0-4.476-2.025-4.476-4.53-.001-2.516 2.003-4.562 4.476-4.562" /><path fill="url(#c)" d="M77.198 25.498v10.594c0 8.212-6.964 15.125-14.903 15.125h-23.83c-6.527 0-11.928 5.587-11.928 12.124V86.06c0 6.464 5.621 10.268 11.928 12.122 7.551 2.219 14.793 2.621 23.83 0 6.005-1.74 11.927-5.24 11.927-12.122v-9.094H50.394v-3.031h35.758c6.933 0 9.519-4.836 11.93-12.095 2.491-7.473 2.383-14.66 0-24.246-1.714-6.903-4.986-12.097-11.93-12.097zm-13.403 57.53c2.474 0 4.477 2.026 4.477 4.533 0 2.514-2.004 4.56-4.477 4.56-2.464 0-4.476-2.046-4.476-4.56 0-2.507 2.012-4.533 4.476-4.533" /></g><defs><linearGradient id="b" x1="-1.392" x2="53.633" y1="2.844" y2="49.769" gradientUnits="userSpaceOnUse"><stop stop-color="#5a9fd4" /><stop offset="1" stop-color="#306998" /></linearGradient><linearGradient id="c" x1="74.335" x2="54.603" y1="78.937" y2="51.265" gradientUnits="userSpaceOnUse"><stop stop-color="#ffd43b" /><stop offset="1" stop-color="#ffe873" /></linearGradient><clipPath id="a"><path fill="#fff" d="M0 0h100v100H0z" /></clipPath></defs>
                                                        </svg>
                                                    </div>
                                                    <span className="text-[0.6rem] xs:text-xs sm:text-sm md:text-base font-medium text-white/80 group-hover:text-white transition-colors">Python</span>
                                                </div>

                                                {/* C++ */}
                                                <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 p-2 xs:p-2.5 sm:p-3 md:p-4 border border-white/10 rounded-lg xs:rounded-xl bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                                                    <div className="flex-shrink-0 w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
                                                        <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#00599C] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill="#5c8dbc" d="M94.73 29.32c0-1.676-.359-3.158-1.084-4.43-.713-1.25-1.78-2.298-3.21-3.127C78.621 14.95 66.797 8.16 54.987 1.343c-3.183-1.839-6.27-1.772-9.43.093-4.702 2.773-28.243 16.26-35.258 20.323-2.889 1.672-4.295 4.232-4.295 7.559C6 43.016 6.005 56.714 6 70.413c0 1.64.344 3.093 1.037 4.345.713 1.289 1.795 2.366 3.26 3.213 7.014 4.063 30.559 17.55 35.26 20.323 3.16 1.865 6.248 1.932 9.432.093 11.81-6.818 23.635-13.609 35.45-20.42 1.464-.847 2.546-1.925 3.259-3.212.692-1.253 1.036-2.706 1.037-4.346 0 0 0-27.39-.005-41.088" />
                                                            <path fill="#1a4674" d="M50.503 49.732 7.037 74.758c.713 1.289 1.795 2.366 3.26 3.213 7.014 4.063 30.559 17.55 35.26 20.323 3.16 1.866 6.248 1.932 9.432.094 11.81-6.82 23.635-13.61 35.45-20.42 1.464-.848 2.546-1.926 3.259-3.213z" />
                                                            <path fill="#1a4674" d="M37.629 57.145c2.53 4.415 7.284 7.393 12.738 7.393 5.488 0 10.27-3.016 12.786-7.478l-12.65-7.328z" />
                                                            <path fill="#1b598e" d="M94.73 29.321c0-1.677-.359-3.159-1.084-4.43L50.503 49.73l43.195 25.024c.692-1.252 1.036-2.706 1.037-4.346 0 0 0-27.39-.005-41.088" />
                                                            <path fill="#fff" d="M92.355 51.52H88.98v3.376h-3.376V51.52h-3.375v-3.375h3.375V44.77h3.376v3.375h3.375zm-12.316 0h-3.375v3.376h-3.376V51.52h-3.375v-3.375h3.375V44.77h3.376v3.375h3.375z" />
                                                            <path fill="#fff" d="M63.154 57.06c-2.517 4.463-7.299 7.479-12.787 7.479-5.454 0-10.209-2.979-12.738-7.394a14.6 14.6 0 0 1-1.935-7.28c0-8.104 6.57-14.673 14.673-14.673 5.42 0 10.15 2.941 12.691 7.311l12.826-7.385c-5.098-8.8-14.615-14.72-25.516-14.72-16.275 0-29.468 13.193-29.468 29.467 0 5.34 1.42 10.346 3.903 14.665 5.084 8.846 14.63 14.803 25.565 14.803 10.955 0 20.514-5.981 25.592-14.853z" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-[0.6rem] xs:text-xs sm:text-sm md:text-base font-medium text-white/80 group-hover:text-white transition-colors">C++</span>
                                                </div>

                                                {/* C# */}
                                                <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 p-2 xs:p-2.5 sm:p-3 md:p-4 border border-white/10 rounded-lg xs:rounded-xl bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                                                    <div className="flex-shrink-0 w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
                                                        <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#239120] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#a)">
                                                                <path fill="#a179dc" d="M94.74 29.324c-.001-1.677-.36-3.16-1.085-4.431-.713-1.25-1.78-2.3-3.211-3.128-11.815-6.812-23.64-13.603-35.45-20.423-3.185-1.838-6.272-1.77-9.432.094C40.859 4.209 17.316 17.698 10.3 21.76c-2.889 1.673-4.295 4.233-4.295 7.56-.005 13.7 0 27.4-.005 41.1 0 1.64.344 3.093 1.037 4.346.713 1.288 1.795 2.365 3.26 3.213 7.015 4.064 30.562 17.551 35.263 20.325 3.162 1.866 6.25 1.932 9.434.093 11.811-6.82 23.638-13.61 35.454-20.422 1.464-.847 2.546-1.925 3.259-3.213.692-1.252 1.037-2.706 1.037-4.346 0 0 0-27.392-.005-41.092" />
                                                                <path fill="#280068" d="M50.508 49.737 7.038 74.766c.712 1.288 1.794 2.365 3.258 3.213C17.314 82.043 40.86 95.53 45.56 98.304c3.162 1.866 6.25 1.932 9.434.093 11.811-6.82 23.638-13.61 35.454-20.422 1.464-.847 2.546-1.925 3.259-3.213z" />
                                                                <path fill="#390091" d="M94.74 29.324c-.001-1.677-.36-3.16-1.085-4.431L50.508 49.737l43.199 25.025c.692-1.252 1.036-2.706 1.037-4.346 0 0 0-27.392-.005-41.092" />
                                                                <path fill="#fff" d="M76.102 40.38v4.678h4.678V40.38h2.34v4.678h4.677v2.34H83.12v4.678h4.678v2.339H83.12v4.678h-2.34v-4.678h-4.677v4.678h-2.34v-4.678h-4.678v-2.34h4.678v-4.678h-4.678v-2.339h4.678V40.38zm4.678 7.017h-4.678v4.679h4.678z" />
                                                                <path fill="#fff" d="M50.603 16.884c12.203 0 22.857 6.627 28.563 16.478l-.056-.095-14.357 8.267c-2.828-4.79-8.014-8.022-13.963-8.088l-.187-.001c-9.071 0-16.426 7.353-16.426 16.425 0 2.966.791 5.747 2.167 8.149 2.83 4.943 8.153 8.277 14.259 8.277 6.143 0 11.496-3.377 14.313-8.372l-.068.12 14.335 8.305C73.54 76.116 63.031 82.722 50.97 82.854l-.367.002c-12.241 0-22.925-6.668-28.618-16.57a32.84 32.84 0 0 1-4.368-16.416c0-18.217 14.768-32.986 32.986-32.986" />
                                                            </g>
                                                            <defs><clipPath id="a"><path fill="#fff" d="M6 0h88.889v100H6z" /></clipPath></defs>
                                                        </svg>
                                                    </div>
                                                    <span className="text-[0.6rem] xs:text-xs sm:text-sm md:text-base font-medium text-white/80 group-hover:text-white transition-colors">C#</span>
                                                </div>

                                                {/* MySQL */}
                                                <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 p-2 xs:p-2.5 sm:p-3 md:p-4 border border-white/10 rounded-lg xs:rounded-xl bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                                                    <div className="flex-shrink-0 w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
                                                        <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#4479A1] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g fill="#00546b" clipPath="url(#a)">
                                                                <path d="M92.11 77.066c-5.44-.137-9.657.415-13.194 1.934-1.02.413-2.653.414-2.789 1.726.544.552.612 1.45 1.089 2.209.817 1.38 2.244 3.245 3.536 4.212 1.428 1.104 2.857 2.208 4.353 3.175 2.652 1.657 5.645 2.623 8.23 4.28 1.497.966 2.992 2.21 4.488 3.245.749.552 1.224 1.45 2.177 1.795v-.207c-.477-.622-.613-1.519-1.088-2.21-.68-.69-1.36-1.311-2.04-2.002-1.973-2.692-4.421-5.04-7.074-6.972-2.176-1.52-6.938-3.59-7.821-6.145 0 0-.069-.068-.136-.137 1.496-.138 3.264-.69 4.693-1.105 2.312-.622 4.42-.484 6.8-1.105 1.089-.276 2.177-.621 3.265-.967v-.62c-1.224-1.243-2.108-2.9-3.4-4.074-3.469-3.038-7.278-6.007-11.222-8.492-2.11-1.38-4.83-2.278-7.074-3.452-.816-.414-2.176-.621-2.652-1.312-1.225-1.518-1.905-3.52-2.789-5.315-1.972-3.798-3.877-8.009-5.577-12.013-1.224-2.692-1.972-5.385-3.469-7.87-7.005-11.737-14.622-18.848-26.32-25.82-2.517-1.45-5.51-2.072-8.706-2.83-1.7-.07-3.4-.208-5.1-.278-1.09-.483-2.178-1.794-3.13-2.416C13.284 1.815 3.286-3.57.43 3.541c-1.837 4.487 2.72 8.906 4.284 11.184 1.157 1.588 2.652 3.383 3.469 5.178.476 1.173.611 2.417 1.088 3.66 1.088 3.036 2.108 6.42 3.537 9.25.748 1.45 1.564 2.969 2.516 4.28.544.76 1.496 1.105 1.7 2.348-.951 1.38-1.02 3.452-1.564 5.178-2.449 7.801-1.496 17.466 1.972 23.196 1.088 1.726 3.673 5.524 7.142 4.074 3.06-1.243 2.38-5.178 3.264-8.63.205-.83.069-1.38.476-1.933v.138c.953 1.933 1.904 3.797 2.789 5.73 2.108 3.383 5.78 6.904 8.841 9.252 1.633 1.242 2.925 3.382 4.966 4.142v-.208h-.137c-.408-.621-1.02-.897-1.564-1.38-1.224-1.243-2.585-2.762-3.536-4.143-2.857-3.866-5.374-8.146-7.618-12.565-1.088-2.14-2.04-4.487-2.924-6.627-.409-.83-.409-2.072-1.089-2.485-1.02 1.518-2.516 2.83-3.264 4.694-1.292 2.968-1.428 6.627-1.904 10.424-.273.07-.137 0-.273.14-2.176-.554-2.924-2.832-3.74-4.765-2.041-4.901-2.381-12.772-.613-18.433.477-1.45 2.517-6.006 1.701-7.387-.408-1.312-1.769-2.071-2.517-3.107-.884-1.312-1.836-2.968-2.448-4.418-1.633-3.866-2.449-8.147-4.217-12.013-.816-1.795-2.244-3.659-3.4-5.316-1.293-1.864-2.721-3.176-3.741-5.385-.34-.759-.817-2.002-.272-2.83.136-.553.407-.76.952-.898.884-.76 3.4.207 4.284.621 2.517 1.035 4.625 2.003 6.734 3.452.952.69 1.972 2.003 3.196 2.348h1.429c2.176.483 4.624.138 6.665.759 3.605 1.173 6.87 2.9 9.794 4.764 8.91 5.73 16.255 13.876 21.22 23.61.816 1.588 1.156 3.039 1.904 4.695 1.429 3.383 3.197 6.835 4.625 10.149 1.428 3.244 2.788 6.559 4.829 9.251 1.02 1.45 5.1 2.21 6.937 2.969 1.36.62 3.47 1.174 4.693 1.933 2.312 1.449 4.625 3.107 6.801 4.694 1.089.829 4.489 2.555 4.693 3.935" />
                                                                <path d="M22.737 17.072c-1.156 0-1.972.139-2.788.345v.138h.136c.544 1.105 1.496 1.865 2.176 2.831.544 1.104 1.02 2.21 1.565 3.314.067-.07.135-.138.135-.138.953-.69 1.429-1.795 1.429-3.452-.409-.483-.477-.966-.817-1.45-.407-.69-1.292-1.035-1.836-1.588" />
                                                            </g>
                                                            <defs><clipPath id="a"><path fill="#fff" d="M0 0h100v100H0z" /></clipPath></defs>
                                                        </svg>
                                                    </div>
                                                    <span className="text-[0.6rem] xs:text-xs sm:text-sm md:text-base font-medium text-white/80 group-hover:text-white transition-colors">MySQL</span>
                                                </div>

                                                {/* Figma */}
                                                <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 p-2 xs:p-2.5 sm:p-3 md:p-4 border border-white/10 rounded-lg xs:rounded-xl bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                                                    <div className="flex-shrink-0 w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
                                                        <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#a)">
                                                                <path fill="#0acf83" d="M33.333 100C42.533 100 50 92.533 50 83.333V66.667H33.333c-9.2 0-16.666 7.466-16.666 16.666S24.133 100 33.333 100" />
                                                                <path fill="#a259ff" d="M16.667 50c0-9.2 7.466-16.667 16.666-16.667H50v33.334H33.333c-9.2 0-16.666-7.467-16.666-16.667" />
                                                                <path fill="#f24e1e" d="M16.667 16.667C16.667 7.467 24.133 0 33.333 0H50v33.333H33.333c-9.2 0-16.666-7.466-16.666-16.666" />
                                                                <path fill="#ff7262" d="M50 0h16.667c9.2 0 16.666 7.467 16.666 16.667s-7.466 16.666-16.666 16.666H50z" />
                                                                <path fill="#1abcfe" d="M83.333 50c0 9.2-7.466 16.667-16.666 16.667S50 59.2 50 50s7.467-16.667 16.667-16.667S83.333 40.8 83.333 50" />
                                                            </g>
                                                            <defs><clipPath id="a"><path fill="#fff" d="M0 0h100v100H0z" /></clipPath></defs>
                                                        </svg>
                                                    </div>
                                                    <span className="text-[0.6rem] xs:text-xs sm:text-sm md:text-base font-medium text-white/80 group-hover:text-white transition-colors">Figma</span>
                                                </div>

                                                {/* Vercel */}
                                                <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 p-2 xs:p-2.5 sm:p-3 md:p-4 border border-white/10 rounded-lg xs:rounded-xl bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                                                    <div className="flex-shrink-0 w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
                                                        <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white/60 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill="#fff" fillRule="evenodd" d="M100 93.957 50 7 0 93.957z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-[0.6rem] xs:text-xs sm:text-sm md:text-base font-medium text-white/80 group-hover:text-white transition-colors">Vercel</span>
                                                </div>

                                                {/* Canva */}
                                                <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 p-2 xs:p-2.5 sm:p-3 md:p-4 border border-white/10 rounded-lg xs:rounded-xl bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                                                    <div className="flex-shrink-0 w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
                                                        <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#a)">
                                                                <path fill="#7d2ae7" d="M50 100c27.614 0 50-22.387 50-50 0-27.615-22.386-50-50-50S0 22.384 0 50c0 27.613 22.386 50 50 50" />
                                                                <path fill="url(#b)" d="M50 100c27.614 0 50-22.387 50-50 0-27.615-22.386-50-50-50S0 22.384 0 50c0 27.613 22.386 50 50 50" />
                                                                <path fill="url(#c)" d="M50 100c27.614 0 50-22.387 50-50 0-27.615-22.386-50-50-50S0 22.384 0 50c0 27.613 22.386 50 50 50" />
                                                                <path fill="url(#d)" d="M50 100c27.614 0 50-22.387 50-50 0-27.615-22.386-50-50-50S0 22.384 0 50c0 27.613 22.386 50 50 50" />
                                                                <path fill="url(#e)" d="M50 100c27.614 0 50-22.387 50-50 0-27.615-22.386-50-50-50S0 22.384 0 50c0 27.613 22.386 50 50 50" />
                                                                <path fill="#fff" d="M71.586 60.256c-.412 0-.775.348-1.153 1.11-4.268 8.653-11.638 14.775-20.168 14.775-9.862 0-15.969-8.902-15.969-21.201 0-20.834 11.608-32.88 21.803-32.88 4.765 0 7.674 2.995 7.674 7.76 0 5.654-3.213 8.648-3.213 10.642 0 .895.557 1.438 1.661 1.438 4.437 0 9.644-5.098 9.644-12.3 0-6.982-6.078-12.115-16.273-12.115-16.85 0-31.824 15.622-31.824 37.236 0 16.73 9.553 27.786 24.294 27.786 15.646 0 24.693-15.567 24.693-20.62 0-1.118-.572-1.631-1.169-1.631" />
                                                            </g>
                                                            <defs>
                                                                <radialGradient id="b" cx="0" cy="0" r="1" gradientTransform="rotate(-49.416 105.972 23.325)scale(77.3416)" gradientUnits="userSpaceOnUse"><stop stopColor="#6420ff" /><stop offset="1" stopColor="#6420ff" stopOpacity="0" /></radialGradient>
                                                                <radialGradient id="c" cx="0" cy="0" r="1" gradientTransform="rotate(54.703 2.249 31.273)scale(87.2168)" gradientUnits="userSpaceOnUse"><stop stopColor="#00c4cc" /><stop offset="1" stopColor="#00c4cc" stopOpacity="0" /></radialGradient>
                                                                <radialGradient id="d" cx="0" cy="0" r="1" gradientTransform="rotate(-45.195 116.13 21.111)scale(76.4053 35.1398)" gradientUnits="userSpaceOnUse"><stop stopColor="#6420ff" /><stop offset="1" stopColor="#6420ff" stopOpacity="0" /></radialGradient>
                                                                <radialGradient id="e" cx="0" cy="0" r="1" gradientTransform="rotate(66.52 10.177 37.912)scale(78.7295 131.889)" gradientUnits="userSpaceOnUse"><stop stopColor="#00c4cc" stopOpacity=".726" /><stop offset="0" stopColor="#00c4cc" /><stop offset="1" stopColor="#00c4cc" stopOpacity="0" /></radialGradient>
                                                                <clipPath id="a"><path fill="#fff" d="M0 0h100v100H0z" /></clipPath>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                    <span className="text-[0.6rem] xs:text-xs sm:text-sm md:text-base font-medium text-white/80 group-hover:text-white transition-colors">Canva</span>
                                                </div>

                                                {/* Vite */}
                                                <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 p-2 xs:p-2.5 sm:p-3 md:p-4 border border-white/10 rounded-lg xs:rounded-xl bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                                                    <div className="flex-shrink-0 w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center">
                                                        <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#646CFF] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill="#006bff" d="M100 2.993 38.063 17.615l-9.175 79.393zM30.831 18.957 0 25.912l27.858 70.785z" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-[0.6rem] xs:text-xs sm:text-sm md:text-base font-medium text-white/80 group-hover:text-white transition-colors">Vite</span>
                                                </div>
                                            </div>
                                        </motion.div>

                                        {/* Certificates Section */}
                                        <motion.div 
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={viewportConfig}
                                            variants={fadeUp}
                                            className="animate-fade-up bg-white/5 rounded-lg xs:rounded-xl sm:rounded-2xl border border-white/10 p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 mt-4 xs:mt-5 sm:mt-6 md:mt-8"
                                            style={getDelayStyle(0.28)}
                                        >
                                            <h2 className="text-[0.55rem] xs:text-[0.6rem] sm:text-xs font-medium uppercase tracking-[0.25em] xs:tracking-[0.3em] text-white/30 mb-3 xs:mb-4 sm:mb-5 md:mb-6">
                                                Certificates
                                            </h2>

                                            <motion.div 
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={viewportConfig}
                                                variants={staggerContainer}
                                                className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 lg:gap-5"
                                            >
                                                {/* Certificate 1 */}
                                                <motion.div
                                                    variants={staggerItem}
                                                    className="group relative bg-white/5 rounded-lg xs:rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                                                    onClick={() => openCertificateModal(
                                                        certImage,
                                                        'Introduction to Packet Tracer',
                                                        'Introduction to Packet Tracer',
                                                        'Cisco Networking Academy',
                                                        '2024'
                                                    )}
                                                >
                                                    <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-emerald-500/20 to-emerald-700/10">
                                                        <img
                                                            src={certImage}
                                                            alt="Introduction to Packet Tracer"
                                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                            loading="lazy"
                                                            decoding="async"
                                                        />
                                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-1.5 xs:p-2 sm:p-2.5 md:p-3 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                                                                <svg className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                    <circle cx="11" cy="11" r="7" />
                                                                    <path d="M21 21l-4.35-4.35" />
                                                                    <path d="M11 8v6" />
                                                                    <path d="M8 11h6" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="p-1.5 xs:p-2 sm:p-2.5 md:p-3">
                                                        <h3 className="text-[0.45rem] xs:text-[0.5rem] sm:text-[0.55rem] md:text-xs lg:text-sm font-medium text-white/80 group-hover:text-white transition-colors line-clamp-1">
                                                            Introduction to Packet Tracer
                                                        </h3>
                                                        <p className="text-[0.4rem] xs:text-[0.45rem] sm:text-[0.5rem] md:text-[0.55rem] lg:text-xs font-light text-white/40 truncate mt-0.5">
                                                            Cisco Networking Academy
                                                        </p>
                                                        <p className="text-[0.35rem] xs:text-[0.4rem] sm:text-[0.45rem] md:text-[0.5rem] font-light text-white/25 mt-0.5">
                                                            2024
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            </motion.div>
                                        </motion.div>

                                        {/* Certificate Modal */}
                                        {isModalOpen && selectedCertificate && (
                                            <div
                                                className="fixed inset-0 z-[100] flex items-center justify-center p-3 xs:p-4 sm:p-6 md:p-8 bg-black/50 backdrop-blur-sm"
                                                style={{ animation: 'fadeIn 0.25s ease-out' }}
                                                onClick={closeCertificateModal}
                                            >
                                                <div
                                                    className="relative w-full max-w-4xl max-h-[90vh] bg-[#1a1b1e] rounded-xl sm:rounded-2xl shadow-2xl ring-1 ring-white/10 flex flex-col"
                                                    style={{ animation: 'scaleIn 0.3s ease-out' }}
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    {/* X Close Button - Inside, More Visible */}
                                                    <button
                                                        onClick={closeCertificateModal}
                                                        className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 z-30 
                         w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 
                         flex items-center justify-center
                         bg-black/50 hover:bg-black/70 
                         backdrop-blur-sm
                         border border-white/20 hover:border-white/40
                         rounded-full
                         text-white/80 hover:text-white 
                         transition-all duration-300 hover:scale-110 
                         shadow-lg
                         focus:outline-none focus:ring-2 focus:ring-white/30"
                                                        aria-label="Close modal"
                                                    >
                                                        <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                            <line x1="18" y1="6" x2="6" y2="18" />
                                                            <line x1="6" y1="6" x2="18" y2="18" />
                                                        </svg>
                                                    </button>

                                                    {/* Certificate Image */}
                                                    <div className="flex-1 overflow-hidden rounded-t-xl sm:rounded-t-2xl bg-[#1a1b1e] flex items-center justify-center p-3 sm:p-4 md:p-6 min-h-[40vh] sm:min-h-[50vh]">
                                                        <img
                                                            src={selectedCertificate.src}
                                                            alt={selectedCertificate.alt}
                                                            className="w-full h-full max-h-[65vh] object-contain"
                                                            loading="eager"
                                                        />
                                                    </div>

                                                    {/* Certificate Info */}
                                                    <div className="p-3 xs:p-4 sm:p-5 md:p-6 border-t border-white/5 bg-[#1a1b1e] rounded-b-xl sm:rounded-b-2xl">
                                                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                            <div>
                                                                <h3 className="text-sm sm:text-base md:text-lg font-medium text-white/90">
                                                                    {selectedCertificate.title}
                                                                </h3>
                                                                <p className="text-xs sm:text-sm font-light text-white/50 mt-0.5">
                                                                    {selectedCertificate.issuer}
                                                                </p>
                                                            </div>
                                                            <span className="text-xs sm:text-sm font-light text-white/30">
                                                                {selectedCertificate.year}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Timeline - Horizontal line with alternating bullets */}
                                        <motion.div 
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={viewportConfig}
                                            variants={fadeUp}
                                            className="animate-fade-up bg-white/5 rounded-lg xs:rounded-xl sm:rounded-2xl border border-white/10 p-4 xs:p-5 sm:p-6 md:p-8 mt-4 xs:mt-5 sm:mt-6 md:mt-8"
                                            style={getDelayStyle(0.25)}
                                        >
                                            <h2 className="text-[0.55rem] xs:text-[0.6rem] sm:text-xs font-medium uppercase tracking-[0.25em] xs:tracking-[0.3em] text-white/30 mb-5 xs:mb-6 sm:mb-7 md:mb-10">
                                                Timeline
                                            </h2>

                                            <div className="relative">
                                                {/* Horizontal Line */}
                                                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1.5px] xs:h-[2px] bg-white/15"></div>

                                                <div className="relative flex justify-between items-start gap-1 xs:gap-1.5 sm:gap-2">

                                                    {/* 2017 - Above */}
                                                    <div className="flex flex-col items-center relative" style={{ width: '20%' }}>
                                                        <div className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-white/30 border border-white/15 -mb-5 xs:-mb-6 sm:-mb-7 md:-mb-8 relative z-10"></div>
                                                        <span className="text-[0.55rem] xs:text-xs sm:text-sm md:text-base lg:text-lg font-medium text-white/80 mt-4 xs:mt-5 sm:mt-6 md:mt-8 lg:mt-10">2022</span>
                                                        <p className="text-[0.45rem] xs:text-[0.5rem] sm:text-xs md:text-sm font-light text-white/50 text-center mt-1 xs:mt-1.5 sm:mt-2 leading-relaxed max-w-[60px] xs:max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px]">First "Hello World!"</p>
                                                    </div>

                                                    {/* 2018 - Below */}
                                                    <div className="flex flex-col items-center relative" style={{ width: '20%' }}>
                                                        <div className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-white/35 border border-white/18 -mb-5 xs:-mb-6 sm:-mb-7 md:-mb-8 relative z-10 order-1"></div>
                                                        <span className="text-[0.55rem] xs:text-xs sm:text-sm md:text-base lg:text-lg font-medium text-white/80 order-2 mt-4 xs:mt-5 sm:mt-6 md:mt-8 lg:mt-10">2023</span>
                                                        <p className="text-[0.45rem] xs:text-[0.5rem] sm:text-xs md:text-sm font-light text-white/50 text-center mt-1 xs:mt-1.5 sm:mt-2 leading-relaxed max-w-[60px] xs:max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px] order-3">Learned Java</p>
                                                    </div>

                                                    {/* 2019 - Above */}
                                                    <div className="flex flex-col items-center relative" style={{ width: '20%' }}>
                                                        <div className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-white/40 border border-white/20 -mb-5 xs:-mb-6 sm:-mb-7 md:-mb-8 relative z-10"></div>
                                                        <span className="text-[0.55rem] xs:text-xs sm:text-sm md:text-base lg:text-lg font-medium text-white/80 mt-4 xs:mt-5 sm:mt-6 md:mt-8 lg:mt-10">2024</span>
                                                        <p className="text-[0.45rem] xs:text-[0.5rem] sm:text-xs md:text-sm font-light text-white/50 text-center mt-1 xs:mt-1.5 sm:mt-2 leading-relaxed max-w-[60px] xs:max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px]">Web Development</p>
                                                    </div>

                                                    {/* 2020 - Below */}
                                                    <div className="flex flex-col items-center relative" style={{ width: '20%' }}>
                                                        <div className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-white/45 border border-white/22 -mb-5 xs:-mb-6 sm:-mb-7 md:-mb-8 relative z-10 order-1"></div>
                                                        <span className="text-[0.55rem] xs:text-xs sm:text-sm md:text-base lg:text-lg font-medium text-white/80 order-2 mt-4 xs:mt-5 sm:mt-6 md:mt-8 lg:mt-10">2025</span>
                                                        <p className="text-[0.45rem] xs:text-[0.5rem] sm:text-xs md:text-sm font-light text-white/50 text-center mt-1 xs:mt-1.5 sm:mt-2 leading-relaxed max-w-[60px] xs:max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px] order-3">Project Development</p>
                                                    </div>

                                                    {/* 2021 - Above */}
                                                    <div className="flex flex-col items-center relative" style={{ width: '20%' }}>
                                                        <div className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 rounded-full bg-white/50 border border-white/25 -mb-5 xs:-mb-6 sm:-mb-7 md:-mb-8 relative z-10"></div>
                                                        <span className="text-[0.55rem] xs:text-xs sm:text-sm md:text-base lg:text-lg font-medium text-white/80 mt-4 xs:mt-5 sm:mt-6 md:mt-8 lg:mt-10">2026</span>
                                                        <p className="text-[0.45rem] xs:text-[0.5rem] sm:text-xs md:text-sm font-light text-white/50 text-center mt-1 xs:mt-1.5 sm:mt-2 leading-relaxed max-w-[60px] xs:max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px]">React & Modern JS</p>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                          </motion.div>   
                                        
                                    </motion.div>
                                    

                                    
                                </div>
                                
                            </section>
                        </div>

                        <Footer />
                    </section>
                </div>
            </main>
        </div>
    )
}

export default About