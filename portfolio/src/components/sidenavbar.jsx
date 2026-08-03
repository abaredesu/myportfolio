import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import profileImage from '../assets/images/userabare2.jpeg'


const defaultNavItems = [
    { label: 'Home', href: '/', icon: HomeIcon },
    { label: 'Projects', href: '/projects', icon: FolderIcon },
    { label: 'Experience', href: '/experience', icon: BriefcaseIcon },
    { label: 'Contacts', href: '/contacts', icon: PhoneIcon },
]

const socialItems = [
    { label: 'Google', href: '#', icon: GoogleIcon },
    { label: 'GitHub', href: '#', icon: GithubIcon },
    { label: 'LinkedIn', href: '#', icon: LinkedInIcon },
    { label: 'Facebook', href: '#', icon: FacebookIcon },
    { label: 'Instagram', href: '#', icon: InstagramIcon },
    { label: 'Discord', href: '#', icon: DiscordIcon },
]

const sidebarDelay = (index, base = 0.08, step = 0.07) => ({
    animationDelay: `${(base + index * step).toFixed(2)}s`,
})

function Sidenavbar({ navItems = defaultNavItems }) {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)

    const handleNavigation = () => {
        closeMenu()
    }

    const handleProfileClick = () => {
        navigate('/about')
        closeMenu()
    }

    const renderNavItem = ({ label, href, icon: Icon }, index, className) => {
        const content = (
            <>
                <Icon className="h-[18px] w-[18px] shrink-0 text-white/90" />
                <span>{label}</span>
            </>
        )

        const sharedProps = {
            className,
            style: sidebarDelay(index, 0.2, 0.06),
            onClick: handleNavigation,
        }

        if (href?.startsWith('/')) {
            return (
                <Link key={label} to={href} {...sharedProps}>
                    {content}
                </Link>
            )
        }

        return (
            <a key={label} href={href} {...sharedProps}>
                {content}
            </a>
        )
    }

    return (
        <>
            {/* Floating Burger Menu Button - Mobile & Tablet */}
            <button
                onClick={toggleMenu}
                className="lg:hidden fixed top-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#131415] border border-white/10 shadow-2xl shadow-black/50 transition-all duration-300 hover:border-white/20 hover:scale-105"
                aria-label="Toggle menu"
            >
                <div className="relative flex flex-col items-center justify-center gap-1.5">
                    <span className={`block h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                    <span className={`block h-0.5 w-6 rounded-full bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
                    onClick={closeMenu}
                />
            )}

            {/* Floating Sidebar - Mobile & Tablet */}
            <aside
                className={`lg:hidden fixed top-0 right-0 z-45 h-full w-[280px] sm:w-[320px] bg-[#131415] border-l border-white/10 shadow-2xl shadow-black/50 transition-all duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex h-full flex-col overflow-y-auto px-6 py-8">
                    {/* Close button inside sidebar */}
                    <button
                        onClick={closeMenu}
                        className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/5 transition-colors duration-300"
                    >
                        <svg className="h-5 w-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="mx-auto flex h-full w-full max-w-[206px] flex-col justify-between pb-2 pt-1">
                        {/* Profile Section */}
                        <div className="space-y-8">
                            <div className="sidebar-fade-in flex flex-col items-center gap-3 pt-1" style={sidebarDelay(0)}>
                                <div 
                                    className="h-14 w-14 overflow-hidden rounded-full ring-2 ring-white/10 cursor-pointer transition-all duration-300 hover:ring-white/30 hover:scale-105 flex-shrink-0"
                                    onClick={handleProfileClick}
                                >
                                    <img
                                        src={profileImage}
                                        alt="Mark Justin profile"
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="text-center">
                                    <p className="text-[1.03rem] font-normal leading-none text-white">
                                        About Me
                                    </p>
                                </div>
                            </div>

                            {/* Navigation */}
                            <div>
                                <p className="sidebar-fade-in text-center text-[0.78rem] font-semibold uppercase tracking-[0.42em] text-white/95" style={sidebarDelay(1)}>
                                    Creations
                                </p>

                                <nav className="mt-8 space-y-6">
                                    {navItems.map((item, index) => renderNavItem(item, index, 'sidebar-fade-in flex items-center justify-start gap-5 px-6 text-[1.02rem] text-white/92 transition hover:translate-x-1 hover:text-white'))}
                                </nav>
                            </div>
                        </div>

                        {/* Socials Section */}
                        <div className="pb-2 flex flex-col items-center">
                            <p className="sidebar-fade-in text-[0.78rem] font-semibold uppercase tracking-[0.42em] text-white/95" style={sidebarDelay(2)}>
                                Socials
                            </p>
                            <div className="mt-6 grid grid-cols-3 justify-items-center gap-x-8 gap-y-6 px-0.5">
                                {socialItems.map(({ label, href, icon: Icon }, index) => (
                                    <a
                                        key={label}
                                        href={href}
                                        aria-label={label}
                                        onClick={closeMenu}
                                        className="sidebar-fade-in grid h-8 w-8 place-items-center text-white/60 hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80"
                                        style={sidebarDelay(index, 0.36, 0.05)}
                                    >
                                        <Icon className="h-[20px] w-[20px]" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Desktop Sidebar - Fixed width and position */}
            <aside className="hidden bg-[#131415] px-12 py-15 text-white lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-[244px] lg:flex-col">
                <div className="mx-auto flex h-full w-full max-w-[206px] flex-col justify-between pb-3 pt-1">
                    {/* Profile Section */}
                    <div className="space-y-12">
                        <div className="sidebar-fade-in flex flex-col items-center gap-3 pt-1" style={sidebarDelay(0)}>
                            <div 
                                className="h-20 w-20 overflow-hidden rounded-full ring-2 ring-white/10 cursor-pointer transition-all duration-300 hover:ring-white/30 hover:scale-105 flex-shrink-0"
                                onClick={handleProfileClick}
                            >
                                <img
                                    src={profileImage}
                                    alt="Mark Justin profile"
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="text-center">
                                <p className="text-[1.03rem] font-normal leading-none text-white">
                                    About Me
                                </p>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div>
                            <p className="sidebar-fade-in text-center text-[0.78rem] font-semibold uppercase tracking-[0.42em] text-white/95" style={sidebarDelay(1)}>
                                Creations
                            </p>

                            <nav className="mt-10 space-y-8">
                                {navItems.map((item, index) => renderNavItem(item, index, 'sidebar-fade-in flex items-center justify-start gap-6 px-12 text-[1.02rem] text-white/92 transition hover:translate-x-1 hover:text-white'))}
                            </nav>
                        </div>
                    </div>

                    {/* Socials Section */}
                    <div className="mt-70 pb-0 flex flex-col items-center">
                        <p className="sidebar-fade-in text-[0.78rem] font-semibold uppercase tracking-[0.42em] text-white/95" style={sidebarDelay(2)}>
                            Socials
                        </p>
                        <div className="mt-7 grid grid-cols-3 justify-items-center gap-x-11 gap-y-7 px-0.5">
                            {socialItems.map(({ label, href, icon: Icon }, index) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="sidebar-fade-in grid h-8 w-8 place-items-center text-white/60 hover:text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80"
                                    style={sidebarDelay(index, 0.36, 0.05)}
                                >
                                    <Icon className="h-[20px] w-[20px]" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}

// All icons remain the same...
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

function GithubIcon({ className }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M12 2.5A9.5 9.5 0 0 0 8.99 21c.48.09.66-.2.66-.46v-1.6c-2.68.58-3.24-1.13-3.24-1.13-.44-1.12-1.07-1.42-1.07-1.42-.87-.6.07-.59.07-.59.96.07 1.46.98 1.46.98.86 1.46 2.26 1.04 2.81.8.09-.63.34-1.04.62-1.28-2.14-.25-4.39-1.08-4.39-4.82 0-1.06.38-1.93 1-2.61-.1-.25-.44-1.27.1-2.65 0 0 .82-.26 2.68 1a9.3 9.3 0 0 1 4.88 0c1.86-1.26 2.68-1 2.68-1 .54 1.38.2 2.4.1 2.65.62.68 1 1.55 1 2.61 0 3.75-2.25 4.56-4.4 4.8.35.3.66.9.66 1.82v2.69c0 .27.18.56.67.46A9.5 9.5 0 0 0 12 2.5Z" />
        </svg>
    )
}

function GoogleIcon({ className }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
    )
}

function FacebookIcon({ className }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
    )
}

function LinkedInIcon({ className }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    )
}

function InstagramIcon({ className }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
    )
}

function DiscordIcon({ className }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
    )
}

export default Sidenavbar