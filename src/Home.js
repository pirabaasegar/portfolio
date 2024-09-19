import React, { useEffect, useState } from 'react';

import './globals.css';

import Header from './components/header';
import Footer from './components/footer';

function App() {
  const [displayText, setDisplayText] = useState('');
  const text1 = "Hi i'm Pirabaa Segar.";
  const text2 = "I'm a frontend developer and innovator.";

  useEffect(() => {
    textTypingEffect(text1);
    setTimeout(() => textTypingEffect(text2), text1.length * 50 + 1000);

    document.title = "Home - Pirabaa Segar";
  }, []);

  function textTypingEffect(text, startIndex = 0, i = startIndex) {
    if (i <= text.length) {
      setDisplayText(text.substring(0, i));
      setTimeout(() => textTypingEffect(text, startIndex, i + 1), 50);
    }
  }

  return (
    <>
      <Header />
      <div className="hero position-relative">
        <div className="hero-text text-center align-content-center" data-aos="fade-up">
          <h1 className='fw-bolder display-1 text-center m-auto'>{displayText}</h1>
          <p className='my-0 mx-auto'>
            Currently helping small businesses and creators make the most of their
            customers and audiences, by providing them with great user experiences.
          </p>
          <a href="work" className='border-0 text-white'>View my Work</a>
        </div>
      </div>
      <section id="about" className="about section-bg text-white overflow-hidden" data-aos="fade-up">
        <div className="container">
          <div className="row justify-content-center gap-lg-5 gap-4">
            <div className="col-lg-5 col-md-6 section-title text-center pb-0">
              <h2 className="text-start fw-bold position-relative fw-medium text-white">A little about me</h2>
              <p className="text-start mb-0 text-white">
                I'm a freelance developer and designer with a passion for creating
                great user experiences. I've been coding since I was 10, and in the
                last 4 years I've learnt a variety of technologies that enable me to
                craft high-quality, responsive digital experiences for my clients
                and I. Most recently, I've been helping small businesses and
                creators make the most of their customers and audiences, by
                providing them with great user experiences.
              </p>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="row mt-lg-5 mt-0">
                <div className="col-md-6">
                  <div className="d-flex flex-column gap-2">
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-chevron-right" />
                      <p className="mb-0">JavaScript</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-chevron-right" />
                      <p className="mb-0">Python</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-chevron-right" />
                      <p className="mb-0">PHP</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex flex-column gap-2 mt-lg-0 mt-2">
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-chevron-right" />
                      <p className="mb-0">Bootstrap</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-chevron-right" />
                      <p className="mb-0">VS Code</p>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <i className="bi bi-chevron-right" />
                      <p className="mb-0">Figma</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
            <div className="col-lg-4 col-md-5 d-flex justify-content-center">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                mauris a nunc blandit dictum. Nullam eu velit ac turpis consectetur
                cursus. Quisque vitae nisi ac libero suscipit consequat. Aliquam
                erat volutpat. Phasellus a nisi vel justo ultrices scelerisque eget
                sed justo. Donec id sollicitudin sapien.
              </p>
              <div className="d-flex flex-wrap gap-2 tools font-monospace">
                <p className='mb-0'>React</p>
                <p className='mb-0'>Bootstrap</p>
                <p className='mb-0'>Vercel</p>
                <p className='mb-0'>Prismic</p>
                <p className='mb-0'>Github</p>
              </div>
              <div className="mt-3">
                <a href="https://pirabaa.ca/">
                  <i className="bi bi-box-arrow-up-right" />
                </a>
                <a href="https://github.com/pirabaasegar/portfolio">
                  <i className="bi bi-github" />
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-center gap-4 project-card">
            <div className="col-lg-4 col-md-5 d-flex justify-content-center">
              <div
                className="project-image w-100 h-100 position-relative z-1"
                style={{
                  backgroundImage:
                    "url(https://images.prismic.io/pirabaa/Zj_9zkFLKBtrWy5z_Cinemax.png?auto=format,compress)"
                }}
              ></div>
            </div>
            <div className="col-lg-5 col-md-6">
              <h3 className='m-0 fw-bold fw-bold text-uppercase m-0'>Featured Project</h3>
              <h3 className='m-0 mb-3 fw-bold'>Cinemax</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                mauris a nunc blandit dictum. Nullam eu velit ac turpis consectetur
                cursus. Quisque vitae nisi ac libero suscipit consequat. Aliquam
                erat volutpat. Phasellus a nisi vel justo ultrices scelerisque eget
                sed justo. Donec id sollicitudin sapien.
              </p>
              <div className="d-flex flex-wrap gap-2 tools font-monospace">
                <p className='mb-0'>VS Code</p>
                <p className='mb-0'>Figma</p>
                <p className='mb-0'>TMDB API</p>
              </div>
              <div className="mt-3">
                <a href="https://cinemax-pi.vercel.app/">
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
      <section id="subscription" className="subscription overflow-hidden">
        <div className="section-title text-center pb-0" data-aos="fade-up">
          <h2 className='fw-bold position-relative'>Get the Good Stuff.</h2>
          <p style={{ margin: "auto auto 25px" }}>
            I'll occasionally send you productivity and personal development tips.
            Sometimes, I might even send you my favourite articles, tweets and books
            for that week. No spam ever. I promise.
          </p>
        </div>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div className="row justify-content-center">
            <form
              action="https://app.convertkit.com/forms/6524913/subscriptions"
              className="seva-form formkit-form"
              method="post"
              data-sv-form={6524913}
              data-uid="9e75fbc54c"
              data-format="inline"
              data-version={5}
              data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
              min-width="400 500 600 700 800"
            >
              <ul
                className="formkit-alert formkit-alert-error"
                data-element="errors"
                data-group="alert"
              />
              <div
                data-element="fields"
                data-stacked="false"
                className="seva-fields formkit-fields"
              >
                <div className="formkit-field">
                  <input
                    className="formkit-input"
                    name="email_address"
                    aria-label="Email Address"
                    placeholder="Email Address"
                    required=""
                    type="email"
                  />
                </div>
                <button data-element="submit" className="formkit-submit">
                  <div className="formkit-spinner">
                    <div />
                    <div />
                    <div />
                  </div>
                  <span>Subscribe</span>
                </button>
              </div>
              <div className="formkit-guarantee" data-element="guarantee">
                We won't send you spam. Unsubscribed at any time.
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
