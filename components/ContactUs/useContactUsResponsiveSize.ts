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

const useContactUsResponsiveSize = () => {
  const [variant, setVariant] = React.useState<string>('Desktop');

  React.useEffect(() => {
    const handlerMobile = (e) =>
      setVariant((size: string) => (e.matches ? 'Mobile' : size));
    const MobileSize = window.matchMedia('(max-width: 572px)');
    setVariant((size: string) => (MobileSize.matches ? 'Mobile' : size));
    MobileSize.addEventListener('change', handlerMobile);

    const handlerTablet = (e) =>
      setVariant((size: string) => (e.matches ? 'Tablet' : size));
    const TabletSize = window.matchMedia(
      '(min-width: 572px) and (max-width: 1104px)'
    );
    setVariant((size: string) => (TabletSize.matches ? 'Tablet' : size));
    TabletSize.addEventListener('change', handlerTablet);

    const handlerDesktop = (e) =>
      setVariant((size: string) => (e.matches ? 'Desktop' : size));
    const DesktopSize = window.matchMedia('(min-width: 1104px)');
    setVariant((size: string) => (DesktopSize.matches ? 'Desktop' : size));
    DesktopSize.addEventListener('change', handlerDesktop);
  }, []);

  return variant;
};

export default useContactUsResponsiveSize;