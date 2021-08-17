import { useState, useEffect } from 'react';
import { useScroll } from 'ahooks';
// ----------------------------------------------------------------------

export default function useOffSetTop(top: number, target?: HTMLElement) {
  const { top: scrollTop } = useScroll(target);

  const [offsetTop, setOffSetTop] = useState(false);

  useEffect(() => {
    if (scrollTop > top) {
      setOffSetTop(true);
    } else {
      setOffSetTop(false);
    }
  }, [scrollTop, top]);

  return offsetTop;
}

// Usage
// const offset = useOffSetTop(100);
