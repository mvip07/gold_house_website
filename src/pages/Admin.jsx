'use client'
import { useEffect, useState } from 'react'
import Users from '../components/Users/Users'
import Languages from '../components/Language/Languages'
import { authService } from '../services/authService'
import { toast } from 'react-toastify'
import { setToken, getToken, clearToken } from '../lib/helpers/userStore'
import { useNavigate } from 'react-router-dom'
import { ModalProvider } from '../components/UI/Modal'

export default function Admin() {
    const router = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

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
            toast.success('Logged in!')
        } catch (err) {
            toast.error('Login failed!')
            clearToken()
        } finally {
            setLoading(false)
        }
    }

    const handleLogout = () => {
        clearToken()
        setIsLoggedIn(false)
        router('/admin')
    }

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-teal-500">
                <div className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full">
                    <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full p-3 border rounded-lg focus:ring-2 ring-green-500" required />
                        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 border rounded-lg focus:ring-2 ring-green-500" required />
                        <button type="submit" disabled={loading} className="w-full p-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <ModalProvider>
            <div className="min-h-screen bg-gray-100 p-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                    <button onClick={handleLogout} className="px-4 py-2 bg-red-600 text-white rounded-lg">
                        Logout
                    </button>
                </div>
                <div className="space-y-12">
                    <Users />
                    <Languages />
                </div>
            </div>
        </ModalProvider>
    )
}
