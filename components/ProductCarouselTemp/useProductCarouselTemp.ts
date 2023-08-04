/**********************************************************************
 *
 *   Component hook generated by Quest
 *
 *   Code Logic for the component goes in this hook
 *   To setup bindings that use the data here or call the functions here, use the Quest editor
 *   Do not change the name of the hook
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import product1 from 'assets/images/1.png';
import product2 from 'assets/images/2.png';
import product3 from 'assets/images/3.png';
import product4 from 'assets/images/4.png';
import product5 from 'assets/images/5.png';
import product6 from 'assets/images/6.png';
import product7 from 'assets/images/7.png';
import product8 from 'assets/images/8.png';
const useProductCarouselTemp = () => {

  const products = [
    {
      product_id: 1,
      image: product1,
      title: "Surface Go 3",
      description: "Surface Pro 5. Elegant design meets workplace mobility. Redefining productivity on the move."
    },
    {
      product_id: 2,
      image: product2,
      title: "Surface Laptop Go 2",
      description: "Surface Pro 5. Elegant design meets workplace mobility. Redefining productivity on the move."
    },
    {
      product_id: 3,
      image: product3,
      title: "Surface Pro 9",
      description: "Surface Pro 5. Elegant design meets workplace mobility. Redefining productivity on the move."
    },
    {
      product_id: 4,
      image: product4,
      title: "Surface Laptop5",
      description: "Surface Pro 5. Elegant design meets workplace mobility. Redefining productivity on the move."
    },
    {
      product_id: 5,
      image: product5,
      title: "Surface Laptop Studio",
      description: "Surface Pro 5. Elegant design meets workplace mobility. Redefining productivity on the move."
    },
    {
      product_id: 6,
      image: product6,
      title: "Surface Studio 2+",
      description: "Surface Pro 5. Elegant design meets workplace mobility. Redefining productivity on the move."
    },
    {
      product_id: 7,
      image: product7,
      title: "Surface Hub 2S",
      description: "Surface Pro 5. Elegant design meets workplace mobility. Redefining productivity on the move."
    },
    {
      product_id: 8,
      image: product8,
      title: "Surface Duo 2",
      description: "Surface Pro 5. Elegant design meets workplace mobility. Redefining productivity on the move."
    }
  ];

  // let [indicator, setIndicator] = useState(0);
  // let [numberofcards, setNumberofcards] = useState(4);
  // let productproducts = products.slice(indicator, (numberofcards + indicator));

  let data = { products }

  const fns: any = {};

  return { data, fns };
};

export default useProductCarouselTemp;
