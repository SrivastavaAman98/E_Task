import React from 'react';    // Import React
import classes from './Footer.module.css';  // Import CSS module for styling

function Footer() {
    return (
        <footer className={classes.footer}>
        <div className={classes.container}>
            <div className={classes['footer-content']}>
            <p>&copy; 2025 React Shop - Stay with New Trends</p>
            <p>Contact: aman@gmail.com</p>
            </div>
        </div>
        </footer>
    );
}

export default Footer;
