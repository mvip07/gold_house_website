import React, { useState, useMemo, useCallback, useEffect, useContext } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { getUserLanguage } from '../lib/getUserLanguage'
import { LanguageContext } from '../context/LanguageContext'

const LINK_CONFIG = [
    { code: 'home', to: '/' },
    { code: 'about', to: '/about' },
    { code: 'store', to: '/story' },
    { code: 'collection', to: '/collection' },
    { code: 'certifications', to: '/certification' },
    { code: 'contact_us', to: '/contact' },
]

const Navbar = React.memo(function Navbar() {
    const location = useLocation()
    const [isOpen, setIsOpen] = useState(false)
    const [links, setLinks] = useState(LINK_CONFIG.map((l) => ({ ...l, name: '...' })))
    const { language, changeLanguage } = useContext(LanguageContext);

    const handleLanguageChange = useCallback((e) => {
        changeLanguage(e.target.value);
    }, [changeLanguage]);

    useEffect(() => {
        let isMounted = true

        const fetchLinks = async () => {
            try {
                const fetchedLinks = await Promise.all(
                    LINK_CONFIG.map(async (config) => {
                        const name = await getUserLanguage(language, config.code)
                        return { ...config, name }
                    })
                )

                if (isMounted) setLinks(fetchedLinks)
            } catch (error) {
                console.error('Navigatsiya linklarini yuklashda xatolik:', error)
                if (isMounted) {
                    setLinks(LINK_CONFIG.map((l) => ({ ...l })))
                }
            }
        }

        fetchLinks()
        return () => {
            isMounted = false
        }
    }, [language])

    const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), [])
    const closeMenu = useCallback(() => setIsOpen(false), [])

    const isHome = location.pathname === '/'
    const iconColorClass = isHome ? 'text-white' : 'text-black'
    const headerClasses = useMemo(() => `lg:absolute fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 py-3 font-sans ${!isHome ? 'border-b border-[#f0edea] bg-white' : 'bg-transparent'}`, [isHome])

    return (
        <header className={headerClasses}>
            <div className="flex items-center gap-3">
                <div className={`size-6 ${iconColorClass}`}>
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd" />
                    </svg>
                </div>
                <h2 className={`text-xl font-bold font-display ${iconColorClass}`}>Gold House</h2>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
                {links.map((link) => (
                    <NavLink key={link.to} to={link.to} className={({ isActive }) => `font-medium text-base transition-colors ${isActive ? 'text-primary border-b-2 border-primary pb-1' : `${isHome ? 'text-white' : 'text-black'} hover:text-primary`}`}>
                        {link.name}
                    </NavLink>
                ))}
            </nav>

            <div className={`hidden lg:flex items-center gap-2 pl-6 ${!isHome ? 'border-l border-[#f0edea]' : ''}`}>
                <select value={language} onChange={handleLanguageChange} className={`outline-none border-0 text-base font-medium ${isHome ? 'text-white bg-transparent' : 'text-black'}`}>
                    <option value="EN">EN</option>
                    <option value="UZ">UZ</option>
                    <option value="RU">RU</option>
                </select>
            </div>

            <button onClick={toggleMenu} className={`${iconColorClass} lg:hidden`}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-screen bg-black/50 dark:bg-white/20 flex flex-col items-start p-4 gap-4 lg:hidden backdrop-blur-sm animate-fadeIn">
                    {links.map((link) => (
                        <NavLink key={link.to} to={link.to} onClick={closeMenu} className={({ isActive }) => `block w-full text-base font-medium ${isActive ? 'text-primary' : 'text-white'}`}>
                            {link.name}
                        </NavLink>
                    ))}
                    <select value={language} onChange={handleLanguageChange} className="bg-transparent outline-none text-white text-base font-medium mt-2">
                        <option value="EN">EN</option>
                        <option value="UZ">UZ</option>
                        <option value="RU">RU</option>
                    </select>
                </div>
            )}
        </header>
    )
})

export default Navbar