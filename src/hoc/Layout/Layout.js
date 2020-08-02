import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';

import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toobar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: true
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false})
    }
    
    sideDrawerToggleHnadler = () => {
        // when setting state when it depends on the old state, use (prevState)
        this.setState((prevState) => {
            return {showSideDrawer: ! prevState.showSideDrawer};
        } );  
    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHnadler}/>
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