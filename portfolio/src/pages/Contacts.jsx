import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import Footer from '../components/footer.jsx';
import Sidenavbar from '../components/sidenavbar.jsx'
import contactsImage from '../assets/images/contacts1.jpeg'

const contactsNavItems = [
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

function Contacts() {
    const [isLoading, setIsLoading] = useState(false)
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })
    const [isInitialized, setIsInitialized] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    })

    useEffect(() => {
        try {
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            if (publicKey) {
                emailjs.init(publicKey)
                setIsInitialized(true)
                console.log('✅ EmailJS initialized successfully')
            } else {
                console.error('❌ Public key not found')
            }
        } catch (error) {
            console.error('❌ EmailJS initialization failed:', error)
        }
    }, [])

    const onSubmit = async (data) => {
        if (!isInitialized) {
            setSubmitStatus({
                type: 'error',
                message: '⚠️ Email service is initializing. Please try again.'
            })
            return
        }

        setIsLoading(true)
        setSubmitStatus({ type: '', message: '' })

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

            console.log('📤 Sending email with:', {
                serviceId,
                templateId,
                from_name: data.name,
                from_email: data.email,
                subject: data.subject || 'New Contact Form Submission'
            })

            const result = await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: data.name,
                    from_email: data.email,
                    subject: data.subject || 'New Contact Form Submission',
                    message: data.message,
                    to_email: 'abaremj078@gmail.com'
                }
            )

            console.log('📬 Response:', result)

            if (result.status === 200) {
                setSubmitStatus({
                    type: 'success',
                    message: '✅ Message sent successfully! I\'ll get back to you soon.'
                })
                reset()
            } else {
                throw new Error(`Unexpected status: ${result.status}`)
            }
        } catch (error) {
            console.error('❌ Email sending error:', error)
            setSubmitStatus({
                type: 'error',
                message: `❌ ${error.text || error.message || 'Failed to send message. Please try again or contact me directly at abaremj078@gmail.com'}`
            })
        } finally {
            setIsLoading(false)
            setTimeout(() => {
                setSubmitStatus({ type: '', message: '' })
            }, 10000)
        }
    }

    return (
        <div className="min-h-screen bg-[#131415] text-white">
            <Sidenavbar navItems={contactsNavItems} />

            <main className="lg:pl-[244px]">
                <div className="mx-auto max-w-[1320px] px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3">
                    <section className="mt-2 xs:mt-3 sm:mt-4 md:mt-5 lg:mt-6 mb-2 sm:mb-3 md:mb-4 overflow-y-auto overflow-x-hidden no-scrollbar rounded-[18px] xs:rounded-[20px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[32px] bg-[#303133] shadow-[0_30px_100px_rgba(0,0,0,0.35)] ring-1 ring-white/5 w-full h-[calc(100vh-0.5rem)] xs:h-[calc(100vh-1rem)] sm:h-[calc(100vh-2rem)] md:h-[calc(100vh-3rem)] lg:h-[calc(100vh-4rem)]">

                        <div className="px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 xl:px-14 2xl:px-20 py-3 xs:py-4 sm:py-5 md:py-7 lg:py-9 xl:py-11 2xl:py-14">
                            {/* Contacts Header - Left Aligned */}
                            <div className="flex flex-col items-start w-full 2xl:px-70">
                                <div className="flex items-center gap-3 xs:gap-4 sm:gap-5 md:gap-6 animate-fade-up" style={getDelayStyle(0)}>
                                    <div className="flex-shrink-0">
                                        <div className="h-10 w-10 xs:h-11 xs:w-11 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 xl:h-18 xl:w-18 2xl:h-20 2xl:w-20 rounded-xl xs:rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-2 xs:p-2.5 sm:p-3 ring-2 ring-white/20 shadow-lg flex items-center justify-center backdrop-blur-sm">
                                            <PhoneIcon className="h-5 w-5 xs:h-5.5 xs:w-5.5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 xl:h-9 xl:w-9 2xl:h-11 2xl:w-11 text-white/90" strokeWidth="2" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col text-left">
                                        <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                                            Contacts
                                        </p>
                                        <p className="text-[0.5rem] xs:text-[0.55rem] sm:text-xs md:text-sm text-white/40 tracking-wider">
                                            Let's Connect
                                        </p>
                                    </div>
                                </div>

                                <div className="animate-fade-up mt-6 xs:mt-7 sm:mt-8 md:mt-10 lg:mt-12 text-left" style={getDelayStyle(1)}>
                                    <h1 className="text-[clamp(1rem,3vw,1.6rem)] xs:text-[clamp(1.1rem,3.2vw,1.7rem)] sm:text-[clamp(1.2rem,3.5vw,1.8rem)] md:text-[clamp(1.4rem,4vw,2rem)] lg:text-[clamp(1.6rem,4.2vw,2.2rem)] xl:text-[clamp(1.8rem,4.5vw,2.4rem)] font-semi-bold leading-[1.2] tracking-tight text-white/80 max-w-2xl">
                                        Let's connect and build something great together.
                                    </h1>
                                </div>

                                <div className="animate-fade-up mt-3 xs:mt-4 sm:mt-5 md:mt-6 w-14 xs:w-16 sm:w-18 md:w-20 h-0.5 bg-gradient-to-r from-white/40 to-transparent rounded-full" style={getDelayStyle(3)}></div>
                            </div>

                            {/* Contact Content */}
                            <section id="contacts" className="mt-6 xs:mt-7 sm:mt-8 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-16 px-1 xs:px-2 sm:px-0 lg:px-70">
                                {/* Top Row - Card and Contact Information */}
                                <div className="flex flex-col md:flex-row md:items-stretch gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 mb-4 sm:mb-6 lg:mb-8 xl:mb-10">
                                    {/* Left Card - Contact Info */}
                                    <div className="w-full md:w-auto md:flex-1">
                                        <div className="animate-fade-up rounded-[18px] xs:rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] border border-white/8 bg-[#1d1d1d] p-3 xs:p-4 sm:p-5 lg:p-6 shadow-[0_20px_45px_rgba(0,0,0,0.35)] max-w-[260px] xs:max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[340px] mx-auto md:mx-0" style={getDelayStyle(0.2)}>
                                            <div className="overflow-hidden rounded-[14px] xs:rounded-[16px] sm:rounded-[18px] lg:rounded-[20px] border border-white/8">
                                                <div className="aspect-[4/3] overflow-hidden rounded-[16px] xs:rounded-[18px] sm:rounded-[20px] border border-white/8">
                                                    <img
                                                        src={contactsImage}
                                                        alt="Contact"
                                                        className="w-full h-full object-cover"
                                                        loading="lazy"
                                                        decoding="async"
                                                    />
                                                </div>                                            </div>
                                            <div className="mt-3 xs:mt-4 sm:mt-5 lg:mt-6 flex items-center justify-center gap-1.5 xs:gap-2 text-[0.6rem] xs:text-[0.65rem] sm:text-xs lg:text-sm text-white/70">
                                                <ClockIcon className="h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4" />
                                                Usually replies within 24 hours
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right - Contact Information */}
                                    <div className="animate-fade-up flex-1 flex items-center" style={getDelayStyle(0.25)}>
                                        <div className="w-full rounded-[18px] xs:rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] border border-white/8 bg-[#1d1d1d] p-4 xs:p-5 sm:p-6 md:p-7 lg:p-9 shadow-[0_20px_45px_rgba(0,0,0,0.35)]">
                                            {/* Header with icon */}
                                            <div className="flex items-center gap-2 xs:gap-3 mb-4 xs:mb-5 sm:mb-6 md:mb-7">
                                                <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                                    <svg className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                                    </svg>
                                                </div>
                                                <h3 className="text-[0.6rem] xs:text-[0.65rem] sm:text-xs md:text-sm font-medium tracking-wide text-white/40">
                                                    Contact Information
                                                </h3>
                                            </div>

                                            {/* Contact Items with icons */}
                                            <div className="space-y-3 xs:space-y-3.5 sm:space-y-4 md:space-y-5">
                                                {/* Email */}
                                                <div className="group flex items-start gap-3 xs:gap-4 p-2 xs:p-2.5 sm:p-3 rounded-xl transition-colors duration-300 hover:bg-white/5">
                                                    <div className="flex-shrink-0 w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center group-hover:border-white/15 transition-colors duration-300">
                                                        <svg className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 text-white/30 group-hover:text-white/50 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                                        </svg>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-[0.5rem] xs:text-[0.55rem] sm:text-[0.6rem] font-medium uppercase tracking-[0.12em] xs:tracking-[0.15em] text-white/20 mb-0.5">
                                                            Email
                                                        </p>
                                                        <a href="mailto:abaremj078@gmail.com" className="text-[0.7rem] xs:text-[0.75rem] sm:text-xs md:text-sm lg:text-base font-light text-white/60 hover:text-white transition-colors duration-300 break-all">
                                                            abaremj078@gmail.com
                                                        </a>
                                                    </div>
                                                </div>

                                                {/* Phone */}
                                                <div className="group flex items-start gap-3 xs:gap-4 p-2 xs:p-2.5 sm:p-3 rounded-xl transition-colors duration-300 hover:bg-white/5">
                                                    <div className="flex-shrink-0 w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center group-hover:border-white/15 transition-colors duration-300">
                                                        <svg className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 text-white/30 group-hover:text-white/50 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M7.5 4.5h2.2l1.2 4-1.8 1.8a14 14 0 0 0 4.6 4.6l1.8-1.8 4 1.2v2.2A2 2 0 0 1 17.5 19a15.5 15.5 0 0 1-12.5-12.5A2 2 0 0 1 7.5 4.5Z" />
                                                        </svg>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-[0.5rem] xs:text-[0.55rem] sm:text-[0.6rem] font-medium uppercase tracking-[0.12em] xs:tracking-[0.15em] text-white/20 mb-0.5">
                                                            Phone
                                                        </p>
                                                        <a href="tel:+639090599671" className="text-[0.7rem] xs:text-[0.75rem] sm:text-xs md:text-sm lg:text-base font-light text-white/60 hover:text-white transition-colors duration-300">
                                                            09090599671
                                                        </a>
                                                    </div>
                                                </div>

                                                {/* Location */}
                                                <div className="group flex items-start gap-3 xs:gap-4 p-2 xs:p-2.5 sm:p-3 rounded-xl transition-colors duration-300 hover:bg-white/5">
                                                    <div className="flex-shrink-0 w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center group-hover:border-white/15 transition-colors duration-300">
                                                        <svg className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-4.5 sm:h-4.5 text-white/30 group-hover:text-white/50 transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                            <circle cx="12" cy="10" r="3" />
                                                        </svg>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-[0.5rem] xs:text-[0.55rem] sm:text-[0.6rem] font-medium uppercase tracking-[0.12em] xs:tracking-[0.15em] text-white/20 mb-0.5">
                                                            Location
                                                        </p>
                                                        <p className="text-[0.7rem] xs:text-[0.75rem] sm:text-xs md:text-sm lg:text-base font-light text-white/60">
                                                            Angat, Bulacan
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Form - Below the card and contact info */}
                                <div className="w-full">
                                    <form onSubmit={handleSubmit(onSubmit)} className="animate-fade-up w-full rounded-[18px] xs:rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] border border-white/8 bg-[#181818] p-3 xs:p-4 sm:p-5 lg:p-6 xl:p-8 shadow-[0_20px_45px_rgba(0,0,0,0.35)] max-w-[100%] xs:max-w-[550px] sm:max-w-[600px] md:max-w-[650px] lg:max-w-[700px] xl:max-w-[750px] mx-auto lg:mx-0" style={getDelayStyle(0.3)}>

                                        {/* Status Messages */}
                                        {submitStatus.message && (
                                            <div className={`mb-3 xs:mb-4 sm:mb-5 p-2.5 xs:p-3 sm:p-4 rounded-lg xs:rounded-xl text-[0.7rem] xs:text-xs sm:text-sm ${submitStatus.type === 'success'
                                                    ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                                                    : 'bg-red-500/10 border border-red-500/20 text-red-400'
                                                }`}>
                                                {submitStatus.message}
                                            </div>
                                        )}

                                        <div className="grid gap-3 xs:gap-4 sm:gap-5 md:grid-cols-2">
                                            <Field
                                                label="Name"
                                                placeholder="Your full name"
                                                register={register}
                                                name="name"
                                                error={errors.name}
                                                required
                                            />
                                            <Field
                                                label="Email"
                                                placeholder="example@gmail.com"
                                                register={register}
                                                name="email"
                                                error={errors.email}
                                                required
                                                type="email"
                                            />
                                        </div>
                                        <div className="mt-3 xs:mt-4 sm:mt-5 lg:mt-6">
                                            <Field
                                                label="Subject"
                                                placeholder="What's this all about?"
                                                register={register}
                                                name="subject"
                                                error={errors.subject}
                                            />
                                        </div>
                                        <div className="mt-3 xs:mt-4 sm:mt-5 lg:mt-6">
                                            <label className="mb-1 xs:mb-1.5 sm:mb-2 block text-[0.5rem] xs:text-[0.55rem] sm:text-xs lg:text-sm font-semibold uppercase tracking-[0.12em] xs:tracking-[0.15em] sm:tracking-[0.2em] lg:tracking-[0.28em] text-white/65">
                                                Message <span className="text-red-400">*</span>
                                            </label>
                                            <textarea
                                                className={`min-h-[100px] xs:min-h-[110px] sm:min-h-[130px] md:min-h-[150px] lg:min-h-[180px] w-full rounded-lg xs:rounded-xl sm:rounded-2xl border ${errors.message ? 'border-red-500/50' : 'border-white/8'
                                                    } bg-white/5 px-3 sm:px-4 py-1.5 xs:py-2 sm:py-2.5 lg:py-3 text-[0.7rem] xs:text-xs sm:text-sm text-white outline-none placeholder:text-white/30 focus:border-white/20 transition`}
                                                placeholder="Write something..."
                                                {...register('message', {
                                                    required: 'Message is required',
                                                    minLength: { value: 10, message: 'Message must be at least 10 characters' },
                                                    maxLength: { value: 2000, message: 'Message must not exceed 2000 characters' }
                                                })}
                                            />
                                            {errors.message && (
                                                <p className="mt-1 text-[0.6rem] xs:text-xs text-red-400">{errors.message.message}</p>
                                            )}
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isLoading || !isInitialized}
                                            className={`mt-3 xs:mt-4 sm:mt-5 lg:mt-6 inline-flex w-full items-center justify-center gap-1.5 xs:gap-2 rounded-lg xs:rounded-xl sm:rounded-2xl bg-white/70 px-3 xs:px-4 sm:px-5 py-2 xs:py-2.5 sm:py-3 text-[0.6rem] xs:text-xs sm:text-sm font-semibold text-[#131415] transition ${(isLoading || !isInitialized)
                                                    ? 'opacity-50 cursor-not-allowed'
                                                    : 'hover:bg-white hover:scale-[1.01]'
                                                }`}
                                        >
                                            {isLoading ? (
                                                <>
                                                    <svg className="animate-spin h-3 w-3 xs:h-3.5 xs:w-3.5 sm:h-4 sm:w-4" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                    </svg>
                                                    Sending...
                                                </>
                                            ) : !isInitialized ? (
                                                'Initializing...'
                                            ) : (
                                                <>
                                                    <PaperPlaneIcon className="h-2.5 w-2.5 xs:h-3 xs:w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4" />
                                                    Send Message
                                                </>
                                            )}
                                        </button>

                                        <input
                                            type="text"
                                            {...register('honeypot')}
                                            style={{ display: 'none' }}
                                            aria-hidden="true"
                                        />
                                    </form>
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

