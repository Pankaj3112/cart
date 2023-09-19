import React from "react";

const Navbar = (props) => {
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <i style={styles.cartIcon} className="fa-solid fa-cart-shopping"></i>

                <div style={styles.cartCount}>
                    <span >{props.count}</span>
                </div>
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
        position: 'absolute',
        right: 10,
        top: -15,
        width: 25,
        height: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px 2px 2px 0px"
    }
};

export default Navbar;