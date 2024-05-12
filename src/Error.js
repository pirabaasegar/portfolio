import React from 'react';

import Header from './components/header';

function App() {
    useEffect(() => {
        document.title = "Error - Pirabaa Segar";
    }, []);

    return (
        <>
            <Header />
            <div className="hero position-relative">
                <div className="hero-text text-center align-content-center" data-aos="fade-up">
                    <h1 className='fw-bolder display-1 text-center m-auto'>Page Not Found!</h1>
                    <p className='my-0 mx-auto'>
                        The page you are looking for might have been removed had its name changed or is temporarily unavailable.
                    </p>
                    <a href="/" className='border-0 text-white'>Go To Homepage</a>
                </div>
            </div>
        </>
    );
}

export default App;