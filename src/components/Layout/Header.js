import React, {Fragment} from 'react';  // Import React and Fragment for wrapping JSX

import classes from './Header.module.css';   // Import CSS module for styling
import HeaderButton from './HeaderButton';   // Import HeaderButton component


// Header component receives `isLoggedIn` and `setIsLoggedIn` as props
const Header = props => {
    return (
        <Fragment>
            <header className={classes.header} >
                <h1>React Shop</h1>
                <HeaderButton  isLoggedIn = { props.isLoggedIn } setIsLoggedIn = {props.setIsLoggedIn}/>  {/* HeaderButton receives login state and setter function */}

            </header>
        </Fragment>
    );
};

export default Header;