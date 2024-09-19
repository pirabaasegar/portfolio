import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer text-white py-4 section-bg' id='footer'>
      <div className="container px-lg-0 px-4">
        <div className="row gap-lg-5 gap-3 align-items-center">
          <div className="col">
            <h3 className="mb-0 text-white navbar-brand mb-0 text-lg-start">
              PiRaBaa
            </h3>
            <span style={{ fontSize: 13, color: "#797979" }}>
              Design &amp; developed by Pirabaa
            </span>
          </div>
          <div className="col-auto">
            <ul className='list-unstyled p-0 d-flex gap-4 mb-0 justify-content-end'>
              <li className='mb-0'>
                <a href="https://www.linkedin.com/in/pirabaasegar/">
                  <i className="bi bi-linkedin" />
                </a>
              </li>
              <li className='mb-0'>
                <a href="https://github.com/pirabaasegar/">
                  <i className="bi bi-github" />
                </a>
              </li>
              <li className='mb-0'>
                <a href="https://medium.com/@pirabaasegar">
                  <i className="bi bi-medium" />
                </a>
              </li>
              {/*<li className='mb-0'><a href="https://tks.life/profile/pirabaa.segar/"><img src="https://images.prismic.io/pirabaa/ZjL7okMTzAJOCexU_TKS.png?auto=format,compress" width="33px" alt="TKS"></a></li>*/}
            </ul>
            <span
              style={{
                fontSize: 13,
                color: "#797979",
                float: "right",
                marginTop: 12
              }}
            >
              © {currentYear} - Pirabaa.ca
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;