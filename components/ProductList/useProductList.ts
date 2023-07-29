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
import useProductCard from '../ProductCard/useProductCard';

const useProductList = () => {
  const { data: productData } = useProductCard();

  const data: any = {
    products: [
      {
        id: 1,
        name: 'Product 1',
        productTitle: 'Title 1',
        desc: productData.productDesc[0],
      },
      {
        id: 2,
        name: 'Product 2',
        title: productData.productTitle[0],
        desc: productData.productDesc[0],
      },
    ],
  };

  const fns: any = {};

  return { data, fns };
};

export default useProductList;