import { StaticImageData } from 'next/image';
import React from 'react';

export interface Product {
        id: number;
        name: string;
        description: string;
        price: number;
        image: {
            src: string;
            alt: string;
        };
}

export function Product(props: { product: Product }) {
    return (
        <div>
            <img src={props.product.image.src} alt={props.product.image.alt} />
            <h2>{props.product.name}</h2>
            <p>{props.product.description}</p>
            <p>{props.product.price}</p>
        </div>
    );
}