import { useEffect } from "react";

export const useDynamicRouter = (customTitle) => {
  useEffect(() => {
    document.title = customTitle;
  }, [customTitle]);
};
