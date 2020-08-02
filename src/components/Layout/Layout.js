import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';

import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toobar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: true
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false})
    }

    render() {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer 
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerCloseHandler}
                />
                <div>Toolbar, sideDrawer, Backdrop</div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;