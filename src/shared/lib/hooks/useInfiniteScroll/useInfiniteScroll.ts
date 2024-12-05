import { MutableRefObject, useEffect, useRef } from "react";

export interface UseInfiniteScrollOptions {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = (options: UseInfiniteScrollOptions) => {
  const { callback, triggerRef, wrapperRef } = options;

  useEffect(() => {
    const wrapperElement = wrapperRef.current;
    const triggerElement = triggerRef.current;
    let observer: IntersectionObserver | null = null;

    if (callback) {
      const options: IntersectionObserverInit = {
        root: wrapperElement,
        rootMargin: "0px",
        threshold: 1.0,
      };

      const cb: IntersectionObserverCallback = ([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      };

      observer = new IntersectionObserver(cb, options);
      observer.observe(triggerElement);
    }

    return () => {
      if (observer) {
        observer.unobserve(triggerElement);
      }
    };
  }, [triggerRef, wrapperRef, callback]);
};
