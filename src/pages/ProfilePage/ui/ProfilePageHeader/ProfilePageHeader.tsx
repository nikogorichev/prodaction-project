import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";
import styles from "./ProfilePageHeader.module.scss";
import { useSelector } from "react-redux";
import { getProfileReadonly, profileActions } from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

const ProfilePageHeader = () => {
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();
  const onEdit = () => {
    dispatch(profileActions.setReadonly(false));
  };

  const onCancelEdit = () => {
    dispatch(profileActions.cancelEdit());
  };
  return (
    <div className={styles.header}>
      <Text title="Профиль" />
      {readonly ? (
        <Button
          theme={ThemeButton.OUTLINE}
          className={styles.editBtn}
          onClick={onEdit}
        >
          Редактировать
        </Button>
      ) : (
        <Button
          theme={ThemeButton.OUTLINE}
          className={styles.editBtn}
          onClick={onCancelEdit}
        >
          Отменить
        </Button>
      )}
    </div>
  );
};

export default ProfilePageHeader;