function Field({ label, placeholder, register, name, error, required, type = 'text' }) {
    return (
        <label className="block">
            <span className="mb-0.5 xs:mb-1 sm:mb-1.5 lg:mb-2 block text-[0.45rem] xs:text-[0.5rem] sm:text-xs lg:text-sm font-semibold uppercase tracking-[0.12em] xs:tracking-[0.15em] sm:tracking-[0.2em] lg:tracking-[0.28em] text-white/65">
                {label} {required && <span className="text-red-400">*</span>}
            </span>
            <input
                type={type}
                className={`w-full rounded-lg xs:rounded-xl sm:rounded-2xl border ${error ? 'border-red-500/50' : 'border-white/6'
                    } bg-white/6 px-2.5 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-2.5 lg:py-3 text-[0.65rem] xs:text-xs sm:text-sm text-white outline-none transition placeholder:text-white/30 focus:border-white/15`}
                placeholder={placeholder}
                {...register(name, {
                    required: required ? `${label} is required` : false,
                    ...(type === 'email' && {
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                        }
                    })
                })}
            />
            {error && (
                <p className="mt-0.5 xs:mt-1 text-[0.55rem] xs:text-xs text-red-400">{error.message}</p>
            )}
        </label>
    )
}

// Icons
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

export default Contacts