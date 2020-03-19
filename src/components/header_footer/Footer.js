import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_whitesmoke">
            <Fade delay={500}>
                <div classname="font_righteous footer_logo_venue">Summer Nights</div>
                <div className="footer_copyright">
                    Summer Nights 2020. All rights reserved
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;