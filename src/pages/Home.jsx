import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Home() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-text-dark dark:text-text-light">
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                <Navbar />
                <main className="flex-grow">
                    <section className="relative h-screen w-full">
                        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                        <video autoplay="" className="absolute inset-0 w-full h-full object-cover" loop="" muted="" poster="https://lh3.googleusercontent.com/aida-public/AB6AXuDAm9Gj_otxzApREx4mI_bp5EOk8KqX7Ml7J9U_8FtuYkG0qoEIOY8uVfAkug-kXDwYqLppV7S2bXN3BILtKmepgxlnA67jrmmeS0QSZMKUgm2DvlOXDkudQ5BY6-NQQNFSkaCf48tiqDxet8xSb_iieRthNIjGUOigmJUdW8g4FOUdWDf19_HZ26SAKSqvjOneOwBEt1UaHEkINFp2mfGfxuVmtrwkojQ88aXH-4oblLVgcVcZZ-bW8mkrK4N8hbkRI5fZHXICbA">
                            <source src="https://assets.mixkit.co/videos/preview/mixkit-Link-goldsmith-working-in-his-workshop-2387-large.mp4" type="video/mp4" />
                        </video>
                        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
                            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4">Elegance in Every Detail</h1>
                            <p className="font-body text-xl md:text-2xl max-w-2xl mb-8">Discover the timeless beauty of handcrafted gold jewelry, where tradition meets modern luxury.</p>
                            <Link className="px-8 py-3 bg-accent text-white font-bold text-lg rounded-full hover:bg-opacity-80 transition-all duration-300" to="#products">
                                Explore Our Collections
                            </Link>
                        </div>
                    </section>
                    <section className="py-20 lg:py-32 bg-background-light dark:bg-background-dark" id="about">
                        <div className="container mx-auto px-4 lg:px-20 grid lg:grid-cols-2 gap-12 items-center">
                            <div className="text-center lg:text-left">
                                <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 text-text-dark dark:text-text-light">A Legacy of Craftsmanship</h2>
                                <p className="font-body text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-8">For over three decades, Gold House has been synonymous with exceptional quality and artistry. We are Link family-owned business dedicated to preserving the ancient craft of goldsmithing while embracing contemporary design.</p>
                                <Link className="inline-block px-8 py-3 border border-accent text-accent font-bold text-lg rounded-full hover:bg-accent hover:text-white transition-all duration-300" to="#">
                                    Learn More About Us
                                </Link>
                            </div>
                            <div>
                                <img alt="Goldsmith at work" className="rounded-xl shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd5or_8enU7r2OBOx71Yl63fUh2gtv8z4T2Hp6NZdVSDzPDWuZotqi0mgJnctg4s7IRkaFvtdo3P1SOnYFBG6HdCXWWWZn7W04UK_MNcmiQKOJ_Pv3Oz_jWgEAh3KumObRXBPaBvVRH9wsWIavLzxTYBKQeKWpo3ctc_7bHqK6FDHrUN2J8FTM-yo4hcK1TNiIGQUnLsmzW1t7Do2IAR0bPEnIXcbPtJ4K0UybJ4IoIBaZKMODfYhc9SP-0nHvIQ6D3GeC6mkN5A" />
                            </div>
                        </div>
                    </section>
                    <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900" id="products">
                        <div className="container mx-auto px-4 lg:px-20">
                            <div className="text-center mb-16">
                                <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-dark dark:text-text-light">Featured Collections</h2>
                                <p className="font-body text-lg lg:text-xl text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto">Each piece is Link testament to our commitment to excellence, designed to be cherished for generations.</p>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="group">
                                    <div className="overflow-hidden rounded-xl">
                                        <img alt="Elegant gold necklace" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDypG8aC98i-sble8NdizU9SwF5uSYzk585DPbEb4LoaQw2jIqUokqIAdfT1d7CKCu1YHLU1xJ_ZwXC06VQ8bBm2JQuMGybKEC_-H5muOUeHjJP4hORgrdvwKLtOn9fQhGfU_bdax9AYtPSP1V03H3vCVNuAOet_r5vyTKu8Ipqhq6xAMIFSXCT0lv6QrxSYJY93GgH5nb8RAyh80LWAOPwJ4Qk2-A5ITKEC0XhsXJR8BV-XMQrH2S7ziJQYHK3YTK0GkskR1ksRw" />
                                    </div>
                                    <h3 className="font-display text-2xl font-bold mt-4 text-text-dark dark:text-text-light">The Heritage Collection</h3>
                                    <p className="font-body text-gray-600 dark:text-gray-400">Timeless designs inspired by our rich history.</p>
                                </div>
                                <div className="group">
                                    <div className="overflow-hidden rounded-xl">
                                        <img alt="Modern gold ring" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu0bdKPizodbEH-Mzr36LIPLe0ThVmKqnWL20DfmN8MvaCYDBeHzb0Pr5lx6BZE8gg1vVI7xI3gHTbOXTcAly5kz7OrNW89mysAdEE-f1Uj6VFFj59J_RaLEOUweq0lZVPw_6f9qFSfIAdXwgC60xW9jMTrpTgkNMkfNqvBip94on5eJ6lIabG-jc1OrpOTvGNcVNuffDwKlrpYzb1wC2JudNMOAsWwvJu1n-iYyklghzt3cSncDWB_a8OyM9bBmRO6_z1a-Q1DA" />
                                    </div>
                                    <h3 className="font-display text-2xl font-bold mt-4 text-text-dark dark:text-text-light">The Modernist Collection</h3>
                                    <p className="font-body text-gray-600 dark:text-gray-400">Clean lines and bold shapes for the contemporary connoisseur.</p>
                                </div>
                                <div className="group">
                                    <div className="overflow-hidden rounded-xl">
                                        <img alt="Bespoke gold earrings" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB-ja7_vtHbbH-NzyBgE0KIOGRbARfPvJ5WjxEvFZxj4nJrW6eEcDRojq2L1MUN_PrSUMGTM_Ixt0HmecL_eMXacKOgaOTVdKdQ2g0AlYSzk-AlKAdotlf_4tmdbfrGgRsBvMkdJXKnZ-O45leky1Ov9JahcU6MfyYreKN5aYnN1GkbFZMc94DgoGM-T1hnLn1xcsENZtd8g3q6cmHBsYclfofh21nyrr61N9IoLsdqYR6M_5OYlgVH5Z44C7ryV97JKWql3Vu5w" />
                                    </div>
                                    <h3 className="font-display text-2xl font-bold mt-4 text-text-dark dark:text-text-light">The Bespoke Collection</h3>
                                    <p className="font-body text-gray-600 dark:text-gray-400">Your unique story, captured in gold.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="py-20 lg:py-32 bg-background-light dark:bg-background-dark" id="certificates">
                        <div className="container mx-auto px-4 lg:px-20 text-center">
                            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-16 text-text-dark dark:text-text-light">Certified Excellence</h2>
                            <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
                                <div className="flex flex-col items-center">
                                    <img alt="Certificate 1" className="h-48 w-auto opacity-80 hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbNCejHFPaDxi0aMOd1_5pMBlff8AlpURpQO-YWGo4_EJKdz5ZWJ7o2tfbIvlG72fyKwAy4WSB5TReQQKGTI1ZvpQzkOanfbsjlb0U40Yp75PkPC-KSBQzP4W_hKhAYtdo8_OkmC6s9QVHWi8bugCVpV5po3Qpk-7D4TGnf_PnpnbptJr3OkpPHzTkhYFqZi35q--zOvJbosIwxnMigOxnrzjKRvCc3qM5I1ATls2thsWbBKDGRsvKSFYtLFISWvpKYj01riyaBQ" />
                                    <p className="font-body text-lg mt-2 text-gray-600 dark:text-gray-400">ISO 9001:2015</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <img alt="Certificate 2" className="h-48 w-auto opacity-80 hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCflowb4_W_N1juydMIptaOIuk9rCNwMehW_ZtujrTAZuEqQkTk_PnWs4L5dvhn7ZnYKLYN1R9rrh-KjS-flOApVoJaCvM72fltuVg070gxKZY1a3srcur8bFyEf1MfaZxMLaz2Dzpfi54CykDNoruxVt7ehYfGV8zX9hwHK4OcJl5BVYKBtdKCJm1Q8eAt3NztJGF72mfog5D0BNW3hUYvNxfBNveixtcrQ-hkYd5YzyR2lmDN7T7izbTfp-qw7Y1dFT8b6GGmiA" />
                                    <p className="font-body text-lg mt-2 text-gray-600 dark:text-gray-400">Hallmark Certified Gold</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <img alt="Patent document" className="h-48 w-auto opacity-80 hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3eIexWBQ4YzxMCQvxyuaaXPinstdK1KF5zSO5r06WFcxo20xgl5P6_r-UPVJxce7K_r1gAX8wbG_fxAdCJijC4XXkb1pXbTc3PCVGxkB7iS50SDXMvdBW0PkQOsslF52x1ZWaJo69oosWq-nXPW103w8Obst4joScN96axRDDB-ogQDrG2rDM1Avnmzf5p_4hsWfeIG5coOQS5J6v7cp8fXV-_mh7xPbgjhWxgppVsNuwHXu0ZhjnNr0qzyfV43hcruQdigHdXQ" />
                                    <p className="font-body text-lg mt-2 text-gray-600 dark:text-gray-400">Patented Clasp Design</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900" id="story">
                        <div className="container mx-auto px-4 lg:px-20">
                            <div className="text-center mb-16">
                                <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-dark dark:text-text-light">Our Journey Through Time</h2>
                            </div>
                            <div className="relative">
                                <div className="absolute left-1/2 h-full w-0.5 bg-accent/30 hidden md:block"></div>
                                <div className="relative flex flex-col gap-12">
                                    <div className="md:flex items-center md:gap-8 w-full">
                                        <div className="md:w-1/2 md:text-right md:pr-8">
                                            <p className="font-display text-3xl font-bold text-accent">1988</p>
                                            <h3 className="font-display text-2xl font-semibold my-2 text-text-dark dark:text-text-light">The Beginning</h3>
                                            <p className="font-body text-lg text-gray-700 dark:text-gray-300">Our founder opens Link small workshop with Link vision to create extraordinary jewelry.</p>
                                        </div>
                                        <div className="hidden md:block w-8 h-8 rounded-full bg-accent ring-8 ring-gray-50 dark:ring-gray-900 z-10"></div>
                                        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0"></div>
                                    </div>
                                    <div className="md:flex flex-row-reverse items-center md:gap-8 w-full">
                                        <div className="md:w-1/2 md:text-left md:pl-8">
                                            <p className="font-display text-3xl font-bold text-accent">2005</p>
                                            <h3 className="font-display text-2xl font-semibold my-2 text-text-dark dark:text-text-light">First International Award</h3>
                                            <p className="font-body text-lg text-gray-700 dark:text-gray-300">Recognition for "Best Design" at the Paris International Jewelry Fair.</p>
                                        </div>
                                        <div className="hidden md:block w-8 h-8 rounded-full bg-accent ring-8 ring-gray-50 dark:ring-gray-900 z-10"></div>
                                        <div className="md:w-1/2 md:pr-8 mt-4 md:mt-0"></div>
                                    </div>
                                    <div className="md:flex items-center md:gap-8 w-full">
                                        <div className="md:w-1/2 md:text-right md:pr-8">
                                            <p className="font-display text-3xl font-bold text-accent">2020</p>
                                            <h3 className="font-display text-2xl font-semibold my-2 text-text-dark dark:text-text-light">Embracing the Future</h3>
                                            <p className="font-body text-lg text-gray-700 dark:text-gray-300">Launch of our e-commerce platform, bringing Gold House to the world.</p>
                                        </div>
                                        <div className="hidden md:block w-8 h-8 rounded-full bg-accent ring-8 ring-gray-50 dark:ring-gray-900 z-10"></div>
                                        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="py-20 lg:py-32 bg-cover bg-center" id="contact" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("image-f77977a414964648937000e3952f1e68")' }}>
                        <div className="container mx-auto px-4 lg:px-20 text-center">
                            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">Create Your Own Legacy</h2>
                            <p className="font-body text-xl text-gray-300 mt-4 max-w-2xl mx-auto">Contact us for Link private consultation or to discuss Link bespoke commission.</p>
                            <Link className="mt-8 inline-block px-10 py-4 bg-accent text-white font-bold text-lg rounded-full hover:bg-opacity-80 transition-all duration-300" to="#">
                                Get in Touch
                            </Link>
                        </div>
                    </section>
                </main>
                <footer className="bg-gradient-to-r from-[#2c2016] to-[#1d1915] text-white">
                    <div className="container mx-auto px-4 lg:px-20 py-12">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 text-center gap-8">
                            <div>
                                <h3 className="font-display text-2xl font-bold mb-4">Gold House</h3>
                                <p className="font-body text-gray-400">Crafting timeless elegance since 1988.</p>
                            </div>
                            <div>
                                <h3 className="font-display text-xl font-semibold mb-4">Quick Links</h3>
                                <ul className="font-body space-y-2 text-gray-400">
                                    <li>
                                        <Link className="hover:text-white" to="/about">
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="hover:text-white" to="/collection">
                                            Collections
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="hover:text-white" to="/contact">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-display text-xl font-semibold mb-4">Follow Us</h3>
                                <div className="flex justify-center space-x-4">
                                    <Link className="text-gray-400 hover:text-white" to="#">
                                        <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path>
                                        </svg>
                                    </Link>
                                    <Link className="text-gray-400 hover:text-white" to="#">
                                        <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                        </svg>
                                    </Link>
                                    <Link className="text-gray-400 hover:text-white" to="#">
                                        <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.791 2.013 10.145 2 12.315 2zM8.447 12a3.867 3.867 0 117.734 0 3.867 3.867 0 01-7.734 0zM16.897 8.354a1.312 1.312 0 11-2.625 0 1.312 1.312 0 012.625 0z" fillRule="evenodd"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-500 font-body">
                            <p>© 2025 MYB Team. All Rights Reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
