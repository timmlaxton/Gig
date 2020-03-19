import React, { Component } from 'react';

import AppBar from '@material-ui/core/Appbar';
import ToolBar from '@material-ui/core/ToolBar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './SideDrawer'

class Header extends Component {


    state= {
        drawerOpen: false,
        headerShow: false
    }


    UNSAFE_componentWillMount(){
        window.addEventListener('scroll',this.handleScroll);
    }

    handleScroll = () => {
        if(window.scrollY > 0) {
            this.setState({
                headerShow: true
            })

        } else {
            this.setState({
            headerShow: false       
            })
           
        }
        
    }

    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }


    render() {
        return (
            <AppBar
            position="fixed"
            style={{
                backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent',
                boxShadow: 'none',
                padding: '10px 0px'
            }}
            
            >
                <ToolBar>

                    <div className="header_logo">
                    <div className="font_righteous header_logo_venue">Summer Nights 2020</div>
                    </div>

                    <IconButton
                    
                    aria-label="Menu"
                    color="inherit"
                    onClick={() => this.toggleDrawer(true)}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <SideDrawer
                        open={this.state.drawerOpen}
                        onClose={(value) => this.toggleDrawer(value)}
                    />

                </ToolBar>
            </AppBar>
        );
    }
}

export default Header;