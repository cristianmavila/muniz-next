// MediaQuery dependencies
import { useMediaQuery } from "react-responsive";

// Hook return
export const useTablet = () => useMediaQuery({ query: "(max-width: 1025px)" });

export const useMobile = () => useMediaQuery({ query: "(max-width: 767px)" });
