import React from 'react';

import Header from './components/header';
import Footer from './components/footer';

function App() {
    return (
        <>
            <Header />
            <section id="work" className="work">
                <div className="section-title pb-0" data-aos="fade-up">
                    <h2>My work and projects</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam.Maecenas at turpis vitae dui laoreet interdum. Nulla malesuada
                        efficitur massa sit amet cursus.
                    </p>
                </div>
                <div className="container">
                    <div className="row justify-content-center gap-4 project-card">
                        <div className="col-lg-5 col-md-6 d-flex justify-content-center">
                            <div
                                className="project-image"
                                style={{
                                    backgroundImage:
                                        "url(https://images.prismic.io/pirabaa/ZjJ1GkMTzAJOCeId_portfolio.png?auto=format,compress)"
                                }}
                            ></div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <h3>Featured Project</h3>
                            <h3>pirabaa.ca</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mauris
                                a nunc blandit dictum. Nullam eu velit ac turpis consectetur cursus.
                                Quisque vitae nisi ac libero suscipit consequat. Aliquam erat
                                volutpat. Phasellus a nisi vel justo ultrices scelerisque eget sed
                                justo. Donec id sollicitudin sapien.
                            </p>
                            <div className="d-flex flex-wrap gap-2 tools">
                                <p>JavaScript</p>
                                <p>Bootstrap</p>
                                <p>Figma</p>
                                <p>Prismic</p>
                                <p>Github</p>
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
                                className="project-image"
                                style={{
                                    backgroundImage:
                                        "url(https://images.prismic.io/pirabaa/ZjJ1GUMTzAJOCeIc_mooshot.png?auto=format,compress)"
                                }}
                            ></div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <h3>Featured Project</h3>
                            <h3>Moonshot</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mauris
                                a nunc blandit dictum. Nullam eu velit ac turpis consectetur cursus.
                                Quisque vitae nisi ac libero suscipit consequat. Aliquam erat
                                volutpat. Phasellus a nisi vel justo ultrices scelerisque eget sed
                                justo. Donec id sollicitudin sapien.
                            </p>
                            <div className="d-flex flex-wrap gap-2 tools">
                                <p>JavaScript</p>
                                <p>Bootstrap</p>
                                <p>Figma</p>
                                <p>Github</p>
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
                                className="project-image"
                                style={{
                                    backgroundImage:
                                        "url(https://images.prismic.io/pirabaa/ZjJ1GEMTzAJOCeIb_cinemax.png?auto=format,compress)"
                                }}
                            ></div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                            <h3>Featured Project</h3>
                            <h3>Cinemax</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut mauris
                                a nunc blandit dictum. Nullam eu velit ac turpis consectetur cursus.
                                Quisque vitae nisi ac libero suscipit consequat. Aliquam erat
                                volutpat. Phasellus a nisi vel justo ultrices scelerisque eget sed
                                justo. Donec id sollicitudin sapien.
                            </p>
                            <div className="d-flex flex-wrap gap-2 tools">
                                <p>VS Code</p>
                                <p>Bootstrap</p>
                                <p>Figma</p>
                                <p>Github</p>
                                <p>TMDB API</p>
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