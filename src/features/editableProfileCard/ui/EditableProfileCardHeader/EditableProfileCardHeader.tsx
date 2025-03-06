import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Text } from "shared/ui/Text/Text";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getUserAuthData } from "entities/User";
import { HStack } from "shared/ui/Stack";
import { getProfileReadonly } from "features/editableProfileCard/model/selectors/getProfileReadonly/getProfileReadonly";
import { getProfileData } from "features/editableProfileCard/model/selectors/getProfileData/getProfileData";
import { profileActions } from "features/editableProfileCard/model/slice/profileSlice";
import { updateProfileData } from "features/editableProfileCard/model/services/updateProfileData/updateProfileData";

export const EditableProfileCardHeader = () => {
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
            <Button
              theme={ThemeButton.OUTLINE}
              onClick={onEdit}
              data-testid="EditableProfileCardHeader.EditButton"
            >
              Редактировать
            </Button>
          ) : (
            <>
              <Button
                theme={ThemeButton.OUTLINE_RED}
                onClick={onCancelEdit}
                data-testid="EditableProfileCardHeader.CancelButton"
              >
                Отменить
              </Button>
              <Button
                theme={ThemeButton.OUTLINE}
                onClick={onSave}
                data-testid="EditableProfileCardHeader.SaveButton"
              >
                Сохранить
              </Button>
            </>
          )}
        </HStack>
      )}
    </HStack>
  );
};
