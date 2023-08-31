import React from "react";
import product1_1 from 'public/assets/images/1-1.png';
import product1_2 from 'public/assets/images/1-2.png';
import product1_3 from 'public/assets/images/1-3.png';
import product1_4 from 'public/assets/images/1-4.png';
import product1_5 from 'public/assets/images/1-5.png';
import product2_1 from 'public/assets/images/2-1.png';
import product2_2 from 'public/assets/images/2-2.png';
import product2_3 from 'public/assets/images/2-3.png';
import product2_4 from 'public/assets/images/2-4.png';
import product2_5 from 'public/assets/images/2-5.png';
import product3_1 from 'public/assets/images/3-1.png';
import product3_2 from 'public/assets/images/3-2.png';
import product3_3 from 'public/assets/images/3-3.png';
import product3_4 from 'public/assets/images/3-4.png';
import product3_5 from 'public/assets/images/3-5.png';
import product4_1 from 'public/assets/images/4-1.png';
import product4_2 from 'public/assets/images/4-2.png';
import product4_3 from 'public/assets/images/4-3.png';
import product4_4 from 'public/assets/images/4-4.png';
import product4_5 from 'public/assets/images/4-5.png';
import product5_1 from 'public/assets/images/5-1.png';
import product5_2 from 'public/assets/images/5-2.png';
import product5_3 from 'public/assets/images/5-3.png';
import product5_4 from 'public/assets/images/5-4.png';
import product5_5 from 'public/assets/images/5-5.png';
import product6_1 from 'public/assets/images/6-1.png';
import product6_2 from 'public/assets/images/6-2.png';
import product6_3 from 'public/assets/images/6-3.png';
import product6_4 from 'public/assets/images/6-4.png';
import product6_5 from 'public/assets/images/6-5.png';
import product7_1 from 'public/assets/images/7-1.png';
import product7_2 from 'public/assets/images/7-2.png';
import product7_3 from 'public/assets/images/7-3.png';
import product7_4 from 'public/assets/images/7-4.png';
import product7_5 from 'public/assets/images/7-5.png';
import product8_1 from 'public/assets/images/8-1.png';
import product8_2 from 'public/assets/images/8-2.png';
import product8_3 from 'public/assets/images/8-3.png';
import product8_4 from 'public/assets/images/8-4.png';
import product8_5 from 'public/assets/images/8-5.png';

const useProductThumbCarousel = () => {

  const clientCases = [
    {
      id: 1,
      image: { src: product1_1.src, alt: 'Product 1-1' },
      image2: { src: product1_2.src, alt: 'Product 1-2' },
      image3: { src: product1_3.src, alt: 'Product 1-3' },
      image4: { src: product1_3.src, alt: 'Product 1-3' },
    },
    {
      id: 2,
      image: { src: product1_2.src, alt: 'Product 1-2' },
      image2: { src: product1_2.src, alt: 'Product 1-2' },
      image3: { src: product1_3.src, alt: 'Product 1-3' },
      image4: { src: product1_3.src, alt: 'Product 1-3' },
    },
    {
      id: 3,
      image: { src: product1_3.src, alt: 'Product 1-3' },
      image2: { src: product1_2.src, alt: 'Product 1-2' },
      image3: { src: product1_3.src, alt: 'Product 1-3' },
      image4: { src: product1_3.src, alt: 'Product 1-3' },
    },
    {
      id: 4,
      image: { src: product1_4.src, alt: 'Product 1-4' },
      image2: { src: product1_2.src, alt: 'Product 1-2' },
      image3: { src: product1_3.src, alt: 'Product 1-3' },
      image4: { src: product1_3.src, alt: 'Product 1-3' },
    },

    // ... Add more items as needed
  ];

  let data = { clientCases };

  return { data };

};

export default useProductThumbCarousel;
