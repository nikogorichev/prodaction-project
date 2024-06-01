import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import styles from "./ProfileCard.module.scss";
import { Input } from "shared/ui/Input/Input";
import { Profile } from "entities/Profile/model/types/profile";
import Loader from "shared/ui/Loader/Loader";
import { classNames } from "shared/lib/classNames/classNames";

interface ProfileCardProps {
  data?: Profile;
  isLoading?: boolean;
  error?: string;
}

export const ProfileCard = ({ data, isLoading, error }: ProfileCardProps) => {
  if (isLoading) {
    return (
      <div className={classNames(styles.profileCard, {}, [styles.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(styles.profileCard, {}, [styles.error])}>
        <Text
          theme={TextTheme.ERROR}
          title="Ошибка при загрузке профиля"
          text="Обновите страницу"
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  return (
    <div className={styles.profileCard}>
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
  );
};
