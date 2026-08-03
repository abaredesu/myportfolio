import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Footer from '../components/footer.jsx';
import Sidenavbar from '../components/sidenavbar.jsx'
import exp1 from '../assets/images/exp11.png'
import exp2 from '../assets/images/exp2.png'
import exp3 from '../assets/images/exp3.png'
import exp4 from '../assets/images/exp4.png'

const experienceNavItems = [
    { label: 'Home', href: '/', icon: HomeIcon },
    { label: 'Projects', href: '/projects', icon: FolderIcon },
    { label: 'Experience', href: '/experience', icon: BriefcaseIcon },
    { label: 'Contacts', href: '/contacts', icon: PhoneIcon },
]

const experiences = [
    {
        id: 'smesoft',
        company: 'SMESoft Inc.',
        role: 'Frontend Developer Intern',
        summary: 'Built interface components and strengthened responsive layout skills. Worked closely with senior developers to implement pixel-perfect designs and ensure cross-browser compatibility. Contributed to the development of reusable component libraries that accelerated team productivity.',
        duration: 'Dec 2025 – Mar 2026',
        location: 'New Era, Quezon City',
        image: exp1,
    },
]

const seminars = [
    {
        id: 'asics3',
        title: '3rd ASICS Summit',
        organizer: 'ASICS',
        summary: 'Joined sessions on software tools, teamwork, and practical development workflows. Gained insights into industry best practices and emerging technologies in software development.',
        date: '2026',
        location: 'Bulacan State University - Bustos Campus',
        image: exp4,
    },
    {
        id: 'asics2',
        title: '2nd ASICS Summit',
        organizer: 'ASICS',
        summary: 'Expanded knowledge of current technologies and development best practices. Participated in hands-on workshops and networking sessions with industry professionals.',
        date: '2025',
        location: 'Bulacan State University - Bustos Campus',
        image: exp3,
    },
    {
        id: 'uiux',
        title: 'UI/UX Design Workshop',
        organizer: 'ASICS',
        summary: 'Immersive workshop focused on user-centered design principles, prototyping techniques, and design thinking methodologies. Collaborated on real-world design challenges and received mentorship from experienced designers.',
        date: '2024',
        location: 'Bulacan State University - Bustos Campus',
        image: exp2,
    },
]

const getDelayStyle = (index, base = 0.12, step = 0.08) => ({
    animationDelay: `${(base + index * step).toFixed(2)}s`,
})

// Scroll Reveal Component - Optimized
function ScrollReveal({ children, direction = 'up', delay = 0, duration = 0.5, className = '' }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.1, margin: "-20px" })

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
            x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
            scale: direction === 'pop' ? 0.95 : 1,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            transition: {
                duration: duration,
                delay: delay,
                ease: [0.25, 0.1, 0.25, 1.0],
            },
        },
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    )
}

