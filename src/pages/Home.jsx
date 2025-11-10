export default function Home() {
    return (
        <div class="bg-background-light dark:bg-background-dark text-text-dark dark:text-text-light">
            <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                <header class="absolute top-0 left-0 right-0 z-50 px-4 md:px-10 lg:px-20 py-6">
                    <div class="flex items-center justify-between mx-auto">
                        <a class="flex items-center gap-3" href="#">
                            <svg class="h-8 w-8 text-accent" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path clip-rule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill-rule="evenodd"></path>
                            </svg>
                            <span class="text-3xl font-display font-bold text-white">Gold House</span>
                        </a>
                        <nav class="hidden lg:flex items-center gap-10 text-lg">
                            <a class="text-white hover:text-accent transition-colors" href="/about">
                                About
                            </a>
                            <a class="text-white hover:text-accent transition-colors" href="/collection">
                                Products
                            </a>
                            <a class="text-white hover:text-accent transition-colors" href="/story">
                                Our Story
                            </a>
                            <a class="text-white hover:text-accent transition-colors" href="/contact">
                                Contact
                            </a>
                        </nav>
                        <div class="flex items-center gap-4">
                            <div class="hidden sm:flex items-center gap-2 text-white">
                                <a class="px-2 py-1 text-sm font-medium hover:text-accent transition-colors" href="#">
                                    EN
                                </a>
                                <span class="text-gray-400">/</span>
                                <a class="px-2 py-1 text-sm font-medium hover:text-accent transition-colors text-gray-400" href="#">
                                    UZ
                                </a>
                                <span class="text-gray-400">/</span>
                                <a class="px-2 py-1 text-sm font-medium hover:text-accent transition-colors text-gray-400" href="#">
                                    RU
                                </a>
                            </div>
                            <button class="lg:hidden p-2 text-white">
                                <span class="material-symbols-outlined"> menu </span>
                            </button>
                        </div>
                    </div>
                </header>
                <main class="flex-grow">
                    <section class="relative h-screen w-full">
                        <div class="absolute inset-0 bg-black opacity-50 z-10"></div>
                        <video autoplay="" class="absolute inset-0 w-full h-full object-cover" loop="" muted="" poster="https://lh3.googleusercontent.com/aida-public/AB6AXuDAm9Gj_otxzApREx4mI_bp5EOk8KqX7Ml7J9U_8FtuYkG0qoEIOY8uVfAkug-kXDwYqLppV7S2bXN3BILtKmepgxlnA67jrmmeS0QSZMKUgm2DvlOXDkudQ5BY6-NQQNFSkaCf48tiqDxet8xSb_iieRthNIjGUOigmJUdW8g4FOUdWDf19_HZ26SAKSqvjOneOwBEt1UaHEkINFp2mfGfxuVmtrwkojQ88aXH-4oblLVgcVcZZ-bW8mkrK4N8hbkRI5fZHXICbA">
                            <source src="https://assets.mixkit.co/videos/preview/mixkit-a-goldsmith-working-in-his-workshop-2387-large.mp4" type="video/mp4" />
                        </video>
                        <div class="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
                            <h1 class="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4">Elegance in Every Detail</h1>
                            <p class="font-body text-xl md:text-2xl max-w-2xl mb-8">Discover the timeless beauty of handcrafted gold jewelry, where tradition meets modern luxury.</p>
                            <a class="px-8 py-3 bg-accent text-white font-bold text-lg rounded-full hover:bg-opacity-80 transition-all duration-300" href="#products">
                                Explore Our Collections
                            </a>
                        </div>
                    </section>
                    <section class="py-20 lg:py-32 bg-background-light dark:bg-background-dark" id="about">
                        <div class="container mx-auto px-4 lg:px-20 grid lg:grid-cols-2 gap-12 items-center">
                            <div class="text-center lg:text-left">
                                <h2 class="font-display text-4xl lg:text-5xl font-bold mb-6 text-text-dark dark:text-text-light">A Legacy of Craftsmanship</h2>
                                <p class="font-body text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-8">For over three decades, Gold House has been synonymous with exceptional quality and artistry. We are a family-owned business dedicated to preserving the ancient craft of goldsmithing while embracing contemporary design.</p>
                                <a class="inline-block px-8 py-3 border border-accent text-accent font-bold text-lg rounded-full hover:bg-accent hover:text-white transition-all duration-300" href="#">
                                    Learn More About Us
                                </a>
                            </div>
                            <div>
                                <img alt="Goldsmith at work" class="rounded-xl shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd5or_8enU7r2OBOx71Yl63fUh2gtv8z4T2Hp6NZdVSDzPDWuZotqi0mgJnctg4s7IRkaFvtdo3P1SOnYFBG6HdCXWWWZn7W04UK_MNcmiQKOJ_Pv3Oz_jWgEAh3KumObRXBPaBvVRH9wsWIavLzxTYBKQeKWpo3ctc_7bHqK6FDHrUN2J8FTM-yo4hcK1TNiIGQUnLsmzW1t7Do2IAR0bPEnIXcbPtJ4K0UybJ4IoIBaZKMODfYhc9SP-0nHvIQ6D3GeC6mkN5A" />
                            </div>
                        </div>
                    </section>
                    <section class="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900" id="products">
                        <div class="container mx-auto px-4 lg:px-20">
                            <div class="text-center mb-16">
                                <h2 class="font-display text-4xl lg:text-5xl font-bold text-text-dark dark:text-text-light">Featured Collections</h2>
                                <p class="font-body text-lg lg:text-xl text-gray-700 dark:text-gray-300 mt-4 max-w-2xl mx-auto">Each piece is a testament to our commitment to excellence, designed to be cherished for generations.</p>
                            </div>
                            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div class="group">
                                    <div class="overflow-hidden rounded-xl">
                                        <img alt="Elegant gold necklace" class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDypG8aC98i-sble8NdizU9SwF5uSYzk585DPbEb4LoaQw2jIqUokqIAdfT1d7CKCu1YHLU1xJ_ZwXC06VQ8bBm2JQuMGybKEC_-H5muOUeHjJP4hORgrdvwKLtOn9fQhGfU_bdax9AYtPSP1V03H3vCVNuAOet_r5vyTKu8Ipqhq6xAMIFSXCT0lv6QrxSYJY93GgH5nb8RAyh80LWAOPwJ4Qk2-A5ITKEC0XhsXJR8BV-XMQrH2S7ziJQYHK3YTK0GkskR1ksRw" />
                                    </div>
                                    <h3 class="font-display text-2xl font-bold mt-4 text-text-dark dark:text-text-light">The Heritage Collection</h3>
                                    <p class="font-body text-gray-600 dark:text-gray-400">Timeless designs inspired by our rich history.</p>
                                </div>
                                <div class="group">
                                    <div class="overflow-hidden rounded-xl">
                                        <img alt="Modern gold ring" class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu0bdKPizodbEH-Mzr36LIPLe0ThVmKqnWL20DfmN8MvaCYDBeHzb0Pr5lx6BZE8gg1vVI7xI3gHTbOXTcAly5kz7OrNW89mysAdEE-f1Uj6VFFj59J_RaLEOUweq0lZVPw_6f9qFSfIAdXwgC60xW9jMTrpTgkNMkfNqvBip94on5eJ6lIabG-jc1OrpOTvGNcVNuffDwKlrpYzb1wC2JudNMOAsWwvJu1n-iYyklghzt3cSncDWB_a8OyM9bBmRO6_z1a-Q1DA" />
                                    </div>
                                    <h3 class="font-display text-2xl font-bold mt-4 text-text-dark dark:text-text-light">The Modernist Collection</h3>
                                    <p class="font-body text-gray-600 dark:text-gray-400">Clean lines and bold shapes for the contemporary connoisseur.</p>
                                </div>
                                <div class="group">
                                    <div class="overflow-hidden rounded-xl">
                                        <img alt="Bespoke gold earrings" class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB-ja7_vtHbbH-NzyBgE0KIOGRbARfPvJ5WjxEvFZxj4nJrW6eEcDRojq2L1MUN_PrSUMGTM_Ixt0HmecL_eMXacKOgaOTVdKdQ2g0AlYSzk-AlKAdotlf_4tmdbfrGgRsBvMkdJXKnZ-O45leky1Ov9JahcU6MfyYreKN5aYnN1GkbFZMc94DgoGM-T1hnLn1xcsENZtd8g3q6cmHBsYclfofh21nyrr61N9IoLsdqYR6M_5OYlgVH5Z44C7ryV97JKWql3Vu5w" />
                                    </div>
                                    <h3 class="font-display text-2xl font-bold mt-4 text-text-dark dark:text-text-light">The Bespoke Collection</h3>
                                    <p class="font-body text-gray-600 dark:text-gray-400">Your unique story, captured in gold.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="py-20 lg:py-32 bg-background-light dark:bg-background-dark" id="certificates">
                        <div class="container mx-auto px-4 lg:px-20 text-center">
                            <h2 class="font-display text-4xl lg:text-5xl font-bold mb-16 text-text-dark dark:text-text-light">Certified Excellence</h2>
                            <div class="flex flex-wrap justify-center items-center gap-12 lg:gap-20">
                                <div class="flex flex-col items-center">
                                    <img alt="Certificate 1" class="h-48 w-auto opacity-80 hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbNCejHFPaDxi0aMOd1_5pMBlff8AlpURpQO-YWGo4_EJKdz5ZWJ7o2tfbIvlG72fyKwAy4WSB5TReQQKGTI1ZvpQzkOanfbsjlb0U40Yp75PkPC-KSBQzP4W_hKhAYtdo8_OkmC6s9QVHWi8bugCVpV5po3Qpk-7D4TGnf_PnpnbptJr3OkpPHzTkhYFqZi35q--zOvJbosIwxnMigOxnrzjKRvCc3qM5I1ATls2thsWbBKDGRsvKSFYtLFISWvpKYj01riyaBQ" />
                                    <p class="font-body text-lg mt-2 text-gray-600 dark:text-gray-400">ISO 9001:2015</p>
                                </div>
                                <div class="flex flex-col items-center">
                                    <img alt="Certificate 2" class="h-48 w-auto opacity-80 hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCflowb4_W_N1juydMIptaOIuk9rCNwMehW_ZtujrTAZuEqQkTk_PnWs4L5dvhn7ZnYKLYN1R9rrh-KjS-flOApVoJaCvM72fltuVg070gxKZY1a3srcur8bFyEf1MfaZxMLaz2Dzpfi54CykDNoruxVt7ehYfGV8zX9hwHK4OcJl5BVYKBtdKCJm1Q8eAt3NztJGF72mfog5D0BNW3hUYvNxfBNveixtcrQ-hkYd5YzyR2lmDN7T7izbTfp-qw7Y1dFT8b6GGmiA" />
                                    <p class="font-body text-lg mt-2 text-gray-600 dark:text-gray-400">Hallmark Certified Gold</p>
                                </div>
                                <div class="flex flex-col items-center">
                                    <img alt="Patent document" class="h-48 w-auto opacity-80 hover:opacity-100 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3eIexWBQ4YzxMCQvxyuaaXPinstdK1KF5zSO5r06WFcxo20xgl5P6_r-UPVJxce7K_r1gAX8wbG_fxAdCJijC4XXkb1pXbTc3PCVGxkB7iS50SDXMvdBW0PkQOsslF52x1ZWaJo69oosWq-nXPW103w8Obst4joScN96axRDDB-ogQDrG2rDM1Avnmzf5p_4hsWfeIG5coOQS5J6v7cp8fXV-_mh7xPbgjhWxgppVsNuwHXu0ZhjnNr0qzyfV43hcruQdigHdXQ" />
                                    <p class="font-body text-lg mt-2 text-gray-600 dark:text-gray-400">Patented Clasp Design</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900" id="story">
                        <div class="container mx-auto px-4 lg:px-20">
                            <div class="text-center mb-16">
                                <h2 class="font-display text-4xl lg:text-5xl font-bold text-text-dark dark:text-text-light">Our Journey Through Time</h2>
                            </div>
                            <div class="relative">
                                <div class="absolute left-1/2 h-full w-0.5 bg-accent/30 hidden md:block"></div>
                                <div class="relative flex flex-col gap-12">
                                    <div class="md:flex items-center md:gap-8 w-full">
                                        <div class="md:w-1/2 md:text-right md:pr-8">
                                            <p class="font-display text-3xl font-bold text-accent">1988</p>
                                            <h3 class="font-display text-2xl font-semibold my-2 text-text-dark dark:text-text-light">The Beginning</h3>
                                            <p class="font-body text-lg text-gray-700 dark:text-gray-300">Our founder opens a small workshop with a vision to create extraordinary jewelry.</p>
                                        </div>
                                        <div class="hidden md:block w-8 h-8 rounded-full bg-accent ring-8 ring-gray-50 dark:ring-gray-900 z-10"></div>
                                        <div class="md:w-1/2 md:pl-8 mt-4 md:mt-0"></div>
                                    </div>
                                    <div class="md:flex flex-row-reverse items-center md:gap-8 w-full">
                                        <div class="md:w-1/2 md:text-left md:pl-8">
                                            <p class="font-display text-3xl font-bold text-accent">2005</p>
                                            <h3 class="font-display text-2xl font-semibold my-2 text-text-dark dark:text-text-light">First International Award</h3>
                                            <p class="font-body text-lg text-gray-700 dark:text-gray-300">Recognition for "Best Design" at the Paris International Jewelry Fair.</p>
                                        </div>
                                        <div class="hidden md:block w-8 h-8 rounded-full bg-accent ring-8 ring-gray-50 dark:ring-gray-900 z-10"></div>
                                        <div class="md:w-1/2 md:pr-8 mt-4 md:mt-0"></div>
                                    </div>
                                    <div class="md:flex items-center md:gap-8 w-full">
                                        <div class="md:w-1/2 md:text-right md:pr-8">
                                            <p class="font-display text-3xl font-bold text-accent">2020</p>
                                            <h3 class="font-display text-2xl font-semibold my-2 text-text-dark dark:text-text-light">Embracing the Future</h3>
                                            <p class="font-body text-lg text-gray-700 dark:text-gray-300">Launch of our e-commerce platform, bringing Gold House to the world.</p>
                                        </div>
                                        <div class="hidden md:block w-8 h-8 rounded-full bg-accent ring-8 ring-gray-50 dark:ring-gray-900 z-10"></div>
                                        <div class="md:w-1/2 md:pl-8 mt-4 md:mt-0"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="py-20 lg:py-32 bg-cover bg-center" id="contact" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(\"image-f77977a414964648937000e3952f1e68\")"}}>
                        <div class="container mx-auto px-4 lg:px-20 text-center">
                            <h2 class="font-display text-4xl lg:text-5xl font-bold text-white">Create Your Own Legacy</h2>
                            <p class="font-body text-xl text-gray-300 mt-4 max-w-2xl mx-auto">Contact us for a private consultation or to discuss a bespoke commission.</p>
                            <a class="mt-8 inline-block px-10 py-4 bg-accent text-white font-bold text-lg rounded-full hover:bg-opacity-80 transition-all duration-300" href="#">
                                Get in Touch
                            </a>
                        </div>
                    </section>
                </main>
                <footer class="bg-gradient-to-r from-[#2c2016] to-[#1d1915] text-white">
                    <div class="container mx-auto px-4 lg:px-20 py-12">
                        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div>
                                <h3 class="font-display text-2xl font-bold mb-4">Gold House</h3>
                                <p class="font-body text-gray-400">Crafting timeless elegance since 1988.</p>
                            </div>
                            <div>
                                <h3 class="font-display text-xl font-semibold mb-4">Quick Links</h3>
                                <ul class="font-body space-y-2 text-gray-400">
                                    <li>
                                        <a class="hover:text-white" href="#about">
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a class="hover:text-white" href="#products">
                                            Collections
                                        </a>
                                    </li>
                                    <li>
                                        <a class="hover:text-white" href="#contact">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 class="font-display text-xl font-semibold mb-4">Follow Us</h3>
                                <div class="flex space-x-4">
                                    <a class="text-gray-400 hover:text-white" href="#">
                                        <svg aria-hidden="true" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill-rule="evenodd"></path>
                                        </svg>
                                    </a>
                                    <a class="text-gray-400 hover:text-white" href="#">
                                        <svg aria-hidden="true" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                        </svg>
                                    </a>
                                    <a class="text-gray-400 hover:text-white" href="#">
                                        <svg aria-hidden="true" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path clip-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.791 2.013 10.145 2 12.315 2zM8.447 12a3.867 3.867 0 117.734 0 3.867 3.867 0 01-7.734 0zM16.897 8.354a1.312 1.312 0 11-2.625 0 1.312 1.312 0 012.625 0z" fill-rule="evenodd"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="mt-8 border-t border-gray-700 pt-8 text-center text-gray-500 font-body">
                            <p>© 2024 Gold House. All Rights Reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}
