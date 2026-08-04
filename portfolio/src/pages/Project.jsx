import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Footer from '../components/footer.jsx';
import Sidenavbar from '../components/sidenavbar.jsx'

import fireQuakeImage from '../assets/images/fqe-logo.jpeg'
import fireQuakeImage0 from '../assets/images/p1.jpeg'
import fireQuakeImage1 from '../assets/firequakeescape/fqe1.jpeg'
import fireQuakeImage2 from '../assets/firequakeescape/fqe2.jpeg'
import fireQuakeImage3 from '../assets/firequakeescape/fqe3.jpeg'
import fireQuakeImage4 from '../assets/firequakeescape/fqe4.jpeg'
import fireQuakeImage5 from '../assets/firequakeescape/fqe5.jpeg'
import fireQuakeImage6 from '../assets/firequakeescape/fqe6.jpeg'
import fireQuakeImage7 from '../assets/firequakeescape/fqe7.jpeg'
import fireQuakeImage8 from '../assets/firequakeescape/fqe8.jpeg'
import fireQuakeImage9 from '../assets/firequakeescape/fqe9.jpeg'
import fireQuakeImage10 from '../assets/firequakeescape/fqe10.jpeg'
import fireQuakeImage11 from '../assets/firequakeescape/fqe11.jpeg'
import fireQuakeImage12 from '../assets/firequakeescape/fqe12.jpeg'
import fireQuakeImage13 from '../assets/firequakeescape/fqe13.jpeg'
import fireQuakeImage14 from '../assets/firequakeescape/fqe14.jpeg'
import fireQuakeImage15 from '../assets/firequakeescape/fqe15.jpeg'
import fireQuakeImage16 from '../assets/firequakeescape/fqe16.jpeg'
import fireQuakeImage17 from '../assets/firequakeescape/fqe17.jpeg'
import fireQuakeImage18 from '../assets/firequakeescape/fqe18.jpeg'
import fireQuakeImage19 from '../assets/firequakeescape/fqe19.jpeg'
import fireQuakeImage20 from '../assets/firequakeescape/fqe20.jpeg'
import fireQuakeImage21 from '../assets/firequakeescape/fqe21.jpeg'
import fireQuakeImage22 from '../assets/firequakeescape/fqe22.jpeg'
import fireQuakeImage23 from '../assets/firequakeescape/fqe23.jpeg'
import fireQuakeImage24 from '../assets/firequakeescape/fqe24.jpeg'

import pastaNestImage from '../assets/images/p4.png'
import pastaNestImage22 from '../assets/images/p5.png'
import pastaNestImage1 from '../assets/pastanest/pn1.png'
import pastaNestImage2 from '../assets/pastanest/pn2.png'
import pastaNestImage3 from '../assets/pastanest/pn3.png'
import pastaNestImage4 from '../assets/pastanest/pn4.png'
import pastaNestImage5 from '../assets/pastanest/pn5.png'
import pastaNestImage6 from '../assets/pastanest/pn6.png'
import pastaNestImage7 from '../assets/pastanest/pn7.png'
import pastaNestImage8 from '../assets/pastanest/pn8.png'
import pastaNestImage9 from '../assets/pastanest/pn9.png'
import pastaNestImage10 from '../assets/pastanest/pn10.png'
import pastaNestImage11 from '../assets/pastanest/pn11.png'
import pastaNestImage12 from '../assets/pastanest/pn12.png'

import bulsuSnapImage from '../assets/images/p3.png'
import bulsuSnapImage1 from '../assets/bulsusnap/bs1.jpeg'
import bulsuSnapImage2 from '../assets/bulsusnap/bs2.jpeg'
import bulsuSnapImage3 from '../assets/bulsusnap/bs3.jpeg'
import bulsuSnapImage4 from '../assets/bulsusnap/bs4.jpeg'
import bulsuSnapImage5 from '../assets/bulsusnap/bs5.jpeg'
import bulsuSnapImage6 from '../assets/bulsusnap/bs6.jpeg'
import bulsuSnapImage7 from '../assets/bulsusnap/bs7.jpeg'
import bulsuSnapImage8 from '../assets/bulsusnap/bs8.jpeg'
import bulsuSnapImage9 from '../assets/bulsusnap/bs9.jpeg'
import bulsuSnapImage10 from '../assets/bulsusnap/bs10.jpeg'
import bulsuSnapImage11 from '../assets/bulsusnap/bs11.jpeg'
import bulsuSnapImage12 from '../assets/bulsusnap/bs12.jpeg'
import bulsuSnapImage13 from '../assets/bulsusnap/bs13.jpeg'
import bulsuSnapImage14 from '../assets/bulsusnap/bs14.jpeg'

