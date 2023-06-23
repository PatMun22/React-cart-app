import React from "react";
import { useCart } from './react-use-cart';

function ItemsCard(props) {
    const { addItem } = useCart();

    return(
        <div class="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div class="card p-0 overflow-hidden h-100 shaddow">
                <img src={props.img} class="card-img-top img-fluid"/>
                <div class="card-body text-center">
                    <h5 class="card-title">{props.title}</h5>
                    <h5 class="card-text"> Ksh. {props.price}</h5>
                    <p class="card-text">{props.desc}</p>
                    <button class='btn btn-success'>Buy Now</button>
                    <button class='btn btn-success'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ItemsCard;