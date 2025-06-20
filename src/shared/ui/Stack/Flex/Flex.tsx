import cls from "./Flex.module.scss";
import { ElementType, ReactNode } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";

export type FlexJustify = "start" | "center" | "end" | "between";
export type FlexAlign = "start" | "center" | "end";
export type FlexDirection = "row" | "column";
export type FlexGap = "4" | "8" | "16" | "32";

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  between: cls.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  center: cls.alignCenter,
  end: cls.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  32: cls.gap32,
};

export type FlexProps = {
  children: ReactNode;
  className?: string;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
  component?: keyof JSX.IntrinsicElements | ElementType;
  max?: boolean;
};

export const Flex = (props: FlexProps) => {
  const {
    children,
    className,
    justify = "start",
    align = "center",
    direction = "row",
    gap,
    component = "div",
    max,
  } = props;

  const additionalClasses = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  const mode = {
    [cls.maxWidth]: max,
  };

  const ComponentWrapper = component;

  return (
    <ComponentWrapper
      className={classNames(cls.flexWrapper, mode, additionalClasses)}
    >
      {children}
    </ComponentWrapper>
  );
};