function Experience() {
    return (
        <div className="min-h-screen bg-[#131415] text-white">
            <Sidenavbar navItems={experienceNavItems} />

            <main className="lg:pl-[244px]">
                <div className="mx-auto max-w-[1320px] px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3">
                    <section className="mt-2 xs:mt-3 sm:mt-4 md:mt-5 lg:mt-6 mb-2 sm:mb-3 md:mb-4 overflow-y-auto overflow-x-hidden no-scrollbar rounded-[18px] xs:rounded-[20px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[32px] bg-[#303133] shadow-[0_30px_100px_rgba(0,0,0,0.35)] ring-1 ring-white/5 w-full h-[calc(100vh-0.5rem)] xs:h-[calc(100vh-1rem)] sm:h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)]">

                        <div className="px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-20 py-3 xs:py-4 sm:py-5 md:py-7 lg:py-9 xl:py-11 2xl:py-14">
                            {/* Experience Header - Centered */}
                            <div className="flex flex-col items-start w-full 2xl:px-70">
                                {/* Icon and Title Row - Left Aligned */}
                                <ScrollReveal direction="up" delay={0}>
                                    <div className="flex items-center gap-3 xs:gap-4 sm:gap-5 md:gap-6">
                                        <div className="flex-shrink-0">
                                            <div className="h-10 w-10 xs:h-11 xs:w-11 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-18 xl:w-18 2xl:h-20 2xl:w-20 rounded-xl xs:rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-2 xs:p-2.5 sm:p-3 ring-2 ring-white/20 shadow-lg flex items-center justify-center backdrop-blur-sm">
                                                <BriefcaseIcon className="h-5 w-5 xs:h-5.5 xs:w-5.5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-9 xl:w-9 2xl:h-11 2xl:w-11 text-white/90" strokeWidth="2" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col text-left">
                                            <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                                                Experience
                                            </p>
                                            <p className="text-[0.5rem] xs:text-[0.55rem] sm:text-xs md:text-sm text-white/40 tracking-wider">
                                                Professional Journey
                                            </p>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* Introduction - Left Aligned */}
                                <ScrollReveal direction="up" delay={0.1}>
                                    <div className="mt-6 xs:mt-7 sm:mt-8 md:mt-10 lg:mt-12 text-left">
                                        <h1 className="text-[clamp(0.9rem,2.8vw,1.4rem)] xs:text-[clamp(1rem,3vw,1.5rem)] sm:text-[clamp(1.1rem,3.2vw,1.6rem)] md:text-[clamp(1.2rem,3.5vw,1.8rem)] lg:text-[clamp(1.4rem,4vw,2rem)] font-light leading-[1.5] tracking-wide text-white/60 max-w-3xl">
                                            Professional experience and seminars that strengthened my technical and practical skills.
                                        </h1>
                                    </div>
                                </ScrollReveal>

                                {/* Decorative line - Left Aligned */}
                                <ScrollReveal direction="up" delay={0.15}>
                                    <div className="mt-3 xs:mt-4 sm:mt-5 md:mt-6 w-14 xs:w-16 sm:w-18 md:w-20 h-0.5 bg-gradient-to-r from-white/40 to-transparent rounded-full"></div>
                                </ScrollReveal>
                            </div>

                            {/* Real Work Experience Section */}
                            <section id="work-experience" className="mt-8 xs:mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 px-1 xs:px-2 sm:px-0">
                                {/* Work Experience Header */}
                                <ScrollReveal direction="up" delay={0.1}>
                                    <div className="max-w-4xl mx-auto mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12">
                                        <div className="flex items-center gap-2 xs:gap-3 sm:gap-4">
                                            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
                                            <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-3">
                                                <svg className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                                <h2 className="text-[0.65rem] xs:text-xs sm:text-sm md:text-base lg:text-lg font-medium tracking-tight text-white/60">
                                                    Real Work Experience
                                                </h2>
                                            </div>
                                            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* Experience List */}
                                <div className="max-w-4xl mx-auto space-y-6 xs:space-y-7 sm:space-y-8 md:space-y-10 lg:space-y-12">
                                    {experiences.map((item, index) => (
                                        <ExperienceItem key={item.id} experience={item} index={index} />
                                    ))}
                                </div>
                            </section>

                            {/* Seminars Section */}
                            <section id="seminars" className="mt-10 xs:mt-12 sm:mt-14 md:mt-18 lg:mt-22 xl:mt-26 px-1 xs:px-2 sm:px-0">
                                {/* Seminars Header */}
                                <ScrollReveal direction="up" delay={0.1}>
                                    <div className="max-w-4xl mx-auto mb-6 xs:mb-7 sm:mb-8 md:mb-10 lg:mb-12">
                                        <div className="flex items-center gap-2 xs:gap-3 sm:gap-4">
                                            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
                                            <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-3">
                                                <svg className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                                </svg>
                                                <h2 className="text-[0.65rem] xs:text-xs sm:text-sm md:text-base lg:text-lg font-medium tracking-tight text-white/60">
                                                    Seminars & Workshops
                                                </h2>
                                            </div>
                                            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* Seminars List */}
                                <div className="max-w-4xl mx-auto space-y-5 xs:space-y-6 sm:space-y-7 md:space-y-8 lg:space-y-10">
                                    {seminars.map((item, index) => (
                                        <SeminarItem key={item.id} seminar={item} index={index} />
                                    ))}
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

