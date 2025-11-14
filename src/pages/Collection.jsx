import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useProducts } from '../hook/useProducts'
import { useState } from 'react'

export default function Collection() {
    const { products } = useProducts()
    const [selectTypes, setSelectedTypes] = useState('')
    const typesCategory = [...new Set(products.map((p) => p.type))]

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-[#1A1A1A] dark:text-white">
            <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
                        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                            <Navbar />
                            <main className="flex-1">
                                <div className="flex flex-wrap justify-between gap-3 p-4 mt-12 mb-4">
                                    <p className="text-[#1A1A1A] dark:text-white text-5xl font-bold leading-tight tracking-[-0.033em] min-w-72">Our Exquisite Collection</p>
                                </div>
                                <div className="flex gap-3 p-3 overflow-x-auto">
                                    <select onChange={(e) => setSelectedTypes(e.target.value)} className="rounded-lg bg-background-light dark:bg-background-dark border dark:border-gray-700 p-3 hover:bg-primary/10 dark:hover:bg-primary/20" name="" id="">
                                        <option value="">--Select Type--</option>
                                        {typesCategory.map((t) => (
                                            <option value={t}>{t}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                                    {products &&
                                        products
                                            .filter((f) => !selectTypes || f.type === selectTypes)
                                            .map((item) => (
                                                <div className="flex flex-col gap-4 pb-3 group" key={item.id}>
                                                    <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl shadow-md overflow-hidden transform group-hover:scale-105 transition-transform duration-300" style={{ backgroundImage: `url(${item.image_path})` }}></div>

                                                    <div>
                                                        <p className="text-primary text-xl font-bold leading-normal">{item.title}</p>
                                                        <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">{item.description}</p>

                                                        <button className="mt-2 text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Details</button>
                                                    </div>
                                                </div>
                                            ))}
                                </div>
                                <footer className="border-t border-gray-200 dark:border-gray-800 mt-16 py-8 px-4">
                                    <div className="max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                                        <div>
                                            <h3 className="font-bold text-lg text-[#1A1A1A] dark:text-white mb-4">Gold House</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Crafting timeless elegance in every piece.</p>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-[#1A1A1A] dark:text-white mb-4">Customer Service</h3>
                                            <ul className="space-y-2 text-sm">
                                                <li>
                                                    <Link className="text-gray-600 dark:text-gray-400 hover:text-primary" to="/collection">
                                                        Shipping &amp; Returns
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="text-gray-600 dark:text-gray-400 hover:text-primary" to="/contact">
                                                        Contact Us
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-[#1A1A1A] dark:text-white mb-4">About Us</h3>
                                            <ul className="space-y-2 text-sm">
                                                <li>
                                                    <Link className="text-gray-600 dark:text-gray-400 hover:text-primary" to="/story">
                                                        Our Story
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-[#1A1A1A] dark:text-white mb-4">Follow Us</h3>
                                            <div className="flex space-x-4">
                                                <Link className="text-gray-600 dark:text-gray-400 hover:text-primary" to="#">
                                                    <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                        <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path>
                                                    </svg>
                                                </Link>
                                                <Link className="text-gray-600 dark:text-gray-400 hover:text-primary" to="#">
                                                    <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                                    </svg>
                                                </Link>
                                                <Link className="text-gray-600 dark:text-gray-400 hover:text-primary" to="#">
                                                    <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                        <path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.792 2.013 10.146 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm6.406-11.845a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" fillRule="evenodd"></path>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center text-gray-500 dark:text-gray-400 text-sm mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">© 2025 MYB Team. All Rights Reserved.</div>
                                </footer>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
