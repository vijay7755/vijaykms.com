import { useMediaQuery } from "./useMediaQuery";

export const useDesktop = () => useMediaQuery('(min-width: 1250px)');
export const useLaptop = () => useMediaQuery('(max-width: 1020px) and (min-width: 769px)');
export const useTablet = () => useMediaQuery('(max-width: 768px) and (min-width: 491px)');
export const useMobile_lg = () => useMediaQuery('(max-width: 490px) and (min-width: 393px)');
export const useMobile = () => useMediaQuery('(max-width: 392px)');