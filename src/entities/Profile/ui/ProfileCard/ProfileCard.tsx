import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";
import { getProfileLoading } from "entities/Profile/model/selectors/getProfileLoading/getProfileLoading";
import { useSelector } from "react-redux";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";
import styles from "./ProfileCard.module.scss";
import { Input } from "shared/ui/Input/Input";

export const ProfileCard = () => {
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={styles.profileCard}>
      <div className={styles.header}>
        <Text title="Профиль" />
        <Button theme={ThemeButton.OUTLINE} className={styles.editBtn}>
          Редактировать
        </Button>
      </div>
      <div className={styles.data}>
        <Input
          value={data?.first}
          placeholder="Ваше имя"
          className={styles.input}
        />
        <Input
          value={data?.lastname}
          placeholder="Ваша фамилия"
          className={styles.input}
        />
      </div>
    </div>
  );
};
