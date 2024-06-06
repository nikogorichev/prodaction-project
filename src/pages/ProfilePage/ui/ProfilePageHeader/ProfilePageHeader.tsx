import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";
import styles from "./ProfilePageHeader.module.scss";
import { useSelector } from "react-redux";
import { getProfileReadonly, profileActions, updateProfileData } from "entities/Profile";
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

  const onSave = () => {
    dispatch(updateProfileData());
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
        <>
          <Button
            theme={ThemeButton.OUTLINE_RED}
            className={styles.editBtn}
            onClick={onCancelEdit}
          >
            Отменить
          </Button>
          <Button
            theme={ThemeButton.OUTLINE}
            className={styles.saveBtn}
            onClick={onSave}
          >
            Сохранить
          </Button>
        </>
      )}
    </div>
  );
};

export default ProfilePageHeader;
