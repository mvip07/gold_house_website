import Navbar from "../components/Navbar";

export default function About() {
    return (
        <div class="bg-background-light dark:bg-background-dark">
            <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
                <div class="layout-container flex h-full grow flex-col">
                    <div class="flex flex-1 justify-center">
                        <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
                           <Navbar />
                            <main class="flex-grow">
                                <div class="px-4 py-16">
                                    <div class="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-lg items-center justify-center p-4" data-alt="A vintage photograph of the original Gold House workshop, with jewelers at their benches." style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuDYkNblqGCkxy3PDYpS9jTWFdWkua4LcLA4SR9GBXx715ANt_L9Z0gONMFwsz4mXehsl5hdeLtfxJG6Q7-bxS78zyT_hkZHQEbSqC0qaLdvBd_l0PirZcrAX4iGu50K-T_85hQqLZ5F9R3XQIqYTgtJtOJNanoAgouJA_hhmdAdW0oX7_gmvRM4CfLOMiV95ZT3ApfgJ0MBhTUzmBmExogspnTFiLRRk8QVUV9pmML6JnqPJy3mhm_H2GwV9Ukevka_Pr050z1Lng\")"}}>
                                        <div class="flex flex-col gap-2 text-center">
                                            <h1 class="text-white text-5xl font-black leading-tight tracking-[-0.033em] font-display">A Legacy of Craftsmanship</h1>
                                            <h2 class="text-white text-lg font-normal leading-normal">Discover the story behind our timeless jewelry.</h2>
                                        </div>
                                    </div>
                                </div>
                                <div class="px-10 py-12">
                                    <h1 class="text-[#181411] dark:text-white tracking-light text-4xl font-bold leading-tight text-center pb-6 font-display">Our History</h1>
                                    <p class="text-[#181411] dark:text-gray-300 text-lg font-normal leading-relaxed text-center max-w-3xl mx-auto">Founded in 1923 by artisan jewelers, Gold House has grown from a small family workshop to a renowned name in luxury jewelry. Our commitment to quality and timeless design has been the cornerstone of our success, passed down through three generations of master craftsmen. We honor our heritage by continuing to use traditional techniques while embracing modern innovation.</p>
                                </div>
                                <div class="px-4 py-8">
                                    <div class="flex w-full grow @container">
                                        <div class="w-full gap-4 overflow-hidden aspect-[2/1] grid grid-cols-2">
                                            <div class="w-full bg-center bg-no-repeat bg-cover rounded-lg" data-alt="A close-up shot of an artisan meticulously setting a diamond into a gold ring." style={{backgroundImage: "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuDTX3e-9D6U3L3dFVNCUFcJs4mYdpfweystdM_olypjoVrTJVfZxE4YWGw5M527AV3dGlcH2NpXh_5dXL1h_wVGgzitqcjWXmbeqcj0TGr1L_gt9AknPOAlGuc1O1FcMHwecaZWCmtCh99CPhkzrHtCsSY4GL7GoY5aqbhox0F2jewPl0MXkkg6DXs6nP38RqeCPQTBeLrrjb0p-xAQXEsSssG5_tR0iIXeTXQfdBfrApv_BTbIW_MslRoxU_Br3AICJxOHVLckww\")"}}></div>
                                            <div class="w-full bg-center bg-no-repeat bg-cover rounded-lg" data-alt="An elegant, modern Gold House storefront with large glass windows." style={{backgroundImage: "url(\"https://lh3.googleusercontent.com/aida-public/AB6AXuDfQtm4Lb6_-BFo_J7tPQPPfEVToERSD7s7NYy0Tj5F356IucrkodiTFOj-B9tREnx9YPqRVuQz4VyZ8x6lL9Bo7hzI2sFkuM9CoSf7CtCMnwnwmSErr_S8btrYmT-kYLUZvo1xn_Jpg917BFWj7U7W0ojoYUJmOQmTdiyveaiKLjLibAHl2UDJ5mvvXTWnv2hI_fFiWh0tqf3xvDnkJ3PBrNFAhowdUHpd4NEtB0HdDgBunevEperLuU24Ik4Bz5HAaRo00CQOhg\")"}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="px-10 py-12">
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                                        <div>
                                            <h2 class="text-primary dark:text-primary text-3xl font-bold leading-tight pb-4 font-display">Our Mission</h2>
                                            <p class="text-[#181411] dark:text-gray-300 text-lg font-normal leading-relaxed">To create exquisite jewelry that celebrates life's most cherished moments. We are dedicated to providing our clients with pieces of unparalleled beauty and quality, designed to be treasured for a lifetime and beyond.</p>
                                        </div>
                                        <div class="text-right">
                                            <h2 class="text-primary dark:text-primary text-3xl font-bold leading-tight pb-4 font-display">Our Values</h2>
                                            <p class="text-[#181411] dark:text-gray-300 text-lg font-normal leading-relaxed">Craftsmanship, integrity, and customer devotion are the pillars of our brand. We believe in the beauty of detail, the importance of ethical sourcing, and the creation of a personal, memorable experience for every client who walks through our doors.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="px-10 py-12 text-center">
                                    <blockquote class="text-[#181411] dark:text-white text-3xl italic font-light leading-snug max-w-4xl mx-auto border-l-4 border-primary pl-6 font-display">"Jewelry is more than adornment. It's a piece of art, a fragment of history, a promise for the future."</blockquote>
                                    <p class="mt-4 text-primary dark:text-primary text-lg font-medium">- The Founders</p>
                                </div>
                            </main>
                            <footer class="text-[#181411] dark:text-white body-font">
                                <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                                    <a class="flex title-font font-medium items-center md:justify-start justify-center text-[#181411] dark:text-white">
                                        <div class="size-6">
                                            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                                <path clip-rule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fill-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <span class="ml-3 text-xl font-display">Gold House</span>
                                    </a>
                                    <p class="text-sm text-gray-500 dark:text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 dark:sm:border-gray-700 sm:py-2 sm:mt-0 mt-4">© 2024 Gold House — All Rights Reserved</p>
                                    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                                        <a class="text-gray-500 dark:text-gray-400">
                                            <svg class="w-5 h-5" fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a class="ml-3 text-gray-500 dark:text-gray-400">
                                            <svg class="w-5 h-5" fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a class="ml-3 text-gray-500 dark:text-gray-400">
                                            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                                                <rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
                                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                            </svg>
                                        </a>
                                    </span>
                                </div>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
