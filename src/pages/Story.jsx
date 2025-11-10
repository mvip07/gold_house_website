export default function Story() {
    return (
        <div class="bg-background-light dark:bg-background-dark">
            <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <div class="layout-container flex h-full grow flex-col">
                    <div class="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
                        <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
                            <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f0edea] dark:border-b-[#2a2622] px-4 sm:px-6 md:px-10 py-3">
                                <div class="flex items-center gap-4 text-[#181411] dark:text-white">
                                    <div class="size-6">
                                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                            <path clip-rule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fill-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <h2 class="text-[#181411] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] font-display">Gold House</h2>
                                </div>
                                <div class="hidden md:flex flex-1 justify-end items-center gap-8">
                                    <div class="flex items-center gap-9">
                                        <a class="text-[#181411] dark:text-gray-300 text-sm font-medium leading-normal font-sans" href="/">
                                            Home
                                        </a>
                                        <a class="text-[#181411] dark:text-gray-300 text-sm font-medium leading-normal font-sans" href="/about">
                                            About
                                        </a>
                                        <a class="text-primary dark:text-primary text-sm font-medium leading-normal font-sans" href="/story">
                                            Our Journey
                                        </a>
                                        <a class="text-[#181411] dark:text-gray-300 text-sm font-medium leading-normal font-sans" href="/contact">
                                            Contact
                                        </a>
                                    </div>
                                    <div class="flex items-center gap-4 text-sm font-medium text-[#181411] dark:text-gray-300">
                                        <a class="font-bold text-primary dark:text-primary" href="#">
                                            EN
                                        </a>
                                        <span class="text-gray-300 dark:text-gray-600">/</span>
                                        <a class="hover:text-primary" href="#">
                                            UZ
                                        </a>
                                        <span class="text-gray-300 dark:text-gray-600">/</span>
                                        <a class="hover:text-primary" href="#">
                                            RU
                                        </a>
                                    </div>
                                    <button class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] font-sans">
                                        <span class="truncate">Shop Now</span>
                                    </button>
                                </div>
                                <div class="md:hidden">
                                    <button class="text-[#181411] dark:text-white">
                                        <span class="material-symbols-outlined">menu</span>
                                    </button>
                                </div>
                            </header>
                            <main class="flex-1">
                                <div class="py-12 md:py-20">
                                    <div class="flex min-h-[360px] md:min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-4" data-alt="Abstract gold texture background" style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuBlqe6AXfKb2LRCMTSInofgPy0w0hV5sbzWiQxaSIfcKMAcqjgA6W7IRrYOwiabs-SjkUwaSBHNN8lLZWAeX4wZ0fvt1JSSriIP21QXG7Bm3bRaoKS0uHzC9jbYaUwQRW5G0PIf6ETA8m99oWVLzgR8YVKkjf3Xhg14vpd2a2xwDTrQ6JEI1Vs_pKSSLtyw9qLzmxqPPpvA_atMwVojfyuJvJXRgHNm1KRcBDOef7L1lsuyeJd5nQIdJDitSjVZdHRcM1qT4blDyA\")"}}>
                                        <div class="flex flex-col gap-4 text-center">
                                            <h1 class="text-white text-4xl md:text-6xl font-black leading-tight tracking-tighter font-display">Our Journey: A Legacy of Craftsmanship</h1>
                                            <h2 class="text-white text-base md:text-lg font-normal leading-normal max-w-2xl mx-auto font-sans">Discover the story of Gold House, from humble beginnings to a symbol of elegance and quality.</h2>
                                        </div>
                                    </div>
                                </div>
                                <div class="relative px-4 sm:px-6 md:px-10 py-16">
                                    <div class="absolute top-0 left-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-700 -translate-x-1/2"></div>
                                    <div class="space-y-16">
                                        <div class="relative flex items-center group">
                                            <div class="hidden md:block w-1/2 pr-8">
                                                <div class="bg-white dark:bg-background-dark p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                                    <h3 class="text-primary text-2xl font-bold font-display">1980</h3>
                                                    <h4 class="text-[#181411] dark:text-white text-xl font-semibold mt-2 font-display">The Vision Begins</h4>
                                                    <p class="text-gray-600 dark:text-gray-400 mt-2 font-sans">The founding of Gold House with a vision to create timeless jewelry that embodies elegance and craftsmanship.</p>
                                                </div>
                                            </div>
                                            <div class="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary ring-8 ring-background-light dark:ring-background-dark flex items-center justify-center">
                                                <span class="material-symbols-outlined text-white">auto_awesome</span>
                                            </div>
                                            <div class="w-full md:w-1/2 md:pl-8">
                                                <div class="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                                    <img class="w-full h-64 object-cover" data-alt="Founder's vintage workshop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBilVUQ9s7u_9tTZ6Vz4J__VSGke0vaQizjXWKNDHksRKhfztWmg-qAmeisE8L2rpc26NNOKsHRHK83-zy6EQzDA_d8WTnVnmjn_vFOJ8a6-ImxFKIaEOMpdohrclPXqKciS3MChPFAAjhGf3UrS3R3UoS82KG4iCYdXEKgFIh5sN8l9oyaisNTU2YZ1MVO15TXH8zzMbIc6zwrQvArpPh5KomHHZ-HFVTTOihiNE3CYqed84w1zT80kilYyltgl7k324P-EOh7wQ" />
                                                    <div class="md:hidden bg-white dark:bg-background-dark p-4">
                                                        <h3 class="text-primary text-xl font-bold font-display">1980</h3>
                                                        <h4 class="text-[#181411] dark:text-white text-lg font-semibold mt-1 font-display">The Vision Begins</h4>
                                                        <p class="text-gray-600 dark:text-gray-400 mt-1 font-sans text-sm">The founding of Gold House with a vision to create timeless jewelry that embodies elegance and craftsmanship.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="relative flex items-center flex-row-reverse group">
                                            <div class="hidden md:block w-1/2 pl-8">
                                                <div class="bg-white dark:bg-background-dark p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                                    <h3 class="text-primary text-2xl font-bold font-display">1995</h3>
                                                    <h4 class="text-[#181411] dark:text-white text-xl font-semibold mt-2 font-display">Our First Store</h4>
                                                    <p class="text-gray-600 dark:text-gray-400 mt-2 font-sans">The grand opening of our first flagship store, a landmark moment that brought our creations to the public.</p>
                                                </div>
                                            </div>
                                            <div class="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary ring-8 ring-background-light dark:ring-background-dark flex items-center justify-center">
                                                <span class="material-symbols-outlined text-white">store</span>
                                            </div>
                                            <div class="w-full md:w-1/2 md:pr-8">
                                                <div class="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                                    <img class="w-full h-64 object-cover" data-alt="First flagship store exterior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH9M2k_Ect__TxX61y3WKP3UzGSfu9xjdMUvRyZeozUDXKg1BNtjt_f6a0EtcY-pbuRW6iUoLE-Cnabx27EupEuRkyePVnzEKYENr7KWT6pZTAlSXpGtoPkxA3ZGDKPFb-BGobpGe872y_JcXf9WIOROq-mOum_YWqW_Y-CQciHjUsZwIvEogVKvkFTH4va2modnQ-yz_KsP_x_0sijoiEErPPSrmVnB1EfbIO1j4iKbqVf3lU712L95g9AJYEa8Z3PkUjIIjSqQ" />
                                                    <div class="md:hidden bg-white dark:bg-background-dark p-4">
                                                        <h3 class="text-primary text-xl font-bold font-display">1995</h3>
                                                        <h4 class="text-[#181411] dark:text-white text-lg font-semibold mt-1 font-display">Our First Store</h4>
                                                        <p class="text-gray-600 dark:text-gray-400 mt-1 font-sans text-sm">The grand opening of our first flagship store, a landmark moment that brought our creations to the public.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="relative flex items-center group">
                                            <div class="hidden md:block w-1/2 pr-8">
                                                <div class="bg-white dark:bg-background-dark p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                                    <h3 class="text-primary text-2xl font-bold font-display">2012</h3>
                                                    <h4 class="text-[#181411] dark:text-white text-xl font-semibold mt-2 font-display">Expanding Horizons</h4>
                                                    <p class="text-gray-600 dark:text-gray-400 mt-2 font-sans">Our first international boutique opens in Paris, marking a new chapter of global presence and recognition.</p>
                                                </div>
                                            </div>
                                            <div class="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary ring-8 ring-background-light dark:ring-background-dark flex items-center justify-center">
                                                <span class="material-symbols-outlined text-white">public</span>
                                            </div>
                                            <div class="w-full md:w-1/2 md:pl-8">
                                                <div class="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                                    <img class="w-full h-64 object-cover" data-alt="Eiffel Tower in Paris" data-location="Paris" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPpxJUhSmbcPNPQRpwlx-nV4MI94H9u-qLoebc7syrJ_nsUlFwpGlxNL-mvU3KwJb6dDb6izeuOESKOZzc4Nt-YdtC7SPDEghv7zqtxPyGVsg9l_bpc9fbxvnGZ-UPofqtmuctB3STnzbuOllcAPWEckiHgiRo6oD1feKC6gN3Ds07WYaIkCQP0a-XcS6aA2ZRUFNTo29pgejsl6wntkUX-61gBJJCht6wwb086w9sp9g8En8ynPOH_F1YAZoV4n29NvKsL749jQ" />
                                                    <div class="md:hidden bg-white dark:bg-background-dark p-4">
                                                        <h3 class="text-primary text-xl font-bold font-display">2012</h3>
                                                        <h4 class="text-[#181411] dark:text-white text-lg font-semibold mt-1 font-display">Expanding Horizons</h4>
                                                        <p class="text-gray-600 dark:text-gray-400 mt-1 font-sans text-sm">Our first international boutique opens in Paris, marking a new chapter of global presence and recognition.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="relative flex items-center flex-row-reverse group">
                                            <div class="hidden md:block w-1/2 pl-8">
                                                <div class="bg-white dark:bg-background-dark p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                                    <h3 class="text-primary text-2xl font-bold font-display">2020</h3>
                                                    <h4 class="text-[#181411] dark:text-white text-xl font-semibold mt-2 font-display">Commitment to Sustainability</h4>
                                                    <p class="text-gray-600 dark:text-gray-400 mt-2 font-sans">Introducing our commitment to ethically sourced materials and sustainable practices, ensuring beauty with a conscience.</p>
                                                </div>
                                            </div>
                                            <div class="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary ring-8 ring-background-light dark:ring-background-dark flex items-center justify-center">
                                                <span class="material-symbols-outlined text-white">eco</span>
                                            </div>
                                            <div class="w-full md:w-1/2 md:pr-8">
                                                <div class="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                                    <img class="w-full h-64 object-cover" data-alt="Ethically sourced gold nugget in hands" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcf4_br-LO-OM4RNnkKKlO1SslNenVnO5J64U5j9bGcEqQM2l2OmrvPN46-bHP2DNb8MUrBDiDXFrBbhMsPQiZ1ZYVYsvV8Y10TraZipMF21l0deuwcqdx8_ESLuEZWP1f1NleV-hS5gMKY66HUdxRENXH9X186uM74IhzOO1G5rsyoUPmTmZoGbhHzF5bmV5dWJ-jSZpm8ScWj_ZLNTsAlIBFu0yeygBLwEjq80XzxG3DZx78a3_7iC7G4sH3eJ_z_ELSpM1L8g" />
                                                    <div class="md:hidden bg-white dark:bg-background-dark p-4">
                                                        <h3 class="text-primary text-xl font-bold font-display">2020</h3>
                                                        <h4 class="text-[#181411] dark:text-white text-lg font-semibold mt-1 font-display">Commitment to Sustainability</h4>
                                                        <p class="text-gray-600 dark:text-gray-400 mt-1 font-sans text-sm">Introducing our commitment to ethically sourced materials and sustainable practices, ensuring beauty with a conscience.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="relative flex items-center group">
                                            <div class="hidden md:block w-1/2 pr-8">
                                                <div class="bg-white dark:bg-background-dark p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                                    <h3 class="text-primary text-2xl font-bold font-display">Today</h3>
                                                    <h4 class="text-[#181411] dark:text-white text-xl font-semibold mt-2 font-display">A Golden Future</h4>
                                                    <p class="text-gray-600 dark:text-gray-400 mt-2 font-sans">Continuing our tradition of excellence and looking towards a bright future, innovating while honoring our heritage.</p>
                                                </div>
                                            </div>
                                            <div class="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary ring-8 ring-background-light dark:ring-background-dark flex items-center justify-center">
                                                <span class="material-symbols-outlined text-white">rocket_launch</span>
                                            </div>
                                            <div class="w-full md:w-1/2 md:pl-8">
                                                <div class="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                                    <img class="w-full h-64 object-cover" data-alt="Modern jewelry design on a gold background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-WhXhgb0AutrIyWMInjfPTmdW_KA9-r_6sbPNkBpUS-0WLY1KbEcjkd-Q7JShtC5ZsxzZ-clmoUPqa-G4Npo6CC7x2Zd1d1TtQsqAiBdKGc6nnHP6hfAVzRjzg1jlEtPNka-NNgRj4WUjh1sOlrRY4LmR7NS9TXrLQKJqew3TZ5T8bACRb8u89IyskXLlL9B24AE7U0_lIvboe2CgGzhFvSlVCNDsHKSCBcuHxjtS0r7oVgS3fLJFmtQa82PjuotwpOVcwH3iIQ" />
                                                    <div class="md:hidden bg-white dark:bg-background-dark p-4">
                                                        <h3 class="text-primary text-xl font-bold font-display">Today</h3>
                                                        <h4 class="text-[#181411] dark:text-white text-lg font-semibold mt-1 font-display">A Golden Future</h4>
                                                        <p class="text-gray-600 dark:text-gray-400 mt-1 font-sans text-sm">Continuing our tradition of excellence and looking towards a bright future, innovating while honoring our heritage.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </main>
                            <footer class="flex flex-col gap-6 px-5 py-10 text-center border-t border-solid border-t-[#f0edea] dark:border-t-[#2a2622] mt-16">
                                <div class="flex flex-wrap items-center justify-center gap-6">
                                    <a class="text-[#857360] dark:text-gray-400 text-base font-normal leading-normal min-w-40 font-sans" href="#">
                                        Terms of Service
                                    </a>
                                    <a class="text-[#857360] dark:text-gray-400 text-base font-normal leading-normal min-w-40 font-sans" href="#">
                                        Privacy Policy
                                    </a>
                                    <a class="text-[#857360] dark:text-gray-400 text-base font-normal leading-normal min-w-40 font-sans" href="#">
                                        Contact Us
                                    </a>
                                </div>
                                <div class="flex flex-wrap justify-center gap-4">
                                    <a href="#">
                                        <span class="material-symbols-outlined text-[#857360] dark:text-gray-400">group</span>
                                    </a>
                                    <a href="#">
                                        <span class="material-symbols-outlined text-[#857360] dark:text-gray-400">photo_camera</span>
                                    </a>
                                    <a href="#">
                                        <span class="material-symbols-outlined text-[#857360] dark:text-gray-400">flutter_dash</span>
                                    </a>
                                </div>
                                <p class="text-[#857360] dark:text-gray-400 text-base font-normal leading-normal font-sans">© 2023 Gold House. All Rights Reserved.</p>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
