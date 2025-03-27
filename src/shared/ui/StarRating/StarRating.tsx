import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./StarRating.module.scss";
import { Icon } from "../Icon/Icon";
import StartIcon from "@/shared/assets/icons/star.svg";
import { useState } from "react";

type Props = {
  className?: string;
  onSelect?: (starsCount: number) => void;
  selectedStars?: number;
  size?: number;
};

const stars = [1, 2, 3, 4, 5];

export const StarRating = (props: Props) => {
  const { className, size = 30, selectedStars = 0, onSelect } = props;
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(Boolean(currentStarsCount));

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <div className={classNames(cls.wrapper, {}, [className])}>
      {stars.map((starNumber) => {
        const isHover = currentStarsCount >= starNumber;
        return (
          <Icon
            Svg={StartIcon}
            key={starNumber}
            className={classNames(
              cls.starIcon,
              {
                [cls.selected]: isSelected,
                [cls.hovered]: isHover,
                [cls.normal]: !isHover,
              },
              []
            )}
            width={size}
            height={size}
            onMouseLeave={onLeave}
            onMouseEnter={onHover(starNumber)}
            onClick={onClick(starNumber)}
          />
        );
      })}
    </div>
  );
};
