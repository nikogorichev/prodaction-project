import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";
import styles from "./ProfilePageHeader.module.scss";

const ProfilePageHeader = () => {
  return (
    <div className={styles.header}>
      <Text title="Профиль" />
      <Button theme={ThemeButton.OUTLINE} className={styles.editBtn}>
        Редактировать
      </Button>
    </div>
  );
};

export default ProfilePageHeader
