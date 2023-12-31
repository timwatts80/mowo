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
const useMenulinklist = () => {
const menuLinks = [
  {
    id: 1,
    title: "Modern Workplace",
    url: "#modern-workplace",
  },
  {
    id: 2,
    title: "Devices",
    url: "#products",
  },
  {
    id: 3,
    title: "Customer Cases",
    url: "#cases",
  },
  {
    id: 4,
    title: "Contact",
    url: "#contact",
  },
];

  let data: any = { menuLinks };

  const fns: any = {};

  return { data, fns };
};

export default useMenulinklist;
