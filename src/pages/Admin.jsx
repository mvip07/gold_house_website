'use client'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Users from '../components/Users/Users'
import Contacts from '../components/Contact/Contacts'
import { ModalProvider } from '../components/UI/Modal'
import Products from '../components/Products/Products'
import Languages from '../components/Language/Languages'
import Certificates from '../components/Certificates/Certificates'
import { authService } from '../services/authService'
import { setToken, getToken, clearToken } from '../lib/helpers/userStore'

export default function Admin() {
    const router = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [activeSection, setActiveSection] = useState('dashboard')

    useEffect(() => {
        const token = getToken()
        if (token) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }, [])

    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const res = await authService.login(username, password)
            setToken(res)
            setIsLoggedIn(true)
            toast.success('Welcome back! 🎉')
        } catch (err) {
            toast.error('Login failed! Please check your credentials.')
            clearToken()
        } finally {
            setLoading(false)
        }
    }

    const handleLogout = () => {
        clearToken()
        setIsLoggedIn(false)
        router('/admin')
        toast.info('Logged out successfully')
    }

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-32 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
                </div>

                <motion.div initial={{ scale: 0.9, opacity: 0, y: 30 }} animate={{ scale: 1, opacity: 1, y: 0 }} transition={{ duration: 0.8, type: 'spring', stiffness: 100 }} className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/20 max-w-md w-full mx-4">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring', stiffness: 200 }} className="text-center mb-8">
                        <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-2xl shadow-lg mx-auto mb-4 flex items-center justify-center">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-2">Admin Portal</h2>
                        <p className="text-white/80">Secure access to dashboard</p>
                    </motion.div>

                    <motion.form initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} onSubmit={handleLogin} className="space-y-6">
                        <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300" required />
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 blur-sm -z-10"></div>
                        </motion.div>

                        <motion.div whileFocus={{ scale: 1.02 }} className="relative">
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-300" required />
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 blur-sm -z-10"></div>
                        </motion.div>

                        <motion.button type="submit" disabled={loading} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="w-full p-4 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                            {loading ? (
                                <div className="flex items-center justify-center">
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                                    Authenticating...
                                </div>
                            ) : (
                                'Access Dashboard'
                            )}
                        </motion.button>
                    </motion.form>
                </motion.div>
            </div>
        )
    }

    const sections = [
        { id: 'users', label: 'Users', icon: '👥', color: 'from-purple-500 to-pink-500' },
        { id: 'languages', label: 'Languages', icon: '🌐', color: 'from-blue-500 to-cyan-500' },
        { id: 'products', label: 'Products', icon: '📦', color: 'from-green-500 to-emerald-500' },
        { id: 'contacts', label: 'Contacts', icon: '📞', color: 'from-orange-500 to-red-500' },
        { id: 'certificates', label: 'Certificates', icon: '🏆', color: 'from-yellow-500 to-amber-500' },
    ]

    const renderActiveSection = () => {
        switch (activeSection) {
            case 'users':
                return <Users />
            case 'languages':
                return <Languages />
            case 'products':
                return <Products />
            case 'contacts':
                return <Contacts />
            case 'certificates':
                return <Certificates />
            default:
                return (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sections.map((section, index) => (
                            <motion.div key={section.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} whileHover={{ scale: 1.05, y: -5 }} onClick={() => setActiveSection(section.id)} className={`bg-gradient-to-br ${section.color} p-6 rounded-2xl shadow-2xl cursor-pointer group relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                                <div className="relative z-10">
                                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{section.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-2">{section.label}</h3>
                                    <p className="text-white/80 text-sm">Manage {section.label.toLowerCase()} data and settings</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )
        }
    }

    return (
        <ModalProvider>
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                {/* Animated background */}
                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                </div>

                <div className="relative z-10">
                    {/* Header */}
                    <motion.header initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-white/5 backdrop-blur-lg border-b border-white/10 p-6">
                        <div className="max-w-7xl mx-auto flex justify-between items-center">
                            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-2xl shadow-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
                                    <p className="text-white/60">Welcome back, Administrator</p>
                                </div>
                            </motion.div>

                            <motion.button onClick={handleLogout} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 font-semibold flex items-center space-x-2 group">
                                <span>Logout</span>
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                            </motion.button>
                        </div>
                    </motion.header>

                    <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="bg-white/5 backdrop-blur-lg border-b border-white/10 p-4">
                        <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setActiveSection('dashboard')} className={`px-4 py-2 rounded-xl transition-all duration-300 ${activeSection === 'dashboard' ? 'bg-gradient-to-r from-emerald-500 to-cyan-600 text-white shadow-lg' : 'bg-white/10 text-white/80 hover:bg-white/20'}`}>
                                📊 Dashboard
                            </motion.button>
                            {sections.map((section) => (
                                <motion.button key={section.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setActiveSection(section.id)} className={`px-4 py-2 rounded-xl transition-all duration-300 ${activeSection === section.id ? `bg-gradient-to-r ${section.color} text-white shadow-lg` : 'bg-white/10 text-white/80 hover:bg-white/20'}`}>
                                    {section.icon} {section.label}
                                </motion.button>
                            ))}
                        </div>
                    </motion.nav>

                    <main className="p-6 max-w-7xl mx-auto">
                        <AnimatePresence mode="wait">
                            <motion.div key={activeSection} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="space-y-6">
                                {renderActiveSection()}
                            </motion.div>
                        </AnimatePresence>
                    </main>
                </div>
            </div>
        </ModalProvider>
    )
}
