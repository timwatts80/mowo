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

const useProductSectionSurfaceHubDeviceResponsiveSize = () => {
  const [variant, setVariant] = React.useState<string>('ScreenDesktop');

  React.useEffect(() => {
    const handlerScreenMobile = (e: { matches: any; }) =>
      setVariant((size: string) => (e.matches ? 'ScreenMobile' : size));
    const ScreenMobileSize = window.matchMedia('(max-width: 572px)');
    setVariant((size: string) =>
      ScreenMobileSize.matches ? 'ScreenMobile' : size
    );
    ScreenMobileSize.addEventListener('change', handlerScreenMobile);

    const handlerScreenTablet = (e: { matches: any; }) =>
      setVariant((size: string) => (e.matches ? 'ScreenTablet' : size));
    const ScreenTabletSize = window.matchMedia(
      '(min-width: 572px) and (max-width: 1104px)'
    );
    setVariant((size: string) =>
      ScreenTabletSize.matches ? 'ScreenTablet' : size
    );
    ScreenTabletSize.addEventListener('change', handlerScreenTablet);

    const handlerScreenDesktop = (e: { matches: any; }) =>
      setVariant((size: string) => (e.matches ? 'ScreenDesktop' : size));
    const ScreenDesktopSize = window.matchMedia('(min-width: 1104px)');
    setVariant((size: string) =>
      ScreenDesktopSize.matches ? 'ScreenDesktop' : size
    );
    ScreenDesktopSize.addEventListener('change', handlerScreenDesktop);

    return () => {
      ScreenMobileSize.removeEventListener('change', handlerScreenMobile);
      ScreenTabletSize.removeEventListener('change', handlerScreenTablet);
      ScreenDesktopSize.removeEventListener('change', handlerScreenDesktop);
    };
  }, []);

  return variant;
};

export default useProductSectionSurfaceHubDeviceResponsiveSize;
