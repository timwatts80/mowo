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
import useSidebarResponsiveSize from './useSidebarResponsiveSize';

/* These are the possible values for the current variant. Use this to change the currentVariant dynamically.
Please don't modify */
const variantOptions = {
  ScreenTablet: 'ScreenTablet',
  ScreenMobile: 'ScreenMobile',
};

const useSidebar = () => {
  const [currentVariant, setCurrentVariant] = React.useState<string>(
    variantOptions['ScreenTablet']
  );

  const breakpointsVariant = useSidebarResponsiveSize();

  React.useEffect(() => {
    if (breakpointsVariant !== currentVariant) {
      setCurrentVariant(breakpointsVariant);
    }
  }, [breakpointsVariant]);

  const data: any = { currentVariant };

  const fns: any = { setCurrentVariant };

  return { data, fns };
};

export default useSidebar;
