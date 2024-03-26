import Loader from "shared/ui/Loader/Loader";
import styles from "./PageLoader.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

const PageLoader = () => {
  return (
    <div className={classNames(styles.pageLoader)}>
      <Loader />
    </div>
  );
};

export default PageLoader;
