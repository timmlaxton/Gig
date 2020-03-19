import React from 'react';
import Slider from 'react-slick';

import slide_one from '../../resources/images/slide_one.jpg'
import slide_two from '../../resources/images/slide_two.jpg'
import slide_three from '../../resources/images/slide_three.jpg'
import slide_four from '../../resources/images/slide_four.jpg'
import slide_five from '../../resources/images/slide_five.jpg'
import slide_six from '../../resources/images/slide_six.jpg'
import slide_seven from '../../resources/images/slide_seven.jpg'
import slide_nine from '../../resources/images/slide_nine.jpg'
import slide_ten from '../../resources/images/slide_ten.jpg'
import slide_eleven from '../../resources/images/slide_eleven.jpg'
import slide_twelve from '../../resources/images/slide_twelve.jpg'
import slide_thirteen from '../../resources/images/slide_thirteen.jpg'
import slide_fourteen from '../../resources/images/slide_fourteen.jpg'

const Carrousel = () => {


    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
    }


    return (
        <div
            className="carrousel_wrapper"
            style={{
                height: `${window.innerHeight}px`,
                overflow:'hidden'
            }}
        
        >
            <Slider {...settings}>
                <div>
                    <div className="carrousel_image"
                    style={{
                        background:`url(${slide_one})`,
                        height: `${window.innerHeight}px`
                    }}
                    ></div>
                </div>
                <div>
                    <div className="carrousel_image"
                style={{
                    background:`url(${slide_two})`,
                    height: `${window.innerHeight}px`
                    }}
                    ></div>>
                    </div>
                    <div>
                        <div className="carrousel_image"
                style={{
                    background:`url(${slide_three})`,
                    height: `${window.innerHeight}px`
                    }}
                    ></div>
                    </div>
                    <div>
                        <div className="carrousel_image"
                style={{
                    background:`url(${slide_four})`,
                    height: `${window.innerHeight}px`
                    }}
                    ></div>
                    </div>
                    <div>
                        <div className="carrousel_image"
                style={{
                    background:`url(${slide_five})`,
                    height: `${window.innerHeight}px`
                    }}
                    ></div>
                    </div>
                    <div>
                        <div className="carrousel_image"
                style={{
                    background:`url(${slide_six})`,
                    height: `${window.innerHeight}px`
                    }}
                    ></div>
                    </div>
                    <div>
                        <div className="carrousel_image"
                style={{
                    background:`url(${slide_seven})`,
                    height: `${window.innerHeight}px`
                    }}
                    ></div>
                    </div>
                   
                    <div>
                        <div className="carrousel_image"
                style={{
                    background:`url(${slide_nine})`,
                    height: `${window.innerHeight}px`
                    }}
                    ></div>
                    </div>
                    <div>
                        <div className="carrousel_image"
                style={{
                    background:`url(${slide_ten})`,
                    height: `${window.innerHeight}px`
                    }}
                    ></div>
                    </div>
                    <div>
                        <div className="carrousel_image"
                style={{
                    background:`url(${slide_eleven})`,
                    height: `${window.innerHeight}px`
                    }}
                    ></div>
                    </div>
                    <div>
                        <div className="carrousel_image"
                style={{
                    background:`url(${slide_twelve})`,
                    height: `${window.innerHeight}px`
                    }}
                    ></div>
                    </div>
                    <div>
                        <div className="carrousel_image"
                style={{
                    background:`url(${slide_thirteen})`,
                    height: `${window.innerHeight}px`
                    }}
                    ></div>
                    </div>
                    <div>
                        <div className="carrousel_image"
                style={{
                    background:`url(${slide_fourteen})`,
                    height: `${window.innerHeight}px`
                    }}
                    ></div>
                    </div>

                   
                  
                

            </Slider>

            
        </div>
    );
};

export default Carrousel;
