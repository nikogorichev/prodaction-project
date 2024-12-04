import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileLoading,
  getProfileReadonly,
  getProfileValidateError,
  profileActions,
  ProfileCard,
  profileReducer,
} from "entities/Profile";

import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import ProfilePageHeader from "./ProfilePageHeader/ProfilePageHeader";
import { Currency } from "entities/Currency";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useParams } from "react-router-dom";
import { Page } from "shared/ui/Page/Page";

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const form = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateError);
  const { id } = useParams<{ id: string }>();
console.log("1111111")
  useInitialEffect(() => {
    console.log(id)
    id && dispatch(fetchProfileData(id));
  }, [id]);

  const onChangeFirstname = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ first: value }));
    },
    [dispatch]
  );

  const onChangeLastname = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ lastname: value }));
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value: string) => {
      const valideValue = value.replace(/\D/g, "");
      dispatch(profileActions.updateProfile({ age: Number(valideValue || 0) }));
    },
    [dispatch]
  );

  const onChangeCity = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ city: value }));
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ avatar: value }));
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(profileActions.updateProfile({ username: value }));
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (value: Currency) => {
      dispatch(profileActions.updateProfile({ currency: value }));
    },
    [dispatch]
  );
  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <Page>
        <ProfilePageHeader />
        {validateErrors?.length &&
          validateErrors.map((arr) => (
            <Text key={arr} theme={TextTheme.ERROR} text={arr} />
          ))}
        <ProfileCard
          data={form}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeAvatar={onChangeAvatar}
          onChangeUsername={onChangeUsername}
          onChangeCurrency={onChangeCurrency}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
