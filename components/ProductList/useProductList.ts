import { useState } from 'react';
import { Product } from '../Product/Product';
import product1 from 'public/assets/images/1.png';
import product2 from 'public/assets/images/2.png';
import product3 from 'public/assets/images/3.png';

export function useProductList() {
    const [products, setProducts] = useState<Product[]>([
        {
            id: 1,
            name: 'Product 1',
            description: 'This is product 1',
            price: 10.99,
            image: { src: product1.src, alt: 'Product 1' },
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'This is product 2',
            price: 19.99,
            image: { src: product2.src, alt: 'Product 2' },
        },
        {
            id: 3,
            name: 'Product 3',
            description: 'This is product 3',
            price: 5.99,
            image: { src: product3.src, alt: 'Product 3' },
        },
    ]);

    return { products };
}