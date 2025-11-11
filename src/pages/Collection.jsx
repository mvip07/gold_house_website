import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function Collection() {
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
                                    <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-background-light dark:bg-background-dark border dark:border-gray-700 pl-4 pr-3 hover:bg-primary/10 dark:hover:bg-primary/20">
                                        <p className="text-[#1A1A1A] dark:text-white text-sm font-medium leading-normal">Rings</p>
                                        <span className="material-symbols-outlined text-sm">expand_more</span>
                                    </button>
                                    <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-background-light dark:bg-background-dark border dark:border-gray-700 pl-4 pr-3 hover:bg-primary/10 dark:hover:bg-primary/20">
                                        <p className="text-[#1A1A1A] dark:text-white text-sm font-medium leading-normal">Necklaces</p>
                                        <span className="material-symbols-outlined text-sm">expand_more</span>
                                    </button>
                                    <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-background-light dark:bg-background-dark border dark:border-gray-700 pl-4 pr-3 hover:bg-primary/10 dark:hover:bg-primary/20">
                                        <p className="text-[#1A1A1A] dark:text-white text-sm font-medium leading-normal">Bracelets</p>
                                        <span className="material-symbols-outlined text-sm">expand_more</span>
                                    </button>
                                    <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-background-light dark:bg-background-dark border dark:border-gray-700 pl-4 pr-3 hover:bg-primary/10 dark:hover:bg-primary/20">
                                        <p className="text-[#1A1A1A] dark:text-white text-sm font-medium leading-normal">Earrings</p>
                                        <span className="material-symbols-outlined text-sm">expand_more</span>
                                    </button>
                                </div>
                                <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 p-4">
                                    <div className="flex flex-col gap-4 pb-3 group">
                                        <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl shadow-md overflow-hidden transform group-hover:scale-105 transition-transform duration-300" data-alt="The Aurelia Sunburst Ring" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAFKUvXYbucNWz3WzD7T2wXI_qxB5FvnE6wiF42OoPuWSHC89OUZqFfdtXIftk3dY-Qq0Z2OzU4Sls5QP37O5B8-Asgoeb1WnS3v48ahIzaspu4KvWaSMDM7NO8kBnSr5GZi5S5lYFbWfJJcOm2WJpK0_V8Hkix6-Fn7peUPzNhSErKN91YHP68RBawo4HyZksx6_9PuExKYTNPNOSbMPg7sW0J7rxUbbXZeVxQCxDibq9iCxg135XmoxKhSiQ1q1LFa_o16fzN6g")' }}></div>
                                        <div>
                                            <p className="text-primary text-xl font-bold leading-normal">The Aurelia Sunburst Ring</p>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">Crafted in 18k yellow gold with a brilliant-cut diamond</p>
                                            <button className="mt-2 text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Details</button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4 pb-3 group">
                                        <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl shadow-md overflow-hidden transform group-hover:scale-105 transition-transform duration-300" data-alt="Eternity Weave Necklace" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBAMYumvvseTxahIxTqarYw4lTPTssXTL1O2AT1v31VjSfW8ni_-Mf3NvUIQ-DWMmGW3zeYzOrnCo7BbCidhXXTp-qS01DpIjOo5_yrpc0OHgfVaf7Df67oTRBIFxgheQ4BA4Sm6sPgGTelpgMzJwpEMEzeRW3KXiOyy0pbTYmUg0iQsifoL1eBMQhiM3FWkALeHT9DSaYDQeEVj8ZPIbbe68314sai0D_uX_k-jLXMnt_BDHq1_tnRHW2QrtOhklkhpfoZgIrQNA")' }}></div>
                                        <div>
                                            <p className="text-primary text-xl font-bold leading-normal">Eternity Weave Necklace</p>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">An intricate design inspired by classNameic Roman artistry</p>
                                            <button className="mt-2 text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Details</button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4 pb-3 group">
                                        <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl shadow-md overflow-hidden transform group-hover:scale-105 transition-transform duration-300" data-alt="Solitaire Diamond Studs" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCd3WXM5qCl4-Do_W5dfY07Im5BnovvWu4BMo0n1oYO7DT1kQ1DKaQnwbS9IhN7sBVOakTz6gtKb3FP_58rXNPXeQG-vEpKu7WYnSsukNQYHATeeAh70AbxvCn--catfmfDKYNtJu2_gpGtZcgoBCL-ZO6mutb3Irr02QmrIf6aH3ll6IIAJxtENu5e0o8yku0FPB5uNO4E4tl4inOYLRMTFxXXHwfoRPHupxYGSOcWIbRYrWPqIojlm9Kzk1MGw_w8Cw69Ej_Ndw")' }}></div>
                                        <div>
                                            <p className="text-primary text-xl font-bold leading-normal">Solitaire Diamond Studs</p>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">Crafted in 18k yellow gold with a brilliant-cut diamond</p>
                                            <button className="mt-2 text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Details</button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4 pb-3 group">
                                        <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl shadow-md overflow-hidden transform group-hover:scale-105 transition-transform duration-300" data-alt="The Aurelia Sunburst Ring" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCbUMhaSxtjUT9oj86TSnN4OC1Is6LiPKqF6edcYyCmOunUC28TTe60XjsG8j9Bumfkd1GeG_nFGAloZ9SFFZ6HMBec1CptCapYBqn2adFzIt37Z9KFD_aXp5c2nJHlUCQKhoE-BJYd7d2ejTU5nPwAoYA1soaxdvsTLPy8mtb6vPbEA-yalT5Fea6JQRZ1tP17V7OS1Vtmw6Yf968_vUuD6haU-vE10ze-SDfHz87dDp9IzHRP7RShwTTXKBKrfjptbPirUFKCEg")' }}></div>
                                        <div>
                                            <p className="text-primary text-xl font-bold leading-normal">The Golden Hoop Earrings</p>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">ClassNameic hoops reinvented with a modern twist</p>
                                            <button className="mt-2 text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Details</button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4 pb-3 group">
                                        <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl shadow-md overflow-hidden transform group-hover:scale-105 transition-transform duration-300" data-alt="Eternity Weave Necklace" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC849PgYXhYBlvokqGWunQajaERWmBp4ulXn1WnXTJkTo13cH_Ss7X-UvgvlyB_oFVnKfU-ZrtOSCvrhvh3aI_9xJpIGmaiDQhbXQxgs67IPGB2GVvrTiVR5eZx_HF-NodrUU-4bJlLBs6u9zyvGl3V5G-02hPYb-LYlXJjbOxDvyfDiQK6_nP7Ulyxto4WjJdSRi7Rn_9YWEmrpYkWd0TQbAgNXXIhB2a_VltI9Gpipt8atc5a7y2D9oF4ECAK9uH22TKvUgHaDg")' }}></div>
                                        <div>
                                            <p className="text-primary text-xl font-bold leading-normal">Serpentine Bracelet</p>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">A bold and elegant statement piece for any occasion</p>
                                            <button className="mt-2 text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Details</button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4 pb-3 group">
                                        <div className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl shadow-md overflow-hidden transform group-hover:scale-105 transition-transform duration-300" data-alt="Solitaire Diamond Studs" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuANYoT2aGSJP1BT7wSMhj-Gn_6_eOCSihM8VJnMS-h1Xa9LqcgTBxAJOc5eaMWB3PEEH5Vsq_vJAFGqSpCFYlazVL6r52HryCv_wHZiw0pSyZyU2xQuOS5l-5hkd3r5809ZQDyz73ULZrwHBrgCRSeqvjweecN2VqF_xldBkIVD4b1uMNpukBIvOzWwzpIsB59xU0MjygYvbRoxqjDy9nz26DWaAvP5rwd1Sva4GmX1QHDDZV08QAyDfpIJKBRdvwhXZfTQqqXLsQ")' }}></div>
                                        <div>
                                            <p className="text-primary text-xl font-bold leading-normal">Royal Crest Pendant</p>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm font-normal leading-normal">A symbol of heritage and timeless elegance</p>
                                            <button className="mt-2 text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">View Details</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center p-4 mt-8">
                                    <Link className="flex size-10 items-center justify-center text-[#1A1A1A] dark:text-white" href="#">
                                        <span className="material-symbols-outlined text-xl">chevron_left</span>
                                    </Link>
                                    <Link className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-white rounded-full bg-primary" to="#">
                                        1
                                    </Link>
                                    <Link className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#1A1A1A] dark:text-white rounded-full hover:bg-primary/20 dark:hover:bg-primary/30" to="#">
                                        2
                                    </Link>
                                    <Link className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#1A1A1A] dark:text-white rounded-full hover:bg-primary/20 dark:hover:bg-primary/30" to="#">
                                        3
                                    </Link>
                                    <span className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#1A1A1A] dark:text-white rounded-full">...</span>
                                    <Link className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#1A1A1A] dark:text-white rounded-full hover:bg-primary/20 dark:hover:bg-primary/30" to="#">
                                        8
                                    </Link>
                                    <Link className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#1A1A1A] dark:text-white rounded-full hover:bg-primary/20 dark:hover:bg-primary/30" to="#">
                                        9
                                    </Link>
                                    <Link className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#1A1A1A] dark:text-white rounded-full hover:bg-primary/20 dark:hover:bg-primary/30" to="#">
                                        10
                                    </Link>
                                    <Link className="flex size-10 items-center justify-center text-[#1A1A1A] dark:text-white" href="#">
                                        <span className="material-symbols-outlined text-xl">chevron_right</span>
                                    </Link>
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
                                                    <Link className="text-gray-600 dark:text-gray-400 hover:text-primary" to="#">
                                                        FAQ
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="text-gray-600 dark:text-gray-400 hover:text-primary" to="#">
                                                        Shipping &amp; Returns
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="text-gray-600 dark:text-gray-400 hover:text-primary" to="#">
                                                        Contact Us
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-[#1A1A1A] dark:text-white mb-4">About Us</h3>
                                            <ul className="space-y-2 text-sm">
                                                <li>
                                                    <Link className="text-gray-600 dark:text-gray-400 hover:text-primary" to="#">
                                                        Our Story
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="text-gray-600 dark:text-gray-400 hover:text-primary" to="#">
                                                        Careers
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="text-gray-600 dark:text-gray-400 hover:text-primary" to="#">
                                                        Press
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
                                    <div className="text-center text-gray-500 dark:text-gray-400 text-sm mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">© 2023 Gold House. All Rights Reserved.</div>
                                </footer>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