import nestCafeImage from '../assets/images/p2.jpeg'
import nestCafeImage2 from '../assets/images/p3.jpeg'
import nestScreenshot1 from '../assets/thenestcafe/nest1.png'
import nestScreenshot2 from '../assets/thenestcafe/nest2.png'
import nestScreenshot3 from '../assets/thenestcafe/nest3.png'
import nestScreenshot4 from '../assets/thenestcafe/nest4.png'
import nestScreenshot5 from '../assets/thenestcafe/nest5.png'
import nestScreenshot6 from '../assets/thenestcafe/nest6.png'
import nestScreenshot7 from '../assets/thenestcafe/nest7.png'
import nestScreenshot8 from '../assets/thenestcafe/nest8.png'
import nestScreenshot9 from '../assets/thenestcafe/nest9.png'
import nestScreenshot10 from '../assets/thenestcafe/nest10.png'
import nestScreenshot11 from '../assets/thenestcafe/nest11.png'
import nestScreenshot12 from '../assets/thenestcafe/nest12.png'
import nestScreenshot13 from '../assets/thenestcafe/nest13.png'
import nestScreenshot14 from '../assets/thenestcafe/nest14.png'
import nestScreenshot15 from '../assets/thenestcafe/nest15.png'
import nestScreenshot16 from '../assets/thenestcafe/nest16.png'
import nestScreenshot17 from '../assets/thenestcafe/nest17.png'
import nestScreenshot18 from '../assets/thenestcafe/nest18.png'
import nestScreenshot19 from '../assets/thenestcafe/nest19.png'
import nestScreenshot20 from '../assets/thenestcafe/nest20.png'
import nestScreenshot21 from '../assets/thenestcafe/nest21.png'

const projectNavItems = [
    { label: 'Home', href: '/', icon: HomeIcon },
    { label: 'Projects', href: '/projects', icon: FolderIcon },
    { label: 'Experience', href: '/experience', icon: BriefcaseIcon },
    { label: 'Contacts', href: '/contacts', icon: PhoneIcon },
]

const projectCards = [
    {
        title: 'FireQuakeEscape',
        category: 'MOBILE EVACUATION GAME',
        summary: 'Disaster evacuation game with realistic emergency scenarios.',
        image1: fireQuakeImage,
        image: fireQuakeImage0,
        techStack: ['Unity', 'C#', 'PHP', 'HTML', 'Tailwind CSS', 'MySQL'],
        overview: 'FireQuakeEscape is a mobile evacuation game that simulates earthquake and fire emergencies through interactive gameplay. Players navigate realistic disaster scenarios while learning proper emergency response procedures in an engaging and educational environment. The game promotes disaster preparedness through interactive challenges and decision-making. It was developed to combine learning with an immersive gaming experience. The project emphasizes awareness, quick thinking, and problem-solving skills.',
        features: [
            'Real-time disaster simulation',
            'Multiple evacuation scenarios',
            'Dynamic difficulty scaling',
            'Achievement and leaderboard system',
            'Offline gameplay support',
            'Interactive training modules',
            'Performance tracking system',
            'Mission-based objectives'
        ],
        details: {
            type: 'Mobile Game',
            project: 'Group Project',
            platform: 'Android',
            duration: '3 Months',
            status: 'Completed'
        },
        role: [
            'Frontend Development',
            'UI/UX Design',
            'Documentation'
        ],
        screenshots: [
            fireQuakeImage1, fireQuakeImage2, fireQuakeImage3, fireQuakeImage4, fireQuakeImage5,
            fireQuakeImage6, fireQuakeImage7, fireQuakeImage8, fireQuakeImage9, fireQuakeImage10,
            fireQuakeImage11, fireQuakeImage12, fireQuakeImage13, fireQuakeImage14, fireQuakeImage15,
            fireQuakeImage16, fireQuakeImage17, fireQuakeImage18, fireQuakeImage19, fireQuakeImage20,
            fireQuakeImage21, fireQuakeImage22, fireQuakeImage23, fireQuakeImage24
        ],
       githubLink: '#',
        liveLink: '#'
    },
    {
        title: 'The Nest Cafe',
        category: 'CAFE WEBSITE SYSTEM',
        summary: 'Modern cafe management system with online ordering features.',
        image: nestCafeImage2,
        image1: nestCafeImage,
        techStack: ['HTML', 'CSS', 'TailwindCSS', 'PHP', 'MySQL', 'JavaScript'],
        overview: 'The Nest Cafe is a full-stack cafe management system that streamlines online ordering, reservations, and menu management. It provides customers with a seamless ordering experience while giving administrators efficient tools to manage daily operations. The platform improves workflow by organizing orders and inventory in one system. Its responsive interface ensures accessibility across desktop and mobile devices. The system was designed to improve both customer convenience and business efficiency.',
        features: [
            'Online menu browsing',
            'Online food ordering system',
            'Custom food ordering',
            'Real-time order tracking',
            'Inventory management',
            'Admin dashboard controls',
            'Responsive web design',
            'Order history tracking'
        ],
        details: {
            type: 'Web Application',
            project: 'Individual Project',
            platform: 'Web',
            duration: '4 Months',
            status: 'Completed'
        },
        role: [
            'Frontend Development',
            'Backend Development',
            'UI/UX Design',
        ],
        screenshots: [
            nestScreenshot1, nestScreenshot2, nestScreenshot3, nestScreenshot4, nestScreenshot5,
            nestScreenshot6, nestScreenshot7, nestScreenshot8, nestScreenshot9, nestScreenshot10,
            nestScreenshot11, nestScreenshot12, nestScreenshot13, nestScreenshot14, nestScreenshot15,
            nestScreenshot16, nestScreenshot17, nestScreenshot18, nestScreenshot19, nestScreenshot20,
            nestScreenshot21
        ],
        githubLink: '#',
        liveLink: '#'
    },
    {
        title: 'Pasta Nest',
        category: 'PASTA ORDERING WEBSITE',
        summary: 'Responsive pasta ordering website with seamless user experience.',
        image: pastaNestImage22,
        image1: pastaNestImage,
        techStack: ['HTML', 'CSS', 'JavaScript'],
        overview: 'Pasta Nest is a modern food ordering website that allows customers to browse menus, and place orders through a responsive interface. The platform focuses on delivering a smooth user experience with an intuitive design and secure checkout process. Clean layouts and simple navigation make ordering fast and convenient. The project emphasizes responsive design and usability for all users. It delivers a simple and enjoyable online ordering experience.',
        features: [
            'Online menu browsing',
            'Custom food ordering',
            'Simple checkout process',
            'Order summary review',
            'Food category browsing',
            'Menu item details',
            'Easy order navigation',
            'Responsive web design'
        ],
        details: {
            type: 'E-Commerce Website',
            project: 'Individual Project',
            platform: 'Web',
            duration: '3 Days',
            status: 'Completed'
        },
        role: [
            'Frontend Development',
            'UI/UX Design'
        ],
        screenshots: [
            pastaNestImage1, pastaNestImage2, pastaNestImage3, pastaNestImage4, pastaNestImage5,
            pastaNestImage6, pastaNestImage7, pastaNestImage8, pastaNestImage9, pastaNestImage10,
            pastaNestImage11, pastaNestImage12
        ],
        githubLink: '#',
        liveLink: '#'
    },
    {
        title: 'BulsuSnap',
        category: 'UNIVERSITY SOCIAL APP',
        summary: 'Campus social platform for sharing pictures and connecting.',
        image: bulsuSnapImage,
        image1: bulsuSnapImage,
        techStack: ['Android Studio', 'Firebase', 'Kotlin', 'XML',],
        overview: 'BulsuSnap is a university-focused social media application designed to help students connect, share updates, and collaborate within the campus community. It includes features such as real-time messaging, picture posting, and university-focused communication tools. The platform encourages communication and engagement among students in one centralized space. It was built to provide a more connected and interactive campus experience. The application promotes collaboration both inside and outside the classroom.',
        features: [
            'User account registration',
            'Photo posting and sharing',
            'Real-time private messaging',
            'Social users connection',
            'Social networking features',
            'Admin content management',
            'Profile customization',
            'Firebase database integration'
        ],
        details: {
            type: 'Mobile App',
            project: 'Group Project',
            platform: 'iOS & Android',
            duration: '1 Month',
            status: 'In Development'
        },
        role: [
            'Frontend Development',
            'Backend Development',
            'Database Design',
            'UI/UX Design'
        ],
        screenshots: [
            bulsuSnapImage1, bulsuSnapImage2, bulsuSnapImage3, bulsuSnapImage4,
            bulsuSnapImage5, bulsuSnapImage6, bulsuSnapImage7, bulsuSnapImage8,
            bulsuSnapImage9, bulsuSnapImage10, bulsuSnapImage11, bulsuSnapImage12,
            bulsuSnapImage13, bulsuSnapImage14
        ],
        githubLink: '#',
        liveLink: '#'
    },
]

