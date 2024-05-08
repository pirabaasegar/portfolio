import React from 'react';

import Header from './components/header';
import Footer from './components/footer';

function App() {
    return (
        <>
            <Header />
            <section id="work" className="work overflow-hidden">
                <div className="section-title text-center pb-0" data-aos="fade-up">
                    <h2 className='fw-bold position-relative'>My work and projects</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam.Maecenas at turpis vitae dui laoreet interdum. Nulla malesuada
                        efficitur massa sit amet cursus.
                    </p>
                </div>
                <div className="container">
                    <div className="row justify-content-center gap-4 project-card mt-0">
                        <div className="col-lg-5 col-md-6 d-flex justify-content-center">
                            <div
                                className="project-image w-100 h-100 position-relative z-1"
                                style={{
                                    backgroundImage:
                                        "url(https://images.prismic.io/pirabaa/ZjJ1GkMTzAJOCeId_portfolio.png?auto=format,compress)"
                                }}
                            ></div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <h3 className='m-0 fw-bold fw-bold text-uppercase m-0'>Featured Project</h3>
                            <h3 className='m-0 mb-3 fw-bold'>pirabaa.ca</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mauris
                                a nunc blandit dictum. Nullam eu velit ac turpis consectetur cursus.
                                Quisque vitae nisi ac libero suscipit consequat. Aliquam erat
                                volutpat. Phasellus a nisi vel justo ultrices scelerisque eget sed
                                justo. Donec id sollicitudin sapien.
                            </p>
                            <div className="d-flex flex-wrap gap-2 tools font-monospace">
                                <p className='mb-0'>JavaScript</p>
                                <p className='mb-0'>Bootstrap</p>
                                <p className='mb-0'>Figma</p>
                                <p className='mb-0'>Prismic</p>
                                <p className='mb-0'>Github</p>
                            </div>
                            <div className="mt-3">
                                <a href="#">
                                    <i className="bi bi-box-arrow-up-right" />
                                </a>
                                <a href="#">
                                    <i className="bi bi-github" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center gap-4 project-card">
                        <div className="col-lg-5 col-md-6 d-flex justify-content-center">
                            <div
                                className="project-image w-100 h-100 position-relative z-1"
                                style={{
                                    backgroundImage:
                                        "url(https://images.prismic.io/pirabaa/ZjJ1GUMTzAJOCeIc_mooshot.png?auto=format,compress)"
                                }}
                            ></div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <h3 className='m-0 fw-bold fw-bold text-uppercase m-0'>Featured Project</h3>
                            <h3 className='m-0 mb-3 fw-bold'>Moonshot</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mauris
                                a nunc blandit dictum. Nullam eu velit ac turpis consectetur cursus.
                                Quisque vitae nisi ac libero suscipit consequat. Aliquam erat
                                volutpat. Phasellus a nisi vel justo ultrices scelerisque eget sed
                                justo. Donec id sollicitudin sapien.
                            </p>
                            <div className="d-flex flex-wrap gap-2 tools font-monospace">
                                <p className='mb-0'>JavaScript</p>
                                <p className='mb-0'>Bootstrap</p>
                                <p className='mb-0'>Figma</p>
                                <p className='mb-0'>Github</p>
                            </div>
                            <div className="mt-3">
                                <a href="#">
                                    <i className="bi bi-box-arrow-up-right" />
                                </a>
                                <a href="#">
                                    <i className="bi bi-github" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center gap-4 project-card">
                        <div className="col-lg-5 col-md-6 d-flex justify-content-center">
                            <div
                                className="project-image w-100 h-100 position-relative z-1"
                                style={{
                                    backgroundImage:
                                        "url(https://images.prismic.io/pirabaa/ZjJ1GEMTzAJOCeIb_cinemax.png?auto=format,compress)"
                                }}
                            ></div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <h3 className='m-0 fw-bold fw-bold text-uppercase m-0'>Featured Project</h3>
                            <h3 className='m-0 mb-3 fw-bold'>Cinemax</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mauris
                                a nunc blandit dictum. Nullam eu velit ac turpis consectetur cursus.
                                Quisque vitae nisi ac libero suscipit consequat. Aliquam erat
                                volutpat. Phasellus a nisi vel justo ultrices scelerisque eget sed
                                justo. Donec id sollicitudin sapien.
                            </p>
                            <div className="d-flex flex-wrap gap-2 tools font-monospace">
                                <p className='mb-0'>VS Code</p>
                                <p className='mb-0'>Bootstrap</p>
                                <p className='mb-0'>Figma</p>
                                <p className='mb-0'>Github</p>
                                <p className='mb-0'>TMDB API</p>
                            </div>
                            <div className="mt-3">
                                <a href="http://cinemax.pirabaa.ca/">
                                    <i className="bi bi-box-arrow-up-right" />
                                </a>
                                <a href="https://github.com/pirabaasegar/cinemax">
                                    <i className="bi bi-github" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default App;