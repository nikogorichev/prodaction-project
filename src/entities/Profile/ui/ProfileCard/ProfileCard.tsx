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
  readonly?: boolean;
  onChangeFirstname: (value: string) => void;
  onChangeLastname: (value: string) => void;
  onChangeAge: (value: string) => void;
  onChangeCity: (value: string) => void;
}

export const ProfileCard = ({
  data,
  isLoading,
  error,
  readonly,
  onChangeFirstname,
  onChangeLastname,
  onChangeAge,
  onChangeCity
}: ProfileCardProps) => {
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
        onChange={onChangeFirstname}
        readonly={readonly}
      />
      <Input
        value={data?.lastname}
        placeholder="Ваша фамилия"
        className={styles.input}
        onChange={onChangeLastname}
        readonly={readonly}
      />
      <Input
        value={data?.age}
        placeholder="Ваш возраст"
        className={styles.input}
        onChange={onChangeAge}
        readonly={readonly}
      />
      <Input
        value={data?.city}
        placeholder="Город"
        className={styles.input}
        onChange={onChangeCity}
        readonly={readonly}
      />
    </div>
  );
};