function Project() {
    const [selectedProject, setSelectedProject] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const openModal = (project) => {
        setSelectedProject(project)
        setIsModalOpen(true)
        document.body.style.overflow = 'hidden'
    }

    const closeModal = () => {
        setIsModalOpen(false)
        document.body.style.overflow = 'unset'
        setTimeout(() => setSelectedProject(null), 300)
    }

    const openGalleryModal = (index) => {
        setCurrentImageIndex(index)
        setIsGalleryModalOpen(true)
        document.body.style.overflow = 'hidden'
    }

    const closeGalleryModal = () => {
        setIsGalleryModalOpen(false)
        document.body.style.overflow = 'unset'
    }

    const navigateImage = (direction) => {
        if (selectedProject) {
            const newIndex = currentImageIndex + direction
            if (newIndex >= 0 && newIndex < selectedProject.screenshots.length) {
                setCurrentImageIndex(newIndex)
            }
        }
    }

    return (
        <div className="min-h-screen bg-[#131415] text-white">
            <Sidenavbar navItems={projectNavItems} />

            <main className="lg:pl-[244px]">
                <div className="mx-auto max-w-[1320px] px-4 py-2 sm:px-6 lg:px-8 lg:py-3">
                    <section id="home" className="mt-4 sm:mt-6 mb-3 sm:mb-4 overflow-y-auto overflow-x-hidden no-scrollbar rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] bg-[#303133] shadow-[0_30px_100px_rgba(0,0,0,0.35)] ring-1 ring-white/5 w-full h-[calc(100vh-2rem)] sm:h-[calc(100vh-4rem)]">
                        {/* Hero Section */}
                        <div className="flex flex-col min-h-full">
                            <div className="px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 xl:px-14 xl:py-16 2xl:px-35 2xl:py-20 flex-1">
                                {/* Projects Header - Centered */}
                                <div className="flex flex-col items-start w-full 2xl:px-40">
                                    {/* Icon and Title Row - Left Aligned */}
                                    <div className="flex items-center gap-3 xs:gap-4 sm:gap-5 animate-fade-up" style={getDelayStyle(0)}>
                                        <div className="flex-shrink-0">
                                            <div className="h-12 w-12 xs:h-13 xs:w-13 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-18 lg:w-18 xl:h-20 xl:w-20 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-2.5 xs:p-3 ring-2 ring-white/20 shadow-lg flex items-center justify-center backdrop-blur-sm">
                                                <FolderIcon className="h-6 w-6 xs:h-6.5 xs:w-6.5 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 xl:h-11 xl:w-11 text-white/90" strokeWidth="2" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col text-left">
                                            <p className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                                                Projects
                                            </p>
                                            <p className="text-[0.55rem] xs:text-xs sm:text-sm text-white/40 tracking-wider">
                                                Portfolio Showcase
                                            </p>
                                        </div>
                                    </div>

                                    {/* Two-line Introduction - Left Aligned */}
                                    <div className="animate-fade-up mt-8 xs:mt-9 sm:mt-10 md:mt-12 text-left" style={getDelayStyle(1)}>
                                        <h1 className="text-[clamp(0.9rem,3vw,1.5rem)] xs:text-[clamp(1rem,3.2vw,1.6rem)] sm:text-[clamp(1.1rem,3.4vw,1.7rem)] md:text-[clamp(1.2rem,3.6vw,1.8rem)] lg:text-[clamp(1.4rem,4vw,2rem)] xl:text-[clamp(1.6rem,4.2vw,2.2rem)] 2xl:text-[clamp(1.8rem,4.5vw,2.4rem)] font-semi-bold leading-[1.2] tracking-tight text-white/80 max-w-2xl">
                                            A curated collection
                                        </h1>
                                        <h1 className="text-[clamp(0.9rem,3vw,1.5rem)] xs:text-[clamp(1rem,3.2vw,1.6rem)] sm:text-[clamp(1.1rem,3.4vw,1.7rem)] md:text-[clamp(1.2rem,3.6vw,1.8rem)] lg:text-[clamp(1.4rem,4vw,2rem)] xl:text-[clamp(1.6rem,4.2vw,2.2rem)] 2xl:text-[clamp(1.8rem,4.5vw,2.4rem)] font-semi-bold leading-[1.2] tracking-tight text-white/80 max-w-2xl">
                                            showcasing all my work and projects.
                                        </h1>
                                    </div>

                                    {/* Decorative line - Left Aligned */}
                                    <div className="animate-fade-up mt-4 xs:mt-5 sm:mt-6 w-16 xs:w-18 sm:w-20 h-0.5 bg-gradient-to-r from-white/40 to-transparent rounded-full" style={getDelayStyle(3)}></div>
                                </div>

                                {/* Project Cards */}
                                <section id="projects" className="mt-12 sm:mt-16 lg:mt-20 2xl:px-40">
                                    {/* Mobile: 2-column grid */}
                                    <div className="grid grid-cols-2 gap-3 xs:gap-4 px-3 xs:px-4 sm:hidden">
                                        {projectCards.slice(0, 4).map((project, index) => (
                                            <div key={project.title}>
                                                <ProjectCard
                                                    project={project}
                                                    index={index}
                                                    onViewProject={() => openModal(project)}
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tablet: 2-column grid */}
                                    <div className="hidden sm:grid md:hidden grid-cols-2 gap-4 md:gap-5 px-3 xs:px-4 sm:px-0">
                                        {projectCards.map((project, index) => (
                                            <div key={project.title}>
                                                <ProjectCard
                                                    project={project}
                                                    index={index}
                                                    onViewProject={() => openModal(project)}
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Desktop: 3-column grid */}
                                    <div className="hidden md:grid lg:grid-cols-3 gap-5 lg:gap-8 px-3 xs:px-4 sm:px-0">
                                        {projectCards.map((project, index) => (
                                            <div key={project.title}>
                                                <ProjectCard
                                                    project={project}
                                                    index={index}
                                                    onViewProject={() => openModal(project)}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>

                            {/* Footer pushed to bottom */}
                            <Footer />
                        </div>
                    </section>

                </div>

            </main>


            {/* Main Project Modal */}
            {isModalOpen && selectedProject && (
                <Modal
                    project={selectedProject}
                    onClose={closeModal}
                    onOpenGallery={openGalleryModal}
                />
            )}

            {/* Gallery Modal */}
            {isGalleryModalOpen && selectedProject && (
                <GalleryModal
                    images={selectedProject.screenshots}
                    currentIndex={currentImageIndex}
                    onClose={closeGalleryModal}
                    onNavigate={navigateImage}
                />
            )}
        </div>
    )
}

function ProjectCard({ project, index, onViewProject }) {
    return (
        <article
            className="group overflow-hidden rounded-xl xs:rounded-2xl border border-white/8 bg-white/[0.03] transition duration-500 hover:-translate-y-1 hover:border-white/15 cursor-pointer w-full"
            style={getDelayStyle(index, 0.14, 0.08)}
            onClick={onViewProject}
        >
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-lg xs:rounded-xl sm:rounded-2xl aspect-[3/4]">
                <img
                    src={project.image1}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105 will-change-transform"
                    loading="lazy"
                    decoding="async"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/65 to-transparent" />

                {/* Content - Responsive padding */}
                <div className="absolute inset-x-0 bottom-0 p-2 xs:p-2.5 sm:p-4 md:p-5 lg:p-6">
                    {/* Category - Responsive sizing */}
                    <div className="mb-1 xs:mb-1.5 sm:mb-3">
                        <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-0.5 sm:py-1 text-[0.3rem] xs:text-[0.35rem] sm:text-[0.45rem] md:text-[0.5rem] lg:text-[0.55rem] font-medium uppercase tracking-[0.18em] xs:tracking-[0.2em] sm:tracking-[0.25em] text-white/80 backdrop-blur-md">
                            {project.category}
                        </span>
                    </div>

                    {/* Title - Responsive text */}
                    <h3 className="font-light tracking-tight text-white leading-tight text-[0.65rem] xs:text-xs sm:text-xl md:text-2xl line-clamp-2">
                        {project.title}
                    </h3>

                    {/* Description - Responsive text */}
                    <p className="mt-0.5 xs:mt-1 sm:mt-1.5 text-[0.45rem] xs:text-[0.55rem] sm:text-xs md:text-sm leading-relaxed text-white/50 line-clamp-2 xs:line-clamp-2 sm:line-clamp-none">
                        {project.summary}
                    </p>

                    {/* View Project - Responsive sizing */}
                    <div className="mt-1 xs:mt-1.5 sm:mt-3">
                        <button className="group/btn inline-flex items-center gap-1 xs:gap-1.5 sm:gap-2 text-[0.4rem] xs:text-[0.45rem] sm:text-xs md:text-sm font-medium text-white/50 hover:text-white/80 transition-colors duration-300">
                            <span className="tracking-wide text-[0.3rem] xs:text-[0.35rem] sm:text-[0.55rem] md:text-[0.6rem] uppercase">View Project</span>
                            <ArrowIcon className="h-1.5 w-1.5 xs:h-2 xs:w-2 sm:h-3.5 sm:w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </button>
                    </div>
                </div>
            </div>
        </article>
    )
}

function Modal({ project, onClose, onOpenGallery }) {
    // Display first 6 screenshots in landscape grid
    const displayScreenshots = project.screenshots.slice(0, 9);
    const hasMore = project.screenshots.length > 9;

    // State for image loading status
    const [heroImageLoaded, setHeroImageLoaded] = useState(false);
    const [galleryImagesLoaded, setGalleryImagesLoaded] = useState([]);

    // Handle hero image load
    useEffect(() => {
        const img = new Image();
        img.src = project.image;
        img.onload = () => setHeroImageLoaded(true);
        img.onerror = () => setHeroImageLoaded(true); // Fallback to showing anyway
    }, [project.image]);

    return (
        <AnimatePresence mode="wait">
            <div
                className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8"
                onClick={onClose}
            >
                {/* Backdrop - Simple fade */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-md"
                    onClick={onClose}
                />

                {/* Modal Content - Simple fade + scale */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1.0] }}
                    className="relative w-full max-w-7xl max-h-[96vh] sm:max-h-[94vh] md:max-h-[92vh] lg:max-h-[90vh] xl:max-h-[88vh] bg-[#1a1b1e] rounded-2xl sm:rounded-3xl border border-white/5 shadow-2xl overflow-hidden flex flex-col"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-5 md:right-5 lg:top-6 lg:right-6 z-30 
                                 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 
                                 flex items-center justify-center
                                 bg-white/5 hover:bg-white/15 
                                 backdrop-blur-sm
                                 border border-white/10 hover:border-white/20
                                 rounded-full
                                 text-white/60 hover:text-white 
                                 transition-all duration-300 hover:scale-110 
                                 focus:outline-none focus:ring-2 focus:ring-white/20"
                        aria-label="Close modal"
                    >
                        <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>

                    {/* Main Content */}
                    <div className="flex flex-col lg:flex-row h-full overflow-y-auto lg:overflow-hidden scroll-smooth 
                                    [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

                        {/* LEFT COLUMN - Hero + Content */}
                        <div className="lg:w-[60%] flex flex-col flex-shrink-0">
                            {/* Hero Image - Optimized */}
                            <div className="p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 pb-0 flex-shrink-0">
                                <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-xl sm:rounded-2xl bg-black/30 shadow-xl">
                                    {/* Blur-up placeholder while image loads */}
                                    <div className={`absolute inset-0 bg-gradient-to-br from-black/40 to-black/20 transition-opacity duration-300 ${heroImageLoaded ? 'opacity-0' : 'opacity-100'}`} />

                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className={`h-full w-full object-cover transition-opacity duration-500 ${heroImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                                        loading="eager"
                                        decoding="async"
                                        onLoad={() => setHeroImageLoaded(true)}
                                        onError={() => setHeroImageLoaded(true)}
                                        width="800"
                                        height="450"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
                                        srcSet={`${project.image}?w=400 400w, ${project.image}?w=800 800w, ${project.image}?w=1200 1200w`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1b1e] via-[#1a1b1e]/20 to-transparent"></div>
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>

                                    {/* Title overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5 lg:p-6">
                                        <span className="inline-block text-[8px] sm:text-[9px] md:text-[10px] font-medium uppercase tracking-[0.25em] sm:tracking-[0.3em] md:tracking-[0.35em] text-white/40 mb-1 sm:mb-1.5">
                                            {project.category}
                                        </span>
                                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-light tracking-tight text-white leading-[1.1]">
                                            {project.title}
                                        </h2>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 py-3 sm:py-4 md:py-5 lg:py-6 xl:py-7 space-y-4 sm:space-y-5 md:space-y-6 
                                          overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                                {/* Overview */}
                                <div className="px-1 sm:px-1.5 md:px-2">
                                    <h3 className="text-[9px] sm:text-[10px] md:text-[11px] font-medium uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/25 mb-2 sm:mb-2.5 md:mb-3">
                                        Overview
                                    </h3>
                                    <p className="text-white/50 leading-relaxed text-[11px] sm:text-xs md:text-sm font-light text-justify">
                                        {project.overview}
                                    </p>
                                </div>

                                {/* Features */}
                                <div className="px-1 sm:px-1.5 md:px-2">
                                    <h3 className="text-[9px] sm:text-[10px] md:text-[11px] font-medium uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/25 mb-2 sm:mb-2.5 md:mb-3">
                                        Key Features
                                    </h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-5 md:gap-x-6 gap-y-1.5 sm:gap-y-2">
                                        {project.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-2 sm:gap-2.5 text-white/50 text-[11px] sm:text-xs md:text-sm font-light">
                                                <span className="text-white/10 mt-0.5 sm:mt-1 flex-shrink-0">—</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN */}
                        <div className="lg:w-[40%] border-t lg:border-t-0 lg:border-l border-white/5 flex-shrink-0">
                            <div className="p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8 space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 pb-6 sm:pb-8 md:pb-10 lg:pb-12
                                          overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

                                {/* Project Details */}
                                <div>
                                    <h3 className="text-[9px] sm:text-[10px] md:text-[11px] font-medium uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/25 mb-2 sm:mb-2.5 md:mb-3">
                                        Details
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 sm:gap-x-4 md:gap-x-5 gap-y-2 sm:gap-y-2.5">
                                        {Object.entries(project.details).map(([key, value]) => (
                                            <div key={key} className={`flex justify-between text-[11px] sm:text-xs md:text-sm ${key === 'status' ? 'col-span-1 sm:col-span-2' : ''}`}>
                                                <span className="text-white/25 font-light capitalize">{key}</span>
                                                <span className={`font-light ${key === 'status' && value === 'Completed' ? 'text-emerald-400/60' : key === 'status' && value === 'In Development' ? 'text-amber-400/60' : 'text-white/60'}`}>
                                                    {value}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Role & Tech Stack */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                                    {/* Role */}
                                    <div>
                                        <h3 className="text-[9px] sm:text-[10px] md:text-[11px] font-medium uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/25 mb-2 sm:mb-2.5 md:mb-3">
                                            Role
                                        </h3>
                                        <ul className="space-y-1 sm:space-y-1.5">
                                            {project.role.map((item, index) => (
                                                <li key={index} className="flex items-start gap-2 sm:gap-2.5 text-white/50 text-[11px] sm:text-xs md:text-sm font-light">
                                                    <span className="text-white/10 flex-shrink-0">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Tech Stack */}
                                    <div>
                                        <h3 className="text-[9px] sm:text-[10px] md:text-[11px] font-medium uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/25 mb-2 sm:mb-2.5 md:mb-3">
                                            Tech
                                        </h3>
                                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                            {project.techStack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 sm:px-2.5 md:px-3 py-0.5 sm:py-1 text-[10px] sm:text-[11px] md:text-xs font-light rounded-full border border-white/5 bg-white/5 text-white/40 hover:text-white/60 hover:bg-white/10 transition-all duration-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div>
                                    <h3 className="text-[9px] sm:text-[10px] md:text-[11px] font-medium uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/25 mb-2 sm:mb-2.5 md:mb-3">
                                        Links
                                    </h3>
                                    <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                                        <a
                                            href={project.githubLink}
                                            onClick={(e) => e.preventDefault()}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 text-[11px] sm:text-xs md:text-sm font-light text-white/40 border border-white/10 rounded-xl hover:bg-white/5 hover:text-white/70 hover:border-white/20 transition-all duration-300"
                                        >
                                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                            </svg>
                                            <span>Code</span>
                                        </a>
                                        <a
                                            href={project.liveLink}
                                            onClick={(e) => e.preventDefault()}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 inline-flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 text-[11px] sm:text-xs md:text-sm font-light text-white/70 bg-white/5 border border-white/10 rounded-xl hover:bg-white/15 hover:text-white hover:border-white/20 transition-all duration-300"
                                        >
                                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                <polyline points="15 3 21 3 21 9" />
                                                <line x1="10" y1="14" x2="21" y2="3" />
                                            </svg>
                                            <span>Demo</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Screenshots Gallery - Optimized with lazy loading */}
                                <div>
                                    <div className="flex items-center justify-between mb-2 sm:mb-2.5 md:mb-3">
                                        <h3 className="text-[9px] sm:text-[10px] md:text-[11px] font-medium uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/25">
                                            Gallery
                                        </h3>
                                        <span className="text-[9px] sm:text-[10px] text-white/15 font-light">
                                            {project.screenshots.length}
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 md:gap-2.5">
                                        {displayScreenshots.slice(0, 9).map((screenshot, index) => (
                                            <div
                                                key={index}
                                                className="group/screenshot relative overflow-hidden rounded-lg sm:rounded-xl aspect-[4/3] border border-white/5 hover:border-white/15 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl bg-black/20"
                                                onClick={() => onOpenGallery(index)}
                                            >
                                                {/* Lazy loaded image with blur-up effect */}
                                                <img
                                                    src={screenshot}
                                                    alt={`${project.title} screenshot ${index + 1}`}
                                                    className="h-full w-full object-cover transition duration-500 group-hover/screenshot:scale-105"
                                                    loading="lazy"
                                                    decoding="async"
                                                    width="200"
                                                    height="150"
                                                    sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
                                                    srcSet={`${screenshot}?w=100 100w, ${screenshot}?w=200 200w, ${screenshot}?w=400 400w`}
                                                    onError={(e) => {
                                                        // Fallback: show gradient background on error
                                                        e.target.style.display = 'none';
                                                    }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/screenshot:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* See More */}
                                    {hasMore && (
                                        <div className="mt-3 sm:mt-4 md:mt-5 text-center">
                                            <button
                                                onClick={() => onOpenGallery(0)}
                                                className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 text-[10px] sm:text-xs font-light text-white/30 hover:text-white/60 transition-all duration-300 hover:gap-3"
                                            >
                                                <span>View all {project.screenshots.length}</span>
                                                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="6 9 12 15 18 9" />
                                                </svg>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}



function GalleryModal({ images, currentIndex, onClose, onNavigate }) {
    // Show more thumbnail dots for large numbers
    const maxVisibleDots = 10;
    const totalImages = images.length;
    const startDot = Math.max(0, Math.min(currentIndex - 4, totalImages - maxVisibleDots));
    const endDot = Math.min(totalImages, startDot + maxVisibleDots);
    const visibleDots = Array.from({ length: endDot - startDot }, (_, i) => startDot + i);

    // Touch swipe handling
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [isSwiping, setIsSwiping] = useState(false);
    
    // Image loading state
    const [loadedImages, setLoadedImages] = useState({});
    const [currentImageLoaded, setCurrentImageLoaded] = useState(false);

    // Preload images function
    const preloadImage = (src) => {
        if (!loadedImages[src]) {
            const img = new Image();
            img.onload = () => {
                setLoadedImages(prev => ({ ...prev, [src]: true }));
            };
            img.src = src;
        }
    };

    // Preload current and adjacent images
    useEffect(() => {
        // Reset current image loaded state
        setCurrentImageLoaded(false);
        
        // Preload current image
        preloadImage(images[currentIndex]);
        
        // Preload next and previous images
        if (currentIndex > 0) {
            preloadImage(images[currentIndex - 1]);
        }
        if (currentIndex < images.length - 1) {
            preloadImage(images[currentIndex + 1]);
        }
        
        // Preload images in viewport for dots
        const startPreload = Math.max(0, currentIndex - 5);
        const endPreload = Math.min(images.length, currentIndex + 6);
        for (let i = startPreload; i < endPreload; i++) {
            if (i !== currentIndex) {
                preloadImage(images[i]);
            }
        }
    }, [currentIndex, images]);

    // Handle keyboard events
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                onNavigate(-1);
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                onNavigate(1);
            } else if (e.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onNavigate, onClose]);

    // Detect touch device
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        const checkTouch = () => {
            setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
        };
        checkTouch();
    }, []);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
        setIsSwiping(false);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
        if (touchStart) {
            const distance = touchStart - e.targetTouches[0].clientX;
            if (Math.abs(distance) > 10) {
                setIsSwiping(true);
            }
        }
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) {
            setTouchStart(null);
            setTouchEnd(null);
            setIsSwiping(false);
            return;
        }

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe && currentIndex < images.length - 1) {
            onNavigate(1);
        } else if (isRightSwipe && currentIndex > 0) {
            onNavigate(-1);
        }

        setTouchStart(null);
        setTouchEnd(null);
        setIsSwiping(false);
    };

    return (
        <AnimatePresence>
            <div
                className="fixed inset-0 z-[60] flex items-center justify-center p-2 sm:p-3 md:p-4 lg:p-6 xl:p-8"
                onClick={onClose}
            >
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
                    className="absolute inset-0 bg-black/60 backdrop-blur-md"
                ></motion.div>

                {/* Gallery Modal */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.92, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: 20 }}
                    transition={{
                        duration: 0.35,
                        ease: [0.25, 0.1, 0.25, 1.0],
                        opacity: { duration: 0.3 }
                    }}
                    className="relative w-full max-w-6xl xl:max-w-7xl max-h-[96vh] sm:max-h-[95vh] md:max-h-[94vh] bg-[#1e1f23] rounded-2xl sm:rounded-3xl border border-white/5 shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <motion.button
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        onClick={onClose}
                        className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-5 md:right-5 lg:top-6 lg:right-6 
                                 z-30 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 
                                 flex items-center justify-center
                                 bg-black/40 hover:bg-black/60 
                                 backdrop-blur-sm
                                 border border-white/10 hover:border-white/30
                                 rounded-full
                                 text-white/70 hover:text-white 
                                 transition-all duration-300 hover:scale-110
                                 focus:outline-none focus:ring-2 focus:ring-white/30"
                        aria-label="Close gallery"
                    >
                        <svg className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </motion.button>

                    {/* Gallery Image - Primary Focus with swipe support */}
                    <div
                        className="p-2 sm:p-3 md:p-4 lg:p-6 xl:p-8 pb-1 sm:pb-2 md:pb-3"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <div className="relative">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
                                className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-black/20"
                            >
                                {/* Loading state */}
                                {!currentImageLoaded && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-12 h-12 border-3 border-white/20 border-t-white/60 rounded-full animate-spin"></div>
                                    </div>
                                )}
                                
                                <img
                                    src={images[currentIndex]}
                                    alt={`Screenshot ${currentIndex + 1}`}
                                    className={`w-full h-auto max-h-[65vh] sm:max-h-[68vh] md:max-h-[70vh] lg:max-h-[72vh] xl:max-h-[75vh] object-contain select-none transition-opacity duration-300 ${
                                        currentImageLoaded ? 'opacity-100' : 'opacity-0'
                                    }`}
                                    draggable="false"
                                    onLoad={() => setCurrentImageLoaded(true)}
                                    onError={() => setCurrentImageLoaded(true)} // Show image even if it fails to load
                                />

                                {/* Swipe hint overlay for touch devices - subtle */}
                                {images.length > 1 && isTouchDevice && (
                                    <div className="absolute inset-0 pointer-events-none">
                                        <motion.div
                                            initial={{ opacity: 1 }}
                                            animate={{ opacity: isSwiping ? 0 : 0.1 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute left-3 top-1/2 -translate-y-1/2"
                                        >
                                            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="15 18 9 12 15 6" />
                                            </svg>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 1 }}
                                            animate={{ opacity: isSwiping ? 0 : 0.1 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute right-3 top-1/2 -translate-y-1/2"
                                        >
                                            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="9 18 15 12 9 6" />
                                            </svg>
                                        </motion.div>
                                    </div>
                                )}
                            </motion.div>

                            {/* Navigation Arrows - Hidden on touch devices, visible on non-touch screens */}
                            {images.length > 1 && !isTouchDevice && (
                                <>
                                    <motion.button
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{ duration: 0.3, delay: 0.15 }}
                                        onClick={() => onNavigate(-1)}
                                        className={`absolute left-2 sm:left-3 lg:left-4 top-1/2 -translate-y-1/2 
                                                 p-2 sm:p-3 lg:p-4 rounded-full 
                                                 bg-black/40 hover:bg-white/20 
                                                 border border-white/10 hover:border-white/30 
                                                 text-white/70 hover:text-white 
                                                 transition-all duration-300 backdrop-blur-sm
                                                 ${currentIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'opacity-100 hover:scale-105'}`}
                                        disabled={currentIndex === 0}
                                        aria-label="Previous image"
                                    >
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="15 18 9 12 15 6" />
                                        </svg>
                                    </motion.button>

                                    <motion.button
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 10 }}
                                        transition={{ duration: 0.3, delay: 0.15 }}
                                        onClick={() => onNavigate(1)}
                                        className={`absolute right-2 sm:right-3 lg:right-4 top-1/2 -translate-y-1/2 
                                                 p-2 sm:p-3 lg:p-4 rounded-full 
                                                 bg-black/40 hover:bg-white/20 
                                                 border border-white/10 hover:border-white/30 
                                                 text-white/70 hover:text-white 
                                                 transition-all duration-300 backdrop-blur-sm
                                                 ${currentIndex === images.length - 1 ? 'opacity-20 cursor-not-allowed' : 'opacity-100 hover:scale-105'}`}
                                        disabled={currentIndex === images.length - 1}
                                        aria-label="Next image"
                                    >
                                        <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="9 18 15 12 9 6" />
                                        </svg>
                                    </motion.button>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Bottom Bar - Elegant with counter */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 pb-3 sm:pb-4 md:pb-5 lg:pb-6"
                    >
                        {/* Thumbnail Navigation */}
                        {images.length > 1 && (
                            <div className="flex justify-center items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 md:mb-5">
                                {startDot > 0 && (
                                    <>
                                        <motion.button
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.2, delay: 0.25 }}
                                            onClick={() => onNavigate(0 - currentIndex)}
                                            className="w-1.5 h-1.5 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300"
                                            aria-label="Go to first image"
                                        />
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.2, delay: 0.3 }}
                                            className="text-white/20 text-[8px] sm:text-[10px]"
                                        >
                                            …
                                        </motion.span>
                                    </>
                                )}

                                {visibleDots.map((index) => (
                                    <motion.button
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.2, delay: 0.25 + (index - startDot) * 0.02 }}
                                        onClick={() => onNavigate(index - currentIndex)}
                                        className={`rounded-full transition-all duration-300 ${index === currentIndex
                                            ? 'bg-white w-4 sm:w-5 md:w-6 h-1.5 sm:h-2'
                                            : 'bg-white/20 hover:bg-white/40 w-1.5 h-1.5'
                                            }`}
                                        aria-label={`Go to image ${index + 1}`}
                                    />
                                ))}

                                {endDot < totalImages && (
                                    <>
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.2, delay: 0.35 }}
                                            className="text-white/20 text-[8px] sm:text-[10px]"
                                        >
                                            …
                                        </motion.span>
                                        <motion.button
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.2, delay: 0.4 }}
                                            onClick={() => onNavigate(totalImages - 1 - currentIndex)}
                                            className="w-1.5 h-1.5 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300"
                                            aria-label="Go to last image"
                                        />
                                    </>
                                )}
                            </div>
                        )}

                        {/* Elegant Image Counter - Centered */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                            className="text-center"
                        >
                            <span className="text-white/40 text-xs sm:text-sm md:text-base font-light tracking-wide">
                                {String(currentIndex + 1).padStart(2, '0')} <span className="text-white/20">/</span> {String(images.length).padStart(2, '0')}
                            </span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}

function getDelayStyle(index, base = 0.12, step = 0.08) {
    return {
        animationDelay: `${(base + index * step).toFixed(2)}s`,
    }
}

function ArrowIcon({ className }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
        </svg>
    )
}

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

export default Project