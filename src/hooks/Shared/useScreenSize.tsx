import { useEffect, useState } from 'react';

type ScreenSize = {
  width: number;
  height: number;
};

const useScreenSize = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [screenSize, setScreenSize] = useState<ScreenSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(document.body);

    // Clean up the observer when the component unmounts
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
