import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import styles from "./ProfileCard.module.scss";
import { Input } from "shared/ui/Input/Input";
import { Profile } from "entities/Profile/model/types/profile";
import Loader from "shared/ui/Loader/Loader";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Currency, CurrencySelect } from "entities/Currency";
import { Country } from "shared/const/common";
import { HStack, VStack } from "shared/ui/Stack";

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
      <HStack
        className={classNames(styles.profileCard, {}, [styles.loading])}
        max
        justify="center"
      >
        <Loader />
      </HStack>
    );
  }

  if (error) {
    return (
      <HStack
        className={classNames(styles.profileCard, {}, [styles.error])}
        max
        justify="center"
      >
        <Text
          theme={TextTheme.ERROR}
          title="Ошибка при загрузке профиля"
          text="Обновите страницу"
          align={TextAlign.CENTER}
        />
      </HStack>
    );
  }

  const mods: Mods = {
    [styles.editing]: !readonly,
  };

  return (
    <VStack className={classNames(styles.profileCard, mods)} gap="16" max>
      {data?.avatar ? (
        <HStack justify="center" max>
          <Avatar src={data?.avatar} />
        </HStack>
      ) : (
        ""
      )}
      <Input
        value={data?.first}
        placeholder="Ваше имя"
        onChange={onChangeFirstname}
        readonly={readonly}
      />
      <Input
        value={data?.lastname}
        placeholder="Ваша фамилия"
        onChange={onChangeLastname}
        readonly={readonly}
      />
      <Input
        value={data?.age}
        placeholder="Ваш возраст"
        onChange={onChangeAge}
        readonly={readonly}
      />
      <Input
        value={data?.city}
        placeholder="Город"
        onChange={onChangeCity}
        readonly={readonly}
      />
      <Input
        value={data?.username}
        placeholder="Имя пользователя"
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <Input
        value={data?.avatar}
        placeholder="Введите ссылку на аватар"
        onChange={onChangeAvatar}
        readonly={readonly}
      />
      <CurrencySelect
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
    </VStack>
  );
};
