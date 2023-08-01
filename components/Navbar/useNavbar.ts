  const toggleDialogue = (): any => {};
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
const useDialogSample = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  let data: any = {isDialogOpen};
  const toggleDialog = (): any => {
    setIsDialogOpen(!isDialogOpen);
  };

  let fns: any = { toggleDialog ,toggleDialogue};

  return { data, fns };
};

export default useDialogSample;


