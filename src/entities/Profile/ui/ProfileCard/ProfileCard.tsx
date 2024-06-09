import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import styles from "./ProfileCard.module.scss";
import { Input } from "shared/ui/Input/Input";
import { Profile } from "entities/Profile/model/types/profile";
import Loader from "shared/ui/Loader/Loader";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Select } from "shared/ui/Select/Select";
import { Currency, CurrencySelect } from "entities/Currency";
import { Country } from "shared/const/common";

interface ProfileCardProps {
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstname?: (value: string) => void;
  onChangeLastname?: (value: string) => void;
  onChangeAge?: (value: string) => void;
  onChangeCity?: (value: string) => void;
  onChangeAvatar?: (value: string) => void;
  onChangeUsername?: (value: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCountry?: (value: Country) => void;
}

export const ProfileCard = ({
  data,
  isLoading,
  error,
  readonly,
  onChangeFirstname,
  onChangeLastname,
  onChangeAge,
  onChangeCity,
  onChangeAvatar,
  onChangeUsername,
  onChangeCurrency,
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

  const mods: Mods = {
    [styles.editing]: !readonly,
  };

  return (
    <div className={classNames(styles.profileCard, mods)}>
      {data?.avatar ? (
        <div className={styles.avatarWrapper}>
          <Avatar src={data?.avatar} />
        </div>
      ) : (
        ""
      )}
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
      <Input
        value={data?.username}
        placeholder="Имя пользователя"
        className={styles.input}
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <Input
        value={data?.avatar}
        placeholder="Введите ссылку на аватар"
        className={styles.input}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
      <CurrencySelect
        className={styles.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
    </div>
  );
};
