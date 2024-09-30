import React, { useEffect } from 'react';

import Header from './components/header';
import Footer from './components/footer';

function App() {
    useEffect(() => {
        document.title = "Blog — Pirabaa Segar";
    }, []);

    return (
        <>
            <Header />
            <section id="blog" className="blog overflow-hidden">
                <div className="section-title text-center pb-0" data-aos="fade-up">
                    <h2 className='fw-bold position-relative'>Blog</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam.Maecenas at turpis vitae dui laoreet interdum. Nulla malesuada
                        efficitur massa sit amet cursus.
                    </p>
                </div>
                <div className="container">
                    <div className="row gap-4">
                        <div className="col-lg col-auto blog-card">
                            <div className="row">
                                <img
                                    src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*AH4vsnt-4yrQaLWoZsHgXw.png"
                                    alt="Blog" className='p-0'
                                />
                                <div className="blog-content">
                                    <span>
                                        AI <span>Nov 4, 2023</span>
                                    </span>
                                    <a href="https://medium.com/@pirabaasegar/unveiling-the-mysteries-of-the-human-body-a-journey-of-discovery-with-artificial-intelligence-df8fef832ed1">
                                        <h2>
                                            Unveiling the Mysteries of the Human Body: A Journey of
                                            Discovery with AI
                                        </h2>
                                    </a>
                                    <p className='mb-0 text-secondary'>
                                        The human body is a marvel of complexity, a masterpiece of evolution, and a source of endless wonder. For centuries, scientists, researchers...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-auto blog-card">
                            <div className="row">
                                <img
                                    src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*ByKzzvxnkvQ-qUsAksCR3w.jpeg"
                                    alt="Blog" className='p-0'
                                />
                                <div className="blog-content">
                                    <span>
                                        AI <span>Feb 12, 2024</span>
                                    </span>
                                    <a href="https://medium.com/@pirabaasegar/revealing-language-barriers-an-exploration-of-translation-with-code-b4806bb80cff">
                                        <h2>
                                            Revealing Language Barriers: An Exploration of Translation with Code
                                        </h2>
                                    </a>
                                    <p className='mb-0 text-secondary'>
                                        What began as a modern web development project evolved into a translator app that showcases the combination of linguistic powers and digital...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-auto blog-card shadow-none" />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default App;