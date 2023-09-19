import React from "react";

const Navbar = (props) => {
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <i style={styles.cartIcon} className="fa-solid fa-cart-shopping"></i>
                <span style={styles.cartCount}>3</span>
            </div>
        </div>
    );
};


const styles = {
    cartIcon: {
        fontSize: 30,
        marginRight: 30,
    },
    nav: {
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative',
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 10,
        top: -15,
        paddingLeft: 10,
        paddingRight: 10
    }
};

export default Navbar;