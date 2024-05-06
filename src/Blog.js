import React from 'react';

import Header from './components/header';
import Footer from './components/footer';

function App() {
    return (
        <>
            <Header />
            <section id="blog" className="blog">
                <div className="section-title pb-0" data-aos="fade-up">
                    <h2>Blog</h2>
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
                                    alt="Blog"
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
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
                                        voluptas itaque asperiores, autem officia quas quis impedit
                                        voluptatibus cumque fugit ducimus.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-auto blog-card shadow-none" />
                        <div className="col-lg col-auto blog-card shadow-none" />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default App;