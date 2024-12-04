import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Page.module.scss";
import { MutableRefObject, ReactNode, useRef } from "react";
import { useInfiniteScroll } from "shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";

type Props = {
  children: ReactNode;
  className?: string;
  onScrollEnd?: () => void
};

export const Page = (props: Props) => {
  const { children, className, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });

  return (
    <section
      ref={wrapperRef}
      className={classNames(styles.wrapper, {}, [className])}
    >
      {children}
      <div ref={triggerRef}/>
    </section>
  );
};
