/**********************************************************************
 *
 *   Responsiveness hook generated by Quest
 *
 *   Responsive Logic for the component goes in this hook
 *   If you want to customize the min/max values for the breakpoints, open the component on Quest Editor.
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';

const useFooterResponsiveSize = () => {
  const [variant, setVariant] = React.useState('ScreenDesktop');

  React.useEffect(() => {
    const handlerScreenMobile = (e) =>
      setVariant((size) => (e.matches ? 'ScreenMobile' : size));

    const ScreenMobileSize = window.matchMedia('(max-width: 572px)');
    setVariant((size) => (ScreenMobileSize.matches ? 'ScreenMobile' : size));
    ScreenMobileSize.addEventListener('change', handlerScreenMobile);

    const handlerScreenTablet = (e) =>
      setVariant((size) => (e.matches ? 'ScreenTablet' : size));

    const ScreenTabletSize = window.matchMedia(
      '(min-width: 573px) and (max-width: 1104px)'
    );
    setVariant((size) => (ScreenTabletSize.matches ? 'ScreenTablet' : size));
    ScreenTabletSize.addEventListener('change', handlerScreenTablet);

    const handlerScreenDesktop = (e) =>
      setVariant((size) => (e.matches ? 'ScreenDesktop' : size));

    const ScreenDesktopSize = window.matchMedia('(min-width: 1105px)');
    setVariant((size) => (ScreenDesktopSize.matches ? 'ScreenDesktop' : size));
    ScreenDesktopSize.addEventListener('change', handlerScreenDesktop);
  }, []);

  return variant;
};

export default useFooterResponsiveSize;
