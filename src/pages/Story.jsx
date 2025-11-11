import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Story() {
    return (
        <div className="bg-background-light dark:bg-background-dark">
            <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
                        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                            <Navbar />
                            <main className="flex-1">
                                <div className="py-12 md:py-20">
                                    <div className="flex min-h-[360px] md:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-4" data-alt="Abstract gold texture background" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuBlqe6AXfKb2LRCMTSInofgPy0w0hV5sbzWiQxaSIfcKMAcqjgA6W7IRrYOwiabs-SjkUwaSBHNN8lLZWAeX4wZ0fvt1JSSriIP21QXG7Bm3bRaoKS0uHzC9jbYaUwQRW5G0PIf6ETA8m99oWVLzgR8YVKkjf3Xhg14vpd2a2xwDTrQ6JEI1Vs_pKSSLtyw9qLzmxqPPpvA_atMwVojfyuJvJXRgHNm1KRcBDOef7L1lsuyeJd5nQIdJDitSjVZdHRcM1qT4blDyA\")"}}>
                                        <div className="flex flex-col gap-4 text-center">
                                            <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tighter font-display">Our Journey: A Legacy of Craftsmanship</h1>
                                            <h2 className="text-white text-base md:text-lg font-normal leading-normal max-w-2xl mx-auto font-sans">Discover the story of Gold House, from humble beginnings to Link symbol of elegance and quality.</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative px-4 sm:px-6 md:px-10 py-16">
                                    <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-700 -translate-x-1/2"></div>
                                    <div className="space-y-16">
                                        <div className="relative flex items-center group">
                                            <div className="hidden md:block w-1/2 pr-8">
                                                <div className="bg-white dark:bg-background-dark p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                                    <h3 className="text-primary text-2xl font-bold font-display">1980</h3>
                                                    <h4 className="text-[#181411] dark:text-white text-xl font-semibold mt-2 font-display">The Vision Begins</h4>
                                                    <p className="text-gray-600 dark:text-gray-400 mt-2 font-sans">The founding of Gold House with Link vision to create timeless jewelry that embodies elegance and craftsmanship.</p>
                                                </div>
                                            </div>
                                            <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary ring-8 ring-background-light dark:ring-background-dark flex items-center justify-center">
                                                <span className="material-symbols-outlined text-white">auto_awesome</span>
                                            </div>
                                            <div className="w-full md:w-1/2 md:pl-8">
                                                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                                    <img className="w-full h-64 object-cover" alt="Founder's vintage workshop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBilVUQ9s7u_9tTZ6Vz4J__VSGke0vaQizjXWKNDHksRKhfztWmg-qAmeisE8L2rpc26NNOKsHRHK83-zy6EQzDA_d8WTnVnmjn_vFOJ8a6-ImxFKIaEOMpdohrclPXqKciS3MChPFAAjhGf3UrS3R3UoS82KG4iCYdXEKgFIh5sN8l9oyaisNTU2YZ1MVO15TXH8zzMbIc6zwrQvArpPh5KomHHZ-HFVTTOihiNE3CYqed84w1zT80kilYyltgl7k324P-EOh7wQ" />
                                                    <div className="md:hidden bg-white dark:bg-background-dark p-4">
                                                        <h3 className="text-primary text-xl font-bold font-display">1980</h3>
                                                        <h4 className="text-[#181411] dark:text-white text-lg font-semibold mt-1 font-display">The Vision Begins</h4>
                                                        <p className="text-gray-600 dark:text-gray-400 mt-1 font-sans text-sm">The founding of Gold House with Link vision to create timeless jewelry that embodies elegance and craftsmanship.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative flex items-center flex-row-reverse group">
                                            <div className="hidden md:block w-1/2 pl-8">
                                                <div className="bg-white dark:bg-background-dark p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                                    <h3 className="text-primary text-2xl font-bold font-display">1995</h3>
                                                    <h4 className="text-[#181411] dark:text-white text-xl font-semibold mt-2 font-display">Our First Store</h4>
                                                    <p className="text-gray-600 dark:text-gray-400 mt-2 font-sans">The grand opening of our first flagship store, Link landmark moment that brought our creations to the public.</p>
                                                </div>
                                            </div>
                                            <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary ring-8 ring-background-light dark:ring-background-dark flex items-center justify-center">
                                                <span className="material-symbols-outlined text-white">store</span>
                                            </div>
                                            <div className="w-full md:w-1/2 md:pr-8">
                                                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                                    <img className="w-full h-64 object-cover" alt="First flagship store exterior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH9M2k_Ect__TxX61y3WKP3UzGSfu9xjdMUvRyZeozUDXKg1BNtjt_f6a0EtcY-pbuRW6iUoLE-Cnabx27EupEuRkyePVnzEKYENr7KWT6pZTAlSXpGtoPkxA3ZGDKPFb-BGobpGe872y_JcXf9WIOROq-mOum_YWqW_Y-CQciHjUsZwIvEogVKvkFTH4va2modnQ-yz_KsP_x_0sijoiEErPPSrmVnB1EfbIO1j4iKbqVf3lU712L95g9AJYEa8Z3PkUjIIjSqQ" />
                                                    <div className="md:hidden bg-white dark:bg-background-dark p-4">
                                                        <h3 className="text-primary text-xl font-bold font-display">1995</h3>
                                                        <h4 className="text-[#181411] dark:text-white text-lg font-semibold mt-1 font-display">Our First Store</h4>
                                                        <p className="text-gray-600 dark:text-gray-400 mt-1 font-sans text-sm">The grand opening of our first flagship store, Link landmark moment that brought our creations to the public.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative flex items-center group">
                                            <div className="hidden md:block w-1/2 pr-8">
                                                <div className="bg-white dark:bg-background-dark p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                                    <h3 className="text-primary text-2xl font-bold font-display">2012</h3>
                                                    <h4 className="text-[#181411] dark:text-white text-xl font-semibold mt-2 font-display">Expanding Horizons</h4>
                                                    <p className="text-gray-600 dark:text-gray-400 mt-2 font-sans">Our first international boutique opens in Paris, marking Link new chapter of global presence and recognition.</p>
                                                </div>
                                            </div>
                                            <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary ring-8 ring-background-light dark:ring-background-dark flex items-center justify-center">
                                                <span className="material-symbols-outlined text-white">public</span>
                                            </div>
                                            <div className="w-full md:w-1/2 md:pl-8">
                                                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                                    <img className="w-full h-64 object-cover" alt="Eiffel Tower in Paris" data-location="Paris" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPpxJUhSmbcPNPQRpwlx-nV4MI94H9u-qLoebc7syrJ_nsUlFwpGlxNL-mvU3KwJb6dDb6izeuOESKOZzc4Nt-YdtC7SPDEghv7zqtxPyGVsg9l_bpc9fbxvnGZ-UPofqtmuctB3STnzbuOllcAPWEckiHgiRo6oD1feKC6gN3Ds07WYaIkCQP0a-XcS6aA2ZRUFNTo29pgejsl6wntkUX-61gBJJCht6wwb086w9sp9g8En8ynPOH_F1YAZoV4n29NvKsL749jQ" />
                                                    <div className="md:hidden bg-white dark:bg-background-dark p-4">
                                                        <h3 className="text-primary text-xl font-bold font-display">2012</h3>
                                                        <h4 className="text-[#181411] dark:text-white text-lg font-semibold mt-1 font-display">Expanding Horizons</h4>
                                                        <p className="text-gray-600 dark:text-gray-400 mt-1 font-sans text-sm">Our first international boutique opens in Paris, marking Link new chapter of global presence and recognition.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative flex items-center flex-row-reverse group">
                                            <div className="hidden md:block w-1/2 pl-8">
                                                <div className="bg-white dark:bg-background-dark p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                                    <h3 className="text-primary text-2xl font-bold font-display">2020</h3>
                                                    <h4 className="text-[#181411] dark:text-white text-xl font-semibold mt-2 font-display">Commitment to Sustainability</h4>
                                                    <p className="text-gray-600 dark:text-gray-400 mt-2 font-sans">Introducing our commitment to ethically sourced materials and sustainable practices, ensuring beauty with Link conscience.</p>
                                                </div>
                                            </div>
                                            <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary ring-8 ring-background-light dark:ring-background-dark flex items-center justify-center">
                                                <span className="material-symbols-outlined text-white">eco</span>
                                            </div>
                                            <div className="w-full md:w-1/2 md:pr-8">
                                                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                                    <img className="w-full h-64 object-cover" alt="Ethically sourced gold nugget in hands" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcf4_br-LO-OM4RNnkKKlO1SslNenVnO5J64U5j9bGcEqQM2l2OmrvPN46-bHP2DNb8MUrBDiDXFrBbhMsPQiZ1ZYVYsvV8Y10TraZipMF21l0deuwcqdx8_ESLuEZWP1f1NleV-hS5gMKY66HUdxRENXH9X186uM74IhzOO1G5rsyoUPmTmZoGbhHzF5bmV5dWJ-jSZpm8ScWj_ZLNTsAlIBFu0yeygBLwEjq80XzxG3DZx78a3_7iC7G4sH3eJ_z_ELSpM1L8g" />
                                                    <div className="md:hidden bg-white dark:bg-background-dark p-4">
                                                        <h3 className="text-primary text-xl font-bold font-display">2020</h3>
                                                        <h4 className="text-[#181411] dark:text-white text-lg font-semibold mt-1 font-display">Commitment to Sustainability</h4>
                                                        <p className="text-gray-600 dark:text-gray-400 mt-1 font-sans text-sm">Introducing our commitment to ethically sourced materials and sustainable practices, ensuring beauty with Link conscience.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative flex items-center group">
                                            <div className="hidden md:block w-1/2 pr-8">
                                                <div className="bg-white dark:bg-background-dark p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                                    <h3 className="text-primary text-2xl font-bold font-display">Today</h3>
                                                    <h4 className="text-[#181411] dark:text-white text-xl font-semibold mt-2 font-display">A Golden Future</h4>
                                                    <p className="text-gray-600 dark:text-gray-400 mt-2 font-sans">Continuing our tradition of excellence and looking towards Link bright future, innovating while honoring our heritage.</p>
                                                </div>
                                            </div>
                                            <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary ring-8 ring-background-light dark:ring-background-dark flex items-center justify-center">
                                                <span className="material-symbols-outlined text-white">rocket_launch</span>
                                            </div>
                                            <div className="w-full md:w-1/2 md:pl-8">
                                                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                                    <img className="w-full h-64 object-cover" alt="Modern jewelry design on Link gold background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-WhXhgb0AutrIyWMInjfPTmdW_KA9-r_6sbPNkBpUS-0WLY1KbEcjkd-Q7JShtC5ZsxzZ-clmoUPqa-G4Npo6CC7x2Zd1d1TtQsqAiBdKGc6nnHP6hfAVzRjzg1jlEtPNka-NNgRj4WUjh1sOlrRY4LmR7NS9TXrLQKJqew3TZ5T8bACRb8u89IyskXLlL9B24AE7U0_lIvboe2CgGzhFvSlVCNDsHKSCBcuHxjtS0r7oVgS3fLJFmtQa82PjuotwpOVcwH3iIQ" />
                                                    <div className="md:hidden bg-white dark:bg-background-dark p-4">
                                                        <h3 className="text-primary text-xl font-bold font-display">Today</h3>
                                                        <h4 className="text-[#181411] dark:text-white text-lg font-semibold mt-1 font-display">A Golden Future</h4>
                                                        <p className="text-gray-600 dark:text-gray-400 mt-1 font-sans text-sm">Continuing our tradition of excellence and looking towards Link bright future, innovating while honoring our heritage.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                            <footer className="flex flex-col gap-6 px-5 py-10 text-center border-t border-solid border-t-[#f0edea] dark:border-t-[#2a2622] mt-16">
                                <div className="flex flex-wrap items-center justify-center gap-6">
                                    <Link className="text-[#857360] dark:text-gray-400 text-base font-normal leading-normal min-w-40 font-sans" to="#">
                                        Terms of Service
                                    </Link>
                                    <Link className="text-[#857360] dark:text-gray-400 text-base font-normal leading-normal min-w-40 font-sans" to="#">
                                        Privacy Policy
                                    </Link>
                                    <Link className="text-[#857360] dark:text-gray-400 text-base font-normal leading-normal min-w-40 font-sans" to="#">
                                        Contact Us
                                    </Link>
                                </div>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Link to="#">
                                        <span className="material-symbols-outlined text-[#857360] dark:text-gray-400">group</span>
                                    </Link>
                                    <Link to="#">
                                        <span className="material-symbols-outlined text-[#857360] dark:text-gray-400">photo_camera</span>
                                    </Link>
                                    <Link to="#">
                                        <span className="material-symbols-outlined text-[#857360] dark:text-gray-400">flutter_dash</span>
                                    </Link>
                                </div>
                                <p className="text-[#857360] dark:text-gray-400 text-base font-normal leading-normal font-sans">© 2023 Gold House. All Rights Reserved.</p>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
