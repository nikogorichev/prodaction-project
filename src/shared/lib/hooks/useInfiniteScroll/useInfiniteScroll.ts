import { MutableRefObject, useEffect, useRef } from "react";

export interface UseInfiniteScrollOptions {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = (options: UseInfiniteScrollOptions) => {
  const { callback, triggerRef, wrapperRef } = options;

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    if (callback) {
      const options: IntersectionObserverInit = {
        root: wrapperRef.current,
        rootMargin: "0px",
        threshold: 1.0,
      };

      const cb: IntersectionObserverCallback = ([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      };

      observer = new IntersectionObserver(cb, options);
      observer.observe(triggerRef.current);
    }

    return () => {
      if (observer) {
        observer.unobserve(triggerRef.current);
      }
    };
  }, [triggerRef, wrapperRef, callback]);
};
