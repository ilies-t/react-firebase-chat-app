// base
import React from 'react';
import PropTypes from 'prop-types';

// logo for header
import logo from '../assets/images/logo.svg';

const AppComponent = props => {

    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
            </div>
            {props.children}
        </div>
    );

};

AppComponent.propTypes = {
    children: PropTypes.object,
};

export default AppComponent;
