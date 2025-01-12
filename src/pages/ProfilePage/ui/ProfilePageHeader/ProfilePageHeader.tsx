import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";
import { useSelector } from "react-redux";
import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from "entities/Profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUserAuthData } from "entities/User";
import { HStack } from "shared/ui/Stack";

const ProfilePageHeader = () => {
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;
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
    <HStack justify="between" max>
      <Text title="Профиль" />
      {canEdit && (
        <HStack gap="8">
          {readonly ? (
            <Button theme={ThemeButton.OUTLINE} onClick={onEdit}>
              Редактировать
            </Button>
          ) : (
            <>
              <Button theme={ThemeButton.OUTLINE_RED} onClick={onCancelEdit}>
                Отменить
              </Button>
              <Button theme={ThemeButton.OUTLINE} onClick={onSave}>
                Сохранить
              </Button>
            </>
          )}
        </HStack>
      )}
    </HStack>
  );
};

export default ProfilePageHeader;
