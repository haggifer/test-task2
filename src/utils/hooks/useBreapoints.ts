import { useEffect, useMemo, useState } from 'react';

export type IGetBreakpointsParams = Record<string, number>;

const params: IGetBreakpointsParams = {
  sm: 600,
  md: 900,
  lg: 1200,
};

export const useBreakpoints = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const handleResize = (e: UIEvent) => {
    setWindowWidth((e.target as Window).innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return useMemo(() => {
    return {
      up: (name: keyof IGetBreakpointsParams) => {
        return windowWidth >= params[name];
      },
      down: (name: keyof IGetBreakpointsParams) => {
        return windowWidth < params[name];
      },
      between: (
        name1: keyof IGetBreakpointsParams,
        name2: keyof IGetBreakpointsParams,
      ) => {
        return windowWidth >= params[name1] && windowWidth < params[name2];
      },
    };
  }, [windowWidth]);
};
