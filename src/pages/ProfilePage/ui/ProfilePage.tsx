import {
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileLoading,
  ProfileCard,
  profileReducer,
} from "entities/Profile";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import ProfilePageHeader from "./ProfilePageHeader/ProfilePageHeader";

const initialReducers: ReducersList = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileLoading);
  const error = useSelector(getProfileError);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);
  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div>
        <ProfilePageHeader />
        <ProfileCard data={data} isLoading={isLoading} error={error} />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
