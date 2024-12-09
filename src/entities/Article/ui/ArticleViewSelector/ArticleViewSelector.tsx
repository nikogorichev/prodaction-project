import styles from "./ArticleViewSelector.module.scss";
import { ArticleView } from "../../model/types/article";
import ListIcon from "shared/assets/icons/list-24-24.svg";
import GridIcon from "shared/assets/icons/tiled-24-24.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";
import { classNames } from "shared/lib/classNames/classNames";

type Props = {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
};

const viewTypes = [
  {
    icon: GridIcon,
    view: ArticleView.GRID,
  },
  {
    icon: ListIcon,
    view: ArticleView.LIST,
  },
];

export const ArticleViewSelector = (props: Props) => {
  const { className, view, onViewClick } = props;

  const onClick = (newView: ArticleView) => () => onViewClick?.(newView);

  return (
    <div>
      {viewTypes.map((viewType) => (
        <Button
          theme={ThemeButton.CLEAR}
          onClick={onClick(viewType.view)}
          key={viewType.view}
        >
          <Icon
            Svg={viewType.icon}
            className={classNames("", {
              [styles.notSelected]: viewType.view !== view,
            })}
          />
        </Button>
      ))}
    </div>
  );
};
