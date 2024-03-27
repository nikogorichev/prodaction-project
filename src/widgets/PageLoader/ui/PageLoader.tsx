import Loader from "shared/ui/Loader/Loader";
import styles from "./PageLoader.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export const PageLoader = () => {
  return (
    <div className={classNames(styles.pageLoader)}>
      <Loader />
    </div>
  );
};
