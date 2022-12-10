import React from "react"
import classes from "./Builder.module.css";
import Items from "./Items/Items";
import TotalPrice from "./TotalPrice/TotalPrice";
import Modal from "./Modal/Modal";

const Builder = () => {
    return (
        <div>
            <div className={classes.builder}>
                <h3>Build your own Ice Cream Sundae</h3>

                {/* items here */}
                <Items />

                {/* total price here */}
                <TotalPrice />

                <button type="button" className={[classes.order, "rounded"].join(' ')}>
                    Add to Cart
                </button>
            </div>
            <Modal>
                Modal Here
            </Modal>
        </div>
    );
};

export default Builder;