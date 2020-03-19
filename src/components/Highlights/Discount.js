import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import Button from '../UI/MyButton';

class Discount extends Component {

    state = {
        discountStart:0,
        discountEnd:10
    }

    percentage = () => {
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })

        }
    }

componentDidUpdate(){
    setTimeout(() => {
    this.percentage()
    },90)
}

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">


                <Fade
                
                onReveal={()=> this.percentage()}
                
                > 
                    <div className="discount_percentage">
                        <span>{this.state.discountStart}%</span>
                        
                    </div>
                    </Fade>

                    <Slide right>
                    <div className="discount_description">
                        <h3> Summer nights pledgs to donate 10% from each ticket sold to help teach music to children throughout Glasgow.   </h3>

                        

                    <Button
                        text="Purchase tickets"
                        bck="pink"
                        color="white"
                        link="https://www.ticketmaster.co.uk/artist/1992315?irgwc=1&utm_source=1296104-What%27s%20On%20Network&utm_medium=affiliate&utm_campaign=1296104&awtrc=&clickId=RkB210SxmxyJWfewUx0Mo3E1UknStKR9nTc%3AVc0"
                    />

                    </div>

                   

                    </Slide>

                   

                </div>
                
            </div>
        );
    }
}

export default Discount;