function ExperienceItem({ experience, index }) {
    return (
        <ScrollReveal direction="up" delay={0.08 + index * 0.06} duration={0.4}>
            <article className="group border-b border-white/5 last:border-0 pb-5 xs:pb-6 sm:pb-7 md:pb-8 lg:pb-10 last:pb-0 transition-all duration-300 hover:border-white/10">
                <div className="flex flex-col md:flex-row md:items-start md:gap-4 lg:gap-6 xl:gap-8">
                    {/* Content with Large Image */}
                    <div className="flex-1 mt-0">
                        {/* Large Image - Top */}
                        <div className="w-full md:w-[160px] lg:w-[200px] xl:w-[240px] 2xl:w-[280px] mb-3 xs:mb-3.5 sm:mb-4">
                            <div className="aspect-[6/1.5] rounded-lg xs:rounded-xl overflow-hidden border border-white/10 bg-white/5">
                                {experience.image ? (
                                    <img
                                        src={experience.image}
                                        alt={experience.company}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 will-change-transform"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-white/5 flex items-center justify-center">
                                        <BriefcaseIcon className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 text-white/20" />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Text Content - Below Image */}
                        <div className="flex-1 min-w-0">
                            {/* Role and Company */}
                            <div className="flex flex-wrap items-center gap-x-1.5 xs:gap-x-2 gap-y-0.5 xs:gap-y-1">
                                <h3 className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-tight text-white">
                                    {experience.role}
                                </h3>
                                <span className="text-xs xs:text-sm sm:text-base font-light text-white/30">
                                    at
                                </span>
                                <span className="text-xs xs:text-sm sm:text-base md:text-lg font-light text-white/60">
                                    {experience.company}
                                </span>
                                <span className="text-emerald-400/60 text-[0.6rem] xs:text-xs sm:text-sm ml-0.5 xs:ml-1">🟢</span>
                            </div>

                            {/* Summary */}
                            <p className="mt-1.5 xs:mt-2 sm:mt-2.5 md:mt-3 text-[0.7rem] xs:text-xs sm:text-sm md:text-base font-light text-white/50 leading-relaxed max-w-3xl">
                                {experience.summary}
                            </p>

                            {/* Location */}
                            {experience.location && (
                                <div className="mt-2 xs:mt-2.5 sm:mt-3 flex items-center gap-1 xs:gap-1.5 text-[0.6rem] xs:text-xs sm:text-sm text-white/25">
                                    <svg className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-white/15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                    <span className="capitalize">{experience.location}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Duration - Aligned to top */}
                    <div className="md:w-[120px] lg:w-[140px] xl:w-[160px] flex-shrink-0 text-left md:text-right mt-2 xs:mt-2.5 sm:mt-3 md:mt-0">
                        <span className="text-xs xs:text-sm sm:text-base font-medium text-white/50 tracking-wide">
                            {experience.duration}
                        </span>
                    </div>
                </div>
            </article>
        </ScrollReveal>
    )
}

function SeminarItem({ seminar, index }) {
    return (
        <ScrollReveal direction="up" delay={0.08 + index * 0.06} duration={0.4}>
            <article className="group border-b border-white/5 last:border-0 pb-4 xs:pb-5 sm:pb-6 md:pb-7 lg:pb-8 last:pb-0 transition-all duration-300 hover:border-white/10">
                <div className="flex flex-col md:flex-row md:items-start md:gap-4 lg:gap-6 xl:gap-8">
                    {/* Right - Content with Large Image */}
                    <div className="flex-1 mt-1 xs:mt-1.5 sm:mt-2 md:mt-0">
                        <div className="flex flex-col md:flex-row md:items-start gap-3 xs:gap-3.5 sm:gap-4 md:gap-5 lg:gap-6">
                            {/* Large Image */}
                            <div className="w-full md:w-[140px] lg:w-[180px] xl:w-[200px] flex-shrink-0">
                                <div className="aspect-[4/3] rounded-lg xs:rounded-xl overflow-hidden border border-white/10 bg-white/5">
                                    {seminar.image ? (
                                        <img
                                            src={seminar.image}
                                            alt={seminar.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 will-change-transform"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-white/5 flex items-center justify-center">
                                            <svg className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 text-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="flex-1 min-w-0">
                                {/* Title and Organizer */}
                                <div className="flex flex-wrap items-center gap-x-1.5 xs:gap-x-2 gap-y-0.5 xs:gap-y-1">
                                    <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-medium tracking-tight text-white/80">
                                        {seminar.title}
                                    </h3>
                                    <span className="text-xs xs:text-sm sm:text-base font-light text-white/25">
                                        by
                                    </span>
                                    <span className="text-xs xs:text-sm sm:text-base font-light text-white/50">
                                        {seminar.organizer}
                                    </span>
                                </div>

                                {/* Summary */}
                                <p className="mt-1.5 xs:mt-2 sm:mt-2.5 text-[0.7rem] xs:text-xs sm:text-sm md:text-base font-light text-white/40 leading-relaxed max-w-3xl">
                                    {seminar.summary}
                                </p>

                                {/* Location */}
                                {seminar.location && (
                                    <div className="mt-1.5 xs:mt-2 flex items-center gap-1 xs:gap-1.5 text-[0.6rem] xs:text-xs sm:text-sm text-white/20">
                                        <svg className="w-3 h-3 xs:w-3.5 xs:h-3.5 text-white/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                        <span className="capitalize">{seminar.location}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right - Date (moved from left to right) */}
                    <div className="md:w-[120px] lg:w-[140px] xl:w-[160px] flex-shrink-0 text-left md:text-right mt-1.5 xs:mt-2 sm:mt-2.5 md:mt-0">
                        <span className="text-xs xs:text-sm sm:text-base font-medium text-white/40 tracking-wide">
                            {seminar.date}
                        </span>
                    </div>
                </div>
            </article>
        </ScrollReveal>
    )
}

// Icons remain unchanged...
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

export default Experience