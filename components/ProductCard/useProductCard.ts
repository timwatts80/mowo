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
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  let data: any = {isDialogOpen, handleMouseEnter, handleMouseLeave, isHover};
  const toggleDialog = (param1:any): any => {
    setIsDialogOpen(!isDialogOpen);
  };

  const fns: any = { toggleDialog, setIsHover };

  return { data, fns };
};

export default useProductCard;
