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

import React, { useState } from 'react';

const useProductCard = () => {
  const [data, setData] = useState({
    isProduct2: false,
  });

  const handleButtonClick = (): any => {
    setData({ ...data, isProduct2: !data.isProduct2 });
  };

  
  const fns: any = { handleButtonClick };

  return { data, fns };
};

export default useProductCard;